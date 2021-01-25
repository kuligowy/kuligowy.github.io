<template>
  <Layout>
    <PageHeader>
      <template v-slot:image>
        <!-- <g-image src="~/assets/images/glowne2-scaled.webp"/> -->
      </template>
      <template v-slot:content>
        <p class="text-4xl md:text-6xl">PORTFOLIO</p>
        <p class="text-lg md:text-2xl">...</p>
      </template>
    </PageHeader>
    <div class="container px-5 py-12 mx-auto">
      <section>
        <ul class="galleries">
          <li
            class="gallery"
            v-for="{ node } in $page.galleries.edges"
            :key="node.id"
          >
            <g-link :to="`/galeria/${node.slug}`">
              <ImageHover width="100%" height="100%">
                <g-image
                  class="cover-image"
                  :src="renderThumbnail(getCoverImage(node).url)"
                  :alt="getCoverImage(node).title"
                />
              </ImageHover>
              <h4 class="title">
                {{ node.title }}
              </h4>
            </g-link>
          </li>
        </ul>
      </section>
    </div>
  </Layout>
</template>

<style lang="scss" scoped>
.galleries {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;

  .gallery {
    width: 190px;
    height: 190px;

    @media screen and (max-width: 340px) {
      width: 50%;
      height: 40vw;
    }
    @media screen and (max-width: 576px) {
      width: 33.333%;
      height: 30vw;
    }
    position: relative;
    display: inline-block;

    .cover-image {
      width: 190px;
      height: 190px;
    }

    .title {
      position: absolute;
      bottom: 0.24em;
      left: 0;
      padding: 0.24em;
      padding-left: 0.6em;
      margin: 0;
      text-shadow: 0 0 4px black;
    }
  }
}
</style>

<script>
import { getCoverImage, renderImage } from "~/helpers/contentful";
import ImageHover from "~/components/ImageHover";
import PageHeader from "~/components/PageHeader";

export default {
  metaInfo: {
    title: "Galleries",
  },
  components: {
    ImageHover,
    PageHeader,
  },
  methods: {
    getCoverImage(node) {
      return getCoverImage(node);
    },
    renderThumbnail(src) {
      return renderImage({ src, fit: "fill", w: 760 / 4, h: 760 / 4 });
    },
  },
};
</script>

<page-query>
query Galleries {
  galleries: allContentfulGallery(sort: [{by: "sortOrder", order: ASC }, {by: "title", order: ASC}]) {
    edges {
      node {
        id,
        title,
        slug,
        photos {
          file {
            url
          },
          title
        },
        heroImage {
          file { 
            url
          },
          title
        }
      }
    }
  }
}
</page-query>