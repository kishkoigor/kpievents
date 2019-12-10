import app from 'firebase/app';

import 'firebase/database';

const config = {
  apiKey: "AIzaSyC67rSTZzRim9lIavkFi-p6A_XQJbJm0Ro",
  authDomain: "kpievents-db.firebaseapp.com",
  databaseURL: "https://kpievents-db.firebaseio.com",
  projectId: "kpievents-db",
  storageBucket: "kpievents-db.appspot.com",
  messagingSenderId: "709421039211",
  appId: "1:709421039211:web:4401be40a523cd04dcfb2e"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.db = app.database();
  }
}

export default Firebase;