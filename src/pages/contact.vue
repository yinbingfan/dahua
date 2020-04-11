<template>
  <div>
    <contact-content :addressInfo="address"/>
  </div>
</template>

<script>
import ContactContent from '../components/contact/ContactContent'
import {TECH_ADDRESS} from '../api/api'
export default {
  components: {
    ContactContent
  },
  data () {
    return {
      address: {}
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      TECH_ADDRESS().then(res => {
        this.address = res.data.data.address
      })
    }
  }
}
</script>

<style></style>
