.<template>
  <div class="content">
    <!-- <thermal-cam></thermal-cam> -->
    <!-- <div class="content__title">My Car Tracking - Temperature Sensor</div> -->
    <router-view :isShowCamView=isShowCamView></router-view>
  </div>
</template>

<script>
// import ThermalCam from '../../views/ThermalCam.vue';

export default {
  name: "FixContent",
  // components: { ThermalCam },

  data() {
    return {
      isShowCamView: true
    }
  },

  methods: {
    setIsShowCamView(value) {
      this.isShowCamView = value;
    }
  },
}
</script>

<style scoped>
   .content {
    width: 100%;
   }
</style>