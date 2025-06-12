import {createRouter, createWebHashHistory} from "vue-router";
import aggregate from "@/components/aggregate.vue"
import reg from "@/components/register.vue"
import carousel from "@/components/Carousel.vue";
import login from "@/components/login.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            //首页
            path: "/",
            component: aggregate,
        },
        {
            path: "/register",
            component: reg
        },
        {
            path: "/login",
            component: login
        },
        // {
        //     path: "/aggregate",
        //     component: carousel
        // }
    ]
});
export default router;