<template>
  <div class="homepage">
    <section
      class="section"
      :class="`section--${item.slug}`"
      v-for="(item, index) in sections"
      :key="`section--${index}`"
    >
      <BlockWrapper :componentData="item" />
    </section>
    <MainFooter class="footer" />
  </div>
</template>

<script>
import BlockWrapper from "../components/BlockWrapper.vue";
export default {
  components: { BlockWrapper },
  name: "IndexPage",
  async asyncData({ $content }) {
    const sectionsData = await $content("/sections").fetch();

    return {
      sectionsData,
    };
  },
  computed: {
    sections() {
      return this.sectionsData.sort((a, b) => {
        return a.position - b.position;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.homepage {
  overflow: auto;
  position: fixed;
  top: 0;
  height: 100vh;
  padding-left: 3rem;
  scroll-behavior: smooth;

  &:-webkit-scrollbar {
    display: none;
  }

  @include mobile-only {
    padding-left: 1.5rem;
  }
}
.section {
  height: 100vh;
  top: 10vh;
  position: sticky;
  background: black;
  padding: 1rem 2rem;

  @include mobile-only {
    padding: 1rem;
  }

  &--intro {
    top: 0;
    height: 110vh;
  }

  &--about {
    top: 215px;
    background: white;
    color: black;

    @include mobile-only {
      top: 125px;
    }
  }
  &--skills {
    top: 265px;

    @include mobile-only {
      top: 175px;
    }
  }
  &--experience {
    top: 315px;
    background: white;
    color: black;

    @include mobile-only {
      top: 225px;
    }
  }
  &--contact {
    top: 365px;

    @include mobile-only {
      top: 275px;
    }
  }

  .content-block {
    height: 100%;
  }
}
.footer {
  height: 75vh;
  position: sticky;
  display: flex;
  align-items: flex-end;
}
</style>
