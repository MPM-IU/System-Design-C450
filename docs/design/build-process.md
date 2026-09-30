# ReBootIT? Week 5 Build Process

## Starting Point

I began with the provided collection-and-detail starter application. My plan was to adapt it instead of rebuilding it. Before changing code, I completed `design-system.md` and compared the specification, plan, tasks, and starter files.

I noticed that the older documents referred to `style-guide.html`, while the Week 5 assignment required `design-system.md`. I corrected those references. I also added `steps` and `warning` to the data description because the specification required numbered instructions and safety messages but did not explain how they would be stored.

## Scope Decision

My original idea focused on Dell equipment because it is familiar to me. During the AI-assisted build, I realized that the same collection and detail structure could eventually support Samsung monitors, other manufacturers, and more amber-light problems.

I chose not to add every manufacturer to the first version. That would require more model-specific research and could make the prototype too large. The current sample uses a small group of Monitor, Dock, and Laptop issues. Samsung and other manufacturers are recorded as future work after their information can be verified.

## Build Record

| Tasks | Work completed | How it was tested | Commit example |
|------|----------------|-------------------------|----------------|
| T1–T5 | Reviewed the starter, mapped the CSV fields, created nine sample guides, and updated the data loader | Compare CSV rows and displayed cards; verify manufacturer details | `T1-T5: prepare ReBootIT data and loading` |
| T6–T9 | Renamed Items to Troubleshooting and added three Home categories | Open each navigation link and category choice | `T6-T9: update navigation and Home categories` |
| T10–T15 | Added cards, category filters, search, and a no-results message. The category buttons were placed in a horizontal line, and the search bar was moved to the right | Tested all filters, several issue, category, and model searches, and both layout changes | `T10-T15: build collection search and filters` |
| T16–T23 | Added detail routing, models, time, numbered steps, safety messages, help, and back navigation | Complete one Monitor, Dock, and Laptop detail flow | `T16-T23: build troubleshooting details` |
| T24–T26 | Added a clear data error and missing-image placeholder | Break and restore the CSV path; remove one test image | `T24-T26: add error and missing-image states` |
| T27–T29 | Applied the design system, responsive Bootstrap layout, focus styling, labels, headings, and alternative text | Test desktop/mobile widths and keyboard navigation | `T27-T29: apply design system and accessibility` |
| T30 | Reviewed the complete application against R1–R15 | Completed every row in `final-test.md`; all tests passed | `T30: complete final ReBootIT test` |
| T31–T32 | Published and verified GitHub Pages | Opened the application and all design-document URLs successfully | `T31-T32: publish and verify ReBootIT` |

## What I Understood About the Build

- `items-template.csv` stores the troubleshooting records.
- `app.js` loads the CSV and turns each row into an item the components can use.
- The Home component links users to the selected equipment category.
- The collection component creates cards, search results, and category filters.
- The detail component uses the route ID to find one item and display its full instructions.
- `style.css`, Bootstrap, and `design-system.md` control the visual rules.
- Hash routes allow the application to work on GitHub Pages without a server.

## Refinements Made

- Search was kept because prototype feedback showed that users may know the model or problem they need.
- The category buttons originally appeared on the left side and left a large empty area. I changed them to a horizontal line across the page so the space was used better.
- The search bar was originally centered. I moved it to the right side of the collection controls so the category buttons could stay together and the page looked more balanced.
- Model information was made visible because users can otherwise find instructions for the wrong equipment.
- Estimated times were added so users can judge possible downtime.
- Safety labels and stop warnings were made visible on the detail page.
- Missing images use a simple placeholder instead of leaving a broken area.
- The application states when users should contact IT rather than providing advanced repair instructions.

## Final Testing Result

I tested the navigation, categories, horizontal button layout, right-aligned search bar, searches, filters, detail pages, safety messages, missing-image behavior, CSV error message, mobile layout, keyboard access, and public GitHub Pages links. All tests passed, and tasks T1–T32 were marked Done in `tasks.md`.

## Future Expansion

The structure could later support Samsung monitors and more laptop manufacturers. Before adding them, I would verify the model-specific information, update the specification and data fields, add new task IDs, and test the new records. This keeps future ideas visible without claiming they are already supported.
