# Design System — ReBootIT?

## 1. Brand Principles

ReBootIT? should feel helpful, simple, and dependable. The design should make troubleshooting information easy to find for users who may already be frustrated with their device. The first version may focus on Dell equipment, but the design should remain neutral enough to support Samsung monitors and other manufacturers later.

## 2. Color Palette

| Name | Hex | Use |
|------|-----|-----|
| Primary | `#0D6EFD` | Main buttons, selected categories, and important links |
| Secondary | `#6C757D` | Secondary buttons and less important information |
| Background | `#F8F9FA` | Main page background |
| Surface | `#FFFFFF` | Cards, navigation, and content areas |
| Text | `#212529` | Headings and body text |
| Safe | `#198754` | “Safe to try” messages and successful results |
| Warning | `#B02A37` | “Contact IT,” errors, and stop warnings |

## 3. Typography

| Role | Font | Size | Weight |
|------|------|------|--------|
| Heading 1 | Bootstrap system font | 32px | Bold (700) |
| Heading 2 | Bootstrap system font | 24px | Semibold (600) |
| Body | Bootstrap system font | 16px | Regular (400) |

The default Bootstrap system font will be used because it is readable and does not require another font library. Troubleshooting steps should be short and displayed in numbered lists.

## 4. Logo Usage

- File(s): No separate logo file is required for version 1.0. Use **ReBootIT?** as a text wordmark. A simple restart or circular-arrow icon may appear beside it.
- Do NOT: Remove the question mark, change the capitalization, stretch the icon, use unapproved colors, or place the wordmark on a background that makes it difficult to read.

## 5. Spacing & Grid

- Base unit: 8px
- Grid/columns: Bootstrap 12-column responsive grid with a maximum content width of approximately 1140px
- Standard spacing scale: 8 / 16 / 24 / 32 / 48px
- Cards may use three columns on large screens, two columns on medium screens, and one column on small screens.

## 6. Core Components

| Component | Rules |
|-----------|-------|
| Button (primary) | Primary blue background, white text, clear action label, 8px corner radius, and visible keyboard focus |
| Button (secondary) | White background with a blue border and blue text; used for actions such as returning to the collection |
| Card | White background, light border, 16px padding, 8px corner radius, small shadow, and enough information to identify the issue |
| Form field | Visible label above the field, clear placeholder text, Bootstrap styling, and a visible focus outline |
| Navigation | White background with a bottom border; includes ReBootIT?, Home, Troubleshooting, and About |
| Safety message | Uses words and color together; green for “Safe to try” and dark red for “Contact IT” or stop warnings |
| Troubleshooting steps | Numbered list with short directions and spacing between steps |

## 7. Voice & Tone

- Tone: Helpful, calm, direct, and brief.
- Use common words instead of unnecessary technical language.
- Buttons should describe the action, such as **View steps** or **Back to troubleshooting**.
- Safety messages should clearly say **Safe to try** or **Contact IT**.
- Error messages should explain what happened and what the user can do next.
- The application name can be lighthearted, but troubleshooting and safety instructions should not use jokes.

## 8. Accessibility Standards

- Minimum contrast ratio: 4.5:1 for normal text and 3:1 for large text.
- Standard to meet: WCAG 2.1 AA.
- Include logical headings, visible keyboard focus, form labels, useful alternative text, and controls that can be used without a mouse.
- Color should not be the only way that errors, safety levels, or selected categories are communicated.

## 9. Version & Change Log

| Version | Date | Change | Approved by |
|---------|------|--------|-------------|
| 1.0 | 2026-09-29 | Initial ReBootIT? design system | Matthew McCreary |

---

**Referenced by:** `specification.md`, `plan.md`, and the design-related tasks in `tasks.md`.
