import Vue from 'vue'
import VueRouter from 'vue-router'
import dashboard from '../views/Dashboard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/user',
    component: dashboard,
    children: [
      {
        path: 'EvolutionNombreEtudiants',
        component: () => import(/* webpackChunkName: "EvolutionNombreEtudiants" */ '../views/EvolutionNombreEtudiants.vue')
      },
      {
        path: 'nbrEtudiantObs',
        component: () => import(/* webpackChunkName: "NbrEtudiantObs" */ '../views/NbrEtudiantObs.vue')
      },
      {
        path: 'nbrEtdSpec',
        component: () => import(/* webpackChunkName: "NbrEtdSpec" */ '../views/NbrEtdSpec.vue')
      },
      {
        path: 'etatAvancementModule',
        component: () => import(/* webpackChunkName: "EtatAvancementModule" */ '../views/EtatAvancementModule.vue')
      },
      {
        path: 'tauxDeRéussite',
        component: () => import(/* webpackChunkName: "TauxDeRéussite" */ '../views/TauxDeRéussite.vue')
      },
      {
        path: 'nbrEnsGrade',
        component: () => import(/* webpackChunkName: "NbrEnsGrade" */ '../views/NbrEnsGrade.vue')
      },
      
    ]
  },
  {
    path: '/',
    name: 'Acceuil',
    component:  () => import('../views/Acceuil.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
