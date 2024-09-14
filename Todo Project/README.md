# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Todo App with React, useState, useEffect, and Material UI

This is a simple Todo application built using React functional components, leveraging `useState` and `useEffect` hooks, along with Material UI for the design and layout. The app fetches a list of todo items from the [Dummy JSON API](https://dummyjson.com/) and displays the tasks with their status (completed or not).

## Features

- Fetching todo list data asynchronously from the Dummy JSON API.
- Displaying todo items with task descriptions, their `id`, and completion status.
- Use of Material UI components for better UI/UX.
- Shows detailed information about each task using a dialog box.
- Uses `useState` for state management and `useEffect` for side effects like data fetching.
- Dynamic status display (Completed or Pending) for each task.

## Technology Stack

- **React**: For building user interfaces with functional components.
- **Material UI**: For design and layout components.
- **JavaScript (ES6+)**: Core programming language.
- **HTML/CSS**: For markup and basic styling.

### Core Functionalities

- **Data Fetching**: The todo list is fetched using the `fetch()` API in an `async` function, which gets the data from the Dummy JSON API.
- **Hooks**:

  - `useState`: For managing local state, such as the list of todos and dialog states.
  - `useEffect`: For fetching the data when the component loads.

- **Material UI**:
  - `Card`, `Typography`, and `Button` components are used to display todo items in a clean and structured manner.
  - `Dialog`: Used to show additional details of each task.

## API Details

The app fetches data from [Dummy JSON API](https://dummyjson.com/todos) to simulate real-world data fetching. The `todos` endpoint provides a list of todo items, each containing the following fields:

- `id`: The unique identifier for the todo item.
- `todo`: The task description.
- `completed`: Boolean value representing whether the task is completed or not.

## Future Enhancements

- Add editing functionality to update the todo status.
- Improve the UI with more detailed views of each todo item.
- Add the ability to filter todos based on their completion status.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
