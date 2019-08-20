<template>
  <div id="root">
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
      flat
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

      <img src="../result.jpg" style="height: 512px;width: 512px;"/>
      <div class="text-center">
        <v-btn class="mt-12" outlined color="indigo" to="/">return</v-btn>
      </div>
      </v-card>

    </v-flex>
  </v-layout>
  <div>
    <img class="position-success" src="../static/success.gif">
  </div>
</div>
</template>

<script>
/*
import Vue from 'vue'
import axios from 'axios'
Vue.$http = axios;
*/
export default {
  data () {
    return {
      img: ''
    }
  },

  watch: {
    img: function() {
      console.log('blob')
    }
  }
}
</script>

<style>
.theme--dark.v-application{
  background: #FAFAFA;
}

.font-color{
  color: #212121;
}

.position-success{
  position: absolute;
  top: 50%;
}
</style>
