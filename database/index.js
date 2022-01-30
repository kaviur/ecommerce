import admin from 'firebase-admin'
import serviceAccount from './credentials.json'
require('dotenv').config()

let app
//const clave = process.env.FIREBASE_PRIVATE_KEY
const clave = process.env.KEY+process.env.KEY2+process.env.KEY3+process.env.KEY4+process.env.KEY5+process.env.KEY6+process.env.KEY8+process.env.KEY9+process.env.KEY10+process.env.KEY11+process.env.KEY12+process.env.KEY13+process.env.KEY14+process.env.KEY15+process.env.KEY16+process.env.KEY17

const credenciales = {
    "project_id": process.env.FIREBASE_PROJECT_ID,
    "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
    "private_key":clave.replace(/\\n/g, '\n'),
    "client_email": process.env.FIREBASE_CLIENT_EMAIL,
  }

if(!admin.apps.length){
    console.log(process.env.FIREBASE_CREDENTIALS);
    app = admin.initializeApp({
        credential: admin.credential.cert(credenciales)
    });
}else{
    app = admin.app()
}
const database = app.firestore()

export default database
