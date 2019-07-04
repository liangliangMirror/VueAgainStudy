<template>
  <div class="search_wrapper skin_transparent j_smart_box_wrapper" style="top: 0px;">
    <div id="searchWrapper" class="search-land main-page2" style="display: block;">
      <div class="mjd-header">
        <div class="m_common_container">
          <div class="m_cc_header_inner">
            <header class="jd-header">
              <div class="jd-header-new-bar">
                <div id="msCancelBtn" class="jd-header-icon-back J_ping" style="display: block;">
                  <span></span>
                </div>
                <div class="jd-header-new-title"></div>
                <div
                  id="msShortcutLogin"
                  class="jd-header-icon-new-shortcut-text J_ping"
                  style="display: block;"
                >
                  <span>登录</span>
                </div>
                <div
                  id="msShortcutMenu"
                  class="jd-header-icon-new-shortcut J_ping"
                  style="display:none;"
                >
                  <span></span>
                </div>
              </div>
            </header>
          </div>
          <div class="m-common-header-search">
            <form action="/search/search.action" class="jd-header-search-form">
              <div class="jd-header-search-box" id="msSearchBox" style="margin-right: 32px;">
                <i id="search-input-left-jd" class="jd-header-icon-jd"></i>
                <i id="search-input-left-icon" class="jd-header-icon-fdj"></i>
                <div class="jd-header-search-input">
                  <router-link to="/xxx">
                    <input
                      value
                      maxlength="20"
                      name="keyword"
                      id="msKeyWord"
                      type="text"
                      cleardefault="no"
                      autocomplete="off"
                      placeholder="饮水机 立式"
                      class="hilight2"
                    >
                  </router-link>

                  <input name="catelogyList" type="text" value style="display:none;">

                  <div
                    class="head-input-icon J_ping"
                    id="msSearchTab"
                    report-eventid="MSearch_SearchTab"
                    style="display:none;"
                  ></div>
                </div>
                <a
                  href="javascript:void(0);"
                  class="jd-header-icon-close"
                  id="msSearchClearBtn"
                  style="display:none;"
                ></a>
              </div>
              <a
                href="javascript:void(0)"
                style="display: none;"
                id="msSearchBtn"
                class="jd-header-icon-search1"
              >
                <span>搜索</span>
              </a>
            </form>
          </div>
        </div>
      </div>
      <div id="msContentWraper" style="display:none;">
        <div id="msHistory" class="recent-search" style="display:none;">
          <div class="recent-search-head cf">
            <p>最近搜索</p>
            <i id="msHistoryDel" class="garbage-pic"></i>
          </div>
          <div id="msHistoryTags" class="recent-search-tags"></div>
        </div>
        <div id="msClearToast" class="search-toast" style="display:none;">
          <div id="msClearFloor" class="black-floor"></div>
          <div class="ground-toast">
            <div class="toast-content">确定要清空吗?</div>
            <div class="toast-btn">
              <a class="no" id="msClearCancel">取消</a>
              <a class="sure" id="msClearSure">确定</a>
            </div>
          </div>
        </div>
        <div id="msHotSearch" class="hot-search" style="display:none;">
          <div class="hot-search-head cf">
            <p>热门搜索</p>
            <i id="msHotSearchReflash" class="around-pic" style="display:none;"></i>
          </div>
          <div id="msHotSearchTags" class="hot-search-tags"></div>
        </div>
        <ul id="msKeys" class="association-normal"></ul>
      </div>
      <div id="msHeaderMask" class="header-mask" style="display:none;"></div>
      <ul
        id="msShortcut"
        class="jd-header-vertical-shortcut-v2"
        style="position: absolute; top: 53px; right: 10px;display:none;"
      ></ul>
    </div>
    <router-view></router-view>
  </div>
</template>
<style >
.search_wrapper {
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 15;
}
.search-land.main-page2 {
  background: transparent;
}
.mjd-header {
  z-index: 969;
  width: 100%;
  background-color: #fff;
  margin: 0 auto;
  position: relative;
}
.search-land.main-page2 .mjd-header {
  background: transparent;
}
.mjd-header .m_common_container {
  position: relative;
}
.mjd-header .m_common_container .m_cc_header_inner {
  min-height: 44px;
}
.mjd-header .m_common_container .m_cc_header_inner .jd-header {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 44px;
  font-family: PingHei, Lucida Grande, Lucida Sans Unicode, STHeiti, Helvetica,
    Arial, Verdana, "sans-serif";
  font-size: 16px;
  text-decoration: none;
  color: #252525;
}
.search-land.main-page2
  .mjd-header
  .m_cc_header_inner
  .jd-header
  .jd-header-new-bar {
  background: transparent;
}
.search-land.main-page2
  .mjd-header
  .m_cc_header_inner
  .jd-header
  .jd-header-new-bar
  .jd-header-icon-back {
  z-index: 120;
  position: absolute;
  width: 40px;
  height: 44px;
  display: block;
}
.search-land.main-page2
  .mjd-header
  .m_cc_header_inner
  .jd-header
  .jd-header-new-bar
  .jd-header-icon-back
  span {
  margin: 14px 0 0 15px;
  width: 20px;
  height: 18px;
  display: block;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAgAgMAAAAdw9KTAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURUdwTP///////////waf0AoAAAADdFJOUwDjSYAlncUAAAAbSURBVBjTY5j/Hwq+MdTDmH+RmUgK6AuGhcsAU5tyB6Ji+x0AAAAASUVORK5CYII=)
    no-repeat;
  background-size: 100% 100%;
}
.mjd-header
  .m_common_container
  .m_cc_header_inner
  .jd-header
  .jd-header-new-bar
  .jd-header-icon-new-shortcut-text {
  z-index: 120;
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 44px;
  display: block;
}
.mjd-header
  .m_common_container
  .m_cc_header_inner
  .jd-header
  .jd-header-new-bar
  .jd-header-icon-new-shortcut-text
  span {
  display: inline-block;
  margin: 10px 0;
  color: #fff;
  font-size: 14px;
}
.mjd-header .m_common_container .m-common-header-search {
  position: absolute;
  top: 0;
  z-index: 100;
  width: 100%;
}
.search-land.main-page2
  .mjd-header
  .m_common_container
  .m-common-header-search
  .jd-header-search-form {
  margin: 0 20px 0 50px;
}
.mjd-header .m_common_container .m-common-header-search .jd-header-search-form {
  display: block;
  overflow: hidden;
  margin: 0 10px 0 40px;
  padding: 0;
  height: 44px;
}
.mjd-header
  .m_common_container
  .m-common-header-search
  .jd-header-search-form
  .jd-header-search-box {
  margin-right: 32px;
  margin-top: 7px;
  height: 30px;
  position: relative;
}
.mjd-header
  .m_common_container
  .m-common-header-search
  .jd-header-search-form
  .jd-header-search-box
  .jd-header-icon-jd {
  width: 20px;
  height: 15px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeBAMAAACs80HuAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURUdwTOk7Puo7PfE+SP9SUuo7Peo8Pu0/Qeo7Peo7Peo7Pek7Peo7Pes8Pus8P+k7PaLYf6IAAAAPdFJOUwCjwREGj1sg9Hrd6bFINxDM6d8AAAD3SURBVCjPY2AAAv3/nxnk////sUo1nQEOoIIgoOaARfD/WmyC/wNQBL+lzZQCCn5FEfwCZJX2//8/AV2Qoej//3YMQWb9/x8xBBkq/v8vwBBk/f8/AUOQ/f9/AQxBhvX/N2AKnv//AVMwHsjBEJz//zs2lVgE5bFpx2pR//8FUMEvcEE+mOPX/2+AC/JAvcnyH6gDJvj+/w8DEM0G0gEVZN8PDfpqkA6o4O3//5tBtGX//98OEEHmJGAkXWBgCNQC0t9Abv4aKrMewmYAR6sAAzyKfydABX8yIASFGSCCjQ/ggr+mg61WOjgXnHwmKSnpiM4FO5EBAIlo6/K7pNY1AAAAAElFTkSuQmCC)
    no-repeat;
  background-size: 20px 15px;
  margin: 8px 8px 0 15px;
  position: relative;
  z-index: 1;
  float: left;
}
.mjd-header
  .m_common_container
  .m-common-header-search
  .jd-header-search-form
  .jd-header-search-box
  .jd-header-icon-jd::after {
  content: "";
  position: absolute;
  border-right: 1px solid #ddd;
  top: 0;
  left: 26px;
  height: 16px;
}
.mjd-header
  .m_common_container
  .m-common-header-search
  .jd-header-search-form
  .jd-header-search-box
  .jd-header-icon-fdj {
  display: block;
  width: 18px;
  height: 15px;
  background: url(https://st.360buyimg.com/so/images/search/jd-sprites.png?__inline)
    no-repeat;
  background-position: -80px 0;
  background-size: 200px;
  margin-left: 5px;
  margin: 8px 0 0 15px;
  position: relative;
  z-index: 1;
  float: left;
}
.mjd-header
  .m_common_container
  .m-common-header-search
  .jd-header-search-form
  .jd-header-search-box
  .jd-header-search-input {
  display: inline-block;
  width: 100%;
  border: none;
  border-radius: 15px;
  height: 30px;
  overflow: hidden;
  background: #f7f7f7;
  font-size: 12px;
  -webkit-box-align: center;
  line-height: 30px;
  position: absolute;
  top: 0;
  left: 0;
  padding-left: 68px;
  padding-right: 10px;
  box-sizing: border-box;
}
.mjd-header
  .m_common_container
  .m-common-header-search
  .jd-header-search-form
  .jd-header-search-box
  .jd-header-search-input
  input {
  border: 0;
  background: 0 0;
  font-size: 12px;
  color: #232326;
  padding-left: 5px;
  width: 19em;
  box-sizing: border-box;
  -webkit-box-flex: 1;
  height: auto;
  margin: 0 0 0 5px;
  vertical-align: middle;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  line-height: 30px;
}
</style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
