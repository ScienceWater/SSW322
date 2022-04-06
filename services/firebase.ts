import React from 'react'
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore, addDoc, collection, query, where, getDocs } from 'firebase/firestore';
import Constants from 'expo-constants';
import 'firebase/auth'


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
        console.log(user.email);
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

export const addNewProduct = async (itemName: string, Category: string, Price: string, Description: string) => {
    try {
        const productData = {
            item_name: itemName,
            category: Category,
            price: Price,
            description: Description,
        }
        const docRef = await addDoc(collection(firestore, "products", ), productData);
        console.log(docRef.id);
    } catch (e) {
        console.log(e);
    }
}

export const getEmail = async () => {
    let email = user?.email;
    let email_one = "this";
    if(email == null){
        email_one ='null'
    }
    else if(email == undefined){
        email_one='undefined'
    }
    else{
        email_one = email;
    }
    return email_one;
}

export const getProducts = async (category: string, item_name: string) => {//, price: string, description: string) => {
    let products: Object[] = [];
    try {
        const q = query(
            collection(firestore, "products")
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            let data = doc.data();
            if ((data['category'].toString() === category && data['item_name'].toString().includes(item_name)) ||
                (category === '' && data['item_name'].toString().includes(item_name)))
            products.push({
                category: data['category'],
                item_name: data['item_name'],
                price: data['price'],
                description: data['description']
            });
        });
    } catch (e) {
        console.log(e);
    }
    return products;
}