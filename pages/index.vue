<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
    >
<v-app>
  <v-navigation-drawer app>
  </v-navigation-drawer>

  <v-app-bar app>

  </v-app-bar>

  <v-main>

    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer app>
    
  </v-footer>
</v-app>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  components: {
  }
}
</script>
