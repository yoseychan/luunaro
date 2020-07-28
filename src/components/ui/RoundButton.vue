<template>
  
  <router-link class="bttn" v-bind:class="[theme, size, disabledObject]" v-bind:to="urlObject">
    <slot>o</slot>
  </router-link>

</template>

<script>
export default {
  name: 'RoundButton',
  props: {
    url: String,
    theme: String,
    size: String,
    disabled: Boolean
  },
  computed: {
    disabledObject: function () {
      return {
        disabled: this.disabled,
      }
    },
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
    border-radius:50%;
    line-height:80px;

    // Default Size
    width:52px;
    height:52px;
    line-height:52px;

    // Size
    &.large {
      width:68px;
      height:68px;
      line-height:68px;
    }
    &.small {
      width:38px;
      height:38px;
      line-height:38px;
    }

  }

</style>