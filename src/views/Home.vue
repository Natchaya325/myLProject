<template>
  <div class="home">
    <center><img src="https://png.pngtree.com/png-vector/20190623/ourlarge/pngtree-hospitalbuildingclinicmedical-abstract-circle-background-f-png-image_1491340.jpg" alt=""></center>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
