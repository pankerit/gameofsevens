<template>
  <div class="block" :style="{backgroundImage: `url(${episode.img})`}">
    <div class="title">
      <h1>{{episode.title_en}}</h1>
      <h2>Episode {{episode.ep}}</h2>
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
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  color: $colorText;
  font-size: 18px;
  font-weight: 600;
}
h2 {
  font-size: 16px;
  margin-bottom: 5px;
}
</style>

