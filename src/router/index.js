import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import Bookings from '@/components/Bookings.vue'
import Contact from '@/components/Contact.vue'
import Feedback from '@/components/Feedback.vue'
import Menu from '@/components/Menu.vue'
import Restaurant from '@/components/Restaurant.vue'
import Order from '@/components/Order.vue'
import About from '@/components/About.vue'


// route array of objects : path, component
const routes = [  
    {
    path:'/',
    component: HomePage
  },

  {
    path:'/About',
    component: About
  },
    
  {
    path:'/Bookings',
    component: Bookings
  },

  {
    path:'/Contact',
    component: Contact
  },

  {
    path:'/Feedback',
    component: Feedback
  },

  {
    path:'/Menu',
    component: Menu
  },
  
  {
    path:'/Order',
    component: Order
  },

  {
    path:'/Restaurant',
    component: Restaurant
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
