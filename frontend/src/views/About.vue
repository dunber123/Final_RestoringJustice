<template>
  <div class="about">
    <h1>About Restoring Justice <img :src="image" alt="Restoring Justice Logo" width="25%"></h1>
        <p1>Restoring Justice is a 501(c)(3) non profit organization based in Houston, Texas. We provide holistic legal defense and social services<br>
        to clients in need of public legal defense. In addition to providing legal support, Restoring Justice provides clients with access<br>
        to social services such as nutrition, housing, clothing, transportation, immigration, disability, job training, substance abuse and others.<br>
        More than just social services, Restoring justice seeks to mitigate the effects of racial disparity and harm caused by arrests and incarcerations and to eliminate mass incarcerations.<br>
        Ultimately, Restoring Justice hopes to enact positive reform to our legal defense and criminal justice system to better enfranchise those in need of aid.</p1>
        <hr>
        <h3>Contact Us</h3>
        <address>
            <p>
                P.O. Box 2813<br>
                Houston, TX 77252
            </p>
            <p>
                (844) 737-3363<br>
                <a href="mailto:info@restoringjustice.org">info@restoringjustice.org</a>
            </p>
        </address>
  </div>
</template>

<script>
import image from "./RJ-Logo-Full-Color.png"

export default {
  name: 'About',
  data: function(){
    return{
      image: image
    }
  }
}
</script>