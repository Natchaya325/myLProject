<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/588-hospital.svg" alt="" width="50">
        <h1>คลินิกรักษาโรคทั่วไป</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn to="/" text>
        <span class="mr-2">Home</span>
      </v-btn>

      <v-btn to="/login" text>
        <span class="mr-2">Login</span>
      </v-btn>

      <v-btn to="/register" text>
        <span class="mr-2">Register</span>
      </v-btn>
      
      <v-btn to="/clinic" text>
        <span class="mr-2">ประวัติการเข้ารักษาที่คลินิก</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
