import React from 'react'
import HeaderBlock from '../blocks/HeaderBlock'
import MainBlock from '../blocks/MainBlock'
import CommercialBlock from '../blocks/CommercialBlock'
import CategoriesBlock from '../blocks/CategoriesBlock'
import '../css/MainPage.css'

export default function MainPage() {
  return (
    <div className='mainpage'>
      <HeaderBlock />
      <MainBlock />
      <CommercialBlock />
      <CategoriesBlock />
    </div>
  )
}
