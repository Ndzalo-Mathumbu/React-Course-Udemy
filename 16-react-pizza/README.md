🍕 React Pizza App

A pizza ordering app built with React, Redux Toolkit, and React Router.
This project focuses on real-world frontend architecture: global state management, async data handling, and clean UI patterns.

⚙️ Features

- Add, remove, and manage cart items
- Increase ➕ ➖ decrease item quantity
- Clear entire cart
- Real-time cart totals (price & quantity)
- User name management with global state
- Auto-detect user location using geolocation
- Reverse geocoding to get readable address
- Async state handling (loading, success, error)
- Dynamic UI updates with Redux selectors
- Routing with React Router (no page reloads)


🛠 Tech Stack

React – UI
Redux Toolkit – Global state management
React Redux – Connect React ↔ Redux
React Router – Routing & navigation
Tailwind CSS – Styling
Geolocation API – User position
Reverse Geocoding API – Address lookup



🧠 Key Concepts Learned

- Redux Toolkit
Created slices using createSlice()
Managed global cart and user state
Used reducers for add/remove/update logic

- Selectors
Derived values using .reduce()
Example:
total cart price
total quantity

- Async Logic
Used createAsyncThunk() for:
fetching user location
reverse geocoding address

- State Safety
Avoided crashes using:
optional chaining ?.
fallback values ?? 0
Ensured reducers don’t break state shape

- React Router
Navigation using modern routing patterns
Controlled UI without full page reloads

- Tailwind CSS
Built responsive UI
Centered layouts using flexbox

⚠️ Challenges & Fixes

- State shape breaking in reducers
- Fixed by not returning wrong structures
- Missing React keys
- Fixed using unique pizzaId
- Layout overflow issues
- Fixed using proper flex and height structure

👨‍💻 Author
Ndzalo NK Mathumbu
This project was built as part of a guided course.
view project (https://the-good-pizza.netlify.app/)
