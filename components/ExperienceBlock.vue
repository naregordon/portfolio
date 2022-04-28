<template>
  <div class="experience-block"><slot /></div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.experience-block {
  p {
    margin-bottom: 1rem;
  }

  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
