# Names App

Web app for name info and popularity.

## About The Project

This project is a simple web application that allows users to explore information and popularity of names. It is built with React and uses data from the US Social Security Administration.

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/your_repository.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the app
   ```sh
   npm start
   ```

## Project Structure

```
names-app/
├── Data/
│   ├── US/
│   │   ├── ByState/
│   │   ├── ByYear/
│   │   └── Top1000 Last Names.xls
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
└── README.md
```

## Data

The data used in this application is from the US Social Security Administration and includes:
- Baby names by year (1880-1996)
- Baby names by state
- Top 1000 last names
