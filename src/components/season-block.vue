<template>
  <div class="block">
    <div class="free">free</div>
    <h1>{{season.title}}</h1>
  </div>  
</template>
<script>
export default {
  name: 'season-block',
  props: ['season']
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
  padding: 50%;
  background-color: $colorBlack;
  border-radius: 10px;
  box-shadow: 10px 10px 20px 0px rgba(0,0,0,0.61);
  transition: .4s;
  &:hover {
    transform: scale(1.2);
    box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.61);
    h1 {
      transform: translate(-50%, -50%) scale(1.4);
    }
  }
}
.free {
  background-color: $colorFree;
  width: 200%;
  margin-left: -100%;
  padding: 8px;
  position: absolute;
  color: white;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  left: 84%;
  top: 5%;
  transform-origin: center;
  transform: rotate(45deg);
  
}
h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: $colorWhite;
  font-size: 25px;
  font-weight: 500;
  transition: .4s;
}
</style>
