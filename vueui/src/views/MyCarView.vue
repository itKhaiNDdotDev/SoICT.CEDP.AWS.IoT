<template>
    <ThermalCam v-if="isShowCamView"/>
    <TemSensor v-else/>
</template>

<script>
import TemSensor from './TemSensor.vue'
import ThermalCam from './ThermalCam.vue'

export default {
    name: "MyCar",
    components: { ThermalCam, TemSensor },

    props: ["isShowCamView"],
}
</script>

<style>
    
</style>