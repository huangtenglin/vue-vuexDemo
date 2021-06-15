<template>
  <div class="home">
    <div>{{ name }}</div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("cart");
export default {
  name: "Home",
  components: {},
  computed: {
    ...mapState(["name"]),
  },
};
</script>
