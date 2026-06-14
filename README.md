# Task-3-HlaAhmed
Week 3 Project
# Week 3: Client-Side Interaction Systems & Decoupled DOM Manipulation

## Project Goal
To engineer a functional client-side runtime layer that transforms the responsive user interface into an interactive web application. This phase implements a modular **Decoupled Architecture** to handle real-time state modifications, browser events, and live document tree data re-rendering.

## Tech Stack & Skills
- **Languages & Libraries:** JavaScript (ES6+), Font Awesome Icon Toolkit (CDN Architecture)
- **Skills Mastered:** Document Object Model (DOM) traversal, runtime interaction monitoring (`addEventListener`), application state tracking, operational encapsulation, and component isolation.

## Decoupled Code System Architecture
To achieve clean engineering separation, the code avoids generic "spaghetti loops" by separating logic patterns into completely isolated, self-contained functional modules managed by a master DOM controller lifecycle:

### 1. Navigation Link Control Module (`initSmoothNavigation`)
Overwrites traditional, abrupt browser page jumps by capturing click events and rendering a smooth scroll transition (`behavior: 'smooth'`) to section anchors down the viewport.

### 2. Reading Progress & Data Tracker (`initReadingTrackerAndFavorites`)
Manages the application's core feature mechanics. Dynamically generates two control items ("Mark as Read" and "Favorite") for every catalog book card on page initialization. It updates the global sidebar counter metric immediately upon user click updates without triggering a browser page refresh.
- **Initial Setup Simulation:** Programmatically runs an array index loop to pre-catalog the first 2 out of 4 baseline books as read instantly on application startup.

### 3. Environmental Theme Controller (`initDarkThemeToggle`)
Monitors the global header toggle switch. It flips a single visual override class (`.dark-theme`) across the `<body>` node array while dynamically swapping out Font Awesome sun and moon class identifiers inside the active viewport element.
