<template>
    <div class="themal-cam">
        <div class="cam__title">Car Themal Camera</div>
        <div class="cam__stream">
            <video autoplay muted loop>
                <source src="../assets/Videos/vid1.webm" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <div class="cam__detail">
            <div class="detail__header">Detail:</div>
            <div class="detail__content">
                <li>Camera Name: <b>My Camera</b> </li>
                <li>Camera Serial Number: <b>SC000110001</b> </li>
                <li>Active Date: <b>Dec 1, 2022</b></li>
                <li class="detail--highlight">Current Highest Temperature:
                  <span>42&#8451;</span>
                </li>
                <li class="detail--highlight">Current Lowest Temperature:
                  <span>10&#8451;</span>
                </li>
                <li class="detail--highlight">Current Average Temperature:
                  <span>37&#8451;</span>
                </li>
                <li>Highest Temperature: <b>100&#8451;</b></li>
                <li>Lowest Temperature: <b>5&#8451;</b></li>
                <li>Average Temperature: <b>25&#8451;</b></li>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "ThemalCam",
};
</script>

<style scoped>
.themal-cam {
  width: calc(100% - 16px);
  height: calc(100% - 16px);
  display: flex;
  flex-wrap: wrap;
  margin: 8px;
  box-sizing: border-box;
  background-color: lightblue;
  position: relative;
}

.cam__title {
  width: 100%;
  height: 48px;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-top: 8px;
  padding: 16px;
  box-sizing: border-box;
}

.cam__stream {
  background-color: black;
  color: white;
  flex: 1;
  display: flex;
  max-height: calc(100% - 64px);
  margin-bottom: 8px;
}

.cam__detail {
  width: 384px;
  height: calc(100% - 64px);
  background-color: white;
  margin-bottom: 8px;
}

.detail__header {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  height: 32px;
  font-size: 18px;
}

.detail__content {
    padding: 8px;
    font-size: 14px;
}
.detail__content li {
  padding: 4px 8px;
}

.detail--highlight {
  margin: 8px 0px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 139, 0.850);
  color: white;
}
.detail--highlight span {
  padding: 4px;
  font-weight: bolder;
}
</style>