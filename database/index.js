import admin from 'firebase-admin'
import serviceAccount from './credentials.json'

let app

if(!admin.apps.length){
    app = admin.initializeApp({
        // credential: applicationDefault(),
        // databaseURL: 'https://ClaseNext.firebaseio.com'
        // databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
        credential: admin.credential.cert(serviceAccount)
    });
}else{
    app = admin.app()
}
const database = app.firestore()

export default database
