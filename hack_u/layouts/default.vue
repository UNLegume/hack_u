<template>
<div id="app">
  <v-app
   id="inspire"
  >


    <v-app-bar
      app
      color="green"
    >
      <v-toolbar-title class="white--text">CATch</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container
        fluid
        fill-height
      >
        <v-layout
          align-center
          justify-center
        >
          <v-flex text-xs-center>
            <nuxt/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer
      color="green darken-3"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</div>
</template>

<script>
export default {
  data: () => ({
    drawer: null
  })
}
</script>
