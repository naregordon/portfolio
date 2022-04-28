<template>
  <component
    :is="tag"
    v-if="tag === 'NuxtLink'"
    class="base-link"
    v-bind="attributes"
    @click.native="(event) => $emit('clicked', event)"
  >
    <slot />
  </component>
  <component
    :is="tag"
    v-else
    class="base-link"
    v-bind="attributes"
    @click="(event) => $emit('clicked', event)"
  >
    <slot />
  </component>
</template>

<script lang="ts">
export default {
  props: {
    link: {
      type: [Object, String],
      default: null,
    },
  },
  computed: {
    attributes() {
      if (this.tag === "button") {
        return {};
      }

      if (this.tag === "a") {
        return { href: this.link };
      }

      return { to: this.link };
    },
    tag() {
      if (!this.link) {
        return "button";
      }

      if (
        typeof this.link === "string" &&
        this.link.match(/^(http(s)?|ftp):\/\//)
      ) {
        return "a";
      }

      return "NuxtLink";
    },
  },
};
</script>

<style lang="scss">
.base-link {
}
</style>
