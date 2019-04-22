import React from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'
import { Row, Col, Table } from 'antd'
import generator from './generator'

const lvlChance = [
  { common: 100, uncommon: 0, rare: 0, epic: 0, legendary: 0 },
  { common: 70, uncommon: 30, rare: 0, epic: 0, legendary: 0 },
  { common: 60, uncommon: 40, rare: 0, epic: 0, legendary: 0 },
  { common: 55, uncommon: 35, rare: 10, epic: 0, legendary: 0 },
  { common: 55, uncommon: 35, rare: 10, epic: 0, legendary: 0 },
  { common: 55, uncommon: 35, rare: 10, epic: 0, legendary: 0 },
  { common: 55, uncommon: 35, rare: 10, epic: 0, legendary: 0 },
  { common: 30, uncommon: 30, rare: 10, epic: 10, legendary: 0 },
  { common: 37, uncommon: 30, rare: 20, epic: 10, legendary: 3 },
  { common: 34, uncommon: 28, rare: 20, epic: 12, legendary: 6 }
]
const drawFromCommon = () => {
  return {
    chesskey: 'anti_mage',
    name: 'antimage',
    species: 'elf',
    class: 'demonhunter',
    cost: 1
  }
}
const drawFromUncommon = () => {
  return {
    chesskey: 'juggernaut',
    name: 'juggernaut',
    species: 'orc',
    class: 'warrior',
    cost: 2
  }
}
const drawFromRare = () => {
  return {
    chesskey: 'omniknight',
    name: 'omniknight',
    species: 'human',
    class: 'knight',
    cost: 3
  }
}
const drawFromEpic = () => {
  return {
    chesskey: 'kunkka',
    name: 'kunkka',
    species: 'human',
    class: 'warrior',
    cost: 4
  }
}
const drawFromLegendary = () => {
  return {
    chesskey: 'techies',
    name: 'techies',
    species: 'goblin',
    class: 'mech',
    cost: 5
  }
}
const superRNG = () => {
  let chances = lvlChance[1]
//   console.log('chances=', chances)
  let commonChance = chances.common
  let uncommonChance = commonChance + chances.uncommon
  let rareChance = uncommonChance + chances.rare
  let epicChance = rareChance + chances.epic
//   console.log(randomNumber)

  let rngResult = []

  for (let i = 0; i < 5; i++) {
    let randomNumber = Math.random() * 100
    let draw = {}

    if (randomNumber < commonChance) {
      draw = drawFromCommon()
    } else if (randomNumber < uncommonChance) {
      draw = drawFromUncommon()
    } else if (randomNumber < rareChance) {
      draw = drawFromRare()
    } else if (randomNumber < epicChance) {
      draw = drawFromEpic()
    } else {
      draw = drawFromLegendary()
    }

    rngResult.push(draw)
  }

  return rngResult
}
const FeelingLucky = observer(() => {
  let count = 0
  setInterval(() => {
    if (count < 10) {
      console.log(superRNG())
      count = count + 1
    }
  }, 10)
  generator.chessPlayPool()
  return <div>feeeling good</div>
})

export default FeelingLucky
