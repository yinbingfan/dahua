import axios from 'axios'
export const TECH_INDEX = (params) => {
  axios.get('./', params)
}
export const TECH_BANNER = (params) => {
  return axios.get('/api/banner.json', params)
}
export const TECH_PRODUCT = (params) => {
  return axios.get('/api/product.json', params)
}
export const TECH_CONSTRUCTION = (params) => {
  return axios.get('/api/construction.json', params)
}
export const TECH_ADDRESS = (params) => {
  return axios.get('/api/address.json', params)
}
export const TECH_FOOTER = (params) => {
  return axios.get('/api/footer.json', params)
}
