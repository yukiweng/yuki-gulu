<template>
    <div class="demo">
        <g-row class="demoRow">
            <g-col span=8 :pc={span:10}><div  class="demoCol">8</div></g-col>
            <g-col span=8 offset=8 :pc={span:12,offset:2}><div  class="demoCol">8</div></g-col>
        </g-row>
        <g-row class="demoRow">
            <g-col span=6 :ipad={span:6}><div class="demoCol">6</div></g-col>
            <g-col span=6 offset=2 :ipad={span:4}><div class="demoCol">6</div></g-col>
            <g-col span=6 offset=4 :ipad={span:12,offset:0}><div class="demoCol">6</div></g-col>
        </g-row>
    </div>
</template>

<script>
    import Row from '../../../src/grid/row'
    import Col from '../../../src/grid/col'
    export default {
        components:{
            'g-row':Row,
            'g-col':Col
        }
    }
</script>

<style lang="scss" scoped>
    .demo /deep/ *{
        box-sizing: border-box;
    }
</style>