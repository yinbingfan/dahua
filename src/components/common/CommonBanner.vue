<template>
<div class="fullSlide">
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="(item,index) in banner" :key="index">
      <img :src="item.imgUrl"/>
    </el-carousel-item>
  </el-carousel>
</div>

</template>
<script>
export default {
  props: {
    banner: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style>

</style>
