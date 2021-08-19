import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ElTables from '@/view/ele-tables'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ElTables',
      component: ElTables
    }
  ]
})
