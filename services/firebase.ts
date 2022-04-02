import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore, addDoc, collection, query, where, getDocs } from 'firebase/firestore';
import Constants from 'expo-constants';


const firebaseConfig = {
    apiKey: Constants.manifest?.extra?.firebaseApiKey,
    authDomain: Constants.manifest?.extra?.firebaseAuthDomain,
    projectId: Constants.manifest?.extra?.firebaseProjectId,
    storageBucket: Constants.manifest?.extra?.firebaseStorageBucket,
    messagingSenderId: Constants.manifest?.extra?.firebaseMessagingSenderId,
    appId: Constants.manifest?.extra?.firebaseAppId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

// AUTHENTICATION // ---------------------------------------------------------
let user = auth.currentUser;

export const signUpWithEmail = async (fName: string, lName: string, email: string, password: string) => {
    try {
        let result = await createUserWithEmailAndPassword(auth, email, password);
        user = result.user;
        await updateProfile(user, {
            displayName: fName + ' ' + lName,
        });
        console.log(user);
        await addNewUser(fName, lName, email);
        return 'success'
    } catch (e) {
        console.log(e);
       
        return e;
    }
}

export const logInWithEmail = async (email: string, password: string) => {
    try {
        let result = await signInWithEmailAndPassword(auth, email, password);
        user = result.user;
        return 'success'
    } catch (e) {
        console.log(e);
        return e;
    }
}

export const logOut = async () => {
    try {
        await signOut(auth);
        user = auth.currentUser;
        console.log(user)
        return 'success'
    } catch (e) {
        console.log(e);
    }
}

// FIRESTORE // --------------------------------------------------------------
const addNewUser = async (fName: string, lName: string, email: string) => {
    try {
        const userData = {
            first_name: fName,
            last_name: lName,
            email: email
        }
        const docRef = await addDoc(collection(firestore, "users", ), userData);
        console.log(docRef.id);
    } catch (e) {
        console.log(e);
    }
}

export const getFirstName = async () => {
    try {
        let firstName = 'Temp';
        const q = query(
            collection(firestore, "users"), 
            where("email", "==", user?.email)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.data()['first_name'])
            firstName =  doc.data()['first_name'];
        });
        return firstName;

    } catch (e) {
        console.log(e);
    }
}

export const getProducts = async () => {
    let products = [{}];
    try {
        const q = query(
            collection(firestore, "products")
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            products.push({
                name: doc.data()['name'],
                price: doc.data()['price']
                //add more here
            })
           
        });
    } catch (e) {
        console.log(e);
    }
}