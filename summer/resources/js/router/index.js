import Vue from 'vue'
import  VueRouter from 'vue-router'

import Dashboard from '../views/Dashboard'
import CreateSurvey from '../views/CreateSurvey'



Vue.use(VueRouter)
const  router = new VueRouter ({
    routes : [
        {
            path : '/',
            name : "dashboard",
            component :Dashboard
        },
        {
            path : '/Create-survey',
            name : "CreateSurvey",
            component :CreateSurvey
        },

    ]
})

export default router