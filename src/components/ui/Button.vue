<template>
  
  <router-link class="bttn" v-bind:class="[theme, size, disabledObject]" v-bind:to="urlObject">
    <slot>Button Text</slot>
  </router-link>

</template>

<script>
export default {
  name: 'Button',
  props: {
    url: String,
    theme: String,
    size: String,
    disabled: Boolean
  },
  computed: {
    disabledObject: function () { return { disabled: this.disabled }},

    urlObject: function () {
      if (!this.disabled) {
        return this.url
      } else {
        return ''
      }
    }
  }
}
</script>

<style scoped lang="scss">

  @import '../../assets/styles/colors';
  @import '../../assets/styles/buttons';

  a.bttn {
    border-radius:12px;

    // Default Size
    padding:12px 48px;

    // Size
    &.large {
      padding:16px 64px;
    }
    &.small {
      padding:10px 24px;
    }
  }

</style>