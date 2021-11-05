<template>
  <div>
    <!-- Nav bar -->
    <nav class="navbar navbar-expand  navbar-dark bg-dark navbar-fixed-top">
      <div class="container">
        <a class="navbar-brand float-left " href="/">Bread Of Life</a>
        <ul class="nav navbar-nav mr-auto" >
          <li class="nav-item">
            <router-link class="nav-link" to="/intake">Intake Form</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/createevent">Add Event</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/createindividual">Add Individual</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/viewevent">View Events</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/viewindividual">View Individuals</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/summarybyevent">Individuals Per Event Type</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/summarybyzip">Individuals Per Zip Code</router-link>
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
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>
