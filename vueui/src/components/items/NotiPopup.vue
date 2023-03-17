<template>
    <div class="noti-wrapper">
        <div @click="toggleNoti" class="icon-noti"></div>
        <div @click="toggleNoti" class="noti--count-new">9+</div>
        <div v-if="isShowNoti" class="noti-list">
            <div class="noti-item">
                <div class="noti__title">My Car - Thermal Camera</div>
                <div class="noti__msg">Cảnh báo! Nhiệt độ cao bất thường: <b>60&#8451;</b>.</div>
                <div class="noti__time">Dec, 18 2022 - 11:30 AM</div>
            </div>
            <div class="noti-item">
                <div class="noti__title">AWS System</div>
                <div class="noti__msg">Đã có bản cập nhật mới, vui lòng refresh các certificate và cài đặt lại Device SDKs.</div>
                <div class="noti__time">Dec, 18 2022 - 11:30 AM</div>
            </div>
            <div class="noti-item">
                <div class="noti__title">My Car - Thermal Camera</div>
                <div class="noti__msg">Cảnh báo! Nhiệt độ thấp bất thường: <b>60&#8451;</b>.</div>
                <div class="noti__time">Dec, 18 2022 - 11:30 AM</div>
            </div>
            <div class="noti-item">
                <div class="noti__title">Device123</div>
                <div class="noti__msg">Cảnh báo! Nhiệt độ cao bất thường: <b>60&#8451;</b>.</div>
                <div class="noti__time">Dec, 18 2022 - 11:30 AM</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "NotiPopup",

    data() {
        return {
            isShowNoti: false
        }
    },

    methods: {
        toggleNoti() {
            this.isShowNoti = !this.isShowNoti;
        },
    },
}
</script>

<style scpoed>
    .noti-wrapper {
        margin-right: 16px;
        position: relative;
        cursor: pointer;
    }

    .icon-noti {
        background-image: url(./../../assets/Icons/noti.svg);
        width: 40px;
        height: 40px;
        background-repeat: no-repeat;
    }

    .noti--count-new {
        background-color: red;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        position: absolute;
        top: 0px;
        right: 0px;
        color: white;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;
    }

    .noti-list {
        position: absolute;
        top: 100%;
        left: -196px;
        background-color: #e1edf3;
        box-shadow: 8px 8px 16px lightgray;
        border-radius: 4px;
        padding: 8px;
        width: 256px;
        max-height: 512px;
        z-index: 1;
    }

    .noti-item {
        padding: 8px;
        border-radius: 8px;
        margin: 4px 0px;
    }
    .noti-item:hover {
        background-color: white;
    }

    .noti__title {
        font-weight: bold;
        padding: 4px;
        text-align: center;
    }
    .noti__time {
        text-align: right;
        color: rgb(41, 27, 27);
    }
</style>