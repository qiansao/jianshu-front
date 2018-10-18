<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <div style="margin-top: 20px">
          <a>全部关注</a><img style="padding-left: 5px" src="static/img/download.png">
          <div class="move">
            <p style="margin-top: 10px"><img style="width: 35px; height: 35px;" src="http://cdn2.jianshu.io/assets/web/addfollow-fc392ec918dda9d19818181ca42d2d7e.png"> 添加关注</p>
          </div>
            <div v-for="image in imageList" style="margin-top: 10px;" class="move">
              <img style="width: 50px; height: 50px" :src="image.url">
              <a>{{image.text}}</a>
            </div>

        </div>
        <div>
        </div>
      </div>
      <div class="col-md-9">
        <div style="margin-top: 20px">
          <router-link to="/all"><span class="title"> 全部推荐 </span></router-link>
          <router-link to="/writer"><span class="title"> 推荐作者 </span></router-link>
          <router-link to="/topic"><span class="title"> 推荐专题 </span></router-link>
        </div>
        <div class="line"></div>
        <div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Subscriptions",
    data() {
      return {
        imageList: [
          {
            "id": 1,
            "url":"//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
            "text" : "简书"
          },
          {
            "id": 2,
            "url": "https://upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp",
            "text" : "读书"

          },
          {
            "id": 3,
            "url": "https://upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp",
            "text" :"手绘"
          },
          {
            "id": 4,
            "url": "https://upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp",
            "text" : "自然科普"
          },
          {
            "id": 5,
            "url": "https://upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp",
            "text":"行走"
          }
        ]
      }
    }
  }
</script>

<style scoped>
  move{
    width: 200px;
    height: 50px;
    padding: 1px 0px 0px 10px;
    justify-content: center;
    display:block;
  }
  .move:hover{
    width: 200px;
    height: 50px;
    padding: 1px 0px 0px 10px;
    justify-content: center;
    display:block;
    background-color: lightgrey;
  }
  .line{
    border: .5px solid lightgrey;
    margin-top: 8px;
  }
  .title{
    font-size: 15px;
    font-weight: bold;
    color:black;
    margin-left: 10px;
  }
  .title:hover{
    color: red;
  }
</style>
