import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/index'
import About from '@/pages/about'
import Application from '@/pages/application'
import Case from '@/pages/case'
import Information from '@/pages/Information'
import Program from '@/pages/program'
import Recommend from '@/pages/recommend'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/application',
      name: 'Application',
      component: Application
    },
    {
      path: '/case',
      name: 'case',
      component: Case
    },
    {
      path: '/information',
      name: 'information',
      component: Information
    },
    {
      path: '/program',
      name: 'Program',
      component: Program
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    }

  ]
})
