import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _773cd10c = () => interopDefault(import('../pages/policymaker/index.vue' /* webpackChunkName: "pages/policymaker/index" */))
const _00c5a584 = () => interopDefault(import('../pages/policymaker/download.vue' /* webpackChunkName: "pages/policymaker/download" */))
const _63bb1888 = () => interopDefault(import('../pages/policymaker/download/dnssecuritytxt.vue' /* webpackChunkName: "pages/policymaker/download/dnssecuritytxt" */))
const _0e0694b1 = () => interopDefault(import('../pages/policymaker/download/safe-harbor-clause.vue' /* webpackChunkName: "pages/policymaker/download/safe-harbor-clause" */))
const _39440b5f = () => interopDefault(import('../pages/policymaker/download/securitytxt.vue' /* webpackChunkName: "pages/policymaker/download/securitytxt" */))
const _9b8e449e = () => interopDefault(import('../pages/policymaker/download/vdp.vue' /* webpackChunkName: "pages/policymaker/download/vdp" */))
const _6a0c64d0 = () => interopDefault(import('../pages/policymaker/introduction.vue' /* webpackChunkName: "pages/policymaker/introduction" */))
const _499ac569 = () => interopDefault(import('../pages/policymaker/organization.vue' /* webpackChunkName: "pages/policymaker/organization" */))
const _4548494e = () => interopDefault(import('../pages/policymaker/settings.vue' /* webpackChunkName: "pages/policymaker/settings" */))
const _f85c81ee = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _773cd10c,
    name: "policymaker___en"
  }, {
    path: "/policymaker/download",
    component: _00c5a584,
    name: "policymaker-download___en",
    children: [{
      path: "dnssecuritytxt",
      component: _63bb1888,
      name: "policymaker-download-dnssecuritytxt___en"
    }, {
      path: "safe-harbor-clause",
      component: _0e0694b1,
      name: "policymaker-download-safe-harbor-clause___en"
    }, {
      path: "securitytxt",
      component: _39440b5f,
      name: "policymaker-download-securitytxt___en"
    }, {
      path: "vdp",
      component: _9b8e449e,
      name: "policymaker-download-vdp___en"
    }]
  }, {
    path: "/policymaker/introduction",
    component: _6a0c64d0,
    name: "policymaker-introduction___en"
  }, {
    path: "/policymaker/organization",
    component: _499ac569,
    name: "policymaker-organization___en"
  }, {
    path: "/policymaker/settings",
    component: _4548494e,
    name: "policymaker-settings___en"
  }, {
    path: "/",
    component: _f85c81ee,
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
