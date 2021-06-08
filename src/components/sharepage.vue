<template>
  <div>
    <div class="top">
    <div class="top_icon">
      <img src="../assets/img/icon.png" alt="">
      <p>得意猫</p>
    </div>
    <div class="top_message">
      <div class="top_message_left">
        <img src="../assets/img/star.png" alt="">
        <span>4.9分</span>
      </div>
      <div class="top_message_center">
        <img src="../assets/img/download.png" alt="">
        <span>40.12万下载</span>
      </div>
      <div class="top_message_right">
        <img src="../assets/img/size.png" alt="">
        <span>15.56Mb</span>
      </div>
    </div>
    <div class="top_btn">
      <button @click="downAPK">立即下载</button>
    </div>
  </div>

  <div class="center">
    <div class="center_top"><span>评价30W+</span></div>
    <div class="center_bottom"><span>👍好评率98%</span></div>
  </div>

  <div class="center_tips">
    <div v-for="(coms,i) in comment" :key="i"><span>{{coms}}</span></div>
  </div>

  <div class="bottom" v-for="item in listmessage" :key="item.id">
    <talk :bottomlist='item'></talk>
  </div>

  <div class="foot">
    <p>只显示最近5条评论</p>
  </div>
  </div>
</template>

<script>
import talk from './talk.vue'
export default {
  components:{
    talk,
  },
  data(){
    return {
      comment:['大公司出品', '无门槛提现','赚的挺多的','真给分红','已玩好几年'],
      listmessage: [
        {id: 1,
         avatar: require('../assets/img/id1.webp'),
         listname: '沧海桑田',
         listmoney: '已赚890.76元',
         listcont: '这里的人们老好了，按点就组织吃饭，吃的还挺好的，老伙计们快来参与进来吧',
         listimg:[require('../assets/img/bottom1-1.jpeg'),require('../assets/img/bottom1-2.jpeg'),require('../assets/img/bottom1-3.jpeg')],
        },
        {id: 2,
         avatar: require('../assets/img/id2.webp'),
         listname: '哈哈乐',
         listmoney: '已赚183.99元',
         listcont: '这里的人们老好了，按点就组织吃饭，吃的还挺好的，老伙计们快来参与进来吧',
         listimg:[require('../assets/img/bottom2-1.jpeg'),require('../assets/img/bottom2-2.jpeg'),require('../assets/img/bottom2-3.jpeg')],
        },
        {id: 3,
         avatar: require('../assets/img/id3.webp'),
         listname: 'Lz',
         listmoney: '已赚342.36元',
         listcont: '这里的人们老好了，按点就组织吃饭，吃的还挺好的，老伙计们快来参与进来吧',
         listimg:[require('../assets/img/bottom3-1.jpeg'),require('../assets/img/bottom3-2.jpeg'),require('../assets/img/bottom3-3.jpeg')],
        },
        {id: 4,
         avatar: require('../assets/img/id4.webp'),
         listname: '得意猫007',
         listmoney: '已赚1534.69元',
         listcont: '这里的人们老好了，按点就组织吃饭，吃的还挺好的，老伙计们快来参与进来吧',
         listimg:[require('../assets/img/icon.png'),require('../assets/img/icon.png'),require('../assets/img/icon.png')],
        },
        {id: 5,
         avatar: require('../assets/img/id5.webp'),
         listname: '春风又绿江南岸',
         listmoney: '已赚3500.01元',
         listcont: '这里的人们老好了，按点就组织吃饭，吃的还挺好的，老伙计们快来参与进来吧这里的人们老好了，按点就组织吃饭，吃的还挺好的，老伙计们快来参与进来吧这里的人们老好了，按点就组织吃饭，吃的还挺好的，老伙计们快来参与进来吧',
         listimg:[require('../assets/img/icon.png'),require('../assets/img/icon.png'),require('../assets/img/icon.png')],
        }
      ]
    }
  },
  methods: {
    downAPK() {
      window.open('https://www.baidu.com');
    }
  },
}
</script>

<style>
  .top_icon{
  text-align: center;
}
.top_icon img{
  width: 72px;
  height: 72px;
}
.top_icon p{
  font-size: 17px;
  margin-top: 18px;
}
.top_icon{
  margin-top: 15px;
}
.top_message img{
  width: 14px;
  height: 14px;
}
.top_message span{
  font-size: 13px;
  color: #666666;
}
.top_btn button{
  width: 246px;
  height: 36px;
  background-color: #0288EB;
  color: #fff;
  border: none;
  border-radius: 18px;
  font-size: 15px;
}
.top_btn{
  text-align: center;
  margin-top: 18px;
}
.top_message{
  display: flex;
  justify-content: center;
}
.top_message_left, .top_message_center, .top_message_right{
  display: flex;
  align-items: center;
}
.top_message_center{
  margin-left: 16px;
  margin-right: 16px;
}
.top_message span{
  margin-left: 7px;
}
.top_message{
  margin-top: 18px;
}
.center{
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
  margin-top: 22px;
}
.center_top{
  margin-left: 4.8%;
  font-size: 16px;
}
.center_top span{
  color: #333;
  font-size: 16px;
  font-weight: bold;
}
.center_bottom{
  margin-right: 4.8%;
}
.center_bottom span{
  color: #FF2B2B;
  font-size: 14px;
}
.center_tips{
  display: flex;
  flex-wrap: wrap;
  margin-left: 4.8%;
}
.center_tips div{
  width: 89px;
  height: 29px;
  background-color: #FDEDF0;
  border-radius: 15px;
  margin-top: 12px;
  text-align: center;
  margin-right: 8px;
}
.center_tips span{
  color: #890000;
  font-weight: 500;
  font-size: 13px;
  line-height: 29px;  
}
.foot{
  height: 74px;
  background-color: #fff;
  margin-left: 4.8%;
  margin-right: 4.8%;
}
.foot p{
  font-size: 13px;
  color: #999;
  text-align: center;
  line-height: 74px;
}
</style>
