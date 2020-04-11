<template>
  <div>
      <common-header/>
      <common-tab/>
          <index-banner :banner="banner"/>
      <keep-alive>
          <router-view/>
      </keep-alive>
      <common-footer :footerLists="footerLists" :addressInfo="address"/>
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
import {TECH_BANNER, TECH_FOOTER, TECH_ADDRESS} from '../api/api'
export default {
  components: {
    CommonHeader,
    CommonTab,
    IndexBanner,
    CommonFooter,
    Copyright,
    CommonBar
  },
  data () {
    return {
      banner: [],
      address: {},
      footerLists: []
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      TECH_BANNER().then(res => {
        this.banner = res.data.data.banner
      })
      TECH_FOOTER().then(res => {
        this.footerLists = res.data.data.banner
      })
      TECH_ADDRESS().then(res => {
        this.address = res.data.data.address
      })
    }
  }

}
</script>

<style >
@import '../assets/css/default.css';
</style>
