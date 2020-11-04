# React Chatroom build with Firebase Cloud Firestore
1. User can sign in with Google
1. User can read latest 25 messages
1. User can send message 
1. Messages saved in Firebase Cloud Firestore


## Setup
```bash
git clone https://github.com/leongjinqwen/react-firebase-chatroom.git
cd react-firebase-chatroom
```
### 1. Set up environment variables
In the root directory, create a new file `.env` (Remember to add this filename inside `.gitignore`).  
Copy and paste the code below in `.env` and fill in the following environment variables.
```
REACT_APP_FIREBASE_API_KEY=""
REACT_APP_FIREBASE_AUTH_DOMAIN=""
REACT_APP_FIREBASE_DB_URL=""
REACT_APP_FIREBASE_PROJECT_ID=""
REACT_APP_FIREBASE_STORAGE_BUCKET=""
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=""
REACT_APP_FIREBASE_APP_ID=""
```
### 2. Install dependencies
```bash
npm install
npm start
```