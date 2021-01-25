<template>
  <Layout>
    <PageHeader>
      <template v-slot:image>
      </template>
      <template v-slot:content>
        <p class="text-4xl md:text-6xl">
          KONTAKT
        </p>
        <p
          class="text-lg md:text-2xl">
        </p>
      </template>
    </PageHeader>
<div class="container px-5 py-12 mx-auto">

    <ContactForm />
    </div>
  </Layout>
</template>

<script>
import PageHeader from '~/components/PageHeader'
import ContactForm from '~/components/sections/ContactForm'

export default {
  metaInfo: {
    title: 'Kontakt'
  },
  components: {
    PageHeader,
    ContactForm
  }
};
</script>
