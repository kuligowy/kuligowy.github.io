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
    <div class="container mx-auto">
      <SectionLatestNews />
      <SectionOffer />
    </div>
    <SectionInterested />
    <div class="container mx-auto">
      <SectionContact />
    </div>
  </Layout>
</template>

<script>
import PageHeader from "~/components/PageHeader";
import SectionLatestNews from "~/components/sections/LatestNews";
import SectionOffer from "~/components/sections/Offer";
import SectionPortfolio from "~/components/sections/Portfolio";
import SectionPortfolioComponent from "~/components/sections/PortfolioComponent";
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
    SectionPortfolioComponent
  },
};
</script>
