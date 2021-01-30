<template>
  <div class="p-4 w-full" :class="cardSize">
    <g-link :to="record.path">
      <div
        class="h-full border-2 shadow-lg overflow-hidden relative hover:bg-shark-50 hover:bg-opacity-60 text-center">
        <div class="p-2 text-site-10">
          <h1
            class="font-medium text-gray-900 mb-3"
            :class="{ 'mb-2': !record.richExcerpt }"
          >
            <div class="text-site-10 p-4">
              <app-icon :icon="record.icon" size="lg"></app-icon>
            </div>
            <span class="text-xl uppercase">{{ record.title }}</span>
          </h1>
          <div
            v-if="record.richExcerpt"
            class="text-lg leading-loose text-gray-800 pb-4"
            v-html="renderHtmlMethod(record.richExcerpt)"
          />
        </div>
      </div>
    </g-link>
  </div>
</template>

<script>
import { renderHtmlMethod } from "~/helpers/contentful";

export default {
  methods:{
    renderHtmlMethod(input) {
      return renderHtmlMethod(input);
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
