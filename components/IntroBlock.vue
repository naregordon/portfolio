<template>
  <div class="intro-block">
    <slot />

    <Lottie
      class="lottie"
      :options="defaultOptions"
      v-on:animCreated="handleAnimation"
    />

    <div class="intro-block__scroll">
      Scroll to know more
      <ScrollArrows class="arrow" aria-hidden="true" />
    </div>
  </div>
</template>

<script>
import Lottie from "vue-lottie/src/lottie.vue";
import lottieFile from "@/assets/lotties/developer.json";

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

<style lang="scss" scoped>
.intro-block {
  font-size: clamp(2rem, 8vw, 5.5rem);
  line-height: 0.9;
  will-change: auto;
  height: 100%;
  position: relative;

  .lottie {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    width: 100%;
    max-width: 400px;

    .scrolled & {
      transition: opacity 700ms ease 1.4s;
      opacity: 1;
    }
  }

  .nuxt-content-container {
    transform: translateX(-100%);
    opacity: 0;

    .scrolled & {
      transition: all 700ms ease 700ms;
      transform: translateX(0);
      opacity: 1;
    }
  }

  &__scroll {
    margin-top: 1rem;
    font-size: 0.8rem;
    text-align: center;
    opacity: 0;
    position: absolute;
    top: 80vh;
    width: 100%;
    left: 0;
    font-family: "Staatliches", cursive;

    @include mobile-only {
      top: 75vh;
    }

    .scrolled & {
      transition: opacity 1s ease 2s;
      opacity: 0.9;
    }
  }

  .arrow {
    animation: jumpInfinite 1.4s infinite;
    font-size: 1.5rem;
    display: block;
    width: 100%;
    text-align: center;
    margin-top: 0.5rem;
    transform: scale(0.6);
  }
}
</style>
