# Tasks — ReBootIT?

> Derived from the plan document. Each task is small, checkable, and traceable to a requirement.

## Task List

| ID | Task | Traces to (R# / ADR#) | Depends on | Status |
|----|------|--------------------------|------------|--------|
| T1 | Inspect the starter application's folders, routes, data loading, navigation, and existing Bootstrap styles | ADR-00, ADR-02 | — | Done |
| T2 | Record the existing CSV headers and identify how they map to the ReBootIT? item fields | R4, ADR-01 | T1 | Done |
| T3 | Create a small sample data set containing Monitor, Dock, and Laptop issues | R3–R5, R8–R12, ADR-06 | T2 | Done |
| T4 | Check sample model and diagnostic information against manufacturer documentation | R11, R12, ADR-05, ADR-06 | T3 | Done |
| T5 | Test that the starter application loads every sample CSV row | R4, R5, ADR-01 | T3 | Done |
| T6 | Update the navigation label from Items to Troubleshooting without changing the required route | R1, R2, ADR-02 | T1 | Done |
| T7 | Test navigation to Home, Troubleshooting, one detail route, and About | R1, R2, R14 | T6 | Done |
| T8 | Add Monitor, Dock, and Laptop category choices to the Home page | R3 | T5, T6 | Done |
| T9 | Connect each Home category choice to the troubleshooting collection | R1–R3, ADR-03 | T8 | Done |
| T10 | Adapt the collection to render one card for each CSV row | R4, R5, ADR-01, ADR-04 | T5 | Done |
| T11 | Add the required issue name, description, category, estimated time, and optional image to each card | R8, ADR-04 | T10 | Done |
| T12 | Add category controls that filter the collection to Monitor, Dock, or Laptop items | R3, ADR-03 | T10 | Done |
| T13 | Add a search field that matches issue names, categories, and models | R6, R7, ADR-03 | T10 | Done |
| T14 | Add a clear message when search or filtering returns no matches | R6, R7, ADR-03 | T12, T13 | Done |
| T15 | Test category filtering and several issue, category, and model searches | R3, R6, R7 | T12–T14 | Done |
| T16 | Connect each collection card to the correct detail route | R8, R9, ADR-02, ADR-04 | T10 | Done |
| T17 | Adapt the detail page to display the selected item's full information | R9, ADR-04 | T16 | Done |
| T18 | Display model information and estimated completion time on the detail page | R8, R11 | T17 | Done |
| T19 | Display troubleshooting instructions as short numbered steps | R10 | T17 | Done |
| T20 | Display “Safe to try,” “Contact IT,” and stop warnings when required by the selected item | R12, ADR-05 | T17 | Done |
| T21 | Add the “Still need help?” option and contact instructions | R13, ADR-07 | T17 | Done |
| T22 | Add a control that returns the user to the troubleshooting collection | R14, ADR-02 | T17 | Done |
| T23 | Test one complete Monitor, Dock, and Laptop detail flow | R9–R14 | T18–T22 | Done |
| T24 | Add a clear error message for a missing or unreadable CSV file | R15 | T5 | Done |
| T25 | Test the CSV error state without leaving a blank page | R15 | T24 | Done |
| T26 | Make cards and detail pages work when an image is missing | R8, ADR-06 | T11, T17 | Done |
| T27 | Apply the ReBootIT? colors, spacing, headings, and Bootstrap card styling from `design-system.md` version 1.0 | ADR-00 | T8, T11, T17 | Done |
| T28 | Test the Home, collection, and detail layouts at desktop and mobile widths | ADR-00 | T27 | Done |
| T29 | Check keyboard access, visible focus, headings, labels, contrast, and image alternative text | R1–R14, ADR-00 | T27 | Done |
| T30 | Complete a final test of navigation, data, search, details, help guidance, and error handling | R1–R15 | T7, T15, T23, T25, T26, T28, T29 | Done |
| T31 | Publish the updated prototype through GitHub Pages | ADR-00, ADR-02 | T30 | Done |
| T32 | Verify the deployed application and design documents from their public URLs | ADR-00 | T31 | Done |

**Status values:** Not started · In progress · Done · Blocked

## Definition of Done (applies to every task)

- Matches its linked requirement's acceptance criteria in the specification.
- Reviewed by a human before marked done
- No task marked done without a test passing

## Blocked / Questions

No tasks are currently blocked. All implementation, testing, publishing, and public URL verification tasks were completed by September 29, 2026.

