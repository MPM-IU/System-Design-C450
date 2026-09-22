# ReBootIT? Plan Prompt

Given `docs/design/business-case.md` and `docs/design/specification.md`, complete the plan for ReBootIT? using `docs/design/plan.md` as the starting template. Use `docs/design/reference/plan-guide.md` to check the plan. Review the existing application files before making decisions, and maintain the headings, tables, and general format of the original plan template.

The specification uses a numbered Functional Requirements list. Treat those requirements as R1 through R15 in the same order. Every architecture decision and component in the plan must trace back to one or more of those requirement IDs. Do not add features that are not supported by the specification.

## Application Purpose

ReBootIT? is a beginner-friendly troubleshooting web application for people who want to try a few safe fixes before contacting IT. The first version focuses on monitors, docking stations, and laptops. The main flow is Home, Troubleshooting collection, Troubleshooting detail, and About.

## Approach Summary

Adapt the existing starter web application instead of rebuilding it. Keep the project as a small front-end prototype. Load troubleshooting items from the provided `items-template.csv` file, display them as cards, and use the starter application's hash-based routes. Add search and category browsing, numbered troubleshooting steps, model information, estimated completion time, safety guidance, and a way to get more help.

## Tech Stack

- Frontend: Existing HTML, CSS, and JavaScript starter application
- Styling: Bootstrap classes already used by the starter application
- Data: `items-template.csv`
- Routing: Existing hash routes such as `#/`, `#/items`, `#/items/:id`, and `#/about`
- Hosting: GitHub Pages
- Backend/DB: None for the first version
- Other services/APIs: None

## Important Requirements

- Keep Home, Troubleshooting collection, Troubleshooting detail, and About pages.
- Use the visible navigation label “Troubleshooting” even if the starter route remains `#/items`.
- Show Monitor, Dock, and Laptop categories.
- Load the collection from `items-template.csv` and show one card for each data row.
- Include search by issue, category, or model.
- Cards should show an issue name, short description, category, estimated time, and image when available.
- Detail pages should show full information, model information when needed, numbered steps, and either “Safe to try” or “Contact IT.”
- Detail pages should include “Still need help?” and a way back to the collection.
- Show a useful message if the CSV data cannot load.
- Keep the application simple, readable, and responsive.

## Scope Limits

- Do not add user accounts, authentication, a database, an admin page, automatic ticket creation, or an external API.
- Do not plan advanced hardware repairs.
- Do not plan support for every Dell model in this first prototype. Use a small set of representative troubleshooting items that prove the interaction.
- Do not replace the starter application with a different framework or build system.
- Do not treat bookmarks or saved favorites as required features.

## Plan Expectations

- Include meaningful architecture decisions with real alternatives and short reasons.
- List components in plain language without writing code.
- Identify assumptions about the existing starter files, CSV parsing, images, and manufacturer information.
- Include risks involving incorrect model information, unsafe instructions, CSV loading, missing images, and project scope.
- Give every risk a mitigation and owner.
- Sequence the work so the existing template and CSV structure are checked before dependent screens are changed.
- Keep the writing clear enough for a beginning Systems Design student to understand.

After completing the plan, run the self-check from `plan-guide.md`. Do not create `tasks.md` yet.

Return a short review after editing the file that identifies any gaps, inconsistencies, or decisions that still require my judgment. Do not silently decide those items for me.

