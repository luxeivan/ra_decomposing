import React from 'react'
import Title from './Title'
import ListItem from './ListItem'

export default function Category({ num, list }) {
  return (
    <div className='category'>
      <Title text={num} />
      {list && list.map(item=><ListItem text={item}/>)}
    </div>
  )
}
