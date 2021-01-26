<template>
  <Layout>
    <PageHeader>
      <template v-slot:image>
      </template>
      <template v-slot:content>
        <p class="text-4xl md:text-6xl">
          <span class="uppercase">Aktualności</span>
        </p>
        <p
          class="text-lg md:text-2xl">
          <!-- We have currently {{ $page.records.totalCount }} entries in our list -->
        </p>
      </template>
    </PageHeader>

    <div class="container px-5 py-12 mx-auto">
      <section>
        <div class="flex flex-wrap -m-4">
          <NewsCard
            v-for="edge in $page.records.edges"
            :key="edge.node.id"
            :record="edge.node" />
        </div>
      </section>
      <div
        v-if="$page.records.pageInfo.totalPages > 1"
        class="mt-12 flex justify-center">
        <Pagination
          base-url="/aktualnosci"
          :current-page="$page.records.pageInfo.currentPage"
          :total-pages="$page.records.pageInfo.totalPages" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query ($page: Int) {
    records: allContentfulNews(sortBy:"createdAt", order:DESC, perPage: 9, page: $page) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          title
          excerpt
          createdAt
          richExcerpt
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
</page-query>

<script>
import PageHeader from '~/components/PageHeader'
import NewsCard from '~/components/NewsCard'
import Pagination from '~/components/Pagination'

export default {
  metaInfo: {
    title: 'Aktualności'
  },
  components: {
    PageHeader,
    Pagination,
    NewsCard
  }
};
</script>
