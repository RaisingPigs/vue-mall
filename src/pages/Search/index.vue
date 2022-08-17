<template>
  <div>
    搜索页
  </div>
</template>

<script>
export default {
  name: "index",
  mounted() {
    console.log(this.$route.params.searchKey);
  }
}
</script>

<style scoped>

</style>
