<template>
  <div class="header-content">
    <div class="header-content__visual">
      <img
        class="header-content__image"
        src="@/assets/images/profile-picture.jpeg"
        alt="profile picture"
      />
    </div>
    <div class="header-content__inner">
      <h1>Lucas Haladjian</h1>

      <h2>Front-end developer</h2>

      <p>Paris - FRANCE</p>

      <div class="header-content__buttons">
        <a
          class="header-content__button linkedin"
          href="https://www.linkedin.com/in/lucashaladjian/"
          ><span class="icon-linkedin"></span
        ></a>
        <a
          class="header-content__button mail"
          href="mailto:lucas.haladjian@gmail.com"
          ><span class="icon-paperplane"></span
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header-content {
  width: 70vw;
  max-width: 600px;

  @include tablet-up {
    width: 50vw;
  }

  .scrolled & {
    .arrow {
      opacity: 1;
    }
  }

  &__inner {
    padding: 10px;
    animation: slideLeft 400ms ease-in-out 400ms forwards;
    opacity: 0;

    @keyframes slideLeft {
      to {
        opacity: 1;
      }
    }

    p {
      font-size: 0.8rem;
      opacity: 0;

      @include mobile-only {
        font-size: 0.6rem;
      }

      .scrolled & {
        opacity: 1;
      }
    }
  }

  &__visual {
    position: relative;
    overflow: hidden;
    z-index: 1;

    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      background: black;
      animation: slidePanel 500ms ease-in forwards;
      transform: translateX(0);

      @keyframes slidePanel {
        to {
          transform: translateX(100%);
        }
      }
    }
  }

  &__image {
    width: 100%;
  }

  &__buttons {
    margin-top: 2rem;

    @include mobile-only {
      margin-top: 1rem;
    }
  }

  &__button {
    color: white;
    display: inline-block;
    font-size: 1.2rem;
    text-decoration: none;
    border: 1px solid white;
    border-radius: 50%;
    padding: 0.8rem;
    margin-right: 0.6rem;
    transform: translateX(-100%);
    opacity: 0;
    transition: color 700ms ease, border-color 700ms ease;

    @include mobile-only {
      margin-top: 0.6rem;
      margin-right: 0.2rem;
      font-size: 0.8rem;
      padding: 0.6rem;
    }

    &:hover,
    &:focus-visible {
      background: #f5e15e;
      border-color: transparent;
    }

    .scrolled & {
      transition: opacity 1s ease 1s, transform 1s ease 1s;
      opacity: 1;
      transform: translateX(0);

      &.mail {
        transition-delay: 1.2s;
      }
    }
  }
}
</style>
