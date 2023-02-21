<template>
  <div>
    <ImagePreview3 v-if='imageUrl'
                   :images='imageUrl'
                   only-one
                   :has-more-button='hasMoreImages !== false'
                   more-button-left
                   :height='noHeight === false ? 280 : null'
                   @on-click-more-button='onClickMoreButton'
    >
    </ImagePreview3>

    <BackButton class='tnj-back-button-position'></BackButton>

    <v-container v-if='hasMapButton !== false || hasShareButton !== false'
                 class='mt-n8'>
      <div class='d-flex flex-row justify-end'>
        <div v-if='hasFaveButton !== false'>
          <FabButton v-if='faveStore'
                     mdi-name='mdi-heart'
                     small
                     :dark='false'
                     class='ml-4'
                     @on-click='onClickRemovePick'
          ></FabButton>
          <FabButton v-else
                     mdi-name='mdi-heart-outline'
                     small
                     :dark='false'
                     class='ml-4'
                     @on-click='onClickAddPick'
          ></FabButton>
        </div>
<!--        <FabButton v-if='hasShareButton !== false'-->
<!--                   mdi-name='mdi-share-variant-outline'-->
<!--                   small-->
<!--                   :dark='false'-->
<!--                   class='ml-4'-->
<!--                   @on-click='onClickShare'-->
<!--        ></FabButton>-->
<!--        <FabButton v-if='hasMapButton !== false'-->
<!--                   mdi-name='mdi-map-marker-outline'-->
<!--                   small-->
<!--                   :dark='false'-->
<!--                   class='ml-4'-->
<!--                   @on-click='onClickMap'-->
<!--        ></FabButton>-->
      </div>
    </v-container>

    <v-container v-if='title || trimmedDescription'
                 class='pt-0'>

      <TextLabel v-if='title'
                 :text='title'
                 text-size-head
                 weight-bold
      />

      <div v-if='title && trimmedDescription'
           class='tnj-v-spacer-4'></div>

      <div v-if='trimmedDescription'
           class=''
      >
        서비스 명 : {{ trimmedDescription }}
      </div>

      <!--      <TextLabel v-if='description'-->
      <!--                 :text='description'-->
      <!--                 text-size-body-->
      <!--      />-->
    </v-container>

    <!--    <div class='tnj-v-spacer-2'></div>-->

  </div>
</template>

<script lang='ts'>
import { Component, Emit, Prop, Vue } from 'nuxt-property-decorator';
import BackButton from '~/components/uikit/button/BackButton.vue';
import FabButton from '~/components/uikit/button/FabButton.vue';
import TextLabel from '~/components/uikit/text/TextLabel.vue';
import ImagePreview3 from '~/components/uikit/image/ImagePreview3.vue';
import { SizedImageType, SizedImageTypeUtil } from '~/common/type/sizedImageType';


@Component({
  components: { ImagePreview3, TextLabel, FabButton, BackButton }
})
export default class ImageTitleBar extends Vue {
  @Prop() readonly imageUrl?: string;
  @Prop() readonly title?: string;
  @Prop() readonly description?: string;
  @Prop() readonly faveStore!: boolean;
  @Prop({ default: false }) readonly hasMapButton!: boolean | null;
  @Prop({ default: false }) readonly hasShareButton!: boolean | null;
  @Prop({ default: false }) readonly hasFaveButton!: boolean | null;
  @Prop({ default: false }) readonly hasMoreImages!: boolean | null;
  @Prop({ default: false }) readonly noHeight!: boolean | null;

  get sizedImages(): SizedImageType[] {
    return this.imageUrl ? [SizedImageTypeUtil.defaultSizedImageFromUrl(this.imageUrl)] : [];
  }

  get trimmedDescription(): string|null {
    return this.description ? this.description.trim() : null;
  }

  @Emit()
  onClickAddPick(): void {
  }

  @Emit()
  onClickRemovePick(): void {
  }

  @Emit()
  onClickShare(): void {
  }

  @Emit()
  onClickMap(): void {
  }

  @Emit()
  onClickMoreButton(): void {
  }
}
</script>

<style scoped>
</style>
