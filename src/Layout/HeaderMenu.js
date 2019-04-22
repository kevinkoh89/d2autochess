import React from 'react'
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'
import { Menu } from 'antd'

const activeLink = match => {
  if (!match) {
    return false
  }
  return 'className="active"'
}

const menuItem = [
  { path: '/', title: 'home' },
  { path: '/list', title: 'list' },
  { path: '/feeling-lucky', title: 'feeling lucky' }
]

const HeaderMenu = () => {
  return (
    <Menu mode="horizontal">
      {menuItem.map((item, key) => {
        return (
          <Menu.Item key={key}>
            <NavLink exact to={item.path} isActive={activeLink}>
              {item.title}
            </NavLink>
          </Menu.Item>
        )
      })}
    </Menu>
  )
}

export default withRouter(HeaderMenu)
