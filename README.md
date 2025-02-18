# Santex RBI Team - Front End Training Challenge

Quick challenge to help candidates to join RBI Team to catch up with currently used technologies.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Goals

- Get familiar with Styled Components as a styling strategy.
- Get a good understanding of Apollo Client and how to integrate GraphQL to a React front-end application.
- Acquire good practices with Jest and testing both components and hooks.
- Review React hooks concepts and develop custom hooks.

## Requirements

- Implement a home page with a grid of products that includes product picture, description, and price (from any product variant). Hint: use a GraphQL query.
- Create a "Buy" button for each product in the grid and implement a mutation to update an order every time a user clicks on that button. The mutation is called `addItemToOrder`. Hint: look into the API documentation section of this document.
- Implement an app header component that includes the subtotal of the current order and persists through page refresh. Hint: use GraphQL mutation and Context API.
- Add a custom hook named `useStateWithStorage` with the same API as `useState` but adding local storage capabilities. Can be used for the header subtotal.
- Create tests for grid UI items and other components.

## Resolution Overview

### Code Structure

- **Components:** All UI components are located in the `components` folder. The main components are:
  - **ProductList:** Displays the list of products by fetching data using GraphQL and renders each product using the `ProductCard` component.
  - **ProductCard:** Represents an individual product and includes the "Buy" button with a mutation to add items to the order.
  - **Header:** Displays the current order subtotal and uses a custom hook to persist the subtotal through page refresh.
  - **LoadingErrorState:** Displays a loading state or error message during the fetch process.
  
- **Context:** The `OrderContext` handles the global state of the order, including the added products and their total price. The context is wrapped around the `App` component and is available across the app.

- **Hooks:** Custom hooks like `useStateWithStorage` allow managing state with local storage support for persistent data between refreshes.

### Dependencies and Libraries Used

1. **React:** The main library used for building the UI components.
2. **Styled Components:** Used for styling the components, ensuring a clean separation of styles and logic.
3. **Apollo Client:** Handles the GraphQL queries and mutations to fetch and update product data from the API.
4. **Jest:** Used for unit and integration testing, ensuring the correctness of components and hooks.
5. **React Testing Library:** Provides utilities for testing React components in a way that simulates real user interactions.

### Approach and Features

- **GraphQL Integration:** 
  - Queries are used to fetch product data from the API using Apollo Client, and mutations like `addItemToOrder` are used to update the order with selected items.

- **Order Management with Context:**
  - The `OrderContext` manages the order state (i.e., the products added and the subtotal). It allows the app to persist the state even after a page refresh.

- **Custom Hook with Local Storage:**
  - The `useStateWithStorage` hook mimics the API of `useState` but adds functionality to persist the state in local storage. This is useful for the subtotal display, ensuring the value persists after a page refresh.

- **Styled Components:** 
  - Styled Components is used for styling the UI. The button states (normal, hover, clicked) are styled with dynamic colors based on user interactions.

- **Testing:** 
  - Unit tests were written using Jest and React Testing Library to ensure components like the `ProductList`, `ProductCard`, `Header`, `LoadingErrorState`, and `HomePage` work correctly, including checking the GraphQL data, product rendering, and button clicks.

## API Documentation

Even though the app is already connected to a GraphQL endpoint, you can find all required information about `queries`, `mutations`, and GraphQL types here:

- [Vendure API Documentation](https://www.vendure.io/docs/graphql-api/shop/)

## Scripts

### `yarn start`

Runs the app in the development mode.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
