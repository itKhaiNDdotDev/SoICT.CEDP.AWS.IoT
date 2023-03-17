<template>
  <div class="sidebar">
    <div class="sidebar__top">
      <router-link
        to="/mycar"
        class="sidebar__item"
        :class="{ itemExpand: isShowSubItem }"
      >
        <div class="item__title" @click="toogleItem">My Car Tracking</div>
        <!-- <router-link v-if="isShowSubItem" to="/mycar/thermal-cam" class="sidebar__sub-item">Thermal Camera</router-link> -->
        <!-- <router-link v-if="isShowSubItem" to="/mycar/tem-sensor" class="sidebar__sub-item">Temperature Sensor</router-link> -->
        <div
          v-if="isShowSubItem"
          @click="onClickCam"
          class="sidebar__sub-item"
          :class="{ subItemActive: isShowCamView }"
        >
          Thermal Camera
        </div>
        <div
          v-if="isShowSubItem"
          @click="onClickSensor"
          class="sidebar__sub-item"
          :class="{ subItemActive: !isShowCamView }"
        >
          Temperature Sensor
        </div>
      </router-link>
      <router-link to="/" class="sidebar__item">
        <div class="item__title" @click="isShowSubItem = false">Device 123</div>
      </router-link>
      <router-link
        to="/"
        class="sidebar__item--create"
        @click="isShowSubItem = false"
        >Create New Device</router-link
      >
    </div>
    <div class="sidebar__bottom">
      <router-link
        to="/"
        class="sidebar__item item--setting"
        @click="isShowSubItem = false"
        >Settings</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "FixSidebar",

  data() {
    return {
      isShowSubItem: false,
      isShowCamView: true,
    };
  },

  methods: {
    toogleItem() {
      this.isShowSubItem = !this.isShowSubItem;
    },

    onClickCam() {
      // Display component Cam
      this.$emit("showCamView", true);

      // Highlight Menu Cam
      this.isShowCamView = true;

      // Bỏ highlight Menu Sensor
    },

    onClickSensor() {
      // Display component sensor
      this.$emit("showCamView", false);
      this.isShowCamView = false;
    },
  },

  mounted() {
    /**Chưa dùng */
    if (this.$router.currentRoute.path.endsWith("/mycar")) {
      this.$router.replace("/mycar/thermal-cam");
    }
    console.log(this.$router.currentRoute.path);
  },
};
</script>

<style scoped>
* {
  /* background-color: lightskyblue; */
  background-color: whitesmoke;
  color: black;
}

.sidebar {
  margin: 2px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: bold;
}

.sidebar__item {
  display: flex;
  flex-direction: column;
  text-decoration: none;
}
.sidebar__item:hover {
  background-color: blue;
  /* color: white; */
}
.sidebar__item:focus {
  background-color: darkblue;
  color: white;
}

.sidebar__item .item__title {
  height: 40px;
  padding: 0px 16px 0px 24px;
  background-image: url(./../../assets/Icons/chevron-right-solid.svg);
  background-repeat: no-repeat;
  background-size: 16px;
  background-position: 0px center;
  background-color: inherit;
  color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 18px;
}

.sidebar .item--setting {
  /**Nên cân nhắc dung chung sidebar__item */
  background-image: url(./../../assets/Icons/gear-solid.svg);
  background-repeat: no-repeat;
  background-position: 8px center;
  background-size: 16px;
  padding-left: 32px;
  font-size: 18px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.sidebar .router-link-active {
  /**Xem lại: nó là expand và khi thu về đang active*/
  background-color: darkblue;
  color: white;
  border-right: 8px solid blue;
  width: calc(100% + 8px); /*8px to quá*/
}

.sidebar__item--create {
  height: 32px;
  display: flex;
  flex-direction: column;
  background-color: black;
  /* color: lightblue; */
  color: white;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin: 4px 8px;
  text-decoration: none;
  font-size: 18px;
}
.sidebar__item--create:hover {
  background-color: blue;
  color: white;
}
.sidebar__item--create:focus {
  background-color: darkblue;
  color: white;
}

.sidebar__sub-item {
  height: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 16px 0px 28px;
  box-sizing: border-box;
  text-decoration: none;
  background-color: rgb(21, 21, 187);
  color: white;
}
.sidebar__sub-item:hover {
  background-color: blue;
}
.sidebar__sub-item.subItemActive {
  border: 2px solid lightblue;
  box-sizing: border-box;
}

.sidebar .itemExpand {
  height: 104px;
  display: flex;
  flex-direction: column;
}
.sidebar .itemExpand .item__title {
  background-image: url(./../../assets/Icons/chevron-down-solid.svg);
  background-position: 2px center;
}
</style>