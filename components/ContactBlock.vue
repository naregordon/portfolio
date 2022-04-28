<template>
  <div class="contact-block">
    <div class="contact-block__inner">
      <slot />

      <Lottie
        class="lottie"
        :options="defaultOptions"
        v-on:animCreated="handleAnimation"
      />
    </div>
  </div>
</template>

<script>
import Lottie from "vue-lottie/src/lottie.vue";
import lottieFile from "@/assets/lotties/yoga.json";

export default {
  components: {
    Lottie,
  },
  data() {
    return {
      defaultOptions: {
        animationData: lottieFile,
      },
      animationSpeed: 1,
    };
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
    },
  },
};
</script>

<style lang="scss">
.contact-block {
  font-size: 2rem;
  position: relative;
  height: 100%;

  .lottie {
    width: 100%;
    max-width: 400px;
    height: auto !important;

    @include tablet-up {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }

  a {
    text-decoration: none;
    color: white;
    border-bottom: 2px solid;

    &:hover {
      border-color: transparent;
    }
  }
}
</style>
