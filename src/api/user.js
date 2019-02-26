import axios from 'axios'
import {Encrypt} from '../utils/aes'

export default {
  postUser (cb, options) {
    const paramData = {
      name: Encrypt(options.name),
      pwd: Encrypt(options.pwd)
    }
    let data = new FormData()
    data.append('name', paramData.name)
    data.append('pwd', paramData.pwd)
    axios({
      method: 'post',
      url: 'http://chenhanzhong.com:7000/users/create',
      headers: {
        'Content-type': 'multipart/form-data'
      },
      data
    })
      .then(res => {
        if (res && res.data) {
          cb(paramData)
        } else {
          this.$Message.error('登陆失败')
          console.log('登陆失败')
        }
      }).catch((e) => {
        console.log(e)
      })
  }
}
