import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import HeaderMenu from './HeaderMenu'

const { Header, Content } = Layout

const LayoutWrapper = props => {
  return (
    <Layout>
      <Header>
        <HeaderMenu />
      </Header>
      <Content>{props.children}</Content>
    </Layout>
  )
}

LayoutWrapper.propTypes = {
  children: PropTypes.any
}

export default LayoutWrapper
