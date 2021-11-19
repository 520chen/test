
import app from './creat'
import router from './router'
import store from './store'
import * as vant from "./vant"
app.use(store).use(router).use(vant).mount('#app')
