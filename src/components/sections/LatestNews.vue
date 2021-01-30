<template>
  <section>
    <div class="container px-5 pt-12 mx-auto">
      
      <div class="text-center pb-12">
        <h2 class="text-4xl uppercase">
          Aktualności
        </h2>
      </div>

      <div class="flex flex-wrap -m-4">
        <NewsCard
          v-for="edge in $static.news.edges"
          :key="edge.node.id"
          :record="edge.node" />
      </div>

    </div>
  </section>
</template>

<static-query>
  query News {
    news: allContentfulNews(limit:4, sortBy:"createdAt") {
      edges {
        node {
          title,
          excerpt,
          richExcerpt,
          createdAt,
          heroImage {
                file {
                  url,
                  details {
                    size
                  }
                }
              }
          slug,
          path
          tags{
            title
            id
            path
          }
        }
      }
    }
  }
</static-query>

<script>
import NewsCard from '~/components/NewsCard'

export default {
  components: {
    NewsCard
  }
};
</script>
