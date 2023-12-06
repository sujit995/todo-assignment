# React TodoList App

This is a simple TodoList application built with React. It allows users to add tasks, mark tasks as completed, and delete tasks. The application interacts with the JSONPlaceholder API to fetch and update tasks.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/react-todolist.git
    ```

2. Navigate to the project directory:

    ```bash
    cd assignment
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

### Running the Application

1. Start the development server:

    ```bash
    npm run dev
    ```

2. Open your web browser and go to [http://localhost:5173](http://localhost:5173) to view the application.

## Interacting with the JSONPlaceholder API

The application uses the JSONPlaceholder API (a fake online REST API) to fetch and update tasks. You can interact with the API to simulate CRUD operations.

### JSONPlaceholder API Endpoints

- Get all tasks:

    ```bash
    [https://jsonplaceholder.typicode.com/todos](https://jsonplaceholder.typicode.com/todos)
    ```

- Add a new task (POST request):

    ```bash
    [https://jsonplaceholder.typicode.com/todos](https://jsonplaceholder.typicode.com/todos)
    ```

    Example POST data:

    ```json
    {
      "title": "New Task",
      "completed": false
    }
    ```

- Update a task (PUT request):

    ```bash
    [https://jsonplaceholder.typicode.com/todos/{taskId}](https://jsonplaceholder.typicode.com/todos/${taskId})
    ```

    Example PUT data:

    ```json
    {
      "completed": true
    }
    ```

- Delete a task (DELETE request):

    ```bash
    [https://jsonplaceholder.typicode.com/todos/{taskId}](https://jsonplaceholder.typicode.com/todos/${taskId})
    ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
