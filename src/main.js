import App from './App.js'
import routes from './routes/index.js'

const root =document.querySelector("#root")
root.append(new App().el)//el -> element

routes()