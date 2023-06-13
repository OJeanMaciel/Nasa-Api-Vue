<template>
  <div>
    <button @click="getMarsWeather">Obter dados do clima em Marte</button>

    <div class="container" v-if="weatherData">
      <h2>Resultados:</h2>
      <ul>
        <li v-for="result in weatherData.results" :key="result[0]">
          <h3>{{ result[2] }}</h3>
          <p>{{ result[3] }}</p>
        <img :src="result[10]" :alt="result[1]" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      weatherData: null,
      apiUrl: "https://api.nasa.gov/techtransfer/patent/?",
      api_key: "VyJ3ptl9y4ihAuZHCpQmai4mLL0zA3eufVqy74ce",
    };
  },
  methods: {
    getMarsWeather() {
      const url = `${this.apiUrl}engine&api_key=${this.api_key}`;

      axios
        .get(url)
        .then((response) => {
          this.weatherData = response.data;

          console.log(response.data)
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>


<style scoped>
  .container {
    color: #fff;
  }

</style>
