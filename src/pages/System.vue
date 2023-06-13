<template>
  <div>
    <button @click="getMarsWeather">Obter dados do clima em Marte</button>
    <div v-if="weatherData">
      <h2>Dados do Clima em Marte:</h2>
      <div v-if="weatherData.sol_keys.length > 0">
        <div v-for="solKey in weatherData.sol_keys" :key="solKey">
          <h3>Sol {{ solKey }}:</h3>
          <div>
            <h4>Temperatura:</h4>
            <p>Average: {{ weatherData[solKey].AT.av }}°C</p>
            <p>Minimum: {{ weatherData[solKey].AT.mn }}°C</p>
            <p>Maximum: {{ weatherData[solKey].AT.mx }}°C</p>
          </div>
          <div>
            <h4>Pressão:</h4>
            <p>Average: {{ weatherData[solKey].PRE.av }} Pa</p>
            <p>Minimum: {{ weatherData[solKey].PRE.mn }} Pa</p>
            <p>Maximum: {{ weatherData[solKey].PRE.mx }} Pa</p>
          </div>
          <div>
            <h4>Velocidade do Vento:</h4>
            <p>Average: {{ weatherData[solKey].HWS.av }} m/s</p>
            <p>Minimum: {{ weatherData[solKey].HWS.mn }} m/s</p>
            <p>Maximum: {{ weatherData[solKey].HWS.mx }} m/s</p>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Nenhum dado de clima disponível para Marte.</p>
      </div>
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
