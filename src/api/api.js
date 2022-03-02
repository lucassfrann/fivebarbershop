import { getDocs, collection, getFirestore } from "firebase/firestore"
import { db } from "../firebase"

const promesa = new Promise(function(resolve, reject) {
    getDocs(collection(db, "items"))
    .then(snapshot => {
        const products = snapshot.docs.map( (doc) => ({id:doc.id, ...doc.data()}))
        console.log(products)
        resolve(products)
    })
    .catch(error => {
        console.log('error')
    })
})

function getItems() {
    return promesa
}

export {
    getItems, 
}