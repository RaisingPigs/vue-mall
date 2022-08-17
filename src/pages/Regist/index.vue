<template>
  <div>
    注册页
  </div>
</template>

<script>
export default {
  name: "index",
  mounted() {
    console.log(this.$route.path);
    console.log(this.$route.name);
  }
}
</script>

<style scoped>

</style>
