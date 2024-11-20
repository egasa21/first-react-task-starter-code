# Profile Cards App - React Task

## Overview

In this task, you will build a **Profile Cards** app using React. This app will render a list of user profiles, displaying each user's name, age, location, and online status. You'll practice key React concepts like **components**, **JSX**, **props**, **conditional rendering**, and **rendering lists**.

## Instructions

### Task 1: Display a Heading in `App.js`

In the `App.js` file, there is a placeholder for a heading. Your task is to:
- **Display a heading** with the text "Profile Cards" at the top of the page. Use an `<h1>` tag.

### Task 2: Create and Render `ProfileList` Component

- You will need to create a `ProfileList` component.
- This component will receive a `profiles` array (passed from `App.js`) as a prop and use **`map()`** to render a `ProfileCard` for each user in the array.
- For now, the `ProfileList` component is just a placeholder. Your job is to:
  - Use the `.map()` function to loop through the `profiles` array.
  - For each profile, render a `ProfileCard` and pass the necessary data (name, age, location, isOnline) as props to `ProfileCard`.

### Task 3: Display Profile Data in `ProfileCard` Component

The `ProfileCard` component is a placeholder where you need to display the profile's details. Your task is to:

1. **Display the user’s name**:
   - Use an `<h2>` tag to display the `name` prop.
   
2. **Display the user’s age**:
   - Use a `<p>` tag to display the `age` prop. For example: `Age: 25`.

3. **Display the user's location**:
   - Use a `<p>` tag to display the `location` prop. If the `location` is missing, display the text **"Location: Unknown"**.

4. **Display the user’s online status**:
   - Create a **status dot** (a small circle) that changes color based on the `isOnline` prop.
   - If `isOnline` is **true**, make the dot **green**.
   - If `isOnline` is **false**, make the dot **gray**.
   - Also, display the text **"Online"** or **"Offline"** based on the `isOnline` prop.

### Task 4: Structure the App

1. In `App.js`, make sure to:
   - **Display the heading** for the app using the `<h1>` tag.
   - **Render the `ProfileList` component** and pass the `profiles` array to it as a prop.

### Data Structure (`data.js`)

The `profiles` data is provided in the `data.js` file. Each profile has the following structure:

```js
[
  { id: 1, name: "Alice", age: 25, location: "New York", isOnline: true },
  { id: 2, name: "Bob", age: 30, location: "London", isOnline: false },
  { id: 3, name: "Charlie", age: 28, location: "Sydney", isOnline: true }
]
