<template>
  <Layout>
    <PageHeader>
      <template v-slot:image>
        <!-- <g-image src="~/assets/images/glowne2-scaled.webp"/> -->
      </template>
      <template v-slot:content>
        <p class="text-4xl md:text-6xl">Lazy Wink</p>
        <p class="text-lg md:text-2xl">CHWILE ULOTNE JAK MRUGNIĘCIE OKA</p>
      </template>
    </PageHeader>
    <SectionPortfolio />
    <div class="container text-center mx-auto">
      <SectionLatestNews />
    </div>
    <div class="container text-center mx-auto">
      <!-- <SectionLatestArticles /> -->
      <SectionOffer />
    </div>
    <SectionInterested />
    <SectionContact />
    <!-- <SectionContribute /> -->

    <!-- <SectionThinkDifferent /> -->

    <!-- <div class="container text-center mx-auto"> -->
    <!-- <SectionLatestNews /> -->
    <!-- </div> -->

    <!-- <SectionOpenSource /> -->
  </Layout>
</template>

<script>
import PageHeader from "~/components/PageHeader";
import SectionLatestNews from "~/components/sections/LatestNews";
import SectionOffer from "~/components/sections/Offer";
import SectionPortfolio from "~/components/sections/Portfolio";
import SectionInterested from "~/components/sections/Interested";
import SectionContact from "~/components/sections/Contact";
export default {
  metaInfo: {
    title: "Learn something new",
  },
  components: {
    PageHeader,
    SectionLatestNews,
    SectionOffer,
    SectionPortfolio,
    SectionInterested,
    SectionContact,
  },
};
</script>
