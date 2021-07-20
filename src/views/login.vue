<template>
    <div class="loginWrap">
        <el-form :model="loginForm" :rules="loginRules" ref="loginFormRef" class="demo-ruleForm">
            <h1 class="text-white mb-5 text-center">系统登录</h1>
            <el-form-item prop="user_name">
                <el-input v-model="loginForm.user_name" prefix-icon="el-icon-user" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="loginForm.password" prefix-icon="el-icon-lock" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" class="w-100" @click="submitForm">登 录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script lang="ts">
    import {defineComponent, reactive, ref, unref} from "vue";
    import {useRouter} from 'vue-router';

    export default defineComponent({
        name: "Login",
        setup() {
            const router = useRouter();
            const loginFormRef = ref(null);
            const loginForm = reactive({
                user_name: '',
                password: ''
            })
            const loginRules = {
                user_name: [
                    {required: true, message: '请输入用户名称', trigger: 'blur'},
                ],
                password: [
                    {required: true, message: '请输入密码', trigger: 'blur'},
                ]
            }
            const submitForm = async () => {
                const form: any = unref(loginFormRef)
                if (!form) return
                form.validate().then(() => {
                    // const {user_name, password} = loginForm
                    //登录逻辑
                    router.push('/')
                }).catch((err: any) => {
                    console.log(err)
                })
            }
            return {
                loginForm,
                loginRules,
                submitForm,
                loginFormRef
            }
        }

    });
</script>
<style scoped lang="scss">
    .loginWrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
        background: #2d3a4b url('../assets/images/bg.jpg') center/cover no-repeat;
        .el-form {
            width: 400px;
            margin-top: 200px;
        }
    }
</style>