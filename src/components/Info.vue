<template>
  <div class="cart-info">
    <div>{{ name }}</div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";

const { mapState } = createNamespacedHelpers("modules/cars");

export default {
  name: "Info",
  data() {
    return {
      userName: "",
    };
  },
  computed: {
    ...mapState(["name"]),
  },
};
</script>
<style scoped lang="less">
.cart-info {
  font-size: 20px;
  text-align: left;

  .item {
    display: inline-block;
    margin-right: 20px;
  }
}
</style>
