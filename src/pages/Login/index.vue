<style>
.form {
    width: 300px;
    padding-top: 200px;
    margin: 0 auto;
}
</style>
<template>
  <div>
    <div style="position: fixed;width: 100%; height: 100%;">
      <vue-particles
      color="#dcdcdc"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      >
      </vue-particles>
    </div>
    <div  class="form">
      <Form ref="formInline" :model="formInline" :rules="ruleInline">
      <FormItem prop="user">
        <Input type="text" v-model="formInline.user" placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" v-model="formInline.password" placeholder="Password">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem>
          <Button type="primary" @click="handleSubmit('formInline')">Sign In</Button>
      </FormItem>
      </Form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: 'Please fill in the user name',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: 'Please fill in the password.',
            trigger: 'blur'
          },
          {
            type: 'string',
            min: 6,
            message: 'The password length cannot be less than 6 bits',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          const router = this.$router
          const message = this.$Message
          // console.log(router, 777)
          this.$store.dispatch('user/getAuth', {data: {name: this.formInline.user, pwd: this.formInline.password}, router, message})
        } else {
          this.$Message.error('Fail!')
        }
      })
    }
  }
}
</script>
