<template>
  <div>
    <div><p>全部投稿请求</p></div>
    <div class="line"></div>
    <div style="padding-top: 20px">
      <img class="frame" src="static/img/requests.png"><a>全部未处理消息</a>
    </div>
    <div></div>
  </div>
</template>

<script>
    export default {
        name: "requests"
    }
</script>

<style scoped>
  p{
    font-size: 15px;
    font-weight: bold;
  }
  .line{
    border: 5px solid lightgrey;
  }
  .frame{
    border: 1px solid lightgrey;
    border-radius: 5px;
    width: 40px;
    height: 40px;
    margin: 0px 10px 20px 20px;
  }
  img{
    width: 30px;
    height: 30px;
  }
</style>
