<template lang="html">
      <div class="intro">
          <div class="intro__container">
              <div class="intro__body">
                  <h1 class="intro__body-header">CALCULATOR</h1>
                  <p>
                    Use the menu to select the rim, hub, spoke and nipple. As soon as you select a product, the calculator will automatically suggest suitable products. By opening the selection menu, however, you are free to choose any other product.
                    <br><br>
                    Only DT Swiss products are featured in this program.
                    However, you can also calculate the spoke lengths for other manufacturers under “User defined”.
                    Simply enter the dimensions in the empty fields.
                  </p>
              </div>
              <div>
                  <button class="new-calculation-button">NEW CALCULATION</button>
              </div>

          </div>
      </div>
</template>

<script>
export default {
}
</script>

<style lang="sass">
    @import '../css/index.sass'
    .intro
        &__container
            width: 70%
            margin: 0 auto
            display: flex
            justify-content: space-between
            align-items: center
        &__body
            width: 50%
    .new-calculation-button
        background-color: $red
        padding: 10px 20px
        border-radius: 50px
        box-shadow: none
        color: white
        font-size: .8em

</style>
