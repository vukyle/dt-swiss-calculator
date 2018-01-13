<template lang="html">
      <div>
          <div class="wheel-header">
              {{ title }}
          </div>
      </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Wheel'
        }
    }
}
</script>

<style lang="sass">
</style>
