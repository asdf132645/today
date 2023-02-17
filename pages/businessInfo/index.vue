<template>
  <div>

  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';
import MainBody from '~/components/layout/MainBody.vue';
import Section from '~/components/layout/Section.vue';
import TextLabel from '~/components/uikit/text/TextLabel.vue';

@Component({
  components: {
    MainBody,
    Section,
    TextLabel,
  }
})
export default class BusinessInfo extends Vue {

}
</script>

<style scoped>

</style>
