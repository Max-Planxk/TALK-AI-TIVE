const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccount.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Save a query to Firestore
async function saveQuery(userId, url, query, response) {
  await db.collection('queries').add({
    userId,
    url,
    query,
    response,
    timestamp: admin.firestore.FieldValue.serverTimestamp()
  });
}

// Get all queries for a user
async function getUserQueries(userId) {
  const snapshot = await db.collection('queries')
    .where('userId', '==', userId)
    .orderBy('timestamp', 'desc')
    .get();
  
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

module.exports = { db, saveQuery, getUserQueries };