<template>
    <div>
    <h1>Imagens das Aeronaves</h1>
      <div class="container" v-if="weatherData">      
          <div class="column" v-for="(result, index) in weatherData.results" :key="index">
            <img :src="result[10]" :alt="result[1]" />
            <p>{{ result[1] }}</p>
            <p>{{ result[2] }}</p>
            <p>{{ result[5] }}</p>
            <p>{{ result[9] }}</p>
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
        apiUrl: "https://api.nasa.gov/techtransfer/patent/",
        apiKey: "VyJ3ptl9y4ihAuZHCpQmai4mLL0zA3eufVqy74ce",
      };
    },
    mounted() {
      this.fetchWeatherData();
    },
    methods: {
      fetchWeatherData() {
        const url = `${this.apiUrl}?engine&api_key=${this.apiKey}`;
  
        axios
          .get(url)
          .then((response) => {
            this.weatherData = response.data;
            console.log(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      },
    },
  };
  </script>
  
  <style scoped>
  h1 {
    text-align: center;
    background-image: linear-gradient(to right, #15418c, #3669c1, #528aea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .container {
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  
  .column {
    flex: 0 0 30%;
    margin-bottom: 20px;
  }
  
  img {
    width: 500px;
    height: 250px;
  }
  
  p {
    color: white;
  }
  
  .custom-pagination {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  } 
  </style>