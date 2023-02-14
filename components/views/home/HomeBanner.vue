<template>
  <div class='image-container'>
    <v-carousel ref='carouselRef'
                v-model='model'
                :show-arrows='false'
                :cycle='cycle'
                interval='5000'
                height='400px'
                hide-delimiters
                @change='onChangeIndex'
    >
      <v-carousel-item v-for='(bannerItem,i) in bannerArr' :key='i'
      >
        <v-img contain :src='bannerItem.imageUrl'></v-img>
      </v-carousel-item>
    </v-carousel>
<!--    <v-carousel>-->
<!--      <v-carousel-item v-for="(item,i) in bannerArr" :src="item.imageUrl" :key="i"></v-carousel-item>-->
<!--    </v-carousel>-->
  </div>
</template>

<script lang='ts'>
import {Component, Vue} from 'nuxt-property-decorator';

@Component({
  components: {}
})
export default class HomeBanner extends Vue {
  bannerArr: object[] = [{
    imageUrl: require('~/assets/img/banner.png'),
  },{
    imageUrl: require('~/assets/img/banner.png'),
  }];

  cycle = true;
  model = 0;
  eventIndex = 0;

  activated(): void {
    this.cycle = true;
  }

  deactivated(): void {
    this.cycle = false;
  }

  created(): void{
    // this.bannerArr.push()
  }

  showFirstItem(): void {
    this.$nextTick(() => {
      this.model = 0;
      this.onChangeIndex(0);
    });
  }

  onChangeIndex(index: number): void {
    // console.log('index: ' + index);
    this.eventIndex = index;
  }
}

</script>

<style scoped>
.image-container {
  position: relative;
  background: aliceblue;
  display: flex;

}


</style>
