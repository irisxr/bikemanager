import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/views/home'
import bikes from '@/views/bikes'
import data from '@/views/data'
import rider from '@/views/rider'
import status from '@/views/status'
import users from '@/views/users'
import login from '@/views/login'
import index from '@/views/index'
import bikesDetail from '@/views/bikesDetail'
import userStatus from '@/views/userStatus'
import bikeStatus from '@/views/bikeStatus'


Vue.use(Router)

export default new Router({
  routes: [{
    path: '/login',
    name: 'login',
    component: login
  }, {
    path: '/',
    name: '',
    component: index,
    children: [{
      path: '/home',
      name: 'home',
      component: home
    }, {
      path: '/data',
      name: 'data',
      component: data,
      children: [{
        path: '/users',
        name: 'users',
        component: users
      }, {
        path: '/bikes',
        name: 'bikes',
        component: bikes
      }, {
        path: '/rider',
        name: 'rider',
        component: rider
      }, {
        path: '/bikesDetail',
        name: 'bikesDetail',
        component: bikesDetail
      }]
    }, {
      path: '/status',
      name: 'status',
      component: status,
      children: [{
        path: '/userStatus',
        name: 'userStatus',
        component: userStatus
      }, {
        path: '/bikeStatus',
        name: 'bikeStatus',
        component: bikeStatus
      }]
    }]
  }]
})
