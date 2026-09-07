# Business Case - RebootIT?

*Simple fixes before you submit a ticket.*

## 1. Problem / Opportunity

Students and employees sometimes contact IT for problems that they might be able to fix on their own. The instructions may already exist, but they can be hard to find or too technical for the average person.

## 2. Proposed Solution

My idea is a web application called RebootIT? The name is based on one of the most common questions asked in technical support: "Did you reboot it?" Its tagline is "Simple fixes before you submit a ticket." The Home page would introduce the application and link to a collection of common technology problems, such as Wi-Fi, email, VPN, login, monitor, and docking station issues. Each topic would appear as a card with its name, a short description, and an image when one is available. A user could select a card to open a page with the full troubleshooting information. An About page would explain the purpose of the application and who it is for.

## 3. Options Considered

| Option | Description | Pros | Cons |
|--------|-------------|------|------|
| Option A | Keep using the current support articles and have users contact IT when they cannot find an answer. | Nothing new would need to be built and there would be no extra cost. | Some instructions may still be difficult to find, and IT would continue receiving the same basic questions. |
| Option B (recommended) | Create RebootIT? with a smaller collection of easy-to-follow support topics and a detail page for each topic. | It would be easier for users and could save some time for the IT support staff. The name and tagline could also make the guide feel more approachable. | It would take time to build, test, and keep the information updated. |

## 4. Feasibility

| Type | Assessment |
|------|------------|
| Operational - will people actually use/support this? | I think people would use it because it focuses on common problems and simple instructions. Someone from IT would need to check the information and update it when needed. |
| Technical - can we build it with what we have/can get? | It should be possible to build because it follows the provided collection-and-detail template. The first version would load a small set of support topics from the provided CSV text file and would not need user accounts or an outside database. |
| Economic - does the payoff justify the cost? | GitHub Pages can host the class project for free. Most of the cost would be the time spent building the application and writing the support instructions. Based on the rough estimates below, the benefits should eventually be more than the costs. |
| Schedule - can it be done in a useful timeframe? | A basic version with about 10 support topics should be possible to complete during the semester. Search, category filters, and bookmarks could be added later if there is enough time, but they are not required for the first version. |

## 5. Costs & Benefits

**Costs** (one-time + ongoing):

| Item | One-time | Ongoing/year |
|------|----------|--------------|
| Time to design and build the application | $600 | $0 |
| Time to write the first support topics | $200 | $0 |
| Time to test and make changes | $100 | $0 |
| GitHub Pages hosting | $0 | $0 |
| Time to review and update the instructions | $0 | $200 |
| **Total** | **$900** | **$200** |

**Benefits** (tangible + intangible):

| Benefit | Tangible ($/time saved)? | Notes |
|---------|--------------------------|-------|
| Less time spent answering basic support questions | About $334 per year | This estimate is based on avoiding about 50 support requests and saving 20 minutes on each one. |
| Less time spent searching for help | About $200 per year | Users may solve simple problems faster instead of searching through several pages. |
| Easier instructions | Intangible | Plain-language steps may make users feel more comfortable trying basic troubleshooting. |
| More consistent answers | Intangible | Users and IT staff would be looking at the same steps. |

**Payback period:** About 2.7 years. I divided the $900 starting cost by the estimated yearly benefit after the $200 maintenance cost was removed.

**ROI:** About 41% over five years. The estimated five-year benefits are $2,670 and the estimated five-year costs are $1,900. The calculation is ($2,670 - $1,900) / $1,900.

These numbers are only rough estimates for this class project. I included them to practice comparing the possible costs and benefits of the idea.

## 6. Priority & Urgency

I would give this project a medium priority. The current way of getting IT help still works, so this is not an emergency. However, waiting means users may continue having trouble finding instructions, and IT staff will continue spending time on repeated questions. Starting with only the required pages and a small CSV file would allow the idea to be tested without making the first version too complicated.

## 7. Recommendation

I recommend choosing Option B and moving forward with a small RebootIT? prototype.

## 8. Approval

| Role | Name | Date | Decision |
|------|------|------|----------|
| Sponsor |  |  | Go / No-go |

---

### Primary sources

- *Systems Analysis and Design*, 10th ed. (Cengage, 2017) - Chapter 2, "Analyzing the Business Case," and Toolkit Part C, "Financial Analysis Tools."
