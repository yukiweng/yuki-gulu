<template>
    <svg class="icon">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>

<script>
    import './svg.js'
    export default {
        name: "g-icon",
        props:['name']
    }
</script>

<style lang="scss" scoped>
    .icon{
        width: 1em;
        height: 1em;
        fill:currentColor;
        vertical-align: middle;
    }
</style>