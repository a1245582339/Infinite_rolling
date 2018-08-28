import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router) 
import Table from '@/pages/table'

export default new Router({
    routes: [{
            path: '/',
            redirect: '/table',
        },
        {
            path: "/table",
            name: "Table",
            component: Table
        }
    ]
})

