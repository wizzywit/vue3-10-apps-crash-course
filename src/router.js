import { createRouter, createWebHistory } from 'vue-router'
import DcHeros from './pages/DcHeros'
import Calender from './pages/Calender'
import Markdown from './pages/Markdown'
import Home from './pages/Home'
import Slider from './pages/Slider'

const routes = [
    { path: "/", component: Home},
    { path: '/dc-heros', component: DcHeros },
    { path: '/calender', component: Calender },
    { path: '/markdown', component: Markdown },
    { path: '/slider', component: Slider },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;