<template>
  <div class="uploadWrap">
    <input type="file" ref="uploadInput" class="upload" @change="addImg"
           accept="image/png,image/jpeg,image/gif,image/jpg">
    <div class="uploadContent" @click="triggerUpload" v-if="!logoSrc">
      <i class="el-icon-plus"></i>
    </div>
    <div  class="uploadContent" v-else>
      <img :src="logoSrc"/>
      <a href="javascript:;" class="deleteImg" @click="removeImg">删除</a>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, unref} from "vue";

export default defineComponent({
  props:{
    logoSrc:{
      type:String,
      default:''
    }
  },
  setup(props, {emit}) {
    const uploadInput = ref(null)
    const addImg = function (event) {
      const files = event.target.files || event.dataTransfer.files;
      if (!files.length)
        return;
      //创建base64图片
      createImage(files[0]);
      //清空input
      const input = unref(uploadInput)
      input.value = ''
    }
    const createImage = function (file) {
      let reader = new FileReader();
      reader.onload = (e) => {
        emit('update:logoSrc', e.target.result)
      };
      reader.readAsDataURL(file);
    }
    const triggerUpload = function () {
      const input = unref(uploadInput)
      input.dispatchEvent(new MouseEvent('click'))
    }
    const removeImg = function(){
      emit('update:logoSrc','')
    }
    return {
      addImg,
      triggerUpload,
      uploadInput,
      removeImg
    }
  }
});
</script>
<style scoped lang="scss">
.uploadWrap {
  overflow: hidden;
  position: relative;
  width: 150px;
  height: 150px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  cursor: pointer;

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
    &:hover{
      .deleteImg{
        display: block;
      }
    }

    i {
      font-size: 30px;
    }
    .deleteImg{
      display: none;
      position: absolute;
      left:0;
      right: 0;
      bottom:0;
      height: 30px;
      line-height: 30px;
      background-color: rgba(0,0,0,.25);
      text-align: center;
    }
  }
}

</style>