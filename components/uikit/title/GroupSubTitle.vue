<template>
  <div>
    <TextLabel
      :text='title'
      text-size-title
      weight-bold
      alignment-left
      grey-color
    />
  </div>

</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import TextLabel from '~/components/uikit/text/TextLabel.vue';

@Component({
  components: { TextLabel }
})
export default class GroupSubTitle extends Vue {
  @Prop() readonly title!: string;
}
</script>

<style scoped>
</style>
