<template>
  <div class="cc-nav">
    <ul>
      <li>
        <router-link class="m2" to="/">首页</router-link>
      </li>
      <li>
        <router-link class="m2" to="/about">关于我们</router-link>
      </li>
      <li>
        <router-link class="m2" to="/program">执行方案</router-link>
      </li>
      <li>
        <router-link class="m3" to="/application">应用领域</router-link>
      </li>
      <li>
        <router-link class="m5" to="/information">行业资讯</router-link>
      </li>
      <li>
        <router-link class="m6" to="/case">经典案例</router-link>
      </li>
      <li>
        <router-link class="m6" to="/recommend">推荐产品</router-link>
      </li>
      <li class="last">
        <router-link class="m6" to="/contact">联系我们</router-link>
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
          path: '/'
        },
        {
          name: '执行方案',
          path: '/'
        },
        {
          name: '应用领域',
          path: '/'
        },
        {
          name: '行业资讯',
          path: '/'
        },
        {
          name: '经典案例',
          path: '/'
        },
        {
          name: '推荐产品',
          path: '/'
        },
        {
          name: '联系我们',
          path: '/'
        }
      ]
    }
  }
}
</script>

<style></style>
