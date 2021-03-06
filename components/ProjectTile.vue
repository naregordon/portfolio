<template>
  <li class="project-tile">
    <a class="project-tile__inner" :href="url" target="_blank">
      <img class="project-tile__image" :src="imgSrc" alt="profile picture" />
      <span class="project-tile__text"><slot /></span>
      <span
        aria-hidden="true"
        class="project-tile__icon icon-arrow-right2"
      ></span>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
      default: "",
    },
    url: {
      type: String,
      required: true,
      default: "",
    },
  },
  computed: {
    imgSrc() {
      if (
        typeof this.image === "string" &&
        this.image.match(/^(http(s)?|ftp):\/\//)
      ) {
        return this.image;
      }

      try {
        return require(`~/assets/images/${this.image}`);
      } catch (error) {
        return null;
      }
    },
  },
};
</script>

<style lang="scss">
.project-tile {
  display: inline-flex;
  align-items: center;
  flex: 50%;
  flex-grow: 0;
  margin-bottom: 0.8rem;
  font-size: 1.2rem;
  padding-right: 1rem;

  @include mobile-only {
    flex: 100%;
    font-size: 0.9rem;
    padding-right: 0;
  }

  &__inner {
    width: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    transform: scale(1);
    background: black;
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    color: white;
    transition: all 700ms ease;
    border: 1px solid black;

    &:hover,
    &:focus-visible {
      img {
        border-radius: 0;
        width: 100px;
        border-color: transparent;
      }
      .project-tile__icon {
        transform: translateX(0);
        opacity: 1;
      }
    }
  }

  &__text {
    padding-right: 1rem;
  }

  &__icon {
    position: absolute;
    right: 0.5rem;
    bottom: 0.5rem;
    transform: translateX(200%);
    transition: all 300ms ease;
    opacity: 0;
  }

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: contain;
    margin-right: 1rem;
    background: white;
    border: 1px solid black;
    image-rendering: -webkit-optimize-contrast;
    transition: all 300ms ease;

    @include mobile-only {
      width: 50px;
      height: 50px;
    }
  }
}
</style>
