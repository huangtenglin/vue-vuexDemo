<template>
  <div class="home">
    <div>{{ name }}</div>
    <Parent></Parent>
  </div>
</template>

<script>
import Parent from "@/components/Parent.vue";
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("cart");
export default {
  name: "Home",
  components: {
    Parent,
  },
  computed: {
    ...mapState(["name"]),
  },
};
</script>
