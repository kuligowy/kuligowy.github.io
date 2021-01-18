<template>
  <div class="p-4 w-full">
    <g-link
      :to="record.path">
      <div
        class="h-full border-2 border-gray-200 rounded-lg overflow-hidden relative hover:bg-shark-50 hover:bg-opacity-60">
        <div class="p-2 text-site-10">
          <h1
            class="title-font text-2xl font-medium text-gray-900 mb-3"
            :class="{ 'mb-2': !record.excerpt }">
            <span class="uppercase">{{ record.title }}</span>
          </h1>
          <div
            v-if="record.excerpt"
            class="text-center leading-relaxed text-gray-800 text-left"
            v-html="record.excerpt"/>
        </div>
      </div>
    </g-link>
  </div>
</template>

<script>
export default {
  props: {
    cardSize: {
      type: String,
      default: "sm:w-1/2 lg:w-1/3",
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
