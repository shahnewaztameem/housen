import React, { useEffect, useState } from 'react'
import api from '../apis/housen'
import DataList from '../components/DataList/DataList'
import Footer from '../components/Footer/Footer.component'
import Header from '../components/Header/Header.component'
import HeroSection from '../components/HeroSection/HeroSection.component'
import Loader from '../components/Loader/Loader.component'
import SearchBar from '../components/SearchBar/SearchBar.component'

const HomePage = () => {
  const [realEstateList, setRealEstateList] = useState([])
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    try {
      const {
        data: { result },
      } = await api.get('/')
      setRealEstateList(result)
      setLoading(false)
    } catch (error) {
      console.error(error.message)
    }
  }

  const handleSearchTextSubmit = async (searchText) => {
    try {
      setLoading(true)
      const {
        data: { result },
      } = await api.get('/', {
        params: {
          city_name: searchText.trim(),
        },
      })
      setRealEstateList(result)
      setLoading(false)
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Header />
      <HeroSection />
      <SearchBar onFormSubmit={handleSearchTextSubmit} />
      {loading ? (
        <Loader />
      ) : realEstateList.length === 0 ? (
        <div className='container'>
          <div className='col-md-6 offset-md-3 text-center mt-5'>
            <h4 className='text-danger'>No Data Found</h4>
          </div>
        </div>
      ) : (
        <DataList realEstateList={realEstateList} />
      )}

      <Footer />
    </>
  )
}

export default HomePage
