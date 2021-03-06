import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../pages/layout'
import Home from '@/pages/index'
import About from '@/pages/about'
import Application from '@/pages/application'
import Case from '@/pages/case'
import Information from '@/pages/Information'
import Program from '@/pages/program'
import Recommend from '@/pages/recommend'
import Contact from '@/pages/contact'
import Feedback from '@/pages/feedback'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Layout,
    meta: {
      title: '首页'
    },
    children: [{
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        name: '首页',
        title: '首页'
      }
    }]
  },
  {
    path: '/about',
    name: 'About',
    component: Layout,
    children: [
      {
        path: '/about',
        name: 'about',
        component: About,
        meta: {
          name: '关于我们',
          title: '关于我们'
        }
      }
    ]
  },
  {
    path: '/application',
    name: 'Application',
    component: Layout,
    children: [
      {
        path: 'application',
        name: 'application',
        component: Application,
        meta: {
          name: '执行方案',
          title: '执行方案'
        }
      }
    ]
  },
  {
    path: '/case',
    name: 'Case',
    component: Layout,
    children: [
      {
        path: 'case',
        name: 'case',
        component: Case,
        meta: {
          name: '经典案例',
          title: '经典案例'
        }
      }
    ]
  },
  {
    path: '/information',
    name: 'Information',
    component: Layout,
    children: [
      {
        path: '/information',
        name: 'information',
        component: Information,
        meta: {
          name: '行业资讯',
          title: '行业资讯'
        }
      }
    ]
  },
  {
    path: '/program',
    name: 'Program',
    component: Layout,
    children: [
      {
        path: '/program',
        name: 'program',
        component: Program,
        meta: {
          name: '执行方案',
          title: '执行方案'
        }
      }
    ]
  },
  {
    path: '/recommend',
    name: 'Recommend',
    component: Layout,
    children: [
      {
        path: '/recommend',
        name: 'recommend',
        component: Recommend,
        meta: {
          name: '推荐产品',
          title: '推荐产品'
        }
      }
    ]
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Layout,
    children: [
      {
        path: '/contact',
        name: 'contact',
        component: Contact,
        meta: {
          name: '联系我们',
          title: '联系我们'
        }
      }
    ]
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: Layout,
    children: [
      {
        path: '/feedback',
        name: 'feedback',
        component: Feedback,
        meta: {
          name: '反馈我们',
          title: '反馈我们'
        }
      }
    ]
  }

  ]
})
