<template>
  <footer class="main-footer">
    <div class="main-footer__inner">
      <span></span>
      <div class="main-footer__copyright">@2022 Lucas Haladjian</div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main-footer {
  &__inner {
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: space-between;

    @include mobile-only {
      padding: 1rem;
    }

    p {
      margin-bottom: 0;
    }
  }

  &__copyright {
    color: $grey-color;
    font-size: 12px;
    text-align: right;
  }
}
</style>
