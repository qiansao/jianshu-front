<template>
    <div class="main">
      <div class="manager">管理员</div>
      <div>
        <a v-for="manager in managerList" :key="manager.id">
          <img class="avatar" :src="manager.avatar"/>
          <p class="nickname">{{manager.nickname}}</p>

        </a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "SubjectManager",
      data(){
          return{
            slide:0,
            sliding: null,
            managerList:[
              {
                "id":1,
                "avatar":"https://upload.jianshu.io/users/upload_avatars/259/5210859b-fc54-4cf8-908f-830f0237926a.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
                "nickname":"简书",
              },
              {
                "id":2,
                "avatar":"https://upload.jianshu.io/users/upload_avatars/3851573/daa07900-65b3-46e8-85e3-b8bbbb835c0c.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
                "nickname":"Jettxia",
              },
              {
                "id":3,
                "avatar":"https://upload.jianshu.io/users/upload_avatars/41086/77cfbdc5a489.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
                "nickname":"圆十二",
              },
              {
                "id":3,
                "avatar":"https://upload.jianshu.io/users/upload_avatars/3229003/1e116c5b44ed.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
                "nickname":"大若木木",
              },
              {
                "id":4,
                "avatar":"https://upload.jianshu.io/users/upload_avatars/3369953/0be52d92-8c12-4e58-aab4-fcfac930ac44.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
                "nickname":"贾小朋友",
              },
              {
                "id":5,
                "avatar":"https://upload.jianshu.io/users/upload_avatars/790541/4f957344-7229-40bb-ae0a-918c14ec417c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
                "nickname":"简书视觉馆小飞侠",
              },
              {
                "id":6,
                "avatar":"https://upload.jianshu.io/users/upload_avatars/5921503/2d0983cd-3a50-4683-96c7-bfba96ff55e3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
                "nickname":"蔡小卿Yoki",
              },
              {
                "id":7,
                "avatar":"https://upload.jianshu.io/users/upload_avatars/2898131/9b248571-684e-4182-9d05-87e93cdccd29.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
                "nickname":"夏云梦",
              },
              {
                "id":8,
                "avatar":"https://upload.jianshu.io/users/upload_avatars/4567675/f0b69861-af52-4f5b-89ce-79f12541a5d5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
                "nickname":"小九英",
              },
              {
                "id":9,
                "avatar":"https://upload.jianshu.io/users/upload_avatars/7143724/bf99ec7e-668f-4660-b004-e0d8cf23407d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
                "nickname":"鱼翔浅底10",
              },

            ]
          }
      }
    }
</script>

<style scoped>
  .main{
    margin-top: 3%;
  }
  .manager{
    color: gray;
  }
  .avatar{
    width: 30px;
    border-radius: 100%;
  }
  .nickname{
    margin-top: -5%;
    margin-left: 8%;
    font-size: 14px;
  }




</style>
