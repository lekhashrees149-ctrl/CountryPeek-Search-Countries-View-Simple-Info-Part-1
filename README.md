# CountryPeek - Part 1: Project Setup and App Shell

A React + Vite application for searching and viewing country information.

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header with links
│   └── Header.css
├── pages/
│   ├── Home.jsx            # Home page with search input
│   ├── Home.css
│   ├── NotFound.jsx        # 404 page for unmatched routes
│   └── NotFound.css
├── App.jsx                 # Main app with React Router setup
├── App.css
├── main.jsx                # React DOM entry point
└── index.css               # Global styles
```

## Features Implemented

✅ **React Project with Vite** - Fast development experience
✅ **React Router Configuration** - Client-side routing with layout pattern
✅ **Header Component** - Sticky header with navigation links (Home, Favourites)
✅ **Home Page** - Search input with state management using `useState`
✅ **404 Not Found Page** - Handles unmatched routes
✅ **Global Styling** - CSS variables and responsive design
✅ **Proper Folder Structure** - Organized components and pages
✅ **Responsive Design** - Mobile-friendly layout

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

The app will open at `http://localhost:5173`

## Build

```bash
npm run build
```

## Architecture Notes

### Header Placement
The Header component is placed **outside the Routes block** in App.jsx. This ensures:
- The header appears on **every page** (Home, Favourites, 404)
- Navigation is always accessible
- Consistent layout across the application

If the Header were inside a specific Route, it would only render on that route, breaking the persistent navigation pattern.

### React Router Layout Pattern
The application uses React Router's layout pattern:
```jsx
<Header />           {/* Outside Routes - always visible */}
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/favourites" element={...} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

This pattern ensures:
- Shared UI (Header) persists across route changes
- Only the content inside Routes changes based on the URL
- Route matching is deterministic: first matching route wins