<template>
  <el-container class="pageWrap">
    <el-header>
      <div class="header h-100 d-flex align-items-center justify-content-between">
        <div class="logo">
          <img src="@/assets/images/logo.svg" alt="logo">
        </div>
        <div>
          <div class="user">
            <el-avatar icon="el-icon-user-solid"></el-avatar>
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
      </div>
    </el-header>
    <el-container class="pageContent">
      <el-aside class="left-aside">
        <el-scrollbar class="leftNavWrap">
          <el-menu
              default-active="0"
              @select="selectMenu"
              class="left-nav"
              background-color="#324157"
              text-color="#fff"
              active-text-color="#ffd04b">
            <el-menu-item index="SystemHome">
              <i class="el-icon-setting"></i>
              <template #title>系统首页</template>
            </el-menu-item>
            <el-submenu index="Setting">
              <template #title>
                <i class="el-icon-location"></i>
                <span>设置</span>
              </template>
              <el-menu-item-group title="基本设置">
                <el-menu-item index="NavSet">导航设置</el-menu-item>
                <el-menu-item index="BusinessSet">业务设置</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="ContactUs">
              <template #title>
                <i class="el-icon-location"></i>
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
        <el-main class="contentWrap">
          <div class="content">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import { useRouter } from 'vue-router';
export default defineComponent({
  name: "Home",
  setup() {
    const router = useRouter();
    const handleCommand = function (command: string) {
      switch (command) {
        case 'logOut':
          alert('退出登录');
          break
      }
    };
    const selectMenu = function(index){
      router.push({
        name:index
      })
    }
    return {
      handleCommand,
      selectMenu
    };
  },
});
</script>
<style scoped lang="scss">
.pageWrap {
  height: 100%;
  .pageContent{
    height:0;
  }
  .left-aside{
    overflow: hidden;
    position: relative;
    width: 250px !important;
    .leftNavWrap {
      overflow: hidden auto;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgb(50, 65, 87);
      border-right: solid 1px #e6e6e6;
      .el-menu{
        border-right: none;
      }
    }
  }
  .contentWrap{
    padding:0;
    .content{
      overflow: auto;
    }
  }
}

.el-header {
  background-color: #242F42;
  .header {
    .logo {
      display: flex;
      align-items: center;
      width: 200px;
      height: 100%;
    }

    .user {
      display: flex;
      align-items: center;
    }
  }
}
</style>
