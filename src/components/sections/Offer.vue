<template>
  <section>
    <div class="container py-4 mx-auto">
      <div class="text-center ">
        <h2 class="text-4xl">
          Oferta
        </h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3">
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
    records: allArticle(limit:6, sortBy:"createdAt") {
      edges {
        node {
          title
          path
          excerpt
          createdAt(format:"Do MMMM YYYY")
          timeToRead
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
