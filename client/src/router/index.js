import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Songs from '@/components/Song/Index'
import SongCreate from '@/components/CreateSong'
import SongEdit from '@/components/EditSong'
import SongView from '@/components/ViewSong/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/songs',
      name: 'Songs',
      component: Songs
    },
    {
      path: '/songs/:songId',
      name: 'Song',
      component: SongView
    },
    {
      path: '/songs/create',
      name: 'SongCreate',
      component: SongCreate
    },
    {
      path: '/songs/:songId/edit',
      name: 'SongEdit',
      component: SongEdit
    }
  ]
})
