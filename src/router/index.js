import Vue from 'vue'
import Router from 'vue-router'
import header from '../components/header'
import nav from '../components/nav'
import section from '../components/section'
import footer from '../components/footer'
import firstchildren from '../components/header/firstchildren'
import secondchildren from '../components/header/secondchildren'

//构建组件
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/header',
      name: 'header',
      component: header,
      children: [
    　　　{
    　　　　  path: 'firstchildren',
             name: 'firstchildren',
     　　　   component: firstchildren
    　　  },
         {
    　　　　  path: 'secondchildren',
             name: 'secondchildren',
     　　　   component: secondchildren
    　　  },
         {
    　　　　  path: '',
             name: 'firstchildren',
     　　　   component: firstchildren
    　　  }
    　 ]
    },
    {
      path: '/nav',
      name: 'nav',
      component: nav
    },
    {
      path: '/section',
      name: 'section',
      component: section
    },
    {
      path: '/footer',
      name: 'footer',
      component: footer
    },
    {
      path: '/',
      redirect: '/header'
    }
  ]
})
