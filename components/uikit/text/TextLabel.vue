<template>
  <component :is='tag'
             :class="{
        'text-h6': textSizeHead !== false,
        'text-subtitle-1': textSizeTitle !== false,
        'text-subtitle-2': textSizeSubtitle !== false,
        'text-body-2': textSizeBody !== false,
        'text-button': textSizeButton !== false,
        'text-caption': textSizeCaption !== false,

        'font-weight-black': weightBlack !== false,
        'font-weight-bold': weightBold !== false,
        'font-weight-light': weightLight !== false,
        'font-weight-thin': weightThin !== false,

        'text-left': alignmentLeft !== false,
        'text-center': alignmentCenter !== false,
        'text-right': alignmentRight !== false,

        'tnj-text-truncate-1-line': truncate1 !== false,
        'tnj-text-truncate-2-line': truncate2 !== false,
        'tnj-text-truncate-3-line': truncate3 !== false,

        'text-decoration-underline': underlined !== false,
        'text-decoration-line-through': erased !== false,

        'text--secondary': greyColor !== false,
        'text--disabled': disabledColor !== false,

        'font-italic': italic !== false,
      }"
             :style="styleObject"
  >
    {{ text }}
  </component>
</template>

<script lang='ts'>
import {
  Component, Prop, Vue,
} from 'nuxt-property-decorator';

@Component
export default class TextLabel extends Vue {
  @Prop() readonly text!: string;

  @Prop({default:false}) readonly textSizeHead!: boolean|null;
  @Prop({default:false}) readonly textSizeTitle!: boolean|null;
  @Prop({default:false}) readonly textSizeSubtitle!: boolean|null;
  @Prop({default:false}) readonly textSizeBody!: boolean|null;
  @Prop({default:false}) readonly textSizeButton!: boolean|null;
  @Prop({default:false}) readonly textSizeCaption!: boolean|null;

  @Prop({default:false}) readonly weightBlack!: boolean|null;
  @Prop({default:false}) readonly weightBold!: boolean|null;
  @Prop({default:false}) readonly weightLight!: boolean|null;
  @Prop({default:false}) readonly weightThin!: boolean|null;

  @Prop({default:false}) readonly alignmentLeft!: boolean|null;
  @Prop({default:false}) readonly alignmentCenter!: boolean|null;
  @Prop({default:false}) readonly alignmentRight!: boolean|null;

  @Prop({default:false}) readonly truncate1!: boolean|null;
  @Prop({default:false}) readonly truncate2!: boolean|null;
  @Prop({default:false}) readonly truncate3!: boolean|null;

  @Prop({default:false}) readonly underlined!: boolean|null;
  @Prop({default:false}) readonly erased!: boolean|null;

  @Prop({default:false}) readonly greyColor!: boolean|null;
  @Prop({default:false}) readonly disabledColor!: boolean|null;

  @Prop({default:false}) readonly italic!: boolean|null;

  @Prop() readonly color?: string;

  @Prop({default:false}) readonly span!: boolean|null;

  get tag(): string {
    if (this.span !== false) {
      return 'span';
    }

    return 'div';
  }

  get styleObject(): object {
    return {
      color : this.color ? this.color : null
    };
  }

  // @Emit()
  // onClick(): void {
  //   console.log(`onClick: ${this.text}`);
  // }
}
</script>

<style scoped>
</style>
