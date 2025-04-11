
# humilhador-signo-server

This project is a backend server developed in TypeScript using the fastify framework.
It provides an API that returns humorous and provocative messages based on zodiac signs.

## 🚀 Features

- RESTful API with endpoints to get specific messages for each zodiac sign.
- API call AI to get the the answers.
- Implemented in TypeScript for better code safety and maintainability.
- Modular structure for easier future expansion and maintenance.


## 🛠️ Technologies Used

- [Node.js](https://nodejs.org/)
- [Fastify](https://fastify.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

## 🚧 How to Run the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/Luan4560/humilhador-signo-server.git
   ```

2. Navigate to the project directory:

   ```bash
   cd humilhador-signo-server
   ```

3. Install the dependencies:

   ```bash
   yarn install
   # or
   npm install
   ```

4. Build the project:

   ```bash
   yarn build
   # or
   npm run build
   ```

5. Start the server:

   ```bash
   yarn start
   # or
   npm start
   ```

The server will be available at `http://localhost:8080`.

## 📌 API Endpoints

| Method | Route           | Description                                   |
|--------|------------------|----------------------------------------------|
| POST    | `/api/horoscope`  | Returns a message for the specified sign   |

## 🤝 Contributions

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License

This project is licensed under the [MIT License](LICENSE).
