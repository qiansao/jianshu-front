<template>
  <div>
    <div  v-for="all in topicList"  style="margin-top: 10px">
      <!--<a style="color:red;font-size: 13px "> 简书推荐专题</a><br>-->
      <div style="margin-top: 5px">
        <img style="width: 60px; height: 60px;float: left;border-radius: 30px" :src="all.url">
        <button style="float: right">+ 关注</button>
        <div style="padding-left: 80px">
          <a>{{all.text}}</a><br>
          <a style="font-size: 13px;color: darkgrey">{{all.introduce}}</a><br>
          <a style="font-size: 13px;color: darkgrey">{{all.topic}}</a>
        </div>
      </div>
      <div class="line"></div>



    </div>
  </div>
</template>

<script>
  export default {
    name: "title",
    data() {
      return {
        topicList: [
          {
            "id": 1,
            "url":"https://upload.jianshu.io/users/upload_avatars/10849033/a3e12f47-c81c-4659-9c80-117f8b337408.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp",
            "text" : "lostdays",
            "introduce":"僕を好きだと言う君が大嫌い。",
            "topic":"2018-10-16",
          },
          {
            "id": 2,
            "url": "https://upload.jianshu.io/users/upload_avatars/3730494/4a86a2a7-d5b9-47f1-969a-d8ef4711488b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp",
            "text" : "格列柯南",
            "introduce":"经济学本科，哲学硕士，博士攻读历史，现研习演化生物学只有审...",
            "topic":"传统中国何以不需要神？..",

          },
          {
            "id": 3,
            "url": "https://upload.jianshu.io/users/upload_avatars/3884693/b425c707-d998-46a6-98b1-9b1e241513c3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp",
            "text" :"王诗翔",
            "introduce":"合抱之木，生于毫末 九层之台，起于垒土 千里之行，始于足下",
            "topic":"【r<-fun|♡ 】...",
          },
          {
            "id": 4,
            "url": "https://upload.jianshu.io/users/upload_avatars/5796592/73837104-47e5-4fe9-a5be-054bd50b06f7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp",
            "text" : "乔汉童",
            "introduce":"已出版小说《不夜谈系列》，目前全国各大书店均无销售可能已经不...",
            "topic":"不夜谈之玲珑骰（第六幕...",
          },
          {
            "id": 5,
            "url": "https://upload.jianshu.io/users/upload_avatars/8781442/79bf6acc-5dd3-49d1-9e2b-6c58066c1442.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp",
            "text":"胡七筒",
            "introduce":"码代码，码文字，从不偷工减料。他有着一副人畜无害的皮囊，还有...",
            "topic":"程序猿生存指南-23 ...",
          }
        ]
      }
    }
  }
</script>

<style scoped>
  button{
    width: 100px;
    height: 40px;
    border-radius: 30px;
    border: 1px solid white;
    background-color: limegreen;
    color: white;
  }
  .line{
    border: .5px solid lightgrey;
    margin-top: 10px;
  }
</style>
