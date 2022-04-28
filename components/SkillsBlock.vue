<template>
  <div class="skills-block"><slot /></div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.skills-block {
  ::v-deep span[class^="icon-"] {
    display: inline-block;
    margin-bottom: 0.5rem;
    display: inline-flex;
    margin-right: 0.5rem;

    @include tablet-up {
      align-items: center;
    }

    &:before {
      font-size: 3rem;
      margin-right: 0.5rem;

      @include mobile-only {
        font-size: 1.5rem;
      }
    }
  }
}
</style>
