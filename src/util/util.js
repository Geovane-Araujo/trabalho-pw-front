import axios from 'axios'

var url = 'http://localhost:8089/api/'

async function get (route) {
  var ret = ''
  await axios.get(url + route, { headers: { Authorization: sessionStorage.getItem('token') } }).then(res => {
    ret = res.data
  }).catch(err => {
    console.log(err.data)
  })
  return ret
}

async function post(route, obj){
  var ret = ''
  await axios.post(url + route, obj, { headers: { Authorization: sessionStorage.getItem('token') } }).then(res => {
    ret = res.data
  }).catch(err => {
    console.log(err)
  })
  return ret
}

async function delet(route){
  var ret = ''
  await axios.delete(url + route, { headers: { Authorization: sessionStorage.getItem('token') } }).then(res => {
    ret = res.data
  }).catch(err => {
    console.log(err)
  })
  return ret
}
export default{
  get,
  post,
  delet
}