<template>
  <div class='image-container'>
    <v-row class='d-flex flex-row no-gutters mt-5 mb-5'>
      <v-col>
            <v-slide-group mobile-breakpoint="1000" show-arrows center-active>
              <v-slide-item v-for="(item, i) in images" :key="i">
                <v-card width="400" class="ma-4">
                  <v-card-title>
                    <v-img height="200px" contain :src="item.img"></v-img>
                  </v-card-title>
                </v-card>
              </v-slide-item>
            </v-slide-group>
      </v-col>
    </v-row>
  </div>
</template>

<script lang='ts'>
import {
  Component, Emit, Prop, Vue
} from 'nuxt-property-decorator';
import { SizedImageType } from '~/common/type/sizedImageType';

@Component
export default class ImagePreview3 extends Vue {
  @Prop() readonly images!: SizedImageType[] | undefined;
  @Prop() readonly height!: number;
  @Prop({ default: false }) readonly onlyOne!: boolean|null;
  @Prop({ default: false }) readonly hasMoreButton!: boolean|null;
  @Prop({ default: false }) readonly moreButtonLeft!: boolean|null;

  // get imageCount(): number {
  //   return this.images.length;
  // }
  //
  // get leftImageCols(): number {
  //   if (this.onlyOne !== false || this.imageCount < 2) {
  //     return 12;
  //   } else {
  //     return 7;
  //   }
  // }
  //
  // get rightImageCols(): number {
  //   if (this.onlyOne !== false || this.imageCount < 2) {
  //     return 0;
  //   } else {
  //     return 5;
  //   }
  // }

  @Emit()
  onClickMoreButton(): void {
    console.log('onClickMoreButton');
  }
}
</script>

<style scoped>
.left-image {
  border-right: 1px solid white;
}

.right-image {
  border-left: 1px solid white;
}

.right-top-image {
  border-left: 1px solid white;
  border-bottom: 1px solid white;
}

.right-bottom-image {
  border-left: 1px solid white;
  border-top: 1px solid white;
}

.image-container {
  position: relative;
}

.button-left {
  position: absolute;
  bottom: 16px;
  left: 16px;
  background-color: rgba(0, 0, 0, 0.4);
}

.button-right {
  position: absolute;
  bottom: 16px;
  right: 16px;
  background-color: rgba(0, 0, 0, 0.4);
}

</style>
