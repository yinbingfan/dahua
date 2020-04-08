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
                    <router-link class="menu-text1" to="../contact">
                      联系我们
                    </router-link>
                  </li>
                  <li class="menu-none">
                    <router-link class="current" to="../feedback">
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
          <div class="FrontMessages_customizeEmit01-d1_c1">
            <br />
            <form
              action="/plus/diy.php"
              enctype="multipart/form-data"
              method="post"
            >
              <input type="hidden" name="action" value="post" />
              <input type="hidden" name="diyid" value="1" />
              <input type="hidden" name="do" value="2" />
              <table
                border="0"
                cellspacing="0"
                cellpadding="0"
                class="tablestyle"
              >
                <tbody>
                  <tr class="title">
                    <th>标题：</th>
                    <td>
                      <div class="text-oper">
                        <input
                          type="text"
                          name="标题"
                          id="messagesTitle"
                          value=""
                          class="input input-gray"
                          maxlength="50"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr class="info">
                    <th valign="top">留言内容：</th>
                    <td>
                      <div class="text-oper">
                        <textarea
                          name="留言内容"
                          id="留言内容"
                          class="textarea input-gray"
                          rows="5"
                          cols="60"
                        ></textarea>
                      </div>
                    </td>
                  </tr>
                  <tr class="name">
                    <th>留言人：</th>
                    <td>
                      <div class="text-oper">
                        <input
                          type="text"
                          name="留言人"
                          id="留言人"
                          value=""
                          class="input input-gray"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr class="mail">
                    <th>您的邮箱：</th>
                    <td>
                      <div class="text-oper">
                        <input
                          type="text"
                          name="您的邮箱"
                          id="您的邮箱"
                          value=""
                          class="input input-gray"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr class="tel2">
                    <th>联系电话：</th>
                    <td>
                      <div class="text-oper">
                        <input
                          type="text"
                          name="联系电话"
                          id="联系电话"
                          value=""
                          class="input input-gray"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr class="address">
                    <th>联系地址：</th>
                    <td>
                      <div class="text-oper">
                        <input
                          type="text"
                          name="联系地址"
                          id="联系地址"
                          value=""
                          class="input input-gray"
                        />
                      </div>
                    </td>
                  </tr>
                  <input
                    type="hidden"
                    name="dede_fields"
                    value="标题,text;留言内容,multitext;留言人,text;您的邮箱,text;联系电话,text;联系地址,text"
                  />
                  <input
                    type="hidden"
                    name="dede_fieldshash"
                    value="15eed797032c14f41cb13cac79f66a89"
                  />
                </tbody>
              </table>
              <div align="center" style="height:30px;padding-top:10px;">
                <input
                  type="submit"
                  name="submit"
                  value="提 交"
                  class="btn btn-com-01"
                />
                &nbsp;
                <input
                  type="reset"
                  name="reset"
                  value="重 置"
                  class="btn btn-com-01"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
