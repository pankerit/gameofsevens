<template>
  <div class="season container">
    <div class="back" @click="clickBack">
      <img src="https://img.icons8.com/ios/2x/left-filled.png">
    </div>
    <h1>Game of thrones Season {{$route.params.id}}</h1>
    <div class="row grid">
      <div class="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3" v-for="(el, i) in episode.episodes" :key="i">
        <episode-block :episode="el" @click.native="showMovie(i)"/>
      </div>
    </div>
    <div class="popup" v-if="showPopup">
      <iframe :src="movieUrl" frameborder="0" scrolling='no' allowfullscreen></iframe>
      <div class="close-popup" @click="showPopup=false"/>
    </div>
  </div>
</template>
<script>
import data, {episodes} from "../data.js"
import episodeBlock from "@/components/episode-block"
export default {
  components: { episodeBlock },
  data() {
    return {
      episode: data[this.$route.params.id - 1],
      movieUrl: '',
      showPopup: false
    }
  },
  methods: {
    clickBack() {
      this.$router.push('/')
    },
    showMovie(i) {
      this.movieUrl = episodes[this.$route.params.id-1][i]
      this.showPopup = true
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../sass/vars.scss";
.season {
  text-align: center;
}
h1 {
  margin-top: 5rem;
  color: $colorText;
  font-size: 4rem;
  font-weight: 700;
  text-decoration: underline;
  cursor: default;
}
.back {
  position: fixed;
  top: 20px;
  left: 20px;
  background-color: $colorWhite;
  border-radius: 50%;
  cursor: pointer;
}
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
}
iframe {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70vw;
  height: 40vw;
}
.close-popup {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 100px;
  height: 100px;
  &::before, &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: center;
    height: 10px;
    width: 100%;
    border-radius: 5px;
    background-color: #fff;
  }
  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
}
</style>

