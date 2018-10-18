<template>
  <div>
    <v-head></v-head>
    <!--tab切换-->
    <div class="container main">
      <b-col  cols="8">
        <v-subject></v-subject>
        <b-tabs>
          <b-tab title="文章" active>
            <v-article></v-article>
          </b-tab>
          <b-tab title="动态" >
            <br>动态
          </b-tab>
          <b-tab title="最新评论" >
            <br>最新评论
          </b-tab>
          <b-tab title="热门" >
            <br>热门
          </b-tab>
        </b-tabs>
      </b-col>
    </div>
    <!--tab切换结束-->
    <b-col cols="4" style="margin-left: -5%">
     <v-notice></v-notice>

    </b-col>
  </div>

</template>

<script>
  import vHead from '../common/Header';
  import vSubject from '../common/SubjectDetail';
  import vArticle from  '../page/Article';
  import vNotice from  '../common/SubjectNotice';
  export default {
    name: "User",
    components: {
      vHead,
      vSubject,
      vArticle,
      vNotice
    }
  }



</script>

<style scoped>
  a{
    color: #495057;
  }
  .main{
    padding-left: 116px;
  }
</style>
