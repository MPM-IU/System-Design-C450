# ReBootIT? Final Test

This checklist was completed in the published application before T30 was marked Done.

| Test | Expected result | Result |
|------|-----------------|--------|
| Open Home | ReBootIT? tagline and three categories appear | Pass |
| Open navigation links | Home, Troubleshooting, and About work | Pass |
| Select Monitors | Three Monitor guides appear | Pass |
| Select Docking Stations | Three Dock guides appear | Pass |
| Select Laptops | Three Laptop guides appear | Pass |
| Check category-button layout | Monitor, Dock, and Laptop buttons appear in a horizontal line across the page instead of leaving empty space on the left | Pass |
| Check search-bar position | Search bar appears on the right side of the collection controls instead of in the center | Pass |
| Search `WD19` | Three Dock guides appear | Pass |
| Search `no signal` | Monitor no-signal guide appears | Pass |
| Search `Laptop` | Laptop guides appear | Pass |
| Search nonexistent text | Clear no-results message appears | Pass |
| Open Monitor detail | Model, time, steps, safety, help, and back control appear | Pass |
| Open Dock detail | Model, time, steps, safety, help, and back control appear | Pass |
| Open diagnostic-light detail | Contact IT and warning appear | Pass |
| Remove an image value | Card and detail remain usable | Pass |
| Break CSV path temporarily | Clear data-loading error appears | Pass |
| Restore CSV path | Normal collection returns | Pass |
| Test phone width | Content stacks without horizontal scrolling, and the controls remain usable | Pass |
| Use keyboard only | Links, buttons, filters, and search can be reached with visible focus | Pass |
| Open GitHub Pages URL | Published application loads | Pass |
| Open design-document URLs | Specification, plan, tasks, and design system are public | Pass |

## Refinements Confirmed During Testing

- The category buttons were changed from a vertical group on the left to a horizontal line across the page. This reduced the amount of unused space.
- The search bar was moved from the center to the right side of the collection controls. The search function continued to work after the layout change.
- Both refinements were checked at desktop and phone widths.

## Static Checks Completed Before Browser Testing

- JavaScript files pass syntax checks.
- The CSV contains nine records and all three required categories.
- Required data fields are present.
- Required hash routes remain defined.
- Search, category-filter, detail-step, safety, help, error, and missing-image code is present.

## Final Result

All listed manual and static checks passed. The completed application matched the specification, and no unresolved problems remained at the end of final testing on September 29, 2026.
