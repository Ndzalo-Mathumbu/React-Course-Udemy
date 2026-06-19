# React Course Repository

React course projects built while learning React development.  
This repository documents a full learning journey from basic React fundamentals to full-stack applications using Next.js, Supabase, and modern frontend architecture.

---

# Projects Overview

---

## 01 - Pure React

A browser-based React exercise using React and ReactDOM from CDN to render a live clock and understand React without tooling.

### Skills learned

- React fundamentals without build tools
- JSX basics
- DOM rendering with ReactDOM
- Intro to components

### Challenges faced

- Understanding React without a build system
- Confusion between vanilla JS DOM updates and React rendering
- Learning why JSX normally requires tooling

---

## 03 - Pizza Menu

A static pizza menu UI using components, props, and conditional rendering.

### Skills learned

- Components & props
- JSX rendering
- Conditional rendering
- List rendering with `map()`

### Challenges faced

- Props flow between components
- Confusion with conditional rendering logic
- Correct use of keys in lists

---

## 04 - Steps

A step-based UI counter application.

### Skills learned

- `useState`
- Event handling
- Component composition
- Derived state

### Challenges faced

- React batching confusion (state not updating immediately)
- Passing event handlers correctly
- Understanding derived UI state

---

## 05 - Travel List

A packing list app with add/remove/clear functionality.

### Skills learned

- Controlled forms
- Array state management
- Immutable updates
- CRUD operations in UI

### Challenges faced

- Accidentally mutating state arrays
- Keeping UI synced after deletion
- Handling form reset logic

---

## 06 - Eat-N-Split

A bill splitting application for managing friends and balances.

### Skills learned

- Lifting state up
- Multi-component state coordination
- Controlled inputs
- Conditional UI updates

### Challenges faced

- Managing shared state between components
- Updating nested relationships
- Form state resetting

---

## 07 - Movie Flix

A movie search and watchlist app using OMDb API.

### Skills learned

- API integration
- `useEffect`
- Custom hooks
- LocalStorage
- Async handling

### Challenges faced

- Async race conditions in search
- Handling missing API data
- LocalStorage sync issues
- Custom hook abstraction

---

## 08 - How React Works (Final + Starter)

Exploration of React rendering behavior.

### Skills learned

- React rendering lifecycle
- State batching
- Component identity
- Key usage effects

### Challenges faced

- Confusion between re-render vs re-mount
- State reset behavior with keys
- Understanding React internals

---

## 09 - Class Components

Class-based React lifecycle project.

### Skills learned

- Class components
- Lifecycle methods
- `this` binding
- Legacy React patterns

### Challenges faced

- Transitioning from functional components
- Lifecycle method order confusion
- Binding `this` correctly

---

## 10 - Quiz App

A quiz application using reducer-based state.

### Skills learned

- `useReducer`
- Complex state management
- Timers in React
- Conditional rendering states

### Challenges faced

- Reducer logic complexity
- Timer synchronization issues
- Managing multiple UI states

---

## 11 - City Log

A travel tracking app with maps and routing.

### Skills learned

- React Router
- Context API
- Geolocation API
- Leaflet maps integration

### Challenges faced

- Routing structure confusion
- Geolocation permissions handling
- Map lifecycle integration
- Context state sharing

---

## 12 - Atomic Blog (Final + Starter)

A blog system focused on performance and context.

### Skills learned

- Context API
- Memoization (`useMemo`, `useCallback`)
- Performance optimization
- State architecture

### Challenges faced

- Avoiding unnecessary re-renders
- Context performance pitfalls
- Memoization misuse

---

## 13 - Workout Timer (Final + Starter)

Workout calculator and timer system.

### Skills learned

- Derived calculations
- `useEffect` dependency management
- Timer logic
- Memoization

### Challenges faced

- Effect dependency issues
- Timer synchronization bugs
- Complex derived state calculations

---

## 15 - Redux Bank

Banking app using Redux Toolkit.

### Skills learned

- Redux Toolkit
- Global state management
- Slices and reducers
- Dispatch flow

### Challenges faced

- Redux mental model shift
- Boilerplate structure understanding
- Debugging state flow

---

## 16 - React Pizza

Full pizza ordering system.

### Skills learned

- React Router
- Redux Toolkit
- Async state handling
- Geolocation API
- Tailwind CSS

### Challenges faced

- Cart state complexity
- Async location handling
- Redux async flow confusion
- UI responsiveness issues

🔗 View Project: https://the-good-pizza.netlify.app/

---

## 17 - The Wild Oasis

Hotel management dashboard.

### Skills learned

- Supabase integration
- Authentication systems
- React Query
- Dashboard analytics
- Protected routes

### Challenges faced

- Supabase relational data handling
- Authentication flow debugging
- Booking state complexity
- Data fetching & caching issues

🔗 View Project: https://the-wild-oasis-ndzalo-nk-hotel-app.netlify.app/

---

## 21 - The Wild Oasis Website

Full-stack cabin reservation platform built with Next.js.

### Skills learned

- Next.js App Router
- NextAuth authentication
- Server Actions
- Supabase database integration
- Form handling with `formData`
- Optimistic UI updates
- Deployment on Vercel

### Challenges faced

- NextAuth production setup (env variable issues)
- Supabase foreign key relationship errors
- Server Action debugging (`formData undefined`)
- Vercel deployment failures
- Authorization logic (edit/delete protection)
- Optimistic UI implementation
- Async redirect handling after actions

🔗 View Project: https://the-wild-oasis-nk.vercel.app/

---

## Advice Generator

Simple API-based advice generator app.

---

# Overall Skills Gained

Across all projects, I developed experience in:

- React fundamentals → advanced patterns
- State management (local → Redux → server state)
- Async programming (APIs, Supabase, Next.js server actions)
- Authentication systems (NextAuth)
- Full-stack architecture thinking
- Deployment and production debugging (Vercel)
- Performance optimization techniques
