<template>
  <div>
  <b-row>
    <b-col cols="12" class="main" >
      <a v-for="detail in detailList" :key="detail.id">
        <img class="avatar" :src="detail.avatar"/>
        <div class="name">{{detail.name}}</div>
        <div>
          <p class="text1">收录了</p>
          <p class="article">{{detail.article}}</p>
          <p class="text2">篇文章</p>
        </div>
        <div class="text3">·</div>
        <div>
          <p class="focuss">{{detail.focus}}</p>
          <p class="text4">人关注</p>
        </div>
      </a>

      <div>
        <b-button class="button1" variant="outline-success">投稿</b-button>
        <b-button class="button2" variant="success">+关注</b-button>
      </div>
    </b-col>

  </b-row>
  </div>
</template>

<script>
    export default {
        name: "SubjectDetail",
      data(){
          return{
            slide:0,
            sliding: null,
            detailList:[
              {
                id:1,
                "avatar":"https://upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240",
                "name":"摄影",
                "article":69536,
                "focus":1950297,
              }
            ]
          }

      }
    }
</script>

<style scoped>
  .main{
    padding-top: 3%;
    padding-left:19%;
  }
  .avatar{
    width: 78px;
    height: 78px;
  }
  .name{
    font-size: 21px;
    padding-left: 13%;
    margin-top: -11%;
    font-weight: bolder;
  }
  .text1{
    margin-left: 13%;
    margin-top: 1%;
    color: gray;
    font-size: 14px;
  }
  .article{
    margin-left: 19.5%;
    margin-top: -5.2%;
    color: gray;
    font-size: 14px;
  }
  .text2{
    margin-left: 25.5%;
    margin-top: -5.3%;
    color: gray;
    font-size: 14px;
  }
  .text3{
    margin-left: 33%;
    margin-top: -5.5%;
    color: gray;
  }
  .focuss{
    margin-left: 34.5%;
    margin-top: -3.2%;
    color: gray;
    font-size: 14px
  }
  .text4{
    margin-left: 43%;
    color: gray;
    margin-top: -5.2%;
    font-size: 14px;
  }
  .button1{
    margin-top: -20%;
    margin-left: 60%;
  }
  .button2{
    margin-top: -27%;
    margin-left: 72%;
  }

</style>
