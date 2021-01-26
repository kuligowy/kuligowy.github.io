<template>
  <section>
    <div class="container px-5 py-12 mx-auto">

      <div class="text-center pb-12 ">
        <h2 class="text-4xl">
         Oferta
        </h2>
      </div>

      <div class="flex flex-wrap -m-4">
        <OfferCard
          v-for="edge in $static.records.edges"
          :key="edge.node.id"
          :record="edge.node" />
      </div>

    </div>
  </section>
</template>

<static-query>
  query {
    records: allContentfulOffer(limit:6, sortBy:"position", order:ASC) {
      edges {
        node {
          title
          path
          excerpt
          richExcerpt
          createdAt(format:"Do MMMM YYYY")
          icon
        }
      }
    }
  }
</static-query>

<script>
import OfferCard from '~/components/OfferCard'

export default {
  components: {
    OfferCard
  }
};
</script>
