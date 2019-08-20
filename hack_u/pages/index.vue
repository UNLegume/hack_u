<template>
  <div id="root">
    <home
    class="home"
    @submit="request()"
    ></home>
  </div>
</template>

<script>
import Vue from 'vue'
import axiosBase from 'axios'
import home from '../components/home';
import inspire from '../components/inspire';

const axios = axiosBase.create({
  //baseURL: 'http://localhost:4000',
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  responseType: 'json'
});

Vue.$http = axios;

let homeDOM, inspireDOM;

export default {
  data() {
    return {
      color: '',
      pattern: '',
      length: '',

      img: ''
    }
  },

  components: {
    home
  },

  methods: {
    request: function() {
       let url = 'http://6e6dbeea.ngrok.io/request/' + this.color   +
                 '/'                                  + this.pattern +
                 '/'                                  + this.length  +
                 '/';

      //let add = 'http://626487d2.ngrok.io/';

      //console.log(add)
      url = 'http://localhost:8000'

      axios.get(url, {params: {
        color: this.color,
        pattern: this.pattern,
        length: this.length
      }})
       .then(response => {
         console.log('res');
         this.sleep(5000);
         this.$router.push('/inspire');
       })
       .catch(e => {
         console.log(e)
       });

      //homeDOM[0].style.display = "none";
      //inspireDOM[0].style.display = "block";
    },

    sleep(waitMsec) {
      var startMsec = new Date();

      // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
      while (new Date() - startMsec < waitMsec);
    }
  },

  mounted: function() {
    homeDOM = document.getElementsByClassName('home');
  }
}

</script>

<style>

.home {
  display: block;
}

.inspire {
  display: block;
}

</style>
