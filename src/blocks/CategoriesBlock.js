import React from 'react'
import Category from '../components/Category'

export default function CategoriesBlock() {
  return (
    <div className='categoriesBlock'>
      <Category num={'Погода'} list={['Сегодня в мире холодно']}/>
      <Category num={'Посещаемое'} list={['Сайт1','Сайт2','Сайт3','Сайт4','Сайт5']}/>
      <Category num={'Карта Германии'} list={['Что в германии происходит','Баварские колбаски']}/>
      <Category num={'Телепрограмма'} list={['Поле чудес','Угадай мелодию','Давай поженимся','Пусть говорят']}/>
      <Category num={'Эфир'} list={['Новости','60 минут']}/>
    </div>
  )
}
