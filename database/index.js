import admin from 'firebase-admin'

let app

if(!admin.apps.length){
    app = admin.initializeApp({
        credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_CREDENTIALS))
    });
}else{
    app = admin.app()
}
const database = app.firestore()

export default database
