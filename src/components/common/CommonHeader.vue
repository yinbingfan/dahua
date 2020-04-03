<template>
  <section id="header">
    <div class="container">
      <img
        class="logo hover-item"
        src="https://standard.guigug.com/material/2020113421332.svg"
      /><img
        class="unfold_btn"
        src="https://standard.guigug.com/material/2020113067007.svg"
      />
      <div class="tips"></div>
      <div class="nav_group">
        <div id="huakuai" style="left: -118px;"></div>
        <a class="nav_item hover-item">医点数据</a
        ><a class="nav_item hover-item">医药HIS</a
        ><a class="nav_item hover-item">零售ERP</a
        ><a class="nav_item hover-item">云招聘</a
        ><a class="nav_item hover-item">人脸识别</a
        ><a class="nav_item hover-item">选择归毂</a>
      </div>
      <div class="contact_btn hover-item">预约试用</div>
      <div id="contact_modal">
        <div class="top_title">
          <div class="vertical_line"></div>
          <div class="title">您的基本信息</div>
          <div class="remark">
            （注：我们会尽快与您取得联系，为您提供及时服务）
          </div>
          <img
            src="https://standard.guigug.com/material/202026975333.png"
            class="close_btn hover-item"
          />
        </div>
        <div class="input_box">
          <div class="title_box">
            <div class="xin">*</div>
            <div class="title">公司名称</div>
          </div>
          <input type="text" value="" />
        </div>
        <div class="input_box">
          <div class="title_box">
            <div class="xin">*</div>
            <div class="title">你的昵称</div>
          </div>
          <input type="text" value="" />
        </div>
        <div class="input_box">
          <div class="title_box">
            <div class="xin">*</div>
            <div class="title">手机号</div>
          </div>
          <input type="tel" value="" />
        </div>
        <div class="footer_action hover-item">
          <div class="btn" style="background-color: rgb(204, 204, 204);">
            提交申请
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  mounted () {},
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang='less' scoped>
#header {
    height: 6.083333rem;
    background-color: #232e52;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    position: fixed;
    top: 0;
    z-index: 99;
   .container {
    height: 100%;
    width: 100rem;
    margin: 0 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  .logo {
    display: block;
    height: 3.25rem;
}
.unfold_btn {
    display: none;
}
 .nav_group {
    overflow: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 100%;
    position: relative;
    #huakuai {
    width: 118px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    -webkit-transition: all ease-in-out 300ms;
    transition: all ease-in-out 300ms;
}
 .nav_item {
    z-index: 1;
    text-decoration: none;
    height: 100%;
    width: 118px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    align-items: center;
    -webkit-transition: all 500ms ease-in-out;
    transition: all 500ms ease-in-out;
    font-size: 1.5rem;
    font-weight: 500;
    color: #ffffff;
}
.hover-item {
    cursor: pointer;
    -webkit-transition: all 500ms ease-in-out;
    transition: all 500ms ease-in-out;
}
}
 .contact_btn {
    width: 8.25rem;
    height: 100%;
    background-color: #0e7dd9;
    font-size: 1.25rem;
    font-weight: 500;
    color: #ffffff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    position: absolute;
    right: 0;
}
#contact_modal {
    z-index: 10;
    position: absolute;
    width: 46rem;
    padding-bottom: 1.916667rem;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    -webkit-box-shadow: 0 0.83333rem 2.5rem 0 rgba(20, 35, 95, 0.08);
    box-shadow: 0 0.83333rem 2.5rem 0 rgba(20, 35, 95, 0.08);
    background-color: #ffffff;
    left: 50%;
    top: 15rem;
    display: none;
    .top_title {
    padding-top: 2.5rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 2.75rem;
}
}
}
}
</style>
