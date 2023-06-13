<script>
import { reactive } from "vue";
import axios from "axios";
import { Pagination } from "ant-design-vue";

export default {
  components: {
    Pagination,
  },
  props: {
    photos: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isLoading: true,
      photoData: reactive([]),
      current: 1,
    };
  },
  mounted() {
    this.fetchPhotos();
  },
  computed: {
    displayedPhotos() {
      const start = (this.current - 1) * 9;
      const end = start + 9;
      return this.photoData.slice(start, end);
    },
  },
  methods: {
    fetchPhotos() {
      axios
        .get(
          "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos",
          {
            params: {
              sol: 1000,
              api_key: "VyJ3ptl9y4ihAuZHCpQmai4mLL0zA3eufVqy74ce",
            },
          }
        )
        .then((response) => {
          this.photoData = response.data.photos;
          this.isLoading = false;
          console.log(response.data.photos);
          this.updatePhotos();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    updatePhotos() {
      const start = (this.current - 1) * 9;
      const end = start + 9;
      this.displayedPhotos = this.photoData.slice(start, end);
    },
    handlePageChange(page) {
      this.current = page;
      this.updatePhotos();
    },
  },
};
</script>

<template>
  <h1>Imagens de Marte</h1>
  <div>
    <div v-if="isLoading">Carregando...</div>
    <div class="container" v-else>
      <div class="column" v-for="photo in displayedPhotos" :key="photo.id">
        <img :src="photo.img_src" :alt="photo.camera.full_name" />
        <p>Data: {{ photo.earth_date }}</p>
        <p>Câmera: {{ photo.camera.full_name }}</p>
        <p>Status: {{ photo.rover.status }}</p>
        <p>{{ photo.rover.name }}</p>
      </div>
    </div>
    <pagination
      :current-page.sync="current"
      :total="photoData.length"
      :per-page="9"
      @change="handlePageChange"
      class="custom-pagination"
    ></pagination>
  </div>
</template>

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
