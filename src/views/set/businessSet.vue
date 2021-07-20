<template>
  <h3>业务设置</h3>
  <div>
    <el-row :gutter="24">
      <el-col :span="10" class="px-5">
        <el-tree
          :data="data"
          node-key="id"
          default-expand-all
          :render-content="renderContent"
          @node-click="editTree"
          :expand-on-click-node="false"
        >
        </el-tree
      ></el-col>
      <el-col :span="14" class="px-5">
        <el-form ref="form" :model="form" label-width="auto">
          <el-form-item label="活动名称">
            <el-input v-model="form.name" style="width:70%;"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { defineComponent,ref } from "vue";
let id = 1000;
export default defineComponent({
  name: "BusinessSet",
  data() {
    const form = ref({
      test:"",
    })
    const data = [
      {
        id: 1,
        label: "一级 1",
        children: [
          {
            id: 4,
            label: "二级 1-1",
          },
        ],
      },
      {
        id: 2,
        label: "一级 2",
        children: [
          {
            id: 5,
            label: "二级 2-1",
          },
          {
            id: 6,
            label: "二级 2-2",
          },
        ],
      },
      {
        id: 3,
        label: "一级 3",
        children: [
          {
            id: 7,
            label: "二级 3-1",
          },
          {
            id: 8,
            label: "二级 3-2",
          },
        ],
      },
    ];
    return {
      data: JSON.parse(JSON.stringify(data)),
      form,
    };
  },

  methods: {
    editTree(data, node, self) {
      console.log(data, node, self);
    },
    append(data) {
      const newChild = { id: id++, label: "testtest", children: [] };
      if (!data.children) {
        data.children = [];
      }
      data.children.push(newChild);
      this.data = [...this.data];
    },
    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex((d) => d.id === data.id);
      children.splice(index, 1);
      this.data = [...this.data];
    },
    renderContent(h, { node, data }) {
      if (node.level === 1) {
        return h(
          "span",
          {
            class: "custom-tree-node",
          },
          h("span", null, node.label),
          h(
            "span",
            null,
            h(
              "a",
              {
                onClick: () => this.append(data),
                href: "javascript:;",
              },
              "添加 "
            ),
            h(
              "a",
              {
                onClick: () => this.remove(node, data),
                href: "javascript:;",
              },
              "删除"
            )
          )
        );
      } else {
        return h(
          "span",
          {
            class: "custom-tree-node",
          },
          h("span", null, node.label),
          h(
            "a",
            {
              onClick: () => this.remove(node, data),
              href: "javascript:;",
            },
            "删除"
          )
        );
      }
    },
  },
});
</script>
<style scoped lang="scss">
h3 {
  height: 48px;
  line-height: 48px;
  text-indent: 15px;
  color: #60666a;
  font-weight: 700;
  border-left: 3px solid #55a290;
}
/deep/.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>