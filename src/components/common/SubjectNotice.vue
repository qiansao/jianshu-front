<template>
  <div class="main">
    <div class="text1">专题公告</div>
    <div class="main2">
      <a v-for="notice in noticeList" :key="notice.id">
        <div class="notice">{{notice.notice}}</div>
      </a>
    </div>
    <div class="text2"></div>
    <div class="main3">
      <p>分享到</p>
      <div class="main4">
        <b-img class="pic1" src="http://p88kzenjw.bkt.clouddn.com/weibo.png" />
        <b-img class="pic2" src="http://p88kzenjw.bkt.clouddn.com/wechat1.png" />
        <b-img class="pic2" src="http://p88kzenjw.bkt.clouddn.com/more.png" />
      </div>
    </div>
    <div class="text2"></div>
  </div>

</template>

<script>
    export default {
        name: "SubjectNotice",
        data(){
          return{
            slide:0,
            sliding: null,
            noticeList:[
              {
                "id":1,
                "notice":"欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台回复“指南”获取玩转简书绝密珍贵资料汇总；有问题，找宝玉。简宝玉同志会专程为你答疑解惑关于简书的一切。 \n" +
                "生活本无趣 \n" +
                "光影挽留年 \n" +
                "用图片 说故事 \n" +
                "记录生活 记录美好\n" +
                "\n" +
                "每个人都是独特的艺术家 \n" +
                "用快门捕捉你双眼所见，心有所感的一切\n" +
                "\n" +
                "专题投稿，首页推荐，摄影爱好交流详见： \n" +
                "https://www.jianshu.com/p/e330ab6b2f65\n" +
                "\n" +
                "专题主编:小久英 \n" +
                "https://www.jianshu.com/u/aa73c6c31eb1"
              }
            ]
          }
        }
    }
</script>

<style scoped>
  .main{
    padding-top: 3%;
    padding-right: 40%;
  }
  .text1{
    color: gray;
  }
  .main2{
    margin-top: 3%;
  }
  .notice{
    font-size: 15px;
  }
  .text2{
    border-bottom: 1px solid #f0f0f0;
    margin-top: 6%;
  }
  .main3{
    margin-top: 3%;
  }
  .main4{
    margin-top: -15%;
    margin-left: 25%;
  }
  .pic1{
    width: 20px;
  }
  .pic2{
    width: 20px;
    margin-left: 5%;
  }
</style>
