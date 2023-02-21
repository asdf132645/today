<template>
  <div class="text-center">

<!--    <v-btn-->
<!--      color="primary"-->
<!--      @click="dialog = true"-->
<!--    >-->
<!--      Open Dialog-->
<!--    </v-btn>-->

    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card>
        <v-img :src="imgData"></v-img>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false">닫기</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'nuxt-property-decorator';


@Component({
  components: {

  }
})
export default class Commondialgos extends Vue {
  @Prop() readonly imgData!: string;
  @Prop() readonly imgDataOpen!: number;

  dialog = false;


  @Watch('imgDataOpen')
  imgDataOpenFnc(): void{
    this.dialog = true;
  }


}
</script>
