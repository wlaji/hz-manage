<template>
    <el-container>
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
        <el-container>
            <el-aside width="250px">
                <el-scrollbar>
                    <el-menu
                            :uniqueOpened="true"
                            default-active="1"
                            class="left-nav"
                            background-color="#324157"
                            text-color="#fff"
                            active-text-color="#ffd04b">
                        <el-submenu index="1">
                            <template #title>
                                <i class="el-icon-location"></i>
                                <span>导航一</span>
                            </template>
                            <el-menu-item-group>
                                <template #title>分组一</template>
                                <el-menu-item index="1-1">选项1</el-menu-item>
                                <el-menu-item index="1-2">选项2</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                                <el-menu-item index="1-3">选项3</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group>
                                <template #title>分组一</template>
                                <el-menu-item index="1-1">选项1</el-menu-item>
                                <el-menu-item index="1-2">选项2</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                                <el-menu-item index="1-3">选项3</el-menu-item>
                            </el-menu-item-group><el-menu-item-group>
                            <template #title>分组一</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                                <el-menu-item index="1-3">选项3</el-menu-item>
                            </el-menu-item-group><el-menu-item-group>
                            <template #title>分组一</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                                <el-menu-item index="1-3">选项3</el-menu-item>
                            </el-menu-item-group><el-menu-item-group>
                            <template #title>分组一</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                                <el-menu-item index="1-3">选项3</el-menu-item>
                            </el-menu-item-group><el-menu-item-group>
                            <template #title>分组一</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                                <el-menu-item index="1-3">选项3</el-menu-item>
                            </el-menu-item-group><el-menu-item-group>
                            <template #title>分组一</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                                <el-menu-item index="1-3">选项3</el-menu-item>
                            </el-menu-item-group><el-menu-item-group>
                            <template #title>分组一</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                                <el-menu-item index="1-3">选项3</el-menu-item>
                            </el-menu-item-group>






                            <el-submenu index="1-4">
                                <template #title>选项4</template>
                                <el-menu-item index="1-4-1">选项1</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-submenu index="2">
                            <template #title>
                                <i class="el-icon-location"></i>
                                <span>导航一</span>
                            </template>
                            <el-menu-item-group>
                                <template #title>分组一</template>
                                <el-menu-item index="5-1">选项1</el-menu-item>
                                <el-menu-item index="5-2">选项2</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                                <el-menu-item index="5-3">选项3</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                    </el-menu>
                </el-scrollbar>
            </el-aside>
            <el-container>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </el-container>
</template>

<script lang="ts">
    import {defineComponent} from "vue";

    export default defineComponent({
        name: "Home",
        setup() {
            const handleCommand = function (command: string) {
                switch (command) {
                    case 'logOut':
                        alert('退出登录');
                        break
                }
            };
            return {
                handleCommand
            };
        },
    });
</script>
<style scoped lang="scss">
    .el-container {
        height: 100%;
    }

    .el-header {
        background-color: #242F42;
    }
    .el-aside{
        position: relative;
    }

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
    .left-nav{
        overflow: hidden auto;
    }

</style>
