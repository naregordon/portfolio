<template>
  <component :is="`${componentData.slug}-block`" class="block-wrapper">
    <nuxt-content :document="componentData" />
  </component>
</template>

<script>
export default {
  props: {
    componentData: {
      type: Object,
      required: true,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.block-wrapper {
  font-size: 1.8rem;

  ::v-deep .icon-link {
    display: none;
  }

  @include mobile-only {
    font-size: 1.2rem;
  }
}
</style>
