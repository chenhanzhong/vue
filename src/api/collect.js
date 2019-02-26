import axios from 'axios'
// import config from '../config'

export default {
  getList (cb) {
    axios.get(`https://www.easy-mock.com/mock/5bcdcc516c5cf5220c328d53/example/mock`,
      {
        params: {
          // start_time: '2018-09-11',
          // end_time: '2018-10-10',
          // department_id: '1001J110000000000C7M',
          // per_page: 15,
          // page: 1
        }
        // headers: config.headers()
      }).then(res => cb(res.data.data)).catch(err => console.log(err))
  }
}
