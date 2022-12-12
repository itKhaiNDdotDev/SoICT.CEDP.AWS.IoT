<template>
    <div class="sidebar">
        <div class="sidebar__top">
            <div style=" background-color: darkblue; color: white; border-right: 8px solid blue; width: calc(100% + 8px);" class="sidebar__item">Car Themal Camera</div>
            <div class="sidebar__item">Device 123</div>
            <div class="sidebar__item--create">Create New Device</div>
        </div>
        <div class="sidebar__bottom">
            <div class="sidebar__item">Settings</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FixSidebar",

}
</script>

<style scoped>
    * {
        background-color: lightskyblue;
        color: black;
    }

    .sidebar {
        margin: 8px 0px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 16px;
        font-weight: bold;
    }

    .sidebar__item {
        height: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0px 16px;
        box-sizing: border-box;
    }
    .sidebar__item:hover {
        background-color: blue;
        color: white;
    }


    .sidebar__item:focus {
        background-color: darkblue;
        color: white;
    }

    .sidebar__item--create {
        height: 32px;
        display: flex;
        flex-direction: column;
        background-color: black;
        color: lightblue;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        margin: 4px 8px;
    }
    .sidebar__item--create:hover {
        background-color: blue;
        color: white;
    }
    .sidebar__item--create:focus {
        background-color: darkblue;
        color: white;
    }
</style>