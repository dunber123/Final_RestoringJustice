<template>
  <div class="home">
    <h1>Welcome to Restoring Justice! <img :src="image" alt="Restoring Justice Logo"></h1>
  </div>
</template>

<script>
import image from "./RJ-Logo-Full-Color.png" //importing logo to display on homepage

export default {
  name: 'Home',
  data: function(){
    return{
      image: image
    }
  }
}
</script>
