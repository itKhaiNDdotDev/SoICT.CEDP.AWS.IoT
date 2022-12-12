<template>
    <div class="noti-wrapper">
        <div @click="toggleNoti" class="icon-noti"></div>
        <div @click="toggleNoti" class="noti--count-new">9+</div>
        <div v-if="isShowNoti" class="noti-list">
            <div class="noti-item">Cảnh báo! Nhiệt độ cao bất thường: 60&#8451;.</div>
            <div class="noti-item">Cảnh báo! Nhiệt độ thấp bất thường: 60&#8451;.</div>
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
        top: calc((100% + 8px));
        left: -196px;
        background-color: #CCEEFF;
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
    }
    .noti-item:hover {
        background-color: white;
    }
</style>