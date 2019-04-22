import { observable, action } from 'mobx'

const state = observable({
  synergiesList: ''
})

const actions = {
  getSynergyList: action(data => {
    state.synergiesList = data
  })
}

const Store = {
  state,
  actions
}

export default Store
