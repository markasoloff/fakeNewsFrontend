
<template>
  <div id="app">
    <div class="home">
      <div class="container-fluid">
        <h1 class="homeTitle">Fake News!</h1>
          <hr>
        <div class="buttonList" v-for="article in articles">
        <!-- <br/> -->
        <button class="btn btn-secondary" v-on:click="findShowByApiUrl(article.apiUrl)">{{ article.webTitle }}</button>
        </div>
          <blockquote class="subTitle">( select a headline from above, old chum )</blockquote>
       </div>
    </div>
  </div>
</template>


<style>

.homeTitle {
  text-align: center;
  font-size: 700%;
  text-shadow: 4px -3px 2px rgba(150, 150, 150, 0.79);
  margin-top: 0px;
  margin-bottom: 0px;
}

.buttonList {
  text-align: center;
  margin-top:5px;
  margin-bottom:15px;

}

.subTitle {
  text-align: center;
  margin-top: 0px;
  margin-bottom: 10px;

}

</style>


<script>

  var axios = require('axios');

  export default {
    data: function() {
      return {
        message: "Fake News",
        articles: []
      };
    },
    created: function() {
      axios.get("https://content.guardianapis.com/search?order-by=newest&page-size=4&q=Trump&show-fields=body&api-key=963a71b0-c998-426c-b488-21146e4d02df")
        .then(response => {
          this.articles = response.data.response.results;
        });
    },
    methods:{
      normalize: function() {
        axios
          .get("https://murmuring-tor-27043.herokuapp.com/articles/" + this.$route.params.id)
          .then(response => {
            this.articles = response.data;
          });
      },  
      goToSwap: function() {
        axios
          .get("https://murmuring-tor-27043.herokuapp.com/articles/" + this.$route.params.id + "?version=swap")
          .then(response => {
            this.articles = response.data;
            this.message = "Swap!";
          });
      },
      goToRedact: function() {
        axios
          .get("https://murmuring-tor-27043.herokuapp.com/articles/" + this.$route.params.id + "?version=redact")
          .then(response => {
            this.articles = response.data;
            this.message = "Redact!";
          });
      },
      goToAdd: function() {
        axios
          .get("https://murmuring-tor-27043.herokuapp.com/articles/" + this.$route.params.id + "?version=add")
          .then(response => {
            this.articles = response.data;
            this.message = "Add!";
          });
      },
      findShowByApiUrl: function(articleApiUrl) {
        var params = {api_ref: articleApiUrl};
        axios
          .post("https://murmuring-tor-27043.herokuapp.com/articles/by_api_ref", params)
          .then(response => {
            this.$router.push({name: 'articles-show', params: {id: response.data["id"]}});
          });
      }
    },
    computed: {}
  };
  </script>
