import React, { useEffect, useState } from 'react'
import api from '../apis/housen'
import DataList from '../components/DataList/DataList'
import Footer from '../components/Footer/Footer.component'
import Header from '../components/Header/Header.component'
import HeroSection from '../components/HeroSection/HeroSection.component'

const HomePage = () => {
  const [realStateList, setRealStateList] = useState([])

  const getData = async () => {
    const {
      data: { result },
    } = await api.get()
    setRealStateList(result)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Header />
      <HeroSection />

      <DataList realStateList={realStateList} />

      <Footer />
    </>
  )
}

export default HomePage
