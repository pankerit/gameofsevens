<template>
  <div class="block" :style="{backgroundImage: `url(${episode.img})`}">
    <div class="layer">
      <div class="title">
      <h2>{{episode.title_en}}</h2>
      <h2>Episode {{episode.ep}}</h2>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'episode',
  props: ['episode']
}
</script>

<style lang="scss" scoped>
@import "../sass/vars.scss";
.block {
  cursor: pointer;
  position: relative;
  overflow: hidden;
  margin-top: 29px;
  width: 100%;
  padding: 45%;
  background: no-repeat center;
  background-size: cover;
  border-radius: 10px;
  box-shadow: 10px 10px 20px 0px rgba(0,0,0,0.61);
  transition: .4s;
  &:hover {
    transform: scale(1.2);
    box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.61);
  }
}
.title {
  position: absolute;
  bottom: 2px;
  left: 10px;
  color: $colorWhite;
  font-size: 18px;
  font-weight: 600;
  text-align: start;
}
h2 {
  font-size: 16px;
  margin-bottom: 2px;
  max-width: 150px;
}
.layer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #000000ab;
  height: 70px;
}
</style>

