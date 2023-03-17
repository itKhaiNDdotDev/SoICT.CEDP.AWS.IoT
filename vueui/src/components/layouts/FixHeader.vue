<template>
  <div class="header">
    <div class="header__left">
      <div class="logo-hust-soict"></div>
      <div class="logo-aws"></div>
      <div class="header--title">Thermal Camera Data Monitor System on AWS IoT Platform</div>
    </div>
    <div class="header__right">
      <noti-popup></noti-popup>
      <div class="header--account">
        <div class="account--name">KhaiND</div>
        <div class="account--image"></div>
      </div>
    </div>
  </div>
</template>

<script>
import NotiPopup from './../items/NotiPopup.vue';

export default {
    name: "FixHeader",
    components: {
      NotiPopup
    }
}
</script>

<style scoped>
    .header {
      grid-column-start: 1;
      grid-column-end: 3;
      display: flex;
      justify-content: space-between;
      background-color: white;
      box-shadow: 8px 8px 16px lightgray;
    }

    .header__left, .header__right{
      display: flex;
      align-items: center;
    }

    .logo-hust-soict {
      background-image: url(../../assets/Images/logo_hust_soict.png);
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      width: 96px;
      height: 64px;
      margin-left: 16px;
    }

    .logo-aws {
      background-image: url(../../assets/Images/logo_aws.png);
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      width: 48px;
      height: 64px;
      margin-left: 16px;
    }

    .header--title {
      margin-left: 16px;
      display: flex;
      align-items: center;
      font-size: 20px;
      font-weight: bold;
    }

    .header--account {
      height: 40px;
      background-color: black;
      color: #FFFFFF;
      border-radius: 8px;
      display: flex;
      padding: 0px 8px;
      align-items: center;
      margin-right: 16px;
    }

    .account--name {
      font-size: 16px;
    }

    .account--image {
      background-image: url(../../assets/Images/KhaiND.png);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-left: 8px;
    }
</style>