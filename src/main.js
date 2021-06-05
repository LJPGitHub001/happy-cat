import Vue from 'vue'
import App from './App.vue'

import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
var option = {
  maxSpreadZoom: 1, // 控制预览图最大的倍数，默认是2倍，我这里改成了原图
  fullscreenEl: false, //控制是否显示右上角全屏按钮
  closeEl: true, //控制是否显示右上角关闭按钮
  tapToClose: true, //点击滑动区域应关闭图库
  shareEl: false, //控制是否显示分享按钮
  zoomEl: false, //控制是否显示放大缩小按钮
  counterEl: true, //控制是否显示左上角图片数量按钮
  arrowEl: false,  //控制如图的左右箭头（pc浏览器模拟手机时）
  tapToToggleControls: true, //点击应切换控件的可见性
  clickToCloseNonZoomable: true //点击图片应关闭图库，仅当图像小于视口的大小时
}
Vue.use(preview, option)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

