<template>
  <div id="global" class="global" :class="{ scrolled: scrollY > 10 }">
    <header class="header">
      <div class="header__inner">
        <HeaderContent />
      </div>
    </header>
    <main class="main" ref="main">
      <Nuxt />
    </main>

    <ScrollArrows />
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollY: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);

    this.scrollY = window.scrollY;
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      this.scrollY = window.scrollY;
    },
  },
};
</script>

<style lang="scss" scoped>
.global {
  display: flex;
  background: black;
  color: white;
  min-height: 102vh;
  overflow: hidden;

  &.scrolled {
    overflow: visible;
  }
}

.header {
  display: flex;
  flex: 1;
  height: 100vh;
  position: relative;

  transition: all 700ms ease;
  z-index: 2;

  .scrolled & {
    top: 2vh;

    &::before {
      transition: transform 2s ease;
      opacity: 1;
      transform: translateY(0);
    }
  }

  &__inner {
    background: black;
    display: flex;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition: all 700ms ease;
    width: 100vw;

    .scrolled & {
      width: 100%;
    }
  }

  &:before {
    content: "";
    display: block;
    width: 3rem;
    height: 100%;
    left: 100%;
    position: absolute;
    background: $main-color;
    top: 0;
    opacity: 0;
    transform: translateY(-200%);
    z-index: 1;

    @include mobile-only {
      width: 1.5rem;
    }
  }
}

.main {
  transition: all 1s ease;
  overflow: auto;
  position: relative;
  flex: 4;
  scroll-behavior: smooth;

  &:-webkit-scrollbar {
    display: none;
  }

  @include mobile-only {
    flex: 3;
  }
}

.scroll-arrows {
  position: fixed;
  right: 3rem;
  z-index: 2;
  bottom: 2rem;
  animation: fadeIn 1s ease 2s forwards;
  opacity: 0;

  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: scale(0.6);
    }
  }

  .scrolled & {
    animation: none;
    opacity: 0;
  }
}
</style>
