<template>
  <section class="bg-black">
    <div  class="container mx-auto py-12">
      <div class="text-center text-white pb-12 ">
        <h2 class="text-4xl">
          Portfolio
        </h2>

      </div>
      <stack :column-min-width="320" :gutter-width="8" :gutter-height="8">
        <stack-item v-for="image in $static.records.edges[0].node.images" :key="image">
          <g-image
          :src="require(`!!assets-loader!@portfolioImages/${image}`)"
          :alt="image" />
        </stack-item>
      </stack>
    </div>
  </section>
</template>

<static-query>
query {
  records: allPortfolio{
    edges{
      node{
        images 
      }
    }
  }
}
</static-query>

<script>
import { Stack, StackItem } from "vue-stack-grid";

export default {
  components: { Stack, StackItem },
};
</script>