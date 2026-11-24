import { Adminopage } from './pages/adnmin'
import { HomePage } from './pages/home'


const routes={
 '/':HomePage,
 '/admin':Adminopage,
}

function render(){
  const path = location.hash.slice(1) ||'/'
  const page = routes[path] || HomePage
  document.querySelector('#app').innerHTML=page()
}

window.addEventListener('hashchange',render)
render()