<template>
  <div class="clickPointer" @click="goDdetailPage(String(comapnyObj.companyCode))">
    <v-row>
      <v-col cols='6' class='pr-2'>
        <v-card rounded flat>
          <v-img
            contain
            :src='imgurlArr[0]'
            height='140px'
          >
          </v-img>
        </v-card>
      </v-col>
      <v-col class='pl-2'>
        <div>
          <TextLabel
            :text='comapnyObj.company_name'
            text-size-subtitle
            weight-bold
          />
        </div>

        <!--        <div class='tnj-v-spacer-3'></div>-->

        <div>
          <p>{{ comapnyObj.companyDescription }}</p>
        </div>

        <div>
          <TextLabel :text='comapnyObj.company_companyDetails'
                     text-size-body
                     class='mt-2'
          ></TextLabel>
          <v-rating
            v-model="comapnyObj.rating"
            bg-color="orange-lighten-1"
            color="blue"
            readonly
          ></v-rating>
        </div>

      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'nuxt-property-decorator';
import TextLabel from '~/components/uikit/text/TextLabel.vue';
import RouterUtils from '~/common/lib/routerUtils';

@Component({
  components: {
    TextLabel,
  }
})
export default class BusinessInfo extends Vue {
  @Prop() readonly comapnyObj!: object;
  @Prop() readonly imgUrl!: string;

  companyList: object = [];
  imgurlArr: string[] = [];
  mounted(){
    const img =  this.imgUrl.split(',');
    for (const i in img) {
      this.imgurlArr.push(img[i]);
    }

  }

  goDdetailPage(id: string): void{
    RouterUtils.goToCompanyDetailPage(id);
  }
}
</script>

<style scoped>
  .clickPointer{
    cursor: pointer;
  }
</style>
