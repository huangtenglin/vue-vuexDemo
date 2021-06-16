<template>
  <div>
    <!-- 具备名字的插槽 -->
    <!-- <header class="header">
      <slot name="header"></slot>
    </header>
    <section class="middle">
      <slot name="middle"></slot>
    </section>
    <footer class="footer">
      <slot name="footer"></slot>
    </footer> -->
    <header class="header">
      <slot :user="user">
        {{ user.lastName + user.firstName }}
      </slot>
    </header>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        lastName: "霖",
        firstName: "腾",
      },
    };
  },
};
</script>
<style scoped>
div {
  border: 1px solid #000;
}
</style>
