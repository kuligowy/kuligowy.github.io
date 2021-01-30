<template>
  <footer class="text-white body-font">
    <div class="bg-shark-500">
      <div class="container px-5 py-6 mx-auto flex items-center md:flex-row flex-col">
        <g-link
          to="/"
          class="flex title-font font-medium items-center md:justify-start justify-center">
          <span class="ml-2 text-xl">{{ $static.metadata.siteName }}</span>
        </g-link>
        <div class="text-sm md:ml-6 md:mt-0 mt-4">
          © {{ currentYear }} {{ $static.metadata.siteName }}
        </div>
        <div class="footer-links inline-flex md:ml-auto md:mt-0 mt-4 justify-center md:justify-start">
          <a class="hover:underline hover:bg-site-10 px-4" href="https://www.facebook.com/LazyWinkPaulinaKuligowska/"><app-icon :icon="['fab', 'facebook']" size="lg"></app-icon></a>
          <a class="hover:underline hover:bg-site-10 px-4" href="https://www.instagram.com/lazywink/"><app-icon :icon="['fab', 'instagram']" size="lg"></app-icon></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data () {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>
