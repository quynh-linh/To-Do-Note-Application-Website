import Home from '~/pages/Home';
import About from '~/pages/About';
const publicRoutes =[
    {path : '/', component: Home},
    //{path : '/about', component: About},
    // {path : '/upload', component: About , layout: null},
]
const privateRoutes =[
    
]

export {publicRoutes , privateRoutes};