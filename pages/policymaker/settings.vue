<template>
    <div>
        <page-title>Policy settings</page-title>

        <dio-field-group>
            <dio-field>
                <label>Algorithm Change Disclosure Setting</label>
                <p>AI vendors are able to deploy changes to their algorithms to improve performance, add functionality,
                 or retire outdated features. There should be a clear channel for vendors to communicate anticipated
                 changes to users of the algorithm before deployment. Use the dropdown menu here to select your
                 organization's preferred notification period ahead of any change deployment.</p>
                <dio-dropdown
                    v-model="cvdTimeline"
                    :options="cvdTimelineOptions"
                    />
                    <br>
                <small>If you’re not currently sure that your vendor can comply with this policy, you may
                optionally opt-out of selecting a notification period.</small>
            </dio-field>

            <dio-field>
                <label>Where do you intend to host this policy? *</label>
                <p>The location where you intend to publish your RFP document. You can change this later if necessary.</p>
                <input-channel :index="0" v-model="hostUrl" @valid="updateValid"></input-channel>
                <!-- <small>* required for security.txt / DNS security.txt</small> -->
            </dio-field>
        </dio-field-group>

        <div class="dio__action-bar">
            <dio-button @click="goto(4)" :disabled="!isValid">Next</dio-button>
            <dio-button @click="goto(2)" theme="muted">Back</dio-button>
        </div>

    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PageTitle from '~/components/PageTitle/PageTitle.vue'
import InputChannel from '~/components/InputChannel/InputChannel.vue'
import DioDropdown from '~/components/DioDropdown/DioDropdown.vue'
import DioField from '~/components/DioField/DioField.vue'
import DioFieldGroup from '~/components/DioField/DioFieldGroup.vue'
import { store } from '@/store'
import nav from '~/mixins/nav'

export default Vue.extend({
    components: { PageTitle, InputChannel, DioDropdown, DioField, DioFieldGroup },
    layout: 'policymaker',

    mixins: [nav],

    data() {
        return {
            localValid: false
        }
    },

    created() {
        const vm = this as any

        if (!vm.validOrganizationName || !vm.validChannels) {
            vm.goto(1)
        }
    },

    computed: {
        configuration: () => store.getters['policymaker/getConfiguration'],
        cvdTimelineOptions: () => (store.state as any).policymaker.cvdTimelineOptions,
        validOrganizationName: () => store.getters['policymaker/validOrganizationName'],
        validChannels: () => store.getters['policymaker/validChannels'],
        cvdTimeline: {
            get () {
                const vm = this as any
                if (vm.configuration) {
                    return vm.configuration.cvdTimelineDays
                }
            },
            set (value) {
                const vm = this as any
                store.commit('policymaker/setCVDTimelineDays', value)
            }
        },

        hostUrl: {
            get () {
                return store.getters['policymaker/getConfiguration'].hostUrl
            },
            set (value) {
                store.commit('policymaker/setHostUrl', value)
            }
        },
        isValid() {
            const vm = this as any
            return vm.localValid
        }


    },

    methods: {
        addChannel: () => {
            store.commit('policymaker/addChannel')
        },
        updateValid(isValid: boolean) {
            const vm = this as any
            vm.localValid = isValid
        }

    }
})
</script>

<style lang="postcss">

</style>
