<template>
  <div class="bottom">
    <div class="bottom_top">
      <div class="bottom_top_img"><img :src="bottomlist.avatar" alt=""></div>
      <div class="bottom_top_message">
        <p class="bottom_top_id">{{bottomlist.listname}}</p>
        <p class="bottom_top_money">{{bottomlist.listmoney}}</p>
      </div> 
    </div>

    <div class="bottom_message">
      <p>{{bottomlist.listcont}}</p>
    </div>

    <div class="bottom_img">
      <div><img preview="bottomlist.id" :src="bottomlist.listimg[0]" alt=""></div>
      <div class="bottom_img_to"><img  preview="bottomlist.id" :src="bottomlist.listimg[1]" alt=""></div>
      <div><img preview="bottomlist.id" :src="bottomlist.listimg[2]" alt=""></div>
    </div>
  </div>
</template>

<script>
export default {
  props:['bottomlist'],
  // methods: {
  //   imgclick(imgurl){
  //     console.log(imgurl);
  //   }
  // },
}
</script>

<style>
.bottom_top{
  display: flex;
  margin-top: 22px;
}
.bottom_top_img{
  width: 34px;
  height: 34px;
  background-color:brown;
  border-radius: 17px;
  margin-left: 4.8%;
}
.bottom_top_img img{
  width: 34px;
  height: 34px;
  border-radius: 17px;
}
.bottom_top_message{
  margin-left: 8px;
}
.bottom_top_id{
  font-size: 13px;
  color: #333;
  font-weight: 500;
}
.bottom_top_money{
  font-size: 12px;
  color: #FF2B2B;
  font-weight: 500;
}
.bottom_message p{
  margin-left: 4.8%;
  margin-right: 4.8%;
  font-size: 14px;
  margin-top: 13px;
  font-weight: 400;
}
.bottom_img{
  display: flex;
  justify-content: space-between;
  margin-left: 4.8%;
  margin-right: 4.8%;
  margin-top: 12px;
}
.bottom_img div{
  width: 108px;
  height: 108px;
  background-color: #D8D8D8;
  border-radius: 8px;
  overflow: hidden;
}
.bottom_img div img{
  width: 100%;
}
.bottom_img_to{
  margin-left: 1.8%;
  margin-right: 1.8%;
} 
</style>