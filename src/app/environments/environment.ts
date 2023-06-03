require('dotenv').config();

export const environment = {
    firebase: {
        apiKey: process.env["API_KEY"],
        authDomain: process.env["AUTHDOMAIN"],
        projectId: process.env["PROJECT_ID"],
        storageBucket: process.env["STORAGE_BUCKET"],
        messagingSenderId: process.env["MESSAGING_SENDER_ID"],
        appId: process.env["APP_ID"],
        measurementId: process.env["MEASUREMENT_ID"]
    }
  };
  