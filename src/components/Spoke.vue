<template lang="html">
    <div>
        <h4>3. SPOKES</h4>
        <div class="">
            <label for="spoke-left">SPOKE LEFT</label>
            <select class="center dropdown-menu" id="spoke-left">
            <option value="">Choose spoke</option>
            <option value="">DT Swiss</option>
            </select>
        </div>

        <div class="">
            <label for="spoke-right">SPOKE RIGHT</label>
            <select class="center dropdown-menu" id="spoke-right">
            <option value="">Choose spoke</option>
            <option value="">DT Swiss</option>
            </select>
        </div>

        <div>
            <label for="spoke-count">SPOKE COUNT</label>
            <select class="center dropdown-menu" id="spoke-count">
                <option value="16">16</option>
                <option value="20">20</option>
                <option value="24">24</option>
                <option value="28">28</option>
                <option value="32">32</option>
                <option value="36">36</option>
                <option value="40">40</option>
            </select>
        </div>

        <div class="wrapper">
            <div>
                <label for="spoke-cross-left">NUMBER OF INTERSECTIONS LEFT</label>
                <select class="dropdown-menu" name="spoke-cross-left">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>

            <div>
                <label for="spoke-cross-right">NUMBER OF INTERSECTIONS RIGHT</label>
                <select class="dropdown-menu" name="spoke-cross" id="spoke-cross-right">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>

        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="sass">
</style>
