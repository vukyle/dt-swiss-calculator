<template lang="html">
    <div class="header">
        <div class="header-wrapper">
            <div>
                <img class="logo"src="../img/dt-logo.png" alt="">
                <h4 class="header-wrapper__h4">SPOKE CALCULATOR</h4>
            </div>
            <div>
                <button class="calculator-button header-wrapper__button">CALCULATOR</button>
                <button class="contact-button header-wrapper__button">CONTACT &amp; HELP</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="sass">
    $red: #da110a
    .header
        background-color: $red
    .header-wrapper
        margin: 0 auto
        display:  flex
        justify-content: space-between
        align-items: flex-end
        height: 60px
        width: 70%
        background-color: $red
        color: white
        &__h4
            margin: 0
            display: inline-block
        &__button
            border: none
            border-radius: 0px
            box-shadow: none
            margin: 0 5px
            height: 35px
            color: black
            padding: 10px 5px 0 5px
    .calculator-button
        background-color: white
    .contact-button
        color: white

</style>
