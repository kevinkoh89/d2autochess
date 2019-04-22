import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import Wrapper from './Layout/Wrapper'
import './App.css'

const Loading = ({ isLoading, error }) => {
  if (isLoading) {
    return <div>Loading...</div>
  } else if (error) {
    return error
  } else {
    return null
  }
}

const Home = Loadable({
  loading: Loading,
  loader: () => import('./Home')
})

const ChessList = Loadable({
  loading: Loading,
  loader: () => import('./ChessList')
})

const FeelingLucky = Loadable({
  loading: Loading,
  loader: () => import('./FeelingLucky')
})

const App = () => (
  <HashRouter>
    <Switch>
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/list" component={ChessList} />
        <Route exact path="/feeling-lucky" component={FeelingLucky} />
      </Wrapper>
    </Switch>
  </HashRouter>
)

export default App
