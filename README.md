# GraphQL Property Management API

> **:warning: Important Note**  
> This project requires an API key to interact with the actual Weather API. Without a valid API key, the weather-related functionality will not work.  
> Please contact the developer to obtain the necessary API key and instructions.

---

## 📋 Overview

This project is a GraphQL-based API for managing property records. It allows users to perform CRUD operations on property data and fetch weather information for specific properties by integrating with the Weather API.

### Features
- Create, read, and manage property records.
- Fetch weather data for properties during creation.
- Query all properties with filtering and sorting options.
- Explore the API using Apollo Sandbox.

---

## 🧑‍💻 Technologies Used
- Node.js: Backend runtime.
- TypeScript: Static typing for JavaScript.
- GraphQL: API query language.
- Express: Web framework.
- Apollo Server: GraphQL server integration.
- SQLite: Lightweight database. **(Note that database file with example entries is already present: database.sqlite)**
- Sequelize: ORM for database management.

## 🚀 Getting Started

### 1. Clone the Repository or download ZIP

```
git clone https://github.com/johnPaslawski/graphQL-API.git
cd graphQL-API
```

### 2. Install Dependencies
Ensure you have Node.js installed (version 14 or higher), then install the required packages:
```
npm install
```

### 3. Set Up Environment Variables
Create a .env file in the root directory of the project and add your Weather API key:
(OR CONTACT AUTHOR - CONTACT INFO AT THE END OF THIS FILE)
```
WEATHERSTACK_API_KEY=your_api_key_here
```
Replace your_api_key_here with the API key provided by the developer.

## 🛠️ Available Scripts
Development Mode
Run the application in development mode with live reload:
```
npm run dev
```
### Check your console where you run scripts to obtain information about API URL

### Default URLs:
## API Root: http://localhost:3001
## GraphQL Sandbox: http://localhost:3001/graphql

Production Mode
Build and run the project:
```
npm run start-prod
```

# 🧪 Testing the API
Using Apollo Sandbox
You can interact with the GraphQL API via the Apollo Sandbox:

### URL: http://localhost:3001/graphql
### Example Queries are in exampleQueries.txt and exampleMutations.txt files

# mail: jpaslawski93@gmail.com