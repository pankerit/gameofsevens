<template>
  <div class="season container">
    <div class="back" @click="clickBack">
      <img src="https://img.icons8.com/ios/2x/left-filled.png">
    </div>
    <h1>Game of thrones Season 8</h1>
    <h2>On April 14 will appear</h2>
  </div>
</template>
<script>
export default {
  methods: {
    clickBack() {
      this.$router.push('/')
    },
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
h2 {
  margin-top: 40vh;
  color: $colorText;
  font-size: 4rem;
  font-weight: 700;
}
.back {
  position: fixed;
  top: 20px;
  left: 20px;
  background-color: $colorWhite;
  border-radius: 50%;
  cursor: pointer;
}
</style>

