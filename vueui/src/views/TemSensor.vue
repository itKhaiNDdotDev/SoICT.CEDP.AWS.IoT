<template>
    <div class="thermal-cam">
        <div class="sensor__title">My Car Tracking - Temperature Sensor</div>
        <div class="sensor__dashboard">
            <b style="font-size: 18px;  padding: 16px; text-align: center;">Dashboard</b>
            <img class="dashboard--fake" src="./../assets/chart.png" alt="" srcset="">
        </div>
        <div class="sensor__detail">
            <div class="deatail__current">
              <div class="current__tem">90&#8451;</div>
              <div class="current__time">
                <div>Jan 1, 2023</div>
                <div>03:00 PM</div>
              </div>
              <div class="current__status">Unusually hot!</div>
            </div>
             <div class="detail__content">
                <li>Sensor Name: <b>Temperature Sensor TS1</b> </li>
                <li>Camera Serial Number: <b>STS0011001</b> </li>
                <li>Active Date: <b>Dec 18, 2022</b></li>
                <div class="detail__stats">
                  <div class="stats__title">Last 12hrs Statistics:</div>
                  <li>Highest Temperature: <b>103&#8451;</b> </li>
                  <li>Lowest Temperature: <b>12&#8451;</b> </li>
                  <li>Average Temperature: <b>25&#8451;</b></li>
                </div>
             </div>
             <div class="detail__threshold">
              <div class="threshold__title">The set safe temperature threshold:</div>
              <div class="threshold__range">from <b>-5&#8451;</b> to <b>70&#8451;</b></div>
             </div>
             <div class="detail__action">
              <button class="text-button btn--dark">Detail and Configure</button>
            </div>     
        </div>
    </div>
</template>

<script>
export default {
  name: "TemSensor",
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

.sensor__title {
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

.sensor__dashboard {
  background-color: black;
  color: white;
  flex: 1;
  display: flex;
  flex-direction: column;
  max-height: calc(100% - 56px);
  margin-bottom: 8px;
}

.sensor__detail {
  width: 384px;
  height: calc(100% - 56px);
  background-color: white;
  margin-bottom: 8px;
}

.deatail__current {
  background-color: darkblue;
  color: white;
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 60% 40%;
  height: 128px;
}
.current__tem {
  grid-row-start: 1;
  grid-row-end: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: bold;
}
.current__time {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.current__time div {
  font-size: 24px;
}
.current__status {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-style: italic;
  color: rgb(255, 128, 128);
}

.detail__content {
    padding: 8px;
    font-size: 14px;
}
.detail__content li {
  padding: 4px 8px;
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
.detail__threshold .threshold__range {
  margin: 8px 16px;
  font-size: 18px;
}
.detail__threshold .threshold__range b {
  font-size: 18px;
}

.detail__action {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 8px;
}

.dashboard--fake {
  width: 100%;
}
</style>

