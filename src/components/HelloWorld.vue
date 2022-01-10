<template>
  <div class="demo-container">
    <van-button>{{ a }}</van-button>

    <div class="demo"></div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    const a = ref(1234);

    return {
      a,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.demo {
  width: 100px;
  height: 100px;
  background-color: #2c3e50;
}
</style>
