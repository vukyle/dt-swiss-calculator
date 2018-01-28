<template lang="html">
    <div class="spoke-length__container">
        <div>
            <h3 class="spoke-length__header spoke-left">Spoke length left</h3>
            <input type="text" placeholder="--">
        </div>
        <div>
            <h3 class="spoke-length__header spoke-left">Spoke length left</h3>
            <input type="text" placeholder="--">
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="sass">
    @import '../css/index.sass'
    .spoke-length__container
        color: #ffffff
        display: flex
        justify-content: space-between
        & > div
            width: 49%
    .spoke-length__header
        font-size: 1em
        text-align: center
        background-color: #777777
</style>
