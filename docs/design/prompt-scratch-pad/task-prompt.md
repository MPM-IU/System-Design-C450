# ReBootIT? Tasks Prompt

Now complete `docs/design/tasks.md` using `docs/design/business-case.md`, `docs/design/specification.md`, and the approved `docs/design/plan.md`. Use `docs/design/reference/tasks-guide.md` to evaluate the result. Preserve the headings, table columns, Definition of Done, and Blocked / Questions section from the task template.

Focus only on adapting the existing starter application into a working front-end ReBootIT? prototype. Inspect the current workspace before defining implementation work so the tasks do not duplicate features that already exist or require a complete rewrite.

The specification's fifteen numbered Functional Requirements are R1 through R15 in the same order. Every task must trace to at least one requirement or an ADR from `plan.md`.

## Planned Work

- Inspect the starter folders, existing routes, navigation, CSV loading, card rendering, and styles.
- Confirm the required routes for Home, Troubleshooting collection, Troubleshooting detail, and About.
- Define the ReBootIT? CSV fields and create a small set of representative Monitor, Dock, and Laptop data.
- Verify that the CSV loads before changing dependent screens.
- Change visible labels from generic Items to Troubleshooting while keeping the required route structure.
- Add Home page category choices for Monitors, Docks, and Laptops.
- Adapt collection cards to show issue name, description, category, estimated time, model information when helpful, and an image when available.
- Add category filters and browser-based search by issue, category, or model.
- Adapt the detail page to show full information, numbered steps, model, estimated time, safety level, warnings, a back control, and “Still need help?”
- Add a clear data-loading error message.
- Apply simple Bootstrap styling based on the style guide and test responsive layouts.
- Test the main interaction, navigation, search, missing data, missing images, and GitHub Pages deployment.

## Task Rules

- Start each task with a verb.
- Keep every task small enough to finish in under one day.
- State one observable action per task instead of combining several large features.
- Order tasks according to the sequencing in `plan.md`.
- Use “Not started” for all initial task statuses.
- Include specific test tasks rather than assuming testing happens automatically.
- Do not add authentication, databases, admin tools, automatic ticket creation, external APIs, advanced repairs, or full coverage of every Dell model.
- Do not mark any task Done because implementation has not started.

After writing the tasks, run the self-check in `tasks-guide.md` and correct any task that is vague, too large, out of order, or missing traceability.

Return a short review after editing the file that identifies any tasks that still depend on missing information or a decision from me. Record unresolved items in the Blocked / Questions table instead of making the decision automatically.
