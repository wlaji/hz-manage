<template>
    <div class="uploadWrap d-flex flex-wrap">
        <div class="uploadList" v-for="(item,index) in imgList" :key="index">
            <img :src="item"/>
            <a href="javascript:;" class="deleteImg" @click="removeImg(index)">删除{{imgList.length}}</a>
        </div>
        <div class="uploadList pointer">
            <input type="file" ref="uploadInput" class="upload" @change="upImg"
                   accept="image/png,image/jpeg,image/gif,image/jpg">
            <div class="uploadContent" @click="triggerUpload">
                <i class="el-icon-plus"></i>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {defineComponent, ref, unref} from "vue";
    import { ElMessage } from 'element-plus'
    export default defineComponent({
        props: ['imgList','isSingle'],
        setup(props,{emit}) {
            const uploadInput = ref(null);
            const upImg = function (event) {
                if(props.imgList.length>=1&&props.isSingle){
                    ElMessage.warning('只能传单张图片')
                    return
                }
                const files = event.target.files || event.dataTransfer.files;
                if (!files.length)
                    return;
                //创建base64图片
                createImage(files[0]);
                //清空input
                const input = unref(uploadInput);
                input.value = ''
            };
            const createImage = function (file) {
                let reader = new FileReader();
                reader.onload = function(e){
                    emit('addImg',e.target.result);
                };
                reader.readAsDataURL(file);
            };
            const triggerUpload = function () {
                const input = unref(uploadInput);
                input.dispatchEvent(new MouseEvent('click'))
            };
            const removeImg = function (index) {
                emit('deleteImg',index);
            };
            return {
                upImg,
                triggerUpload,
                uploadInput,
                removeImg
            }
        }
    });
</script>
<style scoped lang="scss">
    .uploadList {
        overflow: hidden;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #cccccc;
        border-radius: 4px;
        width: 150px;
        height: 150px;
        margin-right: 5px;
        margin-bottom: 5px;
        &:hover {
            .deleteImg {
                display: block;
            }
        }

        i {
            font-size: 30px;
        }
        .deleteImg {
            display: none;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 30px;
            line-height: 30px;
            background-color: rgba(0, 0, 0, .25);
            text-align: center;
        }
    }

    .upload {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        opacity: 0;
        z-index: -1;
    }

    .uploadContent {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
        cursor: pointer;
    }

</style>