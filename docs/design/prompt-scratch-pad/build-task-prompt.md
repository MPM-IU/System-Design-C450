# ReBootIT? Copilot Build-Task Prompt

This prompt was used with Copilot to complete the ReBootIT? front-end build one task at a time. For each use, `[T#]` was replaced with the task ID being completed. I reviewed and manually tested each task before changing its status to Done.

## Main Task Prompt

> You are continuing to adapt the base web application template into ReBootIT?. You are implementing exactly ONE task from `docs/design/tasks.md`: **[T#]**.
>
> Before writing or changing any code:
>
> 1. Read `docs/design/tasks.md` and find task [T#]. Identify the requirement or ADR numbers connected to it.
> 2. Read the linked requirement and acceptance criteria in `docs/design/specification.md`.
> 3. Read the related decisions and technology choices in `docs/design/plan.md`.
> 4. Read the related colors, typography, layout, components, voice, and accessibility rules in `docs/design/design-system.md`.
> 5. Check the dependencies listed for [T#] and confirm that they are already complete.
>
> Briefly restate what you found in steps 1–5 before making changes so I can confirm that the task is understood correctly.
>
> **Project requirements and limits**
>
> - Build only what task [T#] describes.
> - Do not fix, redesign, or refactor anything outside the task. Mention other problems instead of changing them.
> - Keep the existing no-build Vue 3, Vue Router, Bootstrap, Papa Parse, CSV data source, hash routes, and component structure.
> - The main equipment categories are Monitor, Dock, and Laptop.
> - Troubleshooting information may include Dell devices and other manufacturers when the information has been checked and fits the existing data structure.
> - Keep all instructions short, safe, and understandable for a person with limited technical experience.
> - Do not add a database, authentication, ticket submission, external API, or another feature that is not included in the current specification.
> - Follow `design-system.md` and do not introduce unrelated colors, fonts, libraries, or design patterns.
> - If the documentation is unclear, stop and ask me instead of guessing.
>
> **Required output**
>
> 1. Make only the code or documentation changes needed for [T#].
> 2. Explain in plain language what changed and why.
> 3. Restate the acceptance criteria connected to the task.
> 4. Give me exact steps for manually testing the task in the browser.
> 5. Do not mark the task Done until I confirm that the manual test passed.

## Manual-Test Follow-Up Prompt

> I tested task [T#] using the acceptance criteria. The expected result was [expected result]. The actual result was [actual result]. Correct only the problem connected to task [T#]. Do not make unrelated changes. Explain the correction and give me exact steps for testing the task again.

## Passed-Test Prompt

> Task [T#] passed its manual test and matches the acceptance criteria. Change only the status of [T#] in `docs/design/tasks.md` to Done. Also tell me whether this completed work requires a matching update to `specification.md`, `plan.md`, or `design-system.md`.

## Final-Test Prompt

> All ReBootIT? front-end tasks have been completed and tested separately. Perform a final review using `specification.md`, `plan.md`, `tasks.md`, and `design-system.md`. Check navigation, CSV loading, category filters, search, troubleshooting cards, detail pages, safety messages, missing-image behavior, CSV error handling, responsive layout, keyboard access, visible focus, and GitHub Pages compatibility. Do not add new features. List any problems found and explain how to reproduce them before making corrections.

## Completed Build Record

- T1–T5: Starter application, data fields, sample troubleshooting data, source review, and CSV loading completed.
- T6–T9: Navigation and Home page equipment categories completed.
- T10–T15: Collection cards, category filters, search, and no-results behavior completed. During T12, the category buttons were moved from the left side and arranged in a horizontal line across the page to reduce unused space. During T13, the search bar was moved from the center to the right side of the collection controls.
- T16–T23: Detail routes, troubleshooting steps, safety guidance, help information, and return navigation completed.
- T24–T26: CSV error and missing-image states completed.
- T27–T29: Design system, responsive layout, and accessibility review completed.
- T30: Final application testing completed.
- T31–T32: GitHub Pages publishing and public URL verification completed.

All tasks were marked Done in `tasks.md` after testing was completed.

## Layout Refinement Prompts Used

### T12 Category Button Refinement

> The category buttons currently appear on the left side of the collection page and leave too much empty space. For T12 only, arrange the Monitor, Dock, and Laptop category buttons in one horizontal line across the page. Keep the existing filtering behavior and Bootstrap styling. Do not change unrelated parts of the page. After making the change, explain how I can manually test the buttons and the layout.

### T13 Search Bar Refinement

> The search bar is currently centered in the collection controls. For T13 only, move the search bar to the right side while keeping the category buttons together in their horizontal line. Keep all existing search behavior, labels, and accessibility features. Do not change unrelated features. After making the change, explain how I can manually test the search bar at desktop and mobile widths.

## Commit Format Used

`[T#]: [short description of the completed task]`

Example: `T13: add troubleshooting search`
