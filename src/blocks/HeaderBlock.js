import React from 'react'
import Title from '../components/Title'
import List from '../components/List'
import Category from '../components/Category'
import Collection from '../components/Collection'

export default function HeaderBlock() {
  return (
    <div className='headerBlock'>
      <div className='headerBlock__col1'>
        <div className='newsArea'>
          <Title text={'Сейчас в СМИ'}/>
          <List />
          <Collection />
        </div>
      </div>
      <div className='headerBlock__col2'>
        <div className='newsArea'>
          <Category num={'Работа над ошибками'} list={['Как проводить эту работу']}/>
        </div>
      </div>
    </div>

  )
}
