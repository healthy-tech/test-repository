# Request for Proposal Terms and Provisions

## Provision 1: Scope

These articles will apply in all cases where the Contractor provides an Algorithmic System for `{{organization}}` to be used in medical or administrative decision-making processes.

These oversight conditions will apply to any developed software products, pre-built services, datasets supplied by `{{organization}}`, and secondary outputs produced from the operation of the Algorithmic System used for the purpose of fulfilling this contract.

If the Contractor is working with any sub-suppliers or their own contractors, these same terms and conditions would also apply throughout the vendor supply chain.

## Provision 2: Regulatory Compliance

The Contractor should provide the Algorithmic System in compliance with the privacy and security standards stated in the Health Information and Portability and Accountability Act (HIPAA).

The Algorithmic System should be able to comply with individual data deletion requests as needed to comply with any "right to be forgotten" laws that are applicable.

The Algorithmic System should be built to comply with U.S. anti-discrimination laws governing protected attributes like race, gender, religion, and sexuality. The Contractor should be able to provide evidence of satisfactory compliance with anti-discrimination standards before system deployment and upon request by `{{organization}}`

## Provision 3: Data Ownership

Unless otherwise stated in the procurement contract, all datasets supplied by `{{organization}}`, software products built to fulfill this contract, and secondary outputs produced during the operation of the Algorithmic System are the property of `{{organization}}` and should not be re-used, shared, or joined to third-party datasets by the Contractor for their own commercial use. This applies even in "safe harbor" cases where the data has been anonymized according to HIPAA standards, given evidence that patient information can be re-identified after anonymization.

On request of `{{organization}}`, the Contractor should be able to hand over `{{organization}}` supplied datasets and delete any remaining copies from the Contractor's internal storage (as well as being able to provide evidence that the data deletion took place).

For Algorithmic Systems built outside the scope of these contract terms that are used to fulfill the contract goals, the Contractor will retain rights to their intellectual property and will not need to share source code, model weights, or datasets with `{{organization}}`. These materials may be required to undergo an audit with a third-party organization that may be protected by a Non-Disclosure Agreement between the auditor and the Contractor.

## Provision 4: Data Quality
The Contractor should be able to provide a set of standards that they will use to define data quality, Algorithmic System performance, and evaluation metrics. These standards should be used throughout the duration of the contract to guarantee a minimum level of quality and performance from the system.

The Contractor should be able to provide a report to `{{organization}}` on any bias mitigation techniques, ethics checklists, or product requirements documents that will be created during the development of the Algorithmic System.

Bids that can demonstrate multi-disciplinary approaches and teams for algorithmic system design, using expertise from engineering, social sciences, legal, will be favored higher.

## Provision 5: Transparency
`{{organization}}` should be able to provide a public-facing explanation of the Algorithmic System's purpose and operations in plain language. The Contractor should enable the Algorithmic System to be able to accommodate explainability of the entire system as well as for individual predictions.
This may include providing the highest impact variables influencing a decision. The ability to view this explanation should be co-located with the corresponding prediction.

The Contractor will notify `{{organization}}` {{disclosure_window}} days in advance of new changes being made to a deployed Algorithmic System. This notification should include a change log of new, deprecated, and updated functionalities in the Algorithmic System. For major changes, a report on the testing process for assuring business continuity of the Algorithmic System should be provided by the Contractor.

Bids incorporating frameworks for soliciting user design feedback from healthcare delivery professionals like doctors and nurses, as well as patients, will be favored higher.

Bids that can incorporate an Algorithm Change Protocol (ACP) document (as recommended by the Food & Drug Administration for software as medical devices) will be favored higher. These ACPs should detail the anticipated changes that will be made to the Algorithmic System during the contract period.

## Provision 6: Monitoring & Evaluation
The Contractor should have a continuous monitoring plan for guaranteeing a satisfactory minimum level of performance for the Algorithmic System. A risk management plan should detail action plans in case of a security breach or unacceptable levels of performance degradation in the Algorithmic System.

The Algorithmic System should involve human-in-the-loop decision-making based on the risk to patients in the contract use case. If the system is involved in medical decision-making on behalf of a patient, a healthcare professional should be involved in evaluating whether individual Algorithmic System recommendations are used or not.

A third-party auditing organization should conduct regularly scheduled assessments on the provisions listed in this document in order to ensure compliance. These audits will be paid for by `{{organization}}` in order to minimize conflicts of interest.

Bids that have technical architecture proposals incorporating fairness metrics monitoring and algorithmic bias prevention measures will be favored higher.

## Provision 7: Audits

Before the Algorithmic System is deployed, an audit should be conducted by `{{organization}}` or a third-party auditor on its behalf. This audit should assess compliance from the Contractor in achieving the provisions stated in this document around data quality, system performance, transparency, explainability, security and privacy, bias prevention, and risk management. The Contractor should cooperate with the audit by agreeing to share materials, optionally under a Non-Disclosure Agreement if mutually agreed to by `{{organization}}` and the Contractor. This sharing of materials might involve providing Technical Transparency and Procedural Transparency as defined by the City of Amsterdam's open source contractual terms. These audits may also involve interviews with key employees of the Contractor.

A report of the audit results should be prepared by the auditor for the `{{organization}}`. This report should be released to the public in advance of the deployment of the system, and subsequent audits should be appended to the same public-facing site. Any issues raised by the report should be the responsibility of the Contractor to remedy within a reasonable timeframe agreed to by `{{organization}}` and the Contractor. Failing to meet these requirements may involve taking the Algorithmic System offline and potential early termination of the contract.

`{{organization}}` will pay the cost of the audit, as well as a reasonable fee to the Contractor for any activities needed to fully comply with the audit, In the event that the Contractor is found to have failed to cooperate with the audit in good faith, `{{organization}}` is not liable to reimburse the Contractor for any activities taken to fulfill the audit.

If the Contractor does not agree to a third-party audit of the provided Algorithmic System under a non-disclosure agreement, they should provide reasonable justification for their refusal.

## Evaluation Criteria
Category: Percentage
Organizational Capability and Relevant Experience: 15%
Proposed Solution: 35%
Proposed Services and Post-Implementation Support: 15%
Cost: 20%
Bias Prevention Strategies: 5%
Algorithm Change Protocol: 5%
