# Specification: ReBootIT?

App description: ReBootIT? is a web application that helps users troubleshoot common problems with monitors, docking stations, and laptops. It is intended for people who want to try a few safe and simple fixes before contacting IT support.

## Style and Theme

ReBootIT? should have a simple and easy-to-read design. The application should not look overly technical because it is intended for users with different levels of computer experience.

Overall mood: Helpful, simple, and professional.

The application should use the Bootstrap styling already included in the starter project. It should have a light background, blue buttons, dark text, and cards for displaying troubleshooting topics. Headings and buttons should be large enough to read easily.

Use the **style-guide.html** file for additional details about fonts, colors, and layout.

## User Scenarios

### Story 1: Find a troubleshooting guide

A user is having a problem with a monitor, docking station, or laptop. They open ReBootIT?, select the type of equipment, and see a list of common problems.

### Story 2: Search for a problem

A user knows the problem or equipment model they need help with. They use the search bar and receive a list of matching troubleshooting guides.

### Story 3: Follow the instructions

A user opens a troubleshooting guide and sees short, numbered instructions. They can also see the estimated time and whether the fix is safe to try without contacting IT.

---

## Requirements

### Functional Requirements

1. The app must include these pages:

   - Home (`#/`)
   - Troubleshooting collection (`#/items`)
   - Troubleshooting detail (`#/items/:id`)
   - About (`#/about`)

2. The navigation bar must let people move to Home, Troubleshooting, and About.

3. The Home page must display three troubleshooting categories:

   - Monitors
   - Docking stations
   - Laptops

4. The app must load data from `items-template.csv`.

5. The collection page must show one card per row in the data file.

6. The collection page must include a search bar.

7. The search bar must allow users to search by issue, equipment category, or model.

8. Each card must include:

   - Issue name
   - Short description
   - Equipment category
   - Estimated completion time
   - Image, if available
   - A way to open the detail page

9. The detail page must show full information for one selected issue.

10. The detail page must display troubleshooting instructions as short, numbered steps.

11. The detail page must show which equipment models the instructions apply to when needed.

12. The detail page must tell the user whether the solution is “Safe to try” or whether they should “Contact IT.”

13. The detail page must include a “Still need help?” option.

14. The detail page must include a way to return to the troubleshooting collection.

15. If the data cannot load, the app must show a clear message instead of a blank page.

### Key Data

The application will use this basic item shape from the current starter data file:

- Item
  - id
  - name
  - description
  - category
  - image_url
  - location

The fields will be used in the following way:

- `id`: A unique number for the troubleshooting guide
- `name`: The name of the problem
- `description`: The troubleshooting instructions
- `category`: Monitor, Dock, or Laptop
- `image_url`: An image of the equipment or problem
- `location`: The model or location of a button, light, cable, or port

If the starter file allows additional fields, the app may also use:

- estimated_time
- safety_level
- model

## Success Criteria

1. A new person can reach the troubleshooting collection in one click from Home.

2. A new person can identify Monitors, Docking Stations, and Laptops as the three main categories.

3. A user can search for a problem or equipment model without help.

4. A user can open one troubleshooting detail page from the collection without help.

5. A user can understand and follow the numbered troubleshooting steps.

6. A user can tell whether a solution is safe to try or requires help from IT.

7. A user can find the estimated completion time.

8. If the data cannot load, the app shows a clear message instead of a blank page.

## Starter Defaults

The template starts with Bootstrap default styling, including a light background, blue primary color, and simple cards. ReBootIT? will keep these defaults while adding equipment categories, a search bar, estimated completion times, and safety messages.

## Assumptions

- This is a beginner project for learning how to describe app behavior before generating code.
- The application is a prototype and not a finished IT support system.
- The first version focuses on monitors, docking stations, and laptops.
- The app uses one text table data file as its data source.
- The app does not require a user account or login.
- The app does not automatically create an IT support ticket.
- The app only provides safe and basic troubleshooting instructions.
- Advanced repairs and problems involving damaged equipment will be directed to IT.
- The data may use placeholder images or no images at all.
- Styling remains based on the Bootstrap classes already used in the starter project.
- The first version focuses on clarity and working basics rather than advanced features.