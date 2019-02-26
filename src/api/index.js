import axios from 'axios'
import config from '../config'

export default {
  getCurrent (cb) {
    axios.get(`${config['api']}current`,
      {
        headers: config.headers()
      })
      .then(res => cb(res.data.data)).catch((e) => {
        console.log(e)
        if (e.reponse.status === 403) {
          this.$Message.error('权限不足')
          localStorage.removeItem('AuthToken')
        } else {
          window.location.href = config['sso']
        }
      })
  },
  getMenus (cb) {
    axios.get(`${config['api']}menu`,
      {
        headers: config.headers()
      }).then(res => cb(res.data.data)).catch(err => console.log(err))
  },
  getConfig (cb) {
    axios.get(`${config['api']}config`,
      {
        headers: config.headers()
      }).then(res => cb(res.data.data)).catch(err => console.log(err))
  }
}
