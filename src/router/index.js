// Composables
import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from '../store/app';

function isAuthenticated() {
  const userStore = useUserStore();

  return userStore.userInfo !== null;
}

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "/menu",
        name: "Menu",
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/Menu.vue"),
      },
      {
        path: "/profile",
        name: "Profile",
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/Profile.vue"),
      },
      {
        path: "/qrcode",
        name: "QrCode",
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/QrCode.vue"),
      },
      {
        path: "/scan",
        name: "Scan",
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/Scan.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (Home-[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    // route level code-splitting
    // this generates a separate chunk (Home-[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("@/views/Register.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  // Проверяем, нуждается ли маршрут в аутентификации
  if (to.name !== "Login" && to.name !== "Register" && !isAuthenticated()) {
    // Перенаправление на страницу входа, если пользователь не аутентифицирован
    next({ name: "Login" });
  } else if (
    (to.name === "Login" || to.name === "Register") &&
    isAuthenticated()
  ) {
    // Если пользователь аутентифицирован, но пытается перейти на страницу входа или регистрации,
    // перенаправляем его на главную страницу
    next({ name: "Profile" }); // Или на другую страницу, которую вы считаете главной для аутентифицированных пользователей
  } else {
    // Во всех остальных случаях выполняется нормальный переход на запрашиваемый маршрут
    next();
  }
});

export default router;
