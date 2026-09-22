# Plan — ReBootIT?

> Written after specification. In this plan, R1 through R15 refer to the fifteen numbered Functional Requirements in `specification.md`, in the same order.

## 1. Approach Summary

I will adapt the existing starter application instead of rebuilding it. ReBootIT? will remain a small front-end web application that loads troubleshooting topics from a CSV file and displays them through the required Home, collection, detail, and About pages. The first version will focus on a clear working flow for Monitor, Dock, and Laptop problems before adding anything more advanced.

## 1.5 Tech Stack

- Frontend: Existing HTML, CSS, and JavaScript starter application
- Styling: Bootstrap and the provided `style-guide.html`
- Backend/DB: None for the first version; data comes from `items-template.csv`
- Hosting: GitHub Pages
- Other services/APIs: None

## 2. Key Decisions (ADRs)

| ADR # | Decision | Traces to (R#) | Alternatives considered | Why this one |
|-------|----------|------------------|---------------------------|----------------|
| ADR-00 | Adapt the existing starter application using HTML, CSS, JavaScript, and Bootstrap | R1–R15 | Rebuild with React or another framework | The starter already provides the required page pattern and keeps the class project within scope. |
| ADR-01 | Use `items-template.csv` as the only data source | R4–R11, R15 | External database or hard-coded items in JavaScript | The specification requires the CSV file and the first version does not need accounts or shared live data. |
| ADR-02 | Keep the existing hash routes | R1, R2, R9, R14 | Create new page files or change to server routes | Hash routes work with the starter application and GitHub Pages without a server. |
| ADR-03 | Perform search and category filtering in the browser | R3, R6, R7 | Server-side search or separate pages for each category | The collection is small, so browser filtering is enough and does not add a backend. |
| ADR-04 | Use cards for collection items and one reusable detail layout | R5, R8–R11 | Use a long article list or a different detail page for every issue | Cards match the starter template and make the problem choices easier to scan. |
| ADR-05 | Show safety and escalation guidance on every detail page | R12, R13 | Put one general disclaimer only on the About page | Users need to know at the point of action whether to continue or contact IT. |
| ADR-06 | Use a small set of representative troubleshooting topics and placeholder images when necessary | R3–R11 | Attempt to include every Dell device and code in the first version | A smaller set is realistic for the semester and still tests the required interaction. |
| ADR-07 | Keep ticket submission outside the application | R13 | Connect directly to an IT ticketing system | The first version can explain how to contact IT without adding authentication or another system. |

## 3. Components / Building Blocks

| Component | Purpose | Related requirements |
|-----------|---------|------------------------|
| Navigation bar | Lets users move to Home, Troubleshooting, and About | R1, R2 |
| Home page | Introduces ReBootIT? and shows the three equipment categories | R1, R3 |
| CSV data loader | Reads the troubleshooting records used by the collection and detail pages | R4, R5, R9, R15 |
| Troubleshooting collection | Displays one card for each troubleshooting item | R1, R5, R8 |
| Search and category controls | Helps users narrow the list by issue, category, or model | R3, R6, R7 |
| Troubleshooting card | Shows summary information and opens the selected detail page | R5, R8, R9 |
| Troubleshooting detail page | Shows model information, estimated time, numbered steps, and safety guidance | R9–R14 |
| Help and escalation message | Explains what to do when the user should stop or still needs help | R12, R13 |
| Error message | Replaces a blank page when the CSV data cannot be loaded | R15 |
| About page | Explains the purpose and limits of the prototype | R1 |

## 4. Dependencies & Assumptions

- External services/tools needed: GitHub repository, GitHub Pages, Bootstrap files already used by the starter, and a browser for testing.
- Manufacturer documentation is needed to check model details and diagnostic codes before they are presented as facts.
- The existing starter application is assumed to already support hash routing and basic card rendering.
- The browser is assumed to be able to load `items-template.csv` when the application is served through GitHub Pages.
- The first data set is assumed to be small enough for browser-based searching without pagination.
- Placeholder images may be used if suitable equipment images are not available.
- The first laptop examples will use a small representative group, such as the Dell Latitude 7420, 7430, 5530, and 5550, instead of attempting every model.
- The “Still need help?” option is assumed to show contact instructions or a link instead of creating a ticket.
- R1 through R15 are assumed to match the fifteen Functional Requirements in the current specification.

## 5. Risks

| Risk | Likelihood | Impact | Mitigation | Owner |
|------|------------|--------|------------|-------|
| A troubleshooting guide is matched to the wrong model | Medium | High | Identify the supported model on the detail page and check the information against manufacturer documentation | Student developer |
| A user tries a step that should be handled by IT | Medium | High | Limit guides to basic actions and show “Safe to try,” “Contact IT,” and stop warnings | Student developer |
| The CSV file does not load or contains inconsistent fields | Medium | High | Confirm the file path and field names early, validate sample rows, and display a clear error message | Student developer |
| Search misses results because terms are written differently | Medium | Medium | Test common issue, category, and model keywords and use plain labels in the data | Student developer |
| Images are missing, unclear, or fail to load | Medium | Low | Allow cards to work without an image and use tested placeholders when needed | Student developer |
| Too many devices or issues make the project too large | High | Medium | Start with the Latitude 7420, 7430, 5530, and 5550 plus a few common Monitor and Dock issues; record broader coverage as future work | Student developer |
| Changes break navigation that already works in the starter | Medium | High | Inspect routes first and test every navigation link after changes | Student developer |
| The layout is difficult to use on a phone or small screen | Medium | Medium | Use Bootstrap responsive classes and test common desktop and mobile widths | Student developer |

## 6. Sequencing

1. Inspect the starter application's files, routes, current CSV fields, and existing styles because every later change depends on them.
2. Define and test a small ReBootIT? CSV data set because the collection, search, cards, and details all depend on consistent data.
3. Update the navigation and required routes so every screen can be reached before styling individual features.
4. Build the Home page categories and collection cards to prove that the data loads and displays correctly.
5. Add category filtering and search because users identified finding the correct model and issue as a major problem.
6. Build the reusable detail view with numbered steps, time, model, safety, back, and help information.
7. Add loading and error messages so failures do not produce a blank page.
8. Apply the ReBootIT? styling and responsive layout after the main interaction works.
9. Test the complete flow, accessibility basics, data failure, and GitHub Pages deployment before considering the prototype finished.

## 7. Review & Approval

| Reviewer | Date | Approved? |
|----------|------|-----------|
| Matthew McCreary | 2026-09-21 | Yes, after manual review against the specification and plan guide |

**Gate:** Do not generate tasks until this plan is done.

