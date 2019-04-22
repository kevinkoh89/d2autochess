import React from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'
import { Row, Col, Table } from 'antd'
import Store from './Store'
import CONST from '../Const'

const { state, actions } = Store
const Text = styled('div')`
  color: ${props => CONST.COLOR_MAP[props.tcolor]};
`
const SynergiesListWrap = styled('div')``
const SynergiesList = styled('ul')`
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;
  li {
    padding: 5px;
  }
`
const columns = [
  {
    title: '',
    dataIndex: 'chesskey',
    render: text => <HeroIcon name={text} />
  },
  {
    title: 'Name',
    dataIndex: 'name',
    render: text => text
  },
  {
    title: 'Species',
    dataIndex: 'species',
    sorter: (a, b) => a.species > b.species,
    render: text => <Text tcolor={text}>{text}</Text>
  },
  {
    title: 'Class',
    dataIndex: 'class',
    sorter: (a, b) => a.class > b.class,
    render: text => <Text tcolor={text}>{text}</Text>
  },
  {
    title: 'Cost',
    dataIndex: 'cost',
    defaultSortOrder: 'ascend',
    sorter: (a, b) => a.cost - b.cost
  }
]

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    const total = selectedRows.length

    let speciesSynergy = {}
    let classSynergy = {}
    let totalCost = 0

    for (let i = 0; i < total; i++) {
      const rowData = selectedRows[i]
      let rowSpecies = rowData.species
      const rowClass = rowData.class
      const rowCost = rowData.cost

      if (rowSpecies === 'demon') {
        rowSpecies = rowSpecies + rowClass
      }

      if (rowSpecies.includes(' ')) {
        let rowSpeciesSplit = rowSpecies.split(' ')
        rowSpeciesSplit.map(v => {
          speciesClassCounter(speciesSynergy, v)
        })
      } else {
        speciesClassCounter(speciesSynergy, rowSpecies)
      }

      speciesClassCounter(classSynergy, rowClass)

      totalCost += rowCost
    }
    console.log(speciesSynergy)
    console.log(classSynergy)
    console.log(totalCost)
    let synergyData = { ...speciesSynergy, ...classSynergy }
    console.log(synergyData)
    actions.getSynergyList(synergyGenerator(synergyData))
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name
  })
}

const speciesClassCounter = (synergy, type) => {
  if (synergy.hasOwnProperty(type)) {
    synergy[type] = synergy[type] + 1
  } else {
    synergy[type] = 1
  }
}
const synergyGenerator = data => {
  let synergies = []
  Object.entries(data).forEach(([type, value]) => {
    if (!type.includes('demon') || type === 'demonhunter') {
      if(CONST.SYNERGY_MAP(value)[type]){
        synergies.push(CONST.SYNERGY_MAP(value)[type]())
      }
    }
  })

  let differentDemonCount = Object.keys(data).filter(
    type => type.includes('demon') && type !== 'demonhunter'
  ).length

  if (differentDemonCount === 1) {
    synergies.push(CONST.SYNERGY_MAP(differentDemonCount)['demon']())
  }
  return synergies
}

const ChessList = observer(() => {
  const onChange = (pagination, filters, sorter) => {
    console.log('params', pagination, filters, sorter)
  }
  return (
    <Row gutter={16}>
      <Col span={18}>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={CONST.CHESS_LIST}
          onChange={onChange}
          pagination={false}
        />
      </Col>
      <Col span={6}>
        <SynergiesListWrap>
          <h3>Synergy</h3>
          {state.synergiesList !== '' && (
            <SynergiesList>
              {state.synergiesList.map((value, key) => {
                if (value) {
                  return <li key={key}>{value}</li>
                }
              })}
            </SynergiesList>
          )}
        </SynergiesListWrap>
      </Col>
    </Row>
  )
})

const HeroIcon = ({name}) => <i className={`d2mh ${name}`} />

export default ChessList
