<template>
    <div class="part part1">
        <h3>基本信息</h3>
        <div class="part-content">
            <div class="part-item">
                <label>网站名称:</label>
                <el-input v-model="siteName"></el-input>
            </div>
            <div class="part-item w-100">
                <label>网站logo:</label>
                <Upload :imgList="imgList" :isSingle="true" @deleteImg="deleteImg" @addImg="addImg"></Upload>
            </div>
            <div class="part-item">
                <label></label>
                <el-button type="primary">保存</el-button>
            </div>
        </div>
    </div>
    <div class="part part2">
        <h3>首页轮播图</h3>
        <div class="part-content">
            <div class="part-item">
                <label>轮播图片列表:</label>
                <Upload :imgList="imgList" @deleteImg="deleteImg" @addImg="addImg"></Upload>
            </div>
            <div class="part-item">
                <label></label>
                <el-button type="primary">保存</el-button>
            </div>
        </div>
    </div>
    <div class="part part3">
        <h3>导航设置</h3>
        <div class="part-content">
            <div class="part-item">
                <label>导航列表:</label>
                <el-tree
                        :data="navData"
                        show-checkbox
                        node-key="1000"
                        :expand-on-click-node="true">
                    <template #default="{ node, data }">
        <span class="custom-tree-node">
          <span>{{ node.label }}</span>
          <span>
            <a href="javascript:;" @click="append(data)">Append</a>
            <a href="javascript:;" @click="remove(node, data)">Delete
            </a>
          </span>
        </span>
                    </template>
                </el-tree>
            </div>
            <div class="part-item">
                <label></label>
                <el-button type="primary">保存</el-button>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    import {defineComponent, reactive, toRefs} from "vue";
    import Upload from '@/components/Upload.vue'
    let id = 1000;
    export default defineComponent({
        name: "SiteSet",
        components: {
            Upload
        },
        setup() {
            const state = reactive({
                siteName: null,
                imgList: ['https://www.w3school.com.cn/i/eg_tulip.jpg', 'https://www.w3school.com.cn/i/eg_tulip.jpg', 'https://www.w3school.com.cn/i/eg_tulip.jpg'],
                navData: [{
                    id: 1,
                    label: '一级 1',
                    children: [{
                        id: 4,
                        label: '二级 1-1',
                        children: [{
                            id: 9,
                            label: '三级 1-1-1'
                        }, {
                            id: 10,
                            label: '三级 1-1-2'
                        }]
                    }]
                }, {
                    id: 2,
                    label: '一级 2',
                    children: [{
                        id: 5,
                        label: '二级 2-1'
                    }, {
                        id: 6,
                        label: '二级 2-2'
                    }]
                }, {
                    id: 3,
                    label: '一级 3',
                    children: [{
                        id: 7,
                        label: '二级 3-1'
                    }, {
                        id: 8,
                        label: '二级 3-2'
                    }]
                }]
            });
            const append = function (data) {
                const newChild = {id: id++, label: 'testtest', children: []};
                if (!data.children) {
                    data.children = []
                }
                data.children.push(newChild);
                state.navData = [...state.navData]
            };
            const remove = function (node, data) {
                const parent = node.parent;
                const children = parent.data.children || parent.data;
                const index = children.findIndex(d => d.id === data.id);
                children.splice(index, 1);
                state.navData = [...state.navData]
            };
            //删除logo
            const deleteImg = function (index: number) {
                state.imgList.splice(index, 1)
            }
            const addImg = function (url: string) {
                state.imgList.push(url)
            }
            return {
                ...toRefs(state),
                append,
                remove,
                deleteImg,
                addImg
            }
        }

    });
</script>
<style scoped lang="scss">
    .part {
        margin-bottom: 50px;
        h3 {
            height: 48px;
            line-height: 48px;
            text-indent: 15px;
            color: #60666a;
            font-weight: 700;
            border-left: 3px solid #55a290;
        }
        .part-content {
            margin-left: 20px;
            .part-item {
                width: 400px;
                display: flex;
                align-items: center;
                margin-bottom: 20px;
                label {
                    flex-shrink: 0;
                    margin-right: 10px;
                    width: 100px;
                    font-size: 14px;
                }
            }
        }
    }
</style>