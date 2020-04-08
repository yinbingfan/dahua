<template>
  <div class="cc-nav">
      <ul>
        <li>
          <!-- <a class="m2" href="/">网站首页</a> -->
          <router-link class="m2" to='/'>网站首页</router-link>
        </li>
        <li>
             <router-link class="m2" to='/about'>关于我们</router-link>
        </li>
        <li>
           <router-link class="m2" to='/application'>执行方案</router-link>
        </li>
        <li>
           <router-link class="m3" to='/about'>应用领域</router-link>
        </li>
        <li>
           <router-link class="m5" to='/information'>行业资讯</router-link>
        </li>
        <li>
           <router-link class="m6" to='/case'>经典案例</router-link>
        </li>
        <li>
           <router-link class="m6" to='/recommend'>推荐产品</router-link>
        </li>
        <li class="last">
           <router-link class="m6" to='/about'>联系我们</router-link>
        </li>
      </ul>
    </div>
</template>

<script>
export default {}
</script>

<style>
</style>
