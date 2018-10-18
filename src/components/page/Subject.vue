<template>
  <div>
    <v-head></v-head>
    <b-row>
      <b-col cols="8" class="one">
        <v-suject-detail></v-suject-detail>
        <div class="container two">
          <b-col  cols="8">
            <v-subject></v-subject>
            <b-tabs class="three">
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

      </b-col>
      <b-col cols="4" class="four">
        <v-subject-notice></v-subject-notice>
        <v-subject-manager></v-subject-manager>

      </b-col>
    </b-row>


  </div>
</template>

<script>
  import vHead from '../common/Header.vue';
  import vSujectDetail from '../common/SubjectDetail';
  import vSubjectNotice from '../common/SubjectNotice';
  import vArticle from '../page/Article';
  import vSubjectManager from '../common/SubjectManager';

  export default {
    name: "Subject",
    components: {
      vHead,
      vSujectDetail,
      vSubjectNotice,
      vArticle,
      vSubjectManager,
    },
  }
</script>

<style scoped>
  .one{
    padding-left: 10%;
  }
  .two{
    padding-left: 116px;
  }
  .three{
    margin-top:-2%;
  }
  .four{
    margin-left: -5%;
  }

</style>
