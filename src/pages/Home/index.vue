<template>
    <div>
      <Card style="width: 100%">
        <div>
          <h2 style="margin-bottom: 20px;">Good Day!</h2>
          <span>web前端 |－某某某事业群－某某平台部－某某技术部</span>
        </div>
      </Card>
      <div style="margin:20px auto;text-align:center">
        <Card style="width:320px;display: inline-block">
          <div style="text-align:center;display: inline-block">
              <div style="width: 90px"><img style="width: 100%" src="../../assets/logo.png"></div>
              <span>活跃统计</span>
              <span>{{num1}}</span>
          </div>
        </Card>
        <Card style="width:320px;display: inline-block">
          <div style="text-align:center;display: inline-block">
              <div>
                <div style="width: 90px"><img style="width: 100%" src="../../assets/logo.png"></div>
                <span>
                  <span>活跃统计</span>
                  <span>{{num2}}</span>
                </span>
              </div>
          </div>
        </Card>
      </div>
      <Card style="width:320px;margin:20px auto;">
          <div style="text-align:center;">
              <h3 style="margin-bottom: 30px">Ongoing project</h3>
              <template>
                <div style="display: flex;justify-content: space-between">
                  <div>
                    <i-circle :percent="percent1">
                      <span class="demo-Circle-inner" style="font-size:24px">react</span>
                    </i-circle>
                  </div>
                  <div>
                    <i-circle :percent="percent2">
                      <span class="demo-Circle-inner" style="font-size:24px">vue</span>
                    </i-circle>
                  </div>
                </div>
              </template>
          </div>
      </Card>
      <Card>
        <Upload
          multiple
          type="drag"
          action="//jsonplaceholder.typicode.com/posts/">
          <div style="padding: 20px 0">
              <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
              <p>upload file</p>
          </div>
        </Upload>
      </Card>
    </div>
</template>
<script>
export default {
  data () {
    return {
      percent1: 0,
      percent2: 0,
      num1: 0,
      num2: 0
    }
  },
  mounted () {
    this.Increase()
    this.numAdd(2000, 'num1')
    this.numAdd(1500, 'num2')
  },
  methods: {
    Increase () {
      setTimeout(() => {
        this.percent1 = 80
        this.percent2 = 70
      }, 50)
    },
    numAdd (n1, n2) {
      let num = 0
      let timer = setInterval(() => {
        num += 20
        if (num > n1) {
          num = n1
          this[n2] = n1
          clearInterval(timer)
        }
        this[n2] = num
      }, 20)
    }
  }
}
</script>
