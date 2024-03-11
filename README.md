# nextauth-mongodb

A minimalistic web app to learn the interaction between the NextAuth credentials provider and MongoDB.

This app contains a login page, a register page and API endpoints. The password will be stored hashed.

## Note

<details>
  <br/>
  <summary>Environment variables</summary>
  
  ```
  MONGODB_URI = mongodb://username:password@clustername-shard-00-00.mongodb.net:27017/mydatabase (example)
  NEXTAUTH_SECRET = Randomized string
  ```
</details>

You will need a MongoDB Account and a database (Hint: Take a look at the User model)

## Challenges: What can be improved?

- Check whether an email has really been entered
- Check whether anything at all has been entered in the form (both login and registration)
- Hashing the password before it is transferred to the backend
- Check whether an entry with the entered data already exists in MongoDB

And whatever else you can think of, feel free :)

## Setup the app

1. Clone the repository from GitHub
```
git clone https://github.com/kevinldg/nextauth-mongodb.git
```
2. Go into the repository
```
cd nextauth-mongodb
```
3. Install required packages
```
npm i
```
4. Run the development server
```
npm run dev
```

## Used technologies

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

Axios (HTTP requests)

Bcrypt (Encryption)

NextAuth.js (Authentication)

Mongoose (ODM for MongoDB)
