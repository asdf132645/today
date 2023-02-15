<template>
  <div>
    <div class='areaDivision'></div>
    <v-container v-if='hasDivider !== false'
                 class='px-0'
                 :class="{'pt-0': noTop !== false}"
    >
      <SectionDivider></SectionDivider>
    </v-container>

    <v-container :class="{'pt-0': noTop !== false && hasDivider === false, 'pb-0': noBottom !== false}"
    >
      <div class='d-flex flex-row'
           :class="{'justify-space-between': justifySpaceBetween, 'justify-end': justifyEnd}"
      >
        <div v-if='title'
             class='d-flex flex-row align-center'>
          <GroupSubTitle :title='title'></GroupSubTitle>

          <TextButton v-if='titleButton'
                      :text='titleButton'
                      class='ml-2'
                      @on-click='onClickTitleButton'
          />
        </div>

        <IconButton v-if='iconMdi'
                    :mdi-name='iconMdi'
                    @on-click='onClickIcon'
        ></IconButton>
      </div>

      <div v-if='title || iconMdi'
           class='tnj-v-spacer-2'></div>

      <slot></slot>
    </v-container>
  </div>
</template>

<script lang='ts'>
import { Component, Emit, Prop, Vue } from 'nuxt-property-decorator';
import GroupSubTitle from '~/components/uikit/title/GroupSubTitle.vue';
import IconButton from '~/components/uikit/button/IconButton.vue';
import SectionDivider from '~/components/layout/SectionDivider.vue';
import TextButton from '~/components/uikit/button/TextButton.vue';

@Component({
  components: { TextButton, SectionDivider, IconButton, GroupSubTitle }
})
export default class Section extends Vue {
  @Prop() readonly title?: string;
  @Prop() readonly titleButton?: string;
  @Prop() readonly iconMdi?: string;
  @Prop({ default: false }) readonly hasDivider!: boolean | null;
  @Prop({ default: false }) readonly noTop!: boolean | null;
  @Prop({ default: false }) readonly noBottom!: boolean | null;

  get justifySpaceBetween(): boolean {
    return !!this.title && !!this.iconMdi;
  }

  get justifyEnd(): boolean {
    return !this.justifySpaceBetween && !!this.iconMdi;
  }

  @Emit()
  onClickIcon(): void {
  }

  @Emit()
  onClickTitleButton(): void {
  }
}
</script>

<style scoped>
  .areaDivision{
    height: 10px;
    width: 100%;
    background-color: #f9f9f9;
    margin-top: 24px;
  }
</style>
