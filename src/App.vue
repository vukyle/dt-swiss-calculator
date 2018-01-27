<template lang="html">
      <div>
        <app-header></app-header>
        <app-intro></app-intro>
        <div class='main-container'>
            <app-wheel v-bind:title="frontWheel.title"></app-wheel>
            <app-wheel v-bind:title="rearWheel.title"></app-wheel>
        </div>
      </div>
</template>

<script>
    import Header from './components/Header.vue';
    import Intro from './components/Intro.vue';
    import Wheel from './components/Wheel.vue';
export default {
    data() {
        return {
            frontWheel: {
                title: 'Front Wheel'
            },
            rearWheel: {
                title: 'Rear Wheel'
            }
        }
    },
    components: {
        appHeader: Header,
        appIntro: Intro,
        appWheel: Wheel
    }
}
</script>

<style lang="sass">
    $red: #da110a
    .main-container
        display: flex
        justify-content: space-between
        width: 70%
        margin: 0 auto

</style>
