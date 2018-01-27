<template lang="html">
    <div>
        <h4>2. HUB</h4>
        <div class="">
            <label for="rim-type">TYPE</label>
            <select class="center dropdown-menu" id="rim-type">
            <option value="">User Defined</option>
            <option value="">DT Swiss</option>
            </select>
        </div>

        <div>
            <label for="rim-model">MODEL</label>
            <select class="center dropdown-menu" id="rim-model">
            </select>
        </div>

        <div class="wrapper">
            <div class="input"data-placeholder="mm">
                <label for="pitch-circle-left">PITCH CIRCLE LEFT</label>
                <input
                type="text"
                name="pitch-circle-left"
                id="pitch-circle-left"
                value="">
            </div>

            <div class="input" data-placeholder="mm">
                  <label for="pitch-circle-right">PITCH CIRCLE RIGHT</label>
                  <input
                      type="text"
                      name="pitch-circle-right"
                      id="pitch-circle-right">
            </div>
        </div>
        <div class="wrapper">
            <div class="input"data-placeholder="mm">
                <label for="flange-distance-left">FLANGE DISTANCE LEFT</label>
                <input
                    type="text"
                    name="flange-distance-left"
                    id="flange-distance-left"
                    value="">
            </div>

            <div class="input" data-placeholder="mm">
                <label for="flange-distance-right">FLANGE DISTANCE RIGHT</label>
                <input
                    type="text"
                    name="flange-distance-right"
                    id="flange-distance-right">
            </div>
        </div>

        <div class="wrapper">
            <div class="input"data-placeholder="mm">
                <label for="spoke-hole">SPOKE HOLE</label>
                <input
                    type="text"
                    name="spoke-hole"
                    id="spoke-hole"
                    value="">
            </div>

            <div class="input" data-placeholder="g">
                <label for="hub-weight">WEIGHT</label>
                <input
                    type="text"
                    name="hub-weight"
                    id="hub-weight">
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

</style>
