<template>
 <div class="show">
     <div class="container">
      <div class="editButtons">
        <h1 style="font-size: 400%; text-shadow: 4px -3px 2px rgba(150, 150, 150, 0.79);">{{ message }}</h1>
          <button @click="goToSwap()">Swap</button>
          <button @click="goToAdd()">Add</button>
          <button @click="goToRedact()">Redact</button>
        </div>
     <div>
      <br>
   <h3 class="headline" v-html="article.headline">{{ article.headline }}</h3>
     <article id="art" v-html="article.body">{{ article.body }}</article>
    </div>
  
    <br>
   <social-sharing url="https://vuejs.org/" inline-template>
     <div id="socialLinks">
     <h2>Tell them - tell them all!</h2>
       <network network="linkedin">
         <i class="fa fa-fw fa-linkedin"></i> LinkedIn
       </network>
       <network network="facebook">
         <i class="fa fa-fw fa-facebook"></i> Facebook
       </network>
       <network network="googleplus">
         <i class="fa fa-fw fa-google-plus"></i> Google +
       </network>
       <network network="pinterest">
         <i class="fa fa-fw fa-pinterest"></i> Pinterest
       </network>
       <network network="reddit">
         <i class="fa fa-fw fa-reddit"></i> Reddit
       </network>
       <network network="whatsapp">
         <i class="fa fa-fw fa-whatsapp"></i> Whatsapp
       </network>
     </div>
   </social-sharing>
   <ul class="icons" style="font-size: 400%;">
     <li>
        <a href="https://twitter.com/intent/tweet?button_hashtag=FakeNewsApp&ref_src=twsrc%5Etfw" data-size="large" data-related="blastropodcast" data-dnt="true" data-show-count="false"class="fa-twitter">
          <span class="label">Twitter</span></a></li>
   </ul>
          <div class="editButtons">
            <button>
              <a href="https://youtu.be/FtbrwGidqR8?t=2">Leave Site for Greener Pastures</a>
            </button>
          </div>
  </div>
 </div>
</template>

<style>



.headline{
  font-size: large;
  text-align: center;
  padding-top: 2em;

}

#art {
  border-style: solid;
    border: 2px solid #fff3;
     border-radius: 25px;
     border-width: 1px;
     padding: 3em;
}


span.add {
  color: #C3FDB8;

}

span.swap {
    color: #C3FDB8;

 }


span.redacted {
  background-color: orange;
  color: orange;
}

ul.icons {
  text-align:center;
}

div.editButtons {
  text-align: center;
  padding: 1em;

}

div#socialLinks {
  text-align: center;

}

</style>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<script src="/dist/vue-social-sharing.min.js"></script>


<script>

var axios = require('axios');

export default {
  data: function() {
    return {
      message: "Change Your News",
      article: {
        title: "",
        body: ""
      }
    };
  },
  created: function() {
    axios.get("https://murmuring-tor-27043.herokuapp.com/articles/" + this.$route.params.id).then(response => {
      this.article = response.data;
    });
  },  

  methods: {
    goToSwap: function() {
      axios
    .get("https://murmuring-tor-27043.herokuapp.com/articles/" + this.$route.params.id + "?version=swap")
    .then(response => {
      this.article = response.data;
      this.message = "Swap!";
    }); 
    },

     goToRedact: function() {
      axios
      .get("https://murmuring-tor-27043.herokuapp.com/articles/" + this.$route.params.id + "?version=redact")
      .then(response => {
        this.article = response.data;
        this.message = "Redact!";
      });
      },

        goToAdd: function() {
      axios
      .get("https://murmuring-tor-27043.herokuapp.com/articles/" + this.$route.params.id + "?version=add")
      .then(response => {
        this.article = response.data;
        this.message = "Add!";
      });
    }
  },  
  computed: {}
};
</script>

