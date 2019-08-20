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
      color="#FFF"
      height="624px"
      width="557px"
      >
        <v-card-title class="headline font-color">
          Research for cats
        </v-card-title>
        <v-spacer/>
        <v-card-text>
          <p class="font-color">当てはまる項目にチェックを入れてください</p>
        </v-card-text>

        <v-card-actions>
          <v-container fluid>
            <p>毛の色</p>
            <v-radio-group v-model="color" row>
              <v-radio  label="black" value="black"></v-radio>
              <v-radio label="white" value="white"></v-radio>
              <v-radio  label="gray" value="gray"></v-radio>
              <v-radio label="yellow" value="yellow"></v-radio>
              <v-radio  label="brown" value="brown"></v-radio>
              <!--<v-radio label="both" value="both"></v-radio>-->
            </v-radio-group>
            <p>毛の模様</p>
            <v-radio-group v-model="pattern" row>
              <v-radio  label="mix" value="mix"></v-radio>
              <v-radio label="single" value="single"></v-radio>
              <v-radio  label="tora" value="tora"></v-radio>
              <!--<v-radio label="persia" value="persia"></v-radio> -->
              <!--<v-radio  label="hachi" value="hachi"></v-radio> -->
            </v-radio-group>
            <p>毛の長さ</p>
            <v-radio-group v-model="long" row>
              <v-radio  label="1" value="1"></v-radio>
              <v-radio label="2" value="2"></v-radio>
              <v-radio  label="3" value="3"></v-radio>
              <v-radio label="4" value="4"></v-radio>
            </v-radio-group>
          </v-container>
        </v-card-actions>
      </v-card>

      <div class="text-center">
        <v-btn @click="submit()" class="mt-12" outlined color="indigo">Submit</v-btn>
      </div>
    </v-flex>
  </v-layout>
</div>
</template>

<script>

import Vue from 'vue'
import axios from 'axios'
Vue.$http = axios;


export default {
  data () {
    return {
      row: null,
      color: null,
      pattern: null,
      long: null,

    }
  },
  methods: {
    submit() {
      this.$parent.color = this.color;
      this.$parent.pattern = this.pattern;
      this.$parent.length = this.long;

      this.$emit('submit');
    }
    // submit:function(){
    // axios
    // .get('http://c0d0f939.ngrok.io/request/white/mix/1/', {
    //   color:this.color,
    //   pattern:this.pattern,
    //   long:this.long
    // })
    // .then(response => {
    //   console.log("successfully");
    // });
    // }
  },
}
</script>

<style>
.theme--dark.v-application{
  background: #FAFAFA;
}

.font-color{
  color: #212121 !important;
}

.input-group__input *{
  color: #212121 !important
}
</style>
