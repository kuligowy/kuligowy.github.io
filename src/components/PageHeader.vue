<template>
  <section
    class="relative z-0 h-96 flex flex-wrap content-center page-header justify-center"
    :class="{
      'bg-shark-700 text-white' : hasImage,
      'bg-gray-200 border-b border-gray-400' : !hasImage
    }">
    <slot name="image">
      <div class="bg-pattern" />
    </slot>
    <div class="flex z-10 w-1/2"> 
      <div class="container text-center mx-auto text-shark-100"
      :class="{'border-2 py-8': useBorder}">
        <div>
          <slot name="content" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    border:{
      type: String,
      default: 'true'
    }
  },
  data () {
    return {
      hasSlot: false
    };
  },
  computed: {
    useBorder(){
     return  this.border==='true'
    },
    hasImage () {
      return !!this.$slots.image || !!this.$scopedSlots.image;
    }
  }
}
</script>
