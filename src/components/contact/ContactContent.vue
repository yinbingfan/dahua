<template>
  <div>
    <div class="cc-wrap" id="box_sub_main">
      <div class="sub-title">
        <img src="../../../static/image/title_contact.png" />
      </div>
      <div class="subnav-wrap">
        <div class="sub-nav" id="box_subNav">
          <div class="columnSpace">
            <div class="FrontComContent_list01-d1_c1">
              <div class="menu-first">
                <ul class="list2">
                  <li class="menu-none">
                    <router-link class="current" to="../contact">
                      联系我们
                    </router-link>
                  </li>
                  <li class="menu-none">
                    <router-link class="menu-text1" to="../feedback">
                      客户留言
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cc-content">
        <div class="columnSpace">
          <div class="content">
            <div class="describe">
              <p>
                <span style="font-size: 20px;line-height: 38px"
                  ><strong>{{addressInfo.name}}</strong></span
                >
              </p>
              <p style="font-size:16px;line-height: 32px;">
                <b>公司地址：</b> {{addressInfo.address}}<br />
                咨询电话：{{addressInfo.tel}}<br />
                客服电话：{{addressInfo.monitorTelephone}}<br />
                监督电话：{{addressInfo.phone}}<br />
                传 真：{{addressInfo.fax}}<br />
                邮 箱：<a :href="addressInfo.email">{{addressInfo.email}}</a><br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    addressInfo: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style></style>
