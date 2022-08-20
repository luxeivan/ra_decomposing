import React from 'react'
import Menu from '../components/Menu'
import Search from '../components/Search'

export default function MainBlock() {
  return (
    <div className='mainBlock'>
      <div className='menu__area'>
        <Menu />
      </div>

      <Search />
    </div>
  )
}
