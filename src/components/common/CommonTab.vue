<template>
  <div class="cc-nav">
    <ul>
      <li v-for="(item,index) in nav" :key="index">
        <router-link class="m2" :to="item.path">{{item.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nav: [
        {
          name: '首页',
          path: '/'
        },
        {
          name: '关于我们',
          path: '/about'
        },
        {
          name: '执行方案',
          path: '/program'
        },
        {
          name: '应用领域',
          path: '/application'
        },
        {
          name: '行业资讯',
          path: '/information'
        },
        {
          name: '经典案例',
          path: '/case'
        },
        {
          name: '推荐产品',
          path: '/recommend'
        },
        {
          name: '联系我们',
          path: '/contact'
        }
      ]
    }
  }
}
</script>

<style></style>
