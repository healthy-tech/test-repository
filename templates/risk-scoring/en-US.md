# Request for Proposal Terms and Provisions
 
Throughout this document, the term “Algorithmic System” will refer to the algorithmic tool being purchased by the procuring organization, separate from the datasets or design documents involved in producing the tool.
 
The term “Bidding Contractor” will refer to vendors participating in the Request for Proposal round that are submitting contract bids.

The term “Selected Contractor” will refer to the vendor that is selected to implement and deliver the Algorithmic System.
 
## Provision 1: Data Quality
 
The Bidding Contractors shall provide a set of standards that they will use to define data quality, Algorithmic System performance, and evaluation metrics. These standards shall be used throughout the duration of the contract to guarantee a minimum level of quality and performance from the Algorithmic System.
 
The Bidding Contractors shall provide a report to `{{organization}}` on any bias mitigation techniques, ethics checklists, or product requirements documents that have been created during the development of the Algorithmic System.
 
Bids that can demonstrate multi-disciplinary approaches and teams for Algorithmic System design, using expertise from engineering, social sciences, and legal professions will be given a higher rating.
 
## Provision 2: Transparency
 
Bidding Contractors shall incorporate frameworks for algorithmic transparency. More specifically, bids incorporating frameworks for soliciting user feedback during the design and deployment phases of the tool from healthcare delivery professionals such as doctors and nurses, as well as patients, will be rated more highly.
 
Bids that can incorporate an Algorithm Change Protocol (ACP) document (as recommended by the Food & Drug Administration for software as medical devices) will be rated more highly. These ACPs shall detail any anticipated changes that will be made to the Algorithmic System during the contract period.
 
## Provision 3: Monitoring & Evaluation
Bidding Contractors shall have a continuous monitoring plan for guaranteeing a satisfactory minimum level of performance for the Algorithmic System. A risk management plan shall detail action plans in case of a production failure issue such as a security breach or unacceptable levels of performance degradation in the Algorithmic System.
 
The Algorithmic System shall involve human-in-the-loop decision-making based on the risk to patients in the contract use case. If the system is involved in medical decision-making on behalf of a patient, Bidding Contractors shall describe the operational guardrails in their proposal that empower healthcare professionals to evaluate whether individual Algorithmic System recommendations are used or not.
 
Bids that have technical architecture proposals incorporating fairness metrics monitoring and algorithmic bias prevention measures will be rated more highly.

## Provision 4: Terms and Conditions 
The following terms and conditions will also apply to the final Selected Contractor:

### A: Scope
These articles will apply in all cases where the Selected Contractor provides an Algorithmic System for `{{organization}}` to be used in medical or administrative decision-making processes.
 
These oversight conditions will apply to any developed software products, pre-built services, datasets supplied by `{{organization}}`, and outputs produced from the operation of the Algorithmic System used for the purpose of fulfilling this contract.
 
If the Selected Contractor will work with any sub-suppliers or their own contractors, these same terms and conditions shall also apply throughout the vendor supply chain. These terms shall hold sub-suppliers to the same standards as the Selected Contractor and shall be included in any contracts signed with the sub-supplier.
 
### B: Regulatory Compliance
The Selected Contractor shall provide the Algorithmic System to `{{organization}}` in compliance with the privacy and security standards stated in the Health Information and Portability and Accountability Act (HIPAA).
 
The Algorithmic System shall be capable of complying with individual data deletion requests as needed to comply with any applicable laws.
 
The Algorithmic System shall be built to comply with U.S. anti-discrimination laws. The Selected Contractor shall be able to provide evidence of satisfactory compliance with anti-discrimination standards before system deployment and upon request by `{{organization}}`.
 
### C: Data Ownership
Unless otherwise stated in the procurement contract, all datasets supplied by `{{organization}}`, software products built to fulfill this contract, documentation, analysis, workstreams, and research outputs produced during the operation of the Algorithmic System are the property of `{{organization}}` and shall not be used, re-used, shared, or joined to third-party datasets by the Selected Contractor for their own commercial or other use. This applies even in “safe harbor” cases where the data has been anonymized according to HIPAA standards, given evidence that patient information can be re-identified after anonymization.
 
On request of `{{organization}}`, the Selected Contractor shall be able to transfer supplied datasets to `{{organization}}` and delete any data from the selected Contractor’s internal storage. The Selected Contractor shall provide evidence that the data deletion took place within one calendar month date of the request.
 
### D: Transparency
`{{organization}}` shall be able to provide a public-facing explanation of the Algorithmic System’s purpose and operations in plain language. The Selected Contractor shall enable the Algorithmic System to be able to describe the highest impact global variables that influence the Algorithmic System, as well as have the ability to describe the highest impact variables that influence individual predictions.
 
The third-party auditor shall provide a report to  `{{organization}}` validating that bias is minimized across protected classes. The third-party auditor should also include confirmation in this report that the Selected Contractor has chosen the correct set of monitoring metrics for the system to track performance and fairness objectives.
 
The Selected Contractor will notify `{{organization}}` 30 days in advance of new changes being made to a deployed Algorithmic System. This notification shall include a change log of new, deprecated, and updated functionalities in the Algorithmic System. `{{organization}}` should review, accept, or reject the changes to the Algorithmic System within this disclosure window. For major changes, a report on the testing process for assuring business continuity of the Algorithmic System shall be provided by the Selected Contractor.

### E: Audits
Before the Algorithmic System is deployed, an audit shall be conducted by `{{organization}}` or a third-party auditor on its behalf. This audit will assess compliance from the Selected Contractor in achieving the provisions stated in this document around data quality, system performance, transparency, explainability, security and privacy, bias prevention, and risk management. The Selected Contractor shall cooperate with the audit by agreeing to share materials, optionally under a Non-Disclosure Agreement if mutually agreed to by `{{organization}}` and the Contractor. This sharing of materials might involve providing access to technical source code, dataset and model documentation, and design documents produced throughout the development process for the Algorithmic System. These audits may also involve interviews with key employees of the Selected Contractor.

A third-party auditing organization shall conduct regularly scheduled assessments on the provisions listed in this document in order to ensure compliance. These audits shall be conducted on an annual basis at minimum.

A report of the audit results shall be prepared by the auditor for the `{{organization}}`. This report will be released to the public in advance of the deployment of the system, and subsequent audits shall be appended to the same public-facing site. Any issues raised by the report shall be the responsibility of the Selected Contractor to remedy within a reasonable timeframe agreed to by `{{organization}}` and the Selected Contractor. Any failure to remedy the issues raised by the audits or the monitoring process may involve taking the Algorithmic System offline and potential early termination of the contract.
 
The Selected Contractor will pay the cost of the audit. In the event that the Selected Contractor is found to have failed to cooperate with the audit in good faith, `{{organization}}` is not liable to reimburse the Selected Contractor for any activities taken to fulfill the audit.
 
## Evaluation Criteria
 
The following rubric describes evaluation criteria and questions that can be used to compare vendor bid submissions. Each section can be used to grade the bid submission based on how well it satisfies the questions – a percentage weight for each section is then applied to scale the grade. Adding together the scaled grades produces a score that can be used to compare vendor bid submissions.
 
### Proposed Solution: 30%
- Will the product address procurement needs and propose a timeline for delivering the product according to the contract terms?
- Can the organization provide a plan detailing systems and policies that will ensure privacy compliance, data security, and bias prevention within the Algorithmic System?
- Can the organization provide the Algorithmic System with a human-in-the-loop architecture to ensure a human decisionmaker reviews each recommendation?
- Can the organization provide local/global explainability capabilities within their Algorithmic System?
 
### Cost: 20%
- Can the organization deliver the product at the lowest price point while ensuring that procurement needs are being met through the product?
- Does the product have the ability to scale cost-efficiently with traffic volume and user needs?
 
### Organizational Capability and Relevant Experience: 20%
- Does the organization have previous experience in building this kind of product?
- Does the organization have the technical skillsets to apply industry best practices in building the product?
- Can the organization provide user trainings to educate users on how to use the product?
- Will the organization provide technical support services for the product and maintain a support channel?
 
### Proposed Services and Post-Implementation Support: 15%
- Can the organization provide a continuous monitoring plan for ensuring the stability and health of the product services?
- Can the organization provide a plan for soliciting feedback from potential users during the product design process? Do they have a plan for soliciting user feedback as the tool is being used?
- Can the organization provide a deployment plan for applying updates and patches, as well as a communication protocol for notifying users of these changes in advance?
- Can the organization provide an Algorithm Change Protocol that describes potential future changes to the product on a scheduled timeline?
 
### Diversity: 5%
- Does the organization have a multidisciplinary, diverse team to be able to anticipate and address compliance, bias, and performance risks?
- Is the contract organization a minority-owned/women-owned business?
 
### Audit: 5%
- Will the organization agree to undergo and pass a third-party algorithm audit before the start of each new contract period?
 

