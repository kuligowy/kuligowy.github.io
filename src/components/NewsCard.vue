<template>
  <div class="p-4 w-full" :class="cardSize">
    <g-link :to="record.path" class="inline-flex items-center">
      <div
        class="h-full border-2 shadow-lg border-gray-200  overflow-hidden relative hover:bg-shark-50 hover:bg-opacity-60">
        <div class="p-6">
          <h1
            class="text-2xl font-bold text-gray-900 mb-3 uppercase text-center"
            :class="{ 'mb-12': !record.richExcerpt }">
            {{ record.title }}
          </h1>
          <div class="flex justify-center">
            <g-image
              class="cover-image mb-4"
              :src="renderThumbnail(getCoverImage(record).url)"
              :alt="getCoverImage(record).title"/>
          </div>
          <div
            v-if="record.richExcerpt"
            class="text-justify text-lg text-gray-800"
            v-html="renderHtmlMethod(record.richExcerpt)"/>
            <div class="flex flex-row-reverse">
              <span class="italic text-lg pt-4">Opublikowano: {{published}}</span>
            </div>
        </div>
      </div>
    </g-link>
  </div>
</template>

<script>
import { getCoverImage,renderHtmlMethod, renderImage } from "~/helpers/contentful";
export default {
  methods: {
    renderHtmlMethod(input) {
      return renderHtmlMethod(input);
    },
    getCoverImage(node) {
      return getCoverImage(node);
    },
    renderThumbnail(src) {
      return renderImage({ src, fit: "fill", w: 500, h: 200 });
    },
  },
  computed: {
    published: function(){
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      console.log(new Date(this.record.createdAt))
      console.log(this.record.createdAt)
      return new Date(this.record.createdAt).toLocaleDateString("pl-PL", options);
    }
  },
  props: {
    cardSize: {
      type: String,
      default: "sm:w-1/2 lg:w-1/2",
    },
    record: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
