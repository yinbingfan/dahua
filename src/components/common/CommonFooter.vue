<template>
  <div>
    <div class="bot_nav">
      <div class="bot_nav_com">
        <div class="bot_nav_left">
          <div class="botQuq bot_block" v-for="(lists,index) in footerLists" :key="index">
            <div class="bot_title">{{lists.title}}</div>
            <div class="bot_show" id="box_botQuq" >
              <div class="columnSpace" >
                  <div class="menu-first">
                    <ul>
                      <li class="menu-none" v-for="(item,id) in lists.lists" :key="id">
                        <a href='/' target="_self" class="menu-text1">{{item.name}}</a>
                      </li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--end bot_nav_left-->
        <div id="box_bot_contact">
          <div  class="columnSpace" id="elem-FrontSpecifies_show01-1489475551081" name="说明页">
            <div id="FrontSpecifies_show01-1489475551081" class="FrontSpecifies_show01-d1_c1">
              <p
                style="padding-bottom: 15px; line-height: 25px; color: #fff; font-size: 14px;"
              >{{addressInfo.name}}</p>
              <p style="line-height: 23px;text-align: left;">
                <b>公司地址：</b> {{addressInfo.address}}
                <br />咨询电话：{{addressInfo.phone}}
                <br />客服电话：{{addressInfo.monitorTelephone}}
                <br />传&nbsp;&nbsp;&nbsp;&nbsp; 真：{{addressInfo.fax}}
                <br />邮&nbsp;&nbsp;&nbsp; &nbsp;箱：
                <a style="color:#a2a2a2" :href="addressInfo.email">{{addressInfo.email}}</a>
              </p>
            </div>
          </div>
        </div>
        <!--end bot_nav_contact-->
        <div class="clear"></div>
      </div>
      <!--end bot_nav_com-->
    </div>
  </div>
</template>

<script>

export default {
  props: {
    footerLists: {
      type: Array,
      default: () => []
    },
    addressInfo: {
      type: Object,
      default: () => {}
    }
  }

}
</script>

<style>
</style>
