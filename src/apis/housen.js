import axios from 'axios'

const url = 'https://dev.gozayaan.com/api/gozayaan_campaign/real_estate_list/'

export default axios.create({
  baseURL: url
})
