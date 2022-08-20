import React from 'react'
import ListItem from './ListItem'

export default function List() {
  return (
    <div className='list'>
      <ListItem text='Новость 1'/>
      <ListItem text='Новость 2' />
      <ListItem text='Новость 3' />
      <ListItem text='Новость 4' />
      <ListItem text='Новость 5' />
      <ListItem text='Новость 6' />
    </div>
  )
}
