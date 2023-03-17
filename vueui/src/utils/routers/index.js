import { createRouter, createWebHashHistory } from 'vue-router';
import ThermalCam from './../../views/ThermalCam.vue';
import TemSensor from './../../views/TemSensor.vue';
import MyCar from './../../views/MyCarView.vue';

const routes = [
    // {   path: '/',  component: App    },
    {
        path: '/mycar',
        children: [
            {   path: '/mycar/thermal-cam', component: ThermalCam  },
            {   path: '/mycar/tem-sensor', component: TemSensor  },
        ]
    },
    { path: '/mycar', component: MyCar }
    
];
const router = createRouter ({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
});

export default router;