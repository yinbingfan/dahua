<template>
  <div class="common-content">
      <technology-about/>
      <industry-solutions/>
      <retail-platform/>
      <intelligent-recognition/>
      <choose-brand/>
      <company-profile/>
  </div>
</template>

<script>
import CompanyProfile from '../components/home/CompanyProfile'
import TechnologyAbout from '../components/home/TechnologyAbout'
import IndustrySolutions from '../components/home/IndustrySolutions'
import RetailPlatform from '../components/home/RetailPlatform'
import IntelligentRecognition from '../components/home/IntelligentRecognition'
import ChooseBrand from '../components/home/ChooseBrand'
export default {
  components: {
    CompanyProfile,
    TechnologyAbout,
    IndustrySolutions,
    RetailPlatform,
    IntelligentRecognition,
    ChooseBrand
  },
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style>

</style>
