import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

import _cloneDeep from 'lodash/cloneDeep'
import _map from 'lodash/map'
import _reduce from 'lodash/reduce'
import _isEmpty from 'lodash/isEmpty'
import _findIndex from 'lodash/findIndex'
import _startsWith from 'lodash/startsWith'

import { renderTemplate, renderSecurityTxt } from '~/utils/mdTemplate'
import { Channel, Channels, DropdownOptions, NavStep, NavSteps, PolicyConfiguration, SetTemplateTextRequest, TemplateSources, UpdateChannelRequest, Templates, VDPTemplateSet, VDPLanguageTemplateSet } from './types'
import { cloneDeep, join } from 'lodash'
export * from './types'

Vue.use(Vuex)

export const store = new Vuex.Store({})


@Module({
  name: 'policymaker',
  stateFactory: true,
  namespaced: true,
  store: store,
  dynamic: true
})
export class PolicyMaker extends VuexModule {

  // Wizard
  currentStep: number = 1

  navSteps: NavSteps = [
    { route: '/policymaker/introduction', name: 'Introduction' },
    { route: '/policymaker/organization', name: 'Organization details' },
    { route: '/policymaker/settings', name: 'Policy settings' },
    { route: '/policymaker/download', name: 'Download' }
  ]

  downloadSections: NavSteps = [
    { route: '/policymaker/download/vdp', name: 'Healthcare AI Tools' },
  ]

  // Policy settings
  policyConfiguration: PolicyConfiguration = {
    language: 'en-US',
    organizationName: '',
    organizationDomain: '',
    channels: <Channels>[{ prefix: '', type: '', address: '' }],
    cvdTimelineDays: 30,
    hostUrl: {
      prefix: 'https://',
      type: 'url',
      address: ''
    }
  }

  vdpLanguageOptions: Array<string> = []

  // CVD Timeline Options
  cvdTimelineOptions: DropdownOptions = [
    { value: 90, label: '90 days ' },
    { value: 60, label: '60 days' },
    { value: 30, label: '30 days' },
    { value: 0, label: 'Opt-out of notice requirements.' }
  ]

  vdpTemplateBase: VDPTemplateSet = {
    base: 'templates/disclose-io-vdp/{{locale}}.md',
    with_cvd: 'templates/disclose-io-vdp-with-cvd/{{locale}}.md',
    safe_harbor: 'templates/disclose-io-safe-harbor/{{locale}}.md',
    risk_scoring: 'templates/risk-scoring/{{locale}}.md'
  }

  tpls: Templates = {
    vdp: {},
    securitytxt: {
      base: ""
    }
  }


  get getCurrentStep(): number {
    return this.currentStep
  }

  get getNavSteps(): NavSteps {
    return this.navSteps
  }

  get getDownloadSections(): NavSteps {
    return this.downloadSections
  }

  get getConfiguration(): PolicyConfiguration {
    return this.policyConfiguration
  }

  get getChannels(): Channels {
    return this.policyConfiguration.channels
  }

  get getCurrentLocale(): string {
    return join([
      this.policyConfiguration.language.toLowerCase(),
      this.policyConfiguration.region?.toUpperCase()].filter((component) => component != null),
      '-')
  }

  get getTermsVDP(): string {
    return renderTemplate(this.tpls.vdp[this.policyConfiguration.language]?.base, this.policyConfiguration)
  }

  get getTermsVDPCVD(): string {
    return renderTemplate(this.tpls.vdp[this.policyConfiguration.language]?.risk_scoring, this.policyConfiguration)
  }

  get getTermsSafeHarbor(): string {
    return renderTemplate(this.tpls.vdp[this.policyConfiguration.language]?.safe_harbor, this.policyConfiguration)
  }

  get getSecurityTxt(): string {
    return renderSecurityTxt(this.tpls.securitytxt.base, this.policyConfiguration)
  }

  get validOrganizationName(): boolean {
    return !_isEmpty(this.policyConfiguration.organizationName)
  }

  get validChannels(): boolean {
    return this.policyConfiguration.channels.length > 0 && !_isEmpty(this.policyConfiguration.channels[0].address.trim())
  }

  get validHostUrl(): boolean {
    return !_isEmpty(this.policyConfiguration.hostUrl.address)
  }

  get validAll(): boolean {
    return this.validOrganizationName && this.validChannels && this.validHostUrl
  }

  get getVDPLanguageOptions(): Array<string> {
    return this.vdpLanguageOptions
  }

  @Mutation
  setStep(stepNumber: number) {
    this.currentStep = stepNumber
  }

  @Mutation
  setOrganizationName(name: string) {
    this.policyConfiguration.organizationName = name
  }

  @Mutation
  setOrganizationDomain(domain: string) {
    this.policyConfiguration.organizationDomain = domain.trim()
  }

  @Mutation
  addChannel(channel?: Channel) {
    if (channel) {
      this.policyConfiguration.channels.push(channel)
    } else {
      this.policyConfiguration.channels.push({ prefix: '', type: '', address: '' })
    }
  }

  @Mutation
  removeChannel(index: number) {
    this.policyConfiguration.channels.splice(index, 1)
  }

  @Mutation
  setLanguage(language: string) {
    this.policyConfiguration.language = language
  }

  @Mutation
  setCVDTimelineDays(days: number) {
    this.policyConfiguration.cvdTimelineDays = days
  }

  @Mutation
  setTemplateText(request: SetTemplateTextRequest) {
    // Check if language is loaded
    if (!this.tpls.vdp.hasOwnProperty(request.language)) {
      this.tpls.vdp[request.language] = {
        base: "",
        with_cvd: "",
        safe_harbor: "",
        risk_scoring: "",
      }
    }

    this.tpls.vdp[request.language][request.type] = request.text
  }

  @Mutation
  setSecurityTxt(text: string) {
    this.tpls.securitytxt.base = text
  }

  @Mutation
  setHostUrl(channel: Channel) {
    this.policyConfiguration.hostUrl = channel
  }

  @Mutation
  setVDPLanguageOptions(languages: Array<string>) {
    this.vdpLanguageOptions = languages
  }

  @Mutation
  setVDPTemplatesForLanguage(templateSet: VDPLanguageTemplateSet) {
    this.tpls.vdp[templateSet.language] = cloneDeep(templateSet.templates)
  }

  @Action
  updateLanguage(lang: string) {

    this.fetchTerms(lang).then(() => {
      this.context.commit("setLanguage", lang)
    })
  }

  @Action
  async fetchSecurityTxt() {
    // Check if needs loading
    if (!_isEmpty(this.tpls.securitytxt.base)) {
      return Promise.resolve(true)
    }

    let url = `${$nuxt.$router.options.base}templates/securitytxt/securitytxt.md`
    const response = await fetch(url)
    const text = await response.text()
    this.setSecurityTxt(text)
  }

  @Action
  async fetchLanguages() {
    // @ts-ignore
    let url = `${$nuxt.$router.options.base}templates/languages.json`
    const response = await fetch(url)
    const responseJson = await response.json()
    this.setVDPLanguageOptions(responseJson.languages)
  }

  @Action
  syncStepFromRoute(route: string) {

    let index = _findIndex(this.context.getters['getNavSteps'], (step: NavStep) => {
      return _startsWith(route, step.route)
    })
    index++
    this.context.commit('setStep', index)
  }

  @Action({ rawError: true })
  async fetchTerms(lang: string) {
    let langToLoad: string = lang
    if (_isEmpty(lang)) {
      langToLoad = this.policyConfiguration.language
    }

    // Check if needs loading
    if (this.tpls.vdp.hasOwnProperty(langToLoad)) {
      return Promise.resolve(true)
    }

    return Promise.all(
      _map(this.vdpTemplateBase, async (template, key: (keyof VDPTemplateSet)) => {
        let url = `${$nuxt.$router.options.base}${template}`
        url = url.replace("{{locale}}", langToLoad)

        const response = await fetch(url)
        const text = await response.text()
        this.setTemplateText({
          language: langToLoad,
          type: key,
          text
        })
        return true
      })
    )
  }
}
