import {createRouter, createWebHashHistory} from "vue-router";
import home from "app.vue"
import reg from "@/components/register.vue"

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            //首页
            path: "/",
            component: home
        },
        {
            path: "/register",
            component: reg
        }
    ]
});
export default router;