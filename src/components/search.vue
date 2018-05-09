<template lang="html">
  <div class="search_module">
  <h3>Search</h3>
  <input type="text" id="search_bar" placeholder="Type URL">
  <input v-on:click="start_search()" id="search_button" type="button" name="start_search" value="Go">
  <div class="anime_links">
    <img class="loading_wheel" src='../assets/wheel.gif' v-if="loading">
    <ul>
      <li v-for="link in animeLinks">
        {{link}}
      </li>
    </ul>
    <p v-if="errorMessage">{{errorMessage}}</p>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
export default {
  name: 'Search',
  data () {
    return {
      animeLinks: null,
      loading: false,
      errorMessage: ""
    }
  },
  methods: {
    start_search () {
      const DOMAIN = 'https://misuraca.dk:9001'
      this.animeLinks = null
      var animeLink = document.getElementById('search_bar').value
      if(!animeLink) {
        this.errorMessage = "There is no url..."
        return;
      }
      this.errorMessage = ""
      this.loading = true
      axios.get(`${DOMAIN}/scraper/?anime_link=${animeLink}`).then((result) => {
        this.animeLinks = result.data
        this.loading = false
      }).catch(() => {
        this.errorMessage = "Something went wrong"
      })
    }
  }
}
</script>

<style lang="css">
li {
  list-style: none;
}

#search_button {
  position: relative;
  top: 10px;
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  font-family: Arial;
  color: #000000;
  font-size: 20px;
  background: #ffffff;
  padding: 10px 20px 10px 20px;
  border: solid #000000 2px;
  text-decoration: none;
}

.loading_wheel {
  width: 100px;
  height: auto;
}

#search_bar {
    font-size: 2em;
    width: 100%;
    text-align: center;
    color: grey;
}

</style>
