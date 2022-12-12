.<template>
  <div class="content">
    <themal-cam></themal-cam>
  </div>
</template>

<script>
import ThemalCam from './../../views/ThemalCam.vue';

export default {
  name: "FixContent",
  components: { ThemalCam },
}
</script>

<style scoped>
   .content {
    width: 100%;
   }
</style>