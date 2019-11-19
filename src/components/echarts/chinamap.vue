<template>
  <div>
      <div class="title">Echarts中国地图三级钻取</div>
      <div class="box">
          <button class="backBtn" @click="back()">返回上级</button>
          <div id="mapChart" class="chart"></div>
      </div>
  </div>

</template>
<script>


//引入地图数据  -------@代表src目录下简化路径
// import cityMap from "../../js/china-main-city-map"
import cityMap from "@/js/china-main-city-map.js"
//引入echarts    由于以在main.js中全局引入 后期替换成this.$echarts
import echarts from "echarts"
//引入axios       由于以在main.js中全局引入 后期替换成this.$axios
import axios from 'axios'
//引入vue
// import Vue from "vue"

//中国地图（第一级地图）的ID、Name、Json数据
var chinaId = 100000;
var chinaName = "china";
var chinaJson = null;

//记录父级ID、Name
var mapStack = [];
var parentId = null;
var parentName = null;

//Echarts地图全局变量，主要是在返回上级地图的方法中用到
var myChart = null;
export default {
  name:"chinaMap",
  props: {
    msg:String
  },
  mounted(){
    this.mapChart("mapChart");
  },
  methods:{
    // 返回上一级地图
    back(){
      if(mapStack.length !=0){
        //如果有商机目录则执行该操作
        var map = mapStack.pop();
        axios.get("./static/json/map/" + map.mapId + ".json", {}).then((res=>{
          // console.log(res.data)
          const mapJson = res.data;
          registerAndsetOption(
              myChart,
              map.mapId,
              map.mapName,
              mapJson,
              false
            );

            //返回上级后，父级的ID、name改变
            parentId = map.mapId;
            parentName = map.mapName;
        }))
      }
    },
    //Echarts地图
    mapChart(divid){
      axios.get("./static/json/map/" + chinaId + ".json", {})
      .then((res)=>{
        console.log(res)
         const mapJson = res.data;
        chinaJson = mapJson;
        myChart = echarts.init(document.getElementById(divid));
        registerAndsetOption(myChart, chinaId, chinaName, mapJson, false);
        parentId = chinaId;
        parentName = "china";
        myChart.on("click", function(param) {
          var cityId = cityMap[param.name];
          if (cityId) {
            //代表有下级地图
            axios
              .get("./static/json/map/" + cityId + ".json", {})
              .then(response => {
                const mapJson = response.data;
                registerAndsetOption(
                  myChart,
                  cityId,
                  param.name,
                  mapJson,
                  true
                );
              });
          } else {
            //没有下级地图，回到一级中国地图，并将mapStack清空
            registerAndsetOption(myChart, chinaId, chinaName, chinaJson, false);
            mapStack = [];
            parentId = chinaId;
            parentName = chinaName;
          }
  
        });
      })
    },
  }
};
 /**
           *
           * @param {*} myChart
           * @param {*} id        省市县Id
           * @param {*} name      省市县名称
           * @param {*} mapJson   地图Json数据
           * @param {*} flag      是否往mapStack里添加parentId，parentName
           */
          function registerAndsetOption(myChart, id, name, mapJson, flag) {
            echarts.registerMap(name, mapJson);
            myChart.setOption({
              series: [
                {
                  type: "map",
                  map: name,
                  itemStyle: {
                    normal: {
                      areaColor: "rgba(23, 27, 57,0)",
                      borderColor: "#1dc199",
                      borderWidth: 1
                    }
                  },
                  data: initMapData(mapJson)
                }
              ]
            });

            if (flag) {
              //往mapStack里添加parentId，parentName,返回上一级使用
              mapStack.push({
                mapId: parentId,
                mapName: parentName
              });
              parentId = id;
              parentName = name;
            }
          }

          function initMapData(mapJson) {
            var mapData = [];
            for (var i = 0; i < mapJson.features.length; i++) {
              mapData.push({
                name: mapJson.features[i].properties.name
                //id:mapJson.features[i].id
              });
            }
            return mapData;
          }


</script>



<style scoped>
.title {
  width: 100%;
  height: 10vh;
  text-align: center;
  color: #fff;
  font-size: 2em;
  line-height: 10vh;
}
.box {
  position: absolute;
  width: 90%;
  height: 80vh;
  left: 5%;
  top: 10%;
  background-color: rgba(24, 27, 52, 0.62);
}

.chart {
  position: relative;
  height: 90%;
  top: 10%;
}
.backBtn {
  position: absolute;
  top: 0;
  background-color: #00c298;
  border: 0;
  color: #fff;
  height: 27px;
  font-family: Microsoft Yahei;
  font-size: 1em;
  cursor: pointer;
}
.myBlog {
  position: absolute;
  top: 2px;
  right: 5%;
  display: block;
  border: 2px solid #262a53;
}
.myBlog a {
  text-decoration: none;
  display: inline-block;
  color: #fff;
  padding: 5px;
  font-size: 1em;
}

.myBlog a img {
  vertical-align: middle;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin: -5px 5px auto auto;
}
.bottom {
  position: absolute;
  width: 100%;
  height: 5%;
  line-height: 100%;
  left: 0;
  bottom: 0%;
  text-align: center;
}
</style>
