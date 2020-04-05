<template>
  <div>
      <common-header/>
      <common-tab/>
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
import CommonFooter from '../components/common/CommonFooter'
import Copyright from '../components/common/Copyright'
import CommonBar from '../components/common/CommonBar'
export default {
  components: {
    CommonHeader,
    CommonTab,
    CommonFooter,
    Copyright,
    CommonBar
  }

}
</script>

<style >
@import '../assets/css/default.css';
</style>
