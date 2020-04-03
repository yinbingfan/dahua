<template>
  <div>
            <common-header></common-header>
            <keep-alive>
                <router-view/>
            </keep-alive>
            <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from '../components/common/CommonHeader'
import CommonFooter from '../components/common/CommonFooter'
export default {
  components: {
    CommonHeader,
    CommonFooter
  }

}
</script>

<style>

</style>
