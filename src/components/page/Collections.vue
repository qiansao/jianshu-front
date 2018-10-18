<template>
  <div class="recommend-collection">
    <router-link to="/collections">
      <img class="recommend-banner" src="https://cdn2.jianshu.io/assets/web/recommend-collection-58f8968955ecbeb8f8f3b4cd95ec76be.png">
    </router-link>
    <div class="collection-wrap">
     <div class="row">
       <b-col cols="4" v-for="collection in collectionList" :key="collection.id" style="padding-top: 8%">
         <b-card-group >
           <b-card style="background:rgb(247,247,247)">
             <div class="location">
               <img class="thumnail" :src="collection.url">
             </div>
             <p class="title">{{collection.title}}</p>
             <p class="collection-description">{{collection.collectionDescription}}</p>
             <div class="attention_btn"><b-button variant="success">+关注</b-button></div>
             <p class="collection-amount">69566篇文章 · 1951.6K人关注</p>
           </b-card>
         </b-card-group>
       </b-col>
     </div>

   </div>
  </div>


</template>

<script>
    export default {
        name: "Collections",
      data(){
        return{
          slide:0,
          sliding:null,
          collectionList:[
            {
              "id":1,
              "url":"http://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg",
              "title":"读书",
              "collectionDescription":"欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台...",
              "articleAmount":69566,
              "likeAmount":"1951.6K"
            },
            {
              "id":2,
              "url":"https://upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
              "title":"故事",
              "collectionDescription":"故事专题，旅行生活中亲身经历的真实故事或童话玄幻遐想的虚构故...",
              "articleAmount":69566,
              "likeAmount":"1951.6K"
            },
            {
              "id":3,
              "url":"https://upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
              "title":"手绘",
              "collectionDescription":"欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台...",
              "articleAmount":69566,
              "likeAmount":"1951.6K"
            },
            {
              "id":4,
              "url":"https://upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
              "title":"摄影",
              "collectionDescription":"欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台...",
              "articleAmount":69566,
              "likeAmount":"1951.6K"
            },
            {
              "id":5,
              "url":"https://upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
              "title":"@IT~互联网",
              "collectionDescription":"欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台...",
              "articleAmount":69566,
              "likeAmount":"1951.6K"
            },
            {
              "id":6,
              "url":"https://upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
              "title":"自然科普",
              "collectionDescription":"欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台...",
              "articleAmount":69566,
              "likeAmount":"1951.6K"
            },
            {
              "id":7,
              "url":"https://upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
              "title":"旅行在路上",
              "collectionDescription":"欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台...",
              "articleAmount":69566,
              "likeAmount":"1951.6K"
            },
          ]
        }
      }
    }
</script>

<style scoped>
  .recommend-collection{
    margin-top: 4%;
    margin-left: 10px;
  }
  .collection{
    display: inline-block;
    margin: 0 18px 18px 0;
    min-height: 32px;
    background: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    vertical-align: top;
    overflow: hidden;
  }
  .collection img{
    width: 32px;
    height: 32px;
  }
  a{
    cursor: pointer;
    color: #333;
    text-decoration: none;
    background-color: transparent;
  }
  .name{
    display: inline-block;
    padding: 0 11px 0 6px;
    font-size: 14px;
  }
  .more{
    margin-left: 42%;margin-top: -7%;color: grey
  }
  .recommend-banner{
    width:100%;
    margin-top: -2%;
    min-height: 60px;
    background-color: hsla(0,0%,71%,.2);
    border-radius: 6px;
    vertical-align: middle;
  }
  .collection-wrap{

  }

  .thumnail{
    width: 68px;
    height: 68px;
    display: block;
    cursor: pointer;
    vertical-align: middle;
    border-radius: 10%;

  }
  .location{
    margin-top: -50px;
    margin-left: 40%;
  }
  .title{
    font-size: 19px;
    font-weight: bold;
    margin-left: 46%;
    margin-top: 2%;

  }
  .collection-description{
    font-size: 13px;
    line-height: 25px;
    text-align: center;
    width: 220px;
    margin-left: 15%
  }
  .attention_btn{
    margin-left: 40%;
  }
  .collection-amount{
    margin-top: 10%;
    font-size: 13px;
    text-align: center;
    color: #333;
  }

</style>
