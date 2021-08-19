<template>
  <el-table-column
    :prop="col.field"
    :label="col.title"
    :align="alignType"
    :fixed="col.fixed"
    :width="col.width || ''"
  >
    <template v-for="(item, index) of col.children">
      <column-item v-if="item.children" 
                   :key="index" :col="item" v-on="$listeners" />
      <el-table-column
        v-else-if="item.inputType == 'edit'"
        :label="item.title"
        :key="index + item.field"
        :width="col.width || ''"
      >
        <template slot-scope="scope">
          <!-- <input type="text" class="el-input" v-model="scope.row[item.field]" /> -->
          <el-input
            v-model="scope.row[item.field]"
            @change="changeAmount(scope.row, item.field)"
          >
            <i slot="suffix" 
               class="el-icon-edit el-input__icon" />
          </el-input>
        </template>
      </el-table-column>

      <el-table-column
        v-else
        :key="index"
        :label="item.title"
        :prop="item.field"
        :align="alignType"
        :width="col.width || ''"
      />
    </template>
  </el-table-column>
</template>

<script>
export default {
  name: "ColumnItem",
  props: {
    col: {
      type: Object,
      default: () => [],
    },
    //判断单元格文字是居中还是左对齐显示
    alignType: {
      type: String,
      default: "left", //默认居中
    },
  },
  methods: {
    async changeAmount(row) {
      this.$emit('postArr',row)
    },
  },
};
</script>
<style scoped></style>