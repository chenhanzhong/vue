<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
</style>
<template>
    <div class="layout">
        <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
            <Menu :active-name="routePath" theme="dark" width="auto" :open-names="['/etable']" accordion>
                <template v-for="(menu, index) in menuList" >
                    <template v-if='!menu.children'>
                        <MenuItem :name='menu.web_route' :key='index' :to="menu.web_route">
                            <Icon :key='index' type="ios-navigate"></Icon>
                            {{menu.name}}
                        </MenuItem>
                    </template>
                    <template v-else>
                        <Submenu :name='menu.web_route' :key='index'>
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                {{menu.name}}
                            </template>
                            <MenuItem :name="itemMenu.web_route" :key='itemMenu.id' v-for="itemMenu in menu.children" :to="itemMenu.web_route">
                                {{itemMenu.name}}
                            </MenuItem>
                        </Submenu>
                    </template>
                </template>
            </Menu>
        </Sider>
        <Layout :style="{marginLeft: '200px'}">
            <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
                <BreadcrumbItem v-for='(item, index) in breadlist' :key='index'>
                    <router-link :key='index' :to="item.path===''?'/':item.path"><span :style="{color: '#999'}">{{item.name}}</span></router-link>
                </BreadcrumbItem>
                <template>
                    <a :style="{textAlign: 'center', marginLeft: '100px'}" @click="modal12 = true">...</a>
                    <Modal v-model="modal12" draggable scrollable title="Modal 1">
                        <template>
                            <Tree multiple :data="data2" show-checkbox></Tree>
                        </template>
                    </Modal>
                </template>
                <template>
                    <div :style="{float: 'right', cursor: 'pointer'}">
                        <Dropdown :style="{lineHeight: 0}">
                            <span>
                                <Icon type="md-person" />
                                <span href="javascript:void(0)">
                                    guest
                                </span>
                            </span>
                            <DropdownMenu slot="list">
                                <DropdownItem><a @click="RouterCheck"><span>退出登录</span></a></DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </template>
            </Header>
            <Content :style="{padding: '0 16px 16px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                </Breadcrumb>
                <Card>
                    <div style="height:100%">
                        <router-view/>
                    </div>
                </Card>
            </Content>
        </Layout>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      name: 123,
      breadlist: [],
      modal12: false,
      data2: [
        {title: 'aaa', expan: true, children: [{title: 'bbb'}]}
      ]
    }
  },
  created: function () {
    // const router = this.$router
    // const message = this.$Message
    // this.$store.dispatch('init/getInits', {router, message})
    this.getBread()
  },
  methods: {
    ...mapActions('cart', [
      'addProductToCart'
    ]),
    getBread () {
      console.log(this.$route, 8899)
      this.routePath = this.$route.path
      this.breadlist = this.$route.matched
    },
    RouterCheck () {
      this.$router.push('/login')
    }
  },
  computed: {
    ...mapState({
      menuList: state => state.init.menuList,
      current: state => state.init.current
    })
  },
  watch: {
    $route () {
      this.getBread()
    }
  }
}
</script>
