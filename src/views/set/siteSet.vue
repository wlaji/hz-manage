<template>
  <div class="part part1">
    <h3>基本信息</h3>
    <div class="part-content">
      <div class="part-item">
        <label>网站名称:</label>
        <el-input v-model="siteName"></el-input>
      </div>
      <div class="part-item">
        <label>网站logo:</label>
        <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
    </div>
  </div>
  <div class="part part2">
    <h3>首页轮播图</h3>
    <div class="part-content">

    </div>
  </div>
  <div class="part part3">
    <h3>导航设置</h3>
    <div class="part-content">

    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent,ref} from "vue";

export default defineComponent({
  name: "SiteSet",
  setup(){
    const siteName = ref(null)
    return{
      siteName
    }
  }

});
</script>
<style scoped lang="scss">
.part{
  h3{
    height: 48px;
    line-height: 48px;
    text-indent: 15px;
    color: #60666a;
    font-weight: 700;
    border-left: 3px solid #55a290;
  }
  .part-content{
    width: 500px;
    margin-left:20px;
    .part-item{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
      label{
        flex-shrink: 0;
        margin-right: 10px;
        width: 100px;
      }
    }
  }
}
</style>