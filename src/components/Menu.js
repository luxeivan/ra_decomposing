import React from 'react'
import Title from './Title'

export default function Menu() {
  const menus =['Видео', 'Картинки','Меню','Карты','Маркет','Переводчик','Эфир']
  return (
    <div className='menu'>
      {menus.map(item=><Title text={item}/>)}
      
      </div>
  )
}
