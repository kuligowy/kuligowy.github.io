<template>
  <Layout>
    <PageHeader>
      <template v-slot:image>
        <g-image src="~/assets/images/glowne2-scaled.jpg" />
      </template>
      <template v-slot:content>
        <p class="text-4xl md:text-6xl">
          Lazy Wink
        </p>
        <p class="text-lg md:text-2xl">
          CHWILE ULOTNE JAK MRUGNIĘCIE OKA
        </p>
      </template>
    </PageHeader>
    <div class="container text-center mx-auto">
      <!-- <SectionLatestArticles /> -->
      <SectionOffer />
    </div>
    <div class="conatiner text-center mx-auto">
    <SectionPortfolio />
    </div>

    <!-- <SectionContribute /> -->

    <SectionThinkDifferent />
    
    <div class="container text-center mx-auto">
      <SectionLatestNews />
    </div>

    

    <SectionOpenSource />
  </Layout>
</template>

<script>
import PageHeader from '~/components/PageHeader'
import SectionLatestArticles from '~/components/sections/LatestArticles'
import SectionLatestNews from '~/components/sections/LatestNews'
import SectionContribute from '~/components/sections/Contribute'
import SectionThinkDifferent from '~/components/sections/ThinkDifferent'
import SectionOpenSource from '~/components/sections/OpenSource'
import SectionOffer from '~/components/sections/Offer'
import SectionPortfolio from '~/components/sections/Portfolio'

export default {
  metaInfo: {
    title: 'Learn something new'
  },
  components: {
    PageHeader,
    SectionLatestArticles,
    SectionLatestNews,
    SectionContribute,
    SectionThinkDifferent,
    SectionOpenSource,
    SectionOffer,
    SectionPortfolio
  }
};
</script>
