<template>
  <div class="container px-5 mx-auto p-4">
    <section id="contact">
      <ContactForm />
    </section>
  </div>
</template>

<script>
import RecordCard from '~/components/RecordCard'

import ContactForm from '~/components/sections/ContactForm.vue'
export default {
  components: {
    ContactForm
  }
}
</script>import 