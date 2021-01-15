<template>
  <Layout>
    <PageHeader>
      <template v-slot:image>
        <g-image src="~/assets/images/glowne2-scaled.webp" alt="main background"/>
      </template>
      <template v-slot:content>
        <p class="text-4xl md:text-6xl">Lazy Wink</p>
        <p class="text-lg md:text-2xl">CHWILE ULOTNE JAK MRUGNIĘCIE OKA</p>
      </template>
    </PageHeader>
    <SectionContribute />
    <div class="container text-center mx-auto">
      <SectionLatestNews />
    </div>
    <SectionInterested />
    <div class="container text-center mx-auto">
      <!-- <SectionLatestArticles /> -->
      <SectionOffer />
    </div>
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
import SectionLatestArticles from "~/components/sections/LatestArticles";
import SectionLatestNews from "~/components/sections/LatestNews";
import SectionContribute from "~/components/sections/Contribute";
import SectionThinkDifferent from "~/components/sections/ThinkDifferent";
import SectionOpenSource from "~/components/sections/OpenSource";
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
    SectionLatestArticles,
    SectionLatestNews,
    SectionContribute,
    SectionThinkDifferent,
    SectionOpenSource,
    SectionOffer,
    SectionPortfolio,
    SectionContribute,
    SectionInterested,
    SectionContact,
  },
};
</script>
