<template>
  <div>
    <!-- Nav bar -->
    <nav class="navbar navbar-expand  navbar-dark bg-dark navbar-fixed-top">
      <div class="container">
        <a class="navbar-brand float-left " href="/">Restoring Justice</a>
        <ul class="nav navbar-nav mr-auto" >
          <li class="nav-item">
            <router-link class="nav-link" to="/intake">Intake Form</router-link>
          </li>
         <li class="nav-item">
            <router-link class="nav-link" to="/ListIndividuals">View All Individuals</router-link> <!-- Add search bar or sort bar? -->
          </li>
         <li class="nav-item">
            <router-link class="nav-link" to="/referrals">Referrals</router-link> 
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/createindividual">View Single Individual</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/summarybyevent">Individuals Per Event Type</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/graph">Graph</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Router view -->
    <div class="container my-5">
      <router-view></router-view>
    </div>
  </div>
</template>
