<template lang="html">
  <div>
    <h4>1. RIM</h4>
    <label for="rim-type">TYPE</label>
    <select class="center dropdown-menu" id="rim-type">
    <option value="">User Defined</option>
    <option value="">DT Swiss</option>
    </select>

    <label for="rim-model">MODEL</label>
    <select class="center dropdown-menu" id="rim-model">

    </select>

    <div class="wrapper">
        <div>
            <label for="erd">DIAMETER/ERD</label>
            <input type="text" name="erd" id="erd" value="">
        </div>

        <div>
            <label for="weight">WEIGHT</label>
            <input type="text" name="weight" id="weight">
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
    label
        display: block
        font-size: .9em
    .wrapper
        width: 95%
        margin: 0 auto
        padding-bottom: 10px
        display: flex
        justify-content: space-between
</style>
