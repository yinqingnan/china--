import Vue from 'vue'

//引入路由文件
import VueRouter from 'vue-router';
Vue.use(VueRouter)
//引入路由匹配成功后显示的组件
import Indexmap from '../view/indexmap.vue'   //地图页面
const  router = new VueRouter({
    routes:[
        {path:"/",redirect:'/indexmap'},//设置默认指向的路径
        {path:"/indexmap",component:Indexmap},
    ]
})


export default router;