<template>
  <div>
    <Child>
      <!-- 具备名字的插槽 -->
      <!-- <template v-slot:header>
      <div class="header">`这个是通过父亲这里来添加slot-header`</div>
    </template>
    <template v-slot:middle class="middle">
      <div class="middle">这个是通过父亲这里来添加slot-middle的</div>
    </template>
    <template v-slot:footer>
      <div class="footer">这个是通过父亲这里来添加slot-footer</div>
    </template> -->
      <!-- 不具备名字的插槽并且带数据的 -->
      <template slot-scope="slotProps">
        {{ slotProps.user.firstName + slotProps.user.lastName }}
      </template>
    </Child>
    <div id="example-1">
      <button @click="show = !show">Toggle render</button>
      <transition name="slide-fade">
        <p v-if="show">hello</p>
      </transition>
    </div>
  </div>
</template>
<script>
import Child from "./Child.vue";
export default {
  name: "Parent",
  components: {
    Child,
  },
  data() {
    return {
      show: true,
    };
  },
};
</script>
<style scoped lang="scss">
.header,
.middle {
  width: 100%;
  height: 200px;
  background: red;
  box-shadow: red red red 10px;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
