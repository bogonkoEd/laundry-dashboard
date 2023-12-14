import React from 'react'
import { Menu } from 'antd'
import { useNavigate } from 'react-router'

const SideMenu = () => {
  const navigate = useNavigate()

    const menuItems = [
        {
            key: '/',
            label: 'Orders',
        },
        {
          key: 'menu',
          label: 'Menu',
      },
      {
        key: 'order-history',
        label: 'History',
    },
    {
      key: 'settings',
      label: 'Settings',
  }
    ]

    const onMenuClick = (param) => {
        navigate(param.key)
    }
    
  return (
    <Menu items={menuItems} onClick={onMenuClick}/>
  )
}

export default SideMenu