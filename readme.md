# HTMX Explore Backend

This project is created for the backend of exploring HTMX. It is built using the following technologies:

- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **MySQL2**: A MySQL client for Node.js with a focus on performance.
- **Express**: A minimal and flexible Node.js web application framework.
- **Winston**: A versatile logging library for Node.js.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- MySQL

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/rrydrr/htmx-explore-backend.git
    ```
2. Navigate to the project directory:
    ```sh
    cd htmx-explore-backend
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

### Configuration

1. Create a `.env` file in the root directory and add your MySQL configuration:
    ```env
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=yourpassword
    DB_NAME=yourdatabase
    ```

### Running the Project

Start the development server:
```sh
npm run dev
```

### Logging

This project uses Winston for logging. Logs are configured to be output to the console and error logs are inputted to an error.log file and can be customized in the `log.ts` file.

## Contributing

Feel free to submit issues and pull requests. For major changes, please open an issue first to discuss what you would like to change.