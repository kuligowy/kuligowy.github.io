<template>
  <Layout>
    <PageHeader>
      <template v-slot:image>
        <!-- <g-image src="~/assets/images/glowne2-scaled.webp"/> -->
      </template>
      <template v-slot:content>
        <p class="text-4xl md:text-6xl">{{ $page.gallery.title }}</p>
        <p class="text-lg md:text-2xl">{{ $page.gallery.simpleDescription }}</p>
      </template>
    </PageHeader>

    <div class="container mx-auto">
      <div class="flex flex-wrap justify-content py-12">
        <!-- <div class="gallery"> -->
          <g-image
            class="m-1 cursor-pointer"
            :key="index"
            v-for="(image, index) in $page.gallery.photos"
            :src="renderThumbnail(image.file.url)"
            :alt="image.title"
            @click="openPicture(index)"
          />
        <!-- </div> -->
        <transition name="fade">
          <PictureModal
            :pictures="$page.gallery.photos"
            :index="currentIndex"
            v-if="modalIsOpen"
            @close="hideModal"
          />
        </transition>
        <!-- <g-link class="return-link" to="/galleries/"
          >👈 Back to gallery overview</g-link
        > -->
      </div>
    </div>
  </Layout>
</template>

<script>
import { renderHtmlMethod, renderImage } from "~/helpers/contentful";
// import VueMarkdown from "vue-markdown";
import PictureModal from "~/components/PictureModal";
import PageHeader from "~/components/PageHeader";

export default {
  metaInfo() {
    return {
      title: this.$page.gallery.title,
    };
  },
  created() {
    this.$root.$on("modal-close", this.hideModal);
  },
  components: {
    PictureModal,
    PageHeader,
  },
  methods: {
    renderHtmlMethod(input) {
      return renderHtmlMethod(input);
    },
    renderThumbnail(src) {
      return renderImage({ src, fit: "fill", w: 300, h: 300 });
    },
    openPicture(index) {
      this.currentIndex = index;
      this.showModal();
    },
    showModal() {
      this.modalIsOpen = true;
    },
    hideModal() {
      this.modalIsOpen = false;
    },
  },
  data() {
    return {
      currentIndex: 0,
      modalIsOpen: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  img {
    cursor: pointer;
    @media screen and (max-width: 576px) {
      width: 50%;
      height: 40vw;
    }
  }
}
.return-link {
  display: inline-block;
  margin-top: 2em;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

<page-query>
query Gallery ($path: String!) {
  gallery: contentfulGallery (path: $path) {
    title,
    description,
    simpleDescription,
    heroImage {
      file {
        url,
        details {
          size
        }
      }
    }
    photos {
      title,
      file {
        url,
        details {
          size
        }
      },
      description
    }
  }
}
</page-query>