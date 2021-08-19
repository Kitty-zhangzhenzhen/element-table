<template>
  <div>
    <h3>多表头嵌套，内容可编辑</h3>
    <tableTree :col="column1" :table-data="tableData" :operates="operates" @postArr="postArr" />
  </div>
</template>
<script>
import tableTree from "@/components/table-tree";
import { column1 } from "./js/table-column";

export default {
  components: { tableTree },
  data() {
    return {
      column1,
      tableData: [
        {
          data1: "100000",
          sales1: "566",
          sales2: "236",
          sales3: "522",
          month1SalesGrowthRatio: "0%",
          month2SalesGrowthRatio: "30%",
          month3SalesGrowthRatio: "20%",
          predictMonth1: "800",
        },
        {
          data1: "200000",
          sales1: "23",
          sales2: "45",
          sales3: "565",
          month1SalesGrowthRatio: "30%",
          month2SalesGrowthRatio: "30%",
          month3SalesGrowthRatio: "50%",
          predictMonth1: "800",
        },
      ],
      operates: {
        width: 150,
        fixed: "right",
        list: [
          {
            title: "编辑",
            type:'text',
            method: (index, row) => {
              this.editRole(row);
            },
            code: "ui",
          },
          {
            title: "删除",
            type:'primary',
            method: (index, row) => {
              this.deleteRole(row);
            },
            code: "ui",
          },
        ],
      },
    };
  },
  methods: {
    postArr(row) {
      this.$message({
        type: "success",
        message: "修改成功!",
      });
    },
    deleteRole(row){
      this.$message({
        type: "success",
        message: "删除成功!",
      });
    },
    editRole(row){
      this.$message({
        type: "success",
        message: "编辑成功!",
      });
    }
  },
};
</script>
<style scoped>
h3 {
  text-align: left;
}
</style>