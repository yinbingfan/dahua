<template>
  <div>
      <common-header/>
      <common-tab/>
          <index-banner/>
      <keep-alive>
          <router-view/>
      </keep-alive>
      <common-footer/>
      <copyright/>
      <common-bar/>
  </div>
</template>

<script>
import CommonHeader from '../components/common/CommonHeader'
import CommonTab from '../components/common/CommonTab'
import IndexBanner from '../components/home/banner'
import CommonFooter from '../components/common/CommonFooter'
import Copyright from '../components/common/Copyright'
import CommonBar from '../components/common/CommonBar'
export default {
  components: {
    CommonHeader,
    CommonTab,
    IndexBanner,
    CommonFooter,
    Copyright,
    CommonBar
  }

}
</script>

<style >
@import '../assets/css/default.css';
</style>
