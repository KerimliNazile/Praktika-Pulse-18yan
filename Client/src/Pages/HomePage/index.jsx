import React from 'react'
import { Helmet } from 'react-helmet-async'
import Menu from '../../components/MenuSection'
import Header from '../../components/Header'
import Welcome from '../../components/Welcome'
import Servicess from '../../components/Servicess'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Header/>
      <Welcome/>
      <Servicess/>
      <Menu/>

    </div>
  )
}

export default Home
