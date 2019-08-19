<template>
  <v-layout
    column
    justify-center
    align-center  
  >
    <v-flex
      xs12
      sm8
      md6
    >

      <v-card
      color="#FFF"
      height="616px"
      width="512px"
      >
        <v-card-title class="headline font-color font-weight-bold">
          Result
        </v-card-title>
        <v-spacer/>
 <v-list-item>

      </v-list-item>
  
      <!-- <v-img 
        src="info"
        height="512px"
        width="512px"
      ></v-img> -->

      <img :src="info" style="height:512px;width:512px;" />
      <div class="text-center">
        <v-btn class="mt-12" outlined color="indigo" to="/">return</v-btn>
      </div>
      </v-card>

    </v-flex>
  </v-layout>
</template>

<script>

import Vue from 'vue'
import axios from 'axios'
Vue.$http = axios;

export default {
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('http://c0d0f939.ngrok.io/request/white/mix/1/', { responseType : 'arrayBuffer' })
      .then(response => {
          this.info = response;
      });
  },
}
</script>

<style>
.theme--dark.v-application{
  background: #FAFAFA;
}

.font-color{
  color: #212121;
}

</style>

