<template>
  <div
    :class="{'is-center':fixedAtCenter,'has-bg':hasBg}"
    class="c-Loading"
  >
    <BaseLoadingSpinner :size="spinnerSize" />
    <slot>
      <div
        class="c-Loading-text"
        v-text="text"
      />
    </slot>
  </div>
</template>

<script>
import BaseLoadingSpinner from 'Base/BaseLoadingSpinner'

/**
 * @description 基础Loading
 */
export default {
  name: 'BaseLoading',
  components: {
    BaseLoadingSpinner
  },
  props: {
    text: {
      type: String,
      default: '加载中...'
    },
    spinnerSize: {
      type: String,
      default: '26px'
    },
    fixedAtCenter: {
      type: Boolean,
      default: true
    },
    hasBg: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.c-Loading {
  text-align: center;
  &.is-center {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
  &.has-bg {
    @include bgAlpha(rgba(0, 0, 0, 0.8));
    border-radius: 0.2em;
    padding: 0.5em;
  }
}
.c-Loading-text {
  font-size: 0.8em;
  color: #fff;
  @extend %textWrap;
}
</style>
