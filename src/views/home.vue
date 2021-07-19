<template>
  <el-container class="pageWrap">
    <el-aside class="left-aside">
      <el-scrollbar class="leftScrollBar">
        <div class="sidebar-logo-container">
          <a href="/" class="sidebar-logo-link router-link-active">
            <img src="https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png" class="sidebar-logo">
            <h1 class="sidebar-title">和正后台管理系统</h1></a>
        </div>

        <el-menu
            :default-active="defaultActiveNav"
            @select="selectMenu"
            class="left-nav"
            background-color="#324157"
            text-color="#fff"
            active-text-color="#ffd04b">
          <el-menu-item index="SystemHome">
            <i class="el-icon-s-home"></i>
            <template #title>系统首页</template>
          </el-menu-item>
          <el-submenu index="Setting">
            <template #title>
              <i class="el-icon-setting"></i>
              <span>设置</span>
            </template>
            <el-menu-item-group title="基本设置">
              <el-menu-item index="SiteSet">网站设置</el-menu-item>
              <el-menu-item index="BusinessSet">业务设置</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="ContactUs">
            <template #title>
              <i class="el-icon-service"></i>
              <span>客服服务</span>
            </template>
            <el-menu-item-group title="基本服务">
              <el-menu-item index="3-1">服务1</el-menu-item>
              <el-menu-item index="3-2">服务2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-scrollbar>
    </el-aside>
    <el-container>
      <el-header height="50px">
        <div class="header h-100 d-flex align-items-center justify-content-between">
          <div class="hamburger-container">
            <i class="el-icon-s-fold"></i>
<!--            el-icon-s-unfold-->
          </div>
          <div class="user">
            <div>

            </div>
            <el-avatar icon="el-icon-user-solid" size="small"></el-avatar>
            <div class="ml-1">
              <el-dropdown @command="handleCommand">
                                <span class="el-dropdown-link pointer text-white">
                                  用户名<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item command="logOut">退出</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </div>
        </div>
      </el-header>
      <el-main class="contentWrap">
        <div class="content">
          <el-scrollbar class="contentScrollBar">
            <router-view></router-view>
          </el-scrollbar>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useRouter,useRoute} from 'vue-router';

export default defineComponent({
  name: "Home",
  setup() {
    const router = useRouter()
    const route = useRoute()
    const defaultActiveNav = route.name
    const handleCommand = function (command: string) {
      switch (command) {
        case 'logOut':
          //退出登录逻辑
          router.push('/login')
          break
      }
    };
    const selectMenu = function (index) {
      router.push({
        name: index
      })
    }
    return {
      handleCommand,
      selectMenu,
      defaultActiveNav
    };
  },
});
</script>
<style scoped lang="scss">
.pageWrap {
  height: 100%;

  .left-aside {
    overflow: hidden;
    position: relative;
    width: 250px !important;

    .leftScrollBar {
      overflow: hidden auto;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgb(50, 65, 87);

      .sidebar-logo-container {
        position: relative;
        width: 100%;
        height: 50px;
        line-height: 50px;
        background: #324157;
        padding: 0 20px;
        overflow: hidden;

        a {
          display: inline-block;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .sidebar-logo {
          width: 32px;
          height: 32px;
          vertical-align: middle;
          margin-right: 12px;
        }

        .sidebar-title {
          display: inline-block;
          margin: 0;
          color: #fff;
          font-weight: 600;
          line-height: 50px;
          font-size: 14px;
          vertical-align: middle;
        }
      }

      .el-menu {
        border-right: none;
      }
    }
  }

  .contentWrap {
    padding: 0;

    .content {
      height: 100%;

      .contentScrollBar {
        padding: 20px;
      }
    }
  }
}

.el-header {
  background-color: #242F42;
  padding: 0;
  .header {
    .hamburger-container{
      padding: 0 20px;
      height: 100%;
      line-height: 46px;
      cursor: pointer;
      transition: background .3s;
      &:hover{
        background: rgba(255,255,255,.025);
      }
      i{
        color:#fff;
        font-size:26px;
        vertical-align: middle;

      }
    }
    .user {
      padding: 0 20px;
      display: flex;
      align-items: center;
    }
  }
}
</style>
