<template>
    <div>
        <div>
            <itemcontainer father-component="item"></itemcontainer>
        </div>
    </div>
</template>

<script>
    import itemcontainer from '../components/itemcontainer'
    export default {
        name: "item",
        components:{
            itemcontainer
        },
    }
</script>

<style scoped>

</style>
