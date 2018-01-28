<template lang="html">
      <div class="wheel-column">
          <div class="wheel-header spacing bg--grey">
              {{ title }}
          </div>
          <app-rim class="bg--grey spacing"></app-rim>
          <app-hub class="bg--grey spacing"></app-hub>
          <app-spoke class="bg--grey spacing"></app-spoke>
          <app-nipple class="bg--grey spacing"></app-nipple>
          <app-spoke-length class="bg--grey"></app-spoke-length>
      </div>
</template>

<script>
    import Rim from './Rim';
    import Hub from './Hub';
    import Spoke from './Spoke';
    import Nipple from './Nipple';
    import SpokeLength from './SpokeLength';

export default {
    props: {
        title: {
            type: String,
            default: 'Wheel'
        }
    },
    components: {
        appRim: Rim,
        appHub: Hub,
        appSpoke: Spoke,
        appNipple: Nipple,
        appSpokeLength: SpokeLength
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
    label
        display: block
        font-size: .7em
    //styles the text inputs
    .input
        //width: 25%
        position: relative
        &[data-placeholder]::after
            content: attr(data-placeholder)
            position: absolute
            bottom: 0px
            right: 20px
            color: #777777

</style>
