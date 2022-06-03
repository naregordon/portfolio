export { default as AboutBlock } from '../../components/AboutBlock.vue'
export { default as BlockWrapper } from '../../components/BlockWrapper.vue'
export { default as ContactBlock } from '../../components/ContactBlock.vue'
export { default as ExperienceBlock } from '../../components/ExperienceBlock.vue'
export { default as HeaderContent } from '../../components/HeaderContent.vue'
export { default as IntroBlock } from '../../components/IntroBlock.vue'
export { default as MainFooter } from '../../components/MainFooter.vue'
export { default as ProjectTile } from '../../components/ProjectTile.vue'
export { default as ScrollArrows } from '../../components/ScrollArrows.vue'
export { default as SkillsBlock } from '../../components/SkillsBlock.vue'
export { default as AtomsBaseLink } from '../../components/atoms/BaseLink.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
