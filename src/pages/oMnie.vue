<template>
  <Layout backgroundColor="bg-black">
    <PageHeader>
      <template v-slot:image>
      </template>
      <template v-slot:content>
        <p class="text-4xl md:text-6xl">
          LAZY WINK
        </p>
        <p
          class="text-lg md:text-2xl uppercase">
          fotografia
        </p>
      </template>
    </PageHeader>
<!-- <div class="px-5 py-12 mx-auto bg-black">

 <div class="flex flex-wrap -m-4 text-white">
   <div class="text-2xl"> KILKA SŁÓW O MNIE</div>
   </div>
    </div> -->
<div class="container px-5 py-12 mx-auto text-white  text-justify">
    <div class="flex flex-wrap -m-4 ">
    
    <!-- <div class="flex flex-wrap bg-black text-white "> -->
        <div class="w-full md:w-1/2 pt-0 p-4 flex-grow divide-y-2 divide-site-10">
          <div class="w-full prose-2xl p-4 font-bold leading-loose uppercase">
            Kilka słów o mnie
          </div>
          <p class="prose-xl p-4 leading-loose">Fotograficzny samouk.<br />
            Od zawsze pasjonowała mnie fotografia, jednak dopiero urodzenie dzieci sprawiło, że zapragnęłam nauczyć się znacznie więcej i usystematyzować swoją wiedzę.<br />
            Ciąglę się uczę, w miarę możliwości kończę kolejne kursy doszkalające, by jak najpiękniej zapisywać ulotne chwile.</p>
          <g-image src="~/assets/images/nikon.jpg" width="834" fit="outside" quality="100"/>
        </div>
         <div class="w-full md:w-1/2 pt-0 p-4 prose-xl">
          <g-image src="~/assets/images/IMG_5871v2s.jpg" width="834" fit="outside" quality="100" />
          <p class="prose-xl">Ukończone kursy i warsztaty:</p>
          <div>
            <app-icon icon="check-circle" class="text-site-10" size="lg" />
            <span> Warsztaty "Mam lustrzankę dla początkujących", Muzeum Fotografii w Bydgoszczy</span>
          </div>
                    <div>
            <app-icon icon="check-circle" class="text-site-10" size="lg" />
            <span> Warsztaty "Mam lustrzankę dla zaawansowanych", Muzeum Fotografii w Bydgoszczy</span>
          </div>
       <div>
            <app-icon icon="check-circle" class="text-site-10" size="lg" />
            <span> E-szkoła portretu, ŚwiatObrazu.pl.</span>
          </div>
        </div>
    </div>
    </div>
  </Layout>
</template>

<script>
import PageHeader from "~/components/PageHeader";
import ContactForm from "~/components/sections/ContactForm";

export default {
  metaInfo: {
    title: "O mnie",
  },
  components: {
    PageHeader,
    ContactForm,
  },
};
</script>
