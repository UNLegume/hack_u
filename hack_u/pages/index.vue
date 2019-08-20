<template>
  <div id="root">
    <home
    class="home"
    @submit="request()"
    ></home>
    <inspire
    class="inspire"
    ></inspire>
    <img :src="img"
      style="height: 512px; width: 512px; text-align:center;" />
  </div>
</template>

<script>
import Vue from 'vue'
import axiosBase from 'axios'
import home from '../components/home';
import inspire from '../components/inspire';

const axios = axiosBase.create({
  baseURL: 'http://localhost:4000',
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
    home,
    inspire
  },

  methods: {
    request: function() {
       let url = 'https://c28f21d3.ngrok.io/request/' + this.color   +
                 '/'                                  + this.pattern +
                 '/'                                  + this.length  +
                 '/';

      let add = 'http://626487d2.ngrok.io/';

      console.log(add)

      axios.get(add,{responseType:'arraybuffer'})
           .then(response => {
             console.log('res')

             let bstr = new Buffer(response.data, 'binary').toString('base64')
             console.log(bstr)

             let decodeString = window.atob(response.data);
             console.log(decodeString)

             this.img = response.data;
           })
           .catch(e => {
             console.log(e)
           });

      homeDOM[0].style.display = "none";
      //inspireDOM[0].style.display = "block";
    }
  },

  mounted: function() {
    homeDOM = document.getElementsByClassName('home');
    inspireDOM = document.getElementsByClassName('inspire');
  }
}

</script>

<style>

.home {
  display: block;
}

.inspire {
  display: none;
}

</style>
