<template>

<!-- 地图页面城市首页 -->
    <div>
      
        <div class="box">
            <div class="left">
                <!-- <div class="positionbox">
                    <h1>金科服务在中国</h1>
                    <div>
                        <div>
                            <h1>省份</h1>
                            <h2>{{msg.provinceCount}}</h2>
                        </div>
                        <div>
                            <h1>地级市</h1>
                            <h2>{{msg.prefectureCount}}</h2>
                        </div>
                        <div>
                        <h1>县级市</h1>
                            <h2>{{msg.cityCount}}</h2>
                        </div>
                    </div>
                </div> -->
                <Chinamap class="echarts"></Chinamap>
            </div>
            <!-- <div class="right">
                <div>   
                       <h1>数据报表导出</h1>
                <ul>
                    <li v-for="(item,index) in list" :key="index" class="list"  v-if="index<8" @click="btn(item.dataUrl)">        
                        {{index+1}}.{{item.dataName}}
                    </li>
                </ul>
                </div>
             
            </div> -->
          
        </div>
       
    </div>
</template>


<script>
import Chinamap from '../components/echarts/chinamap'


export default {
    data(){
        return{
            list:[],
            msg:[]
        }
    },
    components:{
        Chinamap
    },
    mounted() {
    },
    methods: {
     
    },      
}
</script>



<style scoped>
.box{
    height: 100vh;
    width: 100%;
    background: url(../assets/image/beijingtupian.png)
}

</style>