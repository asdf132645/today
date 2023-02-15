<template>
  <span class='py-2'
        onmouseover="this.style.cursor='pointer'"
        @click='onClick'
  >
    <TextLabel
      :text='text'
      text-size-body
      underlined
    >
    </TextLabel>
  </span>
</template>

<script lang='ts'>
import { Component, Emit, Prop, Vue } from 'nuxt-property-decorator';
import TextLabel from '~/components/uikit/text/TextLabel.vue';
@Component({
  components: { TextLabel }
})
export default class TextButton extends Vue {
  @Prop() readonly text!: string;

  @Emit()
  onClick(): void {
    console.log('text button clicked');
  }
}
</script>

<style scoped>
</style>
