<template lang="html">
      <div class="wheel-column">
          <div class="wheel-header spacing bg--grey">
              {{ title }}
          </div>
          <appRim class="bg--grey"></appRim>
      </div>
</template>

<script>
import Rim from './Rim';

export default {
    props: {
        title: {
            type: String,
            default: 'Wheel'
        }
    },
    components: {
        appRim: Rim
    }
}
</script>

<style lang="sass">
    @import '../css/index.sass'
    .bg--grey
        background: #dddddd
    .spacing
        margin: 0 0 5px 0
    .wheel-column
        width: 49%
    .dropdown-menu
        width: 95%
        margin: 5px
        padding: 5px
        border: none
        border-radius: 50px
    input
        margin: 5px
        padding: 5px
        border: none
        border-radius: 50px

</style>
