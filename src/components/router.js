import {createRouter, createWebHashHistory} from "vue-router";
import AggregateHome from "@/components/aggregate-home.vue"
import reg from "@/components/register.vue"
import details from "@/components/aggregate-details-1.vue"
import carousel from "@/components/Carousel.vue";
import login from "@/components/login.vue";
import shop from "@/components/shop.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            //首页
            path: "/",
            component: AggregateHome,
        },
        {
            path: "/register",
            component: reg
        },
        {
            path: "/login",
            component: login
        },
        {
            path: "/details",
            component: details
        },
        {
            path: "/shop",
            component: shop
        }
        // {
        //     path: "/AggregateHome",
        //     component: carousel
        // }
    ]
});
export default router;