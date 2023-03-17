<template>
    <div class="thermal-cam">
        <div class="cam__title">My Car Tracking - Thermal Camera</div>
        <div class="cam__stream">
            <video autoplay muted loop>
                <source src="../assets/Videos/vid1.webm" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <div class="cam__detail">
            <div class="deatail__current">
              <div class="current__tem">
                  <li> Current Highest Point: <b>45&#8451;</b> </li>
                  <li>Current Lowest Point: <b>10&#8451;</b> </li>
                  <li>Current Average Point: <b>37&#8451;</b></li>
              </div>
              <div class="current__time">Jan 1, 2023 &nbsp; 03:00 PM</div>
              <div class="current__status">Normal, safe!</div>
            </div>
             <div class="detail__content">
                <li>Camera Name: <b>My Camera</b> </li>
                <li>Camera Serial Number: <b>SC000110001</b> </li>
                <li>Active Date: <b>Dec 1, 2022</b></li>
                <div class="detail__stats">
                  <div class="stats__title">Last 12hrs Statistics:</div>
                  <li>Highest Temperature Point: <b>103&#8451;</b> </li>
                  <li>Lowest Temperature Point: <b>12&#8451;</b> </li>
                  <li>Average Temperature Point: <b>25&#8451;</b></li>
                </div>
            </div>
            <div class="detail__threshold">
              <div class="threshold__title">The set safe temperature threshold:</div>
              <div class="threshold__range">
                <li>Highest Point per frame: from <b>40&#8451;</b> to <b>80&#8451;</b></li>
                <li>Lowest Point per frame: from <b>-10&#8451;</b> to <b>5&#8451;</b></li>
                <li>Points per frame Average Temperature: <br> from <b>5&#8451;</b> to <b>35&#8451;</b></li>
              </div>
            </div>
            <div class="detail__action">
              <button class="text-button btn--dark">Detail and Configure</button>
            </div>     
        </div>
    </div>
</template>

<script>
export default {
  name: "ThermalCam",
};
</script>

<style scoped>
.thermal-cam {
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  display: flex;
  flex-wrap: wrap;
  margin: 2px;
  box-sizing: border-box;
  background-color: rgba(184, 231, 247, 0.912);
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
  max-height: calc(100% - 56px);
  margin-bottom: 8px;
}

.cam__detail {
  width: 384px;
  height: calc(100% - 56px);
  background-color: white;
  margin-bottom: 8px;
  /* box-sizing: border-box;
  max-height: calc(100% - 56px); */
}

.detail__content {
    padding: 8px;
    font-size: 14px;
}
.detail__content li {
  padding: 4px 8px;
}

.deatail__current {
  background-color: darkblue;
  color: white;
  display: grid;
  grid-template-columns: 65% 35%;
  grid-template-rows: 80% 20%;
  height: 146px;
}

.deatail__current .current__tem {
  grid-column-start: 1;
  grid-column-end: 3;
  margin-top: 8px;
}
.deatail__current .current__tem li, .deatail__current .current__tem b {
  font-size: 20px;
}
.deatail__current .current__tem li, .deatail__current .current__tem b  {
  padding: 4px 8px;
}

.deatail__current .current__time {
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.deatail__current .current__status {
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: italic;
  color: rgb(128, 255, 128);
}

.detail__content .stats__title {
  font-weight: bolder;
  margin-top: 16px;
  margin-bottom: 6px;
}

.detail__threshold {
  border: 4px solid darkblue;
}
.detail__threshold .threshold__title {
  font-weight: bold;
  padding: 4px 8px;
}
.detail__threshold .threshold__range li {
  margin: 4px 16px;
}

.detail__action {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 8px;
}
</style>