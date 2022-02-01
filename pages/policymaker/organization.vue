<template>
    <div>
        <page-title>{{ $t('policymaker.organization_details.page_title') }}</page-title>

        <dio-field-group>
            <dio-field>
                <label>{{ $t('policymaker.organization_details.organization_name_label') }} </label>
                <p>This is the organization authorizing the policy and who is responsible for the assets that are in scope.</p>
                <input-text
                    :value="configuration.organizationName"
                    @input="updateOrganisationName"
                    :required="true"
                    :isValid="validOrganizationName"
                    :autocorrect="false"
                    :autocapitalize="false"
                    :spellcheck="false"
                    placeholder="Organization name" />
                <!-- <small>* {{ $t('policymaker.organization_details.organization_name_required') }}</small> -->
            </dio-field>

            <dio-field>
                <label>What is the contact email address that will be administering this policy? *</label>
                <p>Provide at least one email address for people to send their bids and transparency information
                    to your organization.</p>
                    <br>
                    <small>Note: Email addresses are checked for a valid '@xxx.com' format.</small>
                <input-channels></input-channels>

            </dio-field>
        </dio-field-group>

        <div class="dio__action-bar">
            <dio-button route="/policymaker/settings" @click="goto(3)" :disabled="!isValid">Next</dio-button>
            <dio-button route="/policymaker" theme="muted" @click="goto(1)">Back</dio-button>
        </div>

    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DioField from '~/components/DioField/DioField.vue'
import DioFieldGroup from '~/components/DioField/DioFieldGroup.vue'
import InputChannels from '~/components/InputChannel/InputChannels.vue'
import InputText from '~/components/InputText/InputText.vue'
import PageTitle from '~/components/PageTitle/PageTitle.vue'
import { store } from '~/store'
import nav from '~/mixins/nav'

export default Vue.extend({
    components: { PageTitle, InputText, InputChannels, DioField, DioFieldGroup },
    layout: 'policymaker',

    mixins: [nav],

    computed: {
        configuration: () => store.getters['policymaker/getConfiguration'],
        validOrganizationName: () => store.getters['policymaker/validOrganizationName'],
        isValid() {
            return store.getters['policymaker/validOrganizationName'] && store.getters['policymaker/validChannels']
        }
    },

    methods: {
        updateOrganisationName(name: string): void {
            store.commit('policymaker/setOrganizationName', name)
        }

    }
})
</script>
