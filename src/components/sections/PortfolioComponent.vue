<template>
  <section>
    <div class="container px-5 py-12 mx-auto">
            <div class="text-center pb-12 ">
        <h2 class="text-4xl font-sans">
         Portfolio
        </h2>

      </div>
      <div class="flex flex-wrap py-12 justify-center">
        <!-- <div class="gallery"> -->
        <g-image
          class="m-2 cursor-pointer"
          :key="index"
          v-for="(image, index) in $static.gallery.photos"
          :src="renderThumbnail(image.file.url)"
          :alt="image.title"
          @click="openPicture(index)"
        />
        <!-- </div> -->
        <transition name="fade">
          <PictureModal
            :pictures="$static.gallery.photos"
            :index="currentIndex"
            v-if="modalIsOpen"
            @close="hideModal"
          />
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
import { renderHtmlMethod, renderImage } from "~/helpers/contentful";
import PictureModal from "~/components/PictureModal";

export default {
  metaInfo() {
    return {
      title: this.$static.gallery.title,
    };
  },
  created() {
    this.$root.$on("modal-close", this.hideModal);
  },
  components: {
    PictureModal,
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
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

<static-query>
query Gallery {
  gallery: contentfulGallery (path: "/gallery/portfolio") {
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
</static-query>