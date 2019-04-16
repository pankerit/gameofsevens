<template>
  <div class="home container">
    <h1>Game of thrones</h1>
    <img class="logo" src="/got_logo.png"/>
    <div class="row season-grid mt-5">
      <div class="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3" v-for="(season, i) in seasons" :key="i">
        <season-block :season="season" @click.native="clickSeason(i+1)"/>
      </div>
    </div>
  </div>
</template>

<script>
import seasonBlock from "@/components/season-block.vue";
import data from "../data.js"
export default {
  name: "home",
  components: { seasonBlock },
  data() {
    return {
      seasons: data,
    }
  },
  methods: {
    clickSeason(i) {
      this.$router.push('/season/'+i)
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../sass/vars.scss";
.home {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
h1 {
  color: $colorText;
  font-size: 4rem;
  font-weight: 700;
  text-decoration: underline;
  cursor: default;
}
.season-grid {
  width: 100%;
}
.logo {
  height: auto;
  width: 30vw;
}
</style>