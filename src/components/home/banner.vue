<template>
<div class="fullSlide">
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="(item,index) in lists" :key="index">
      <img :src="item"/>
    </el-carousel-item>
  </el-carousel>
</div>

</template>
<script>
export default {
  data () {
    return {
      lists: [
        'http://www-x-huashutech-x-com.img.abc188.com/UploadFiles/001.jpg',
        'http://www-x-huashutech-x-com.img.abc188.com/UploadFiles/08.jpg',
        'http://www-x-huashutech-x-com.img.abc188.com/UploadFiles/2015-04/admin/2015040614063182593.jpg',
        'http://www-x-huashutech-x-com.img.abc188.com/UploadFiles/2015-04/admin/2015040615045963354.jpg',
        'http://www-x-huashutech-x-com.img.abc188.com/UploadFiles/2015-04/admin/2015040613382895959.jpg'
      ]
    }
  }
}
</script>
<style>

</style>
