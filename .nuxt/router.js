import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a7811506 = () => interopDefault(import('../pages/policymaker/index.vue' /* webpackChunkName: "pages/policymaker/index" */))
const _43c931a6 = () => interopDefault(import('../pages/policymaker/download.vue' /* webpackChunkName: "pages/policymaker/download" */))
const _0b11e2b9 = () => interopDefault(import('../pages/policymaker/download/dnssecuritytxt.vue' /* webpackChunkName: "pages/policymaker/download/dnssecuritytxt" */))
const _3b9ade62 = () => interopDefault(import('../pages/policymaker/download/safe-harbor-clause.vue' /* webpackChunkName: "pages/policymaker/download/safe-harbor-clause" */))
const _2387d6ce = () => interopDefault(import('../pages/policymaker/download/securitytxt.vue' /* webpackChunkName: "pages/policymaker/download/securitytxt" */))
const _521a8820 = () => interopDefault(import('../pages/policymaker/download/vdp.vue' /* webpackChunkName: "pages/policymaker/download/vdp" */))
const _09ee0f3f = () => interopDefault(import('../pages/policymaker/introduction.vue' /* webpackChunkName: "pages/policymaker/introduction" */))
const _2d072050 = () => interopDefault(import('../pages/policymaker/organization.vue' /* webpackChunkName: "pages/policymaker/organization" */))
const _884bd570 = () => interopDefault(import('../pages/policymaker/settings.vue' /* webpackChunkName: "pages/policymaker/settings" */))
const _65dac4fa = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/policymaker",
    component: _a7811506,
    name: "policymaker___en"
  }, {
    path: "/policymaker/download",
    component: _43c931a6,
    name: "policymaker-download___en",
    children: [{
      path: "dnssecuritytxt",
      component: _0b11e2b9,
      name: "policymaker-download-dnssecuritytxt___en"
    }, {
      path: "safe-harbor-clause",
      component: _3b9ade62,
      name: "policymaker-download-safe-harbor-clause___en"
    }, {
      path: "securitytxt",
      component: _2387d6ce,
      name: "policymaker-download-securitytxt___en"
    }, {
      path: "vdp",
      component: _521a8820,
      name: "policymaker-download-vdp___en"
    }]
  }, {
    path: "/policymaker/introduction",
    component: _09ee0f3f,
    name: "policymaker-introduction___en"
  }, {
    path: "/policymaker/organization",
    component: _2d072050,
    name: "policymaker-organization___en"
  }, {
    path: "/policymaker/settings",
    component: _884bd570,
    name: "policymaker-settings___en"
  }, {
    path: "/",
    component: _65dac4fa,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
