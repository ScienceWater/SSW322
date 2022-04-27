import React from 'react'
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore, addDoc, collection, query, where, getDocs, DocumentSnapshot, getDoc, doc, updateDoc, arrayUnion, DocumentReference, setDoc } from 'firebase/firestore';
import Constants from 'expo-constants';
import 'firebase/auth'
import { getStorage, ref, uploadString } from "firebase/storage";

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
const storage = getStorage(app);
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
            email: email,
            cart: [],
        }
        const docRef = await addDoc(collection(firestore, "users", ), userData);
        await updateDoc(docRef, {
            userID: docRef.id,
        });
        console.log(docRef.id);
    } catch (e) {
        console.log(e);
    }
}

export const addNewProduct = async (
    itemName: string, Category: string, Price: string, 
    Description: string, imageURL: string, Email: string,
    Width: string, Height: string, Depth: string,
    ISBN: string, Brand: String, Serial: String, 
    Sport: String, Author: String, Weight: String, Color: string, Size: string, CourseNumber: string
    ) => {
    try {
        const productData = {
            item_name: itemName,
            category: Category,
            price: Price,
            description: Description,
            imageURL: imageURL,
            sellersEmail: Email,
            sold: false,
            dimensions: {
                width: Width,
                height: Height,
                depth: Depth,
            },
            ISBN: ISBN,
            Brand: Brand,
            Serial: Serial,
            Sport: Sport,
            Author: Author,
            weight: Weight,
            Color: Color,
            Size: Size,
            CourseNumber: CourseNumber
        }
        const docRef = await addDoc(collection(firestore, "products", ), productData);
        console.log(docRef.id);
    } catch (e) {
        console.log(e);
    }
}

// First attempt at addToCart (using `cart` collection inside `user` doc)
// export const addToCart = async(item: any) => {
//     console.log('inside addToCart');
//     const q = query(collection(firestore, "users"), where("email", "==", user));
//     console.log('inside addToCart');
//     const querySnapshot = await getDocs(q);
//     console.log('inside addToCart');
//     let userID = '';
//     console.log('inside addToCart');
//     querySnapshot.forEach((doc) => {
//         userID = doc.id;
//         console.log('inside addToCart');
//     });
//     // uses non-null assertion operator `!` (https://stackoverflow.com/questions/54496398/typescript-type-string-undefined-is-not-assignable-to-type-string)
//     // const userID: string = user?.uid.toString()!;
    
//     console.log('userID' + userID);
//     try {
//         // const arbit = .collection('users'))
//         const cartItemData = {
//             ref: '/products/Kv90wavhhLpaDw0FdBrE' // + item.toString()
//         }
//         const docRef = await addDoc(collection(firestore, "users", userID, "cart"), cartItemData);
//         console.log(docRef.id);  
//     } catch (e) {
//         console.log(e);
//     }
// }

// Second attempt at addToCart (using `cart` array field inside `user` doc)
export const addToCart = async (item: any) => {
    console.log('inside addToCart');
    console.log('item: ' + item);
    console.log('item.id: ' + item.id);
    console.log('item.data(): ' + item.data);
    console.log('item.item_name: ' + item.item_name);
    console.log('item.path: ' + item.path);

    try {
        console.log('inside try');
        // Get `user` doc with specified `email` field (https://firebase.google.com/docs/firestore/query-data/get-data#get_multiple_documents_from_a_collection)
        const q = query(collection(firestore, "users"), where("email", "==", user?.email));
        let userDocId: string = '';

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // Cast `userDocId` to `string` type (https://stackoverflow.com/questions/37978528/typescript-type-string-is-not-assignable-to-type)
            userDocId = doc.id as string;
        });
        let userRef = doc(firestore, "users", userDocId);
        // let userRef = doc(firestore, "users", user?.userID);
        // let productRef = doc(firestore, "products", "dOtUbCdfkyizkDsBgO6C");
        let productPath = item.productId; // Edited to get actual product path
        console.log("productPath: " + productPath);

        // Update `cart` field inside `user` doc (https://firebase.google.com/docs/firestore/manage-data/add-data#update_elements_in_an_array)
        await updateDoc(userRef, {
            // cart: arrayUnion(productRef)
            cart: arrayUnion(productPath)
        });
    } catch (e) {
        console.log(e);
    }
}

// Returns a list of all items in the cart of the user that is currently logged in
export const getCartItems = async() => { // async(user: any) => {
    // uses non-null assertion operator `!` (https://stackoverflow.com/questions/54496398/typescript-type-string-undefined-is-not-assignable-to-type-string)
    // const userID: string = user?.uid.toString()!;
    console.log('inside getCartItems lol'); // doesn't work
    let cartItems: string[] = [];

    try {
        // Get `user` doc with specified `email` field (https://firebase.google.com/docs/firestore/query-data/get-data#get_multiple_documents_from_a_collection)
        const qOne = query(collection(firestore, "users"), where("email", "==", user?.email));
        let userDocId: string = '';

        const querySnapshot = await getDocs(qOne);
        querySnapshot.forEach((doc) => {
            // Cast `userDocId` to `string` type (https://stackoverflow.com/questions/37978528/typescript-type-string-is-not-assignable-to-type)
            userDocId = doc.id as string;
        });
        let userRef = doc(firestore, "users", userDocId);

        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
            console.log(userSnap.data().first_name);
            console.log(userSnap.data().cart);
            // userSnap.data().cart.forEach(async function (cartItem: any) {
            //     let itemRef = doc(firestore, "products", cartItem);
            //     let itemSnap = getDoc(itemRef);
            //     let itemData = itemSnap.data();
            //     cartItems.push({
            //         item_name: itemData['item_name'],

            //     })
            // });

            cartItems = userSnap.data().cart;
        } else {
            console.log("No such document!");
        }

        // const qTwo = query(
        //     collection(firestore, "users", userRef, "cart")
        // );
        // const querySnapshot = await getDocs(q);
        // querySnapshot.forEach( async (doc) => {
        //     let data = doc.data();
        //     let ref = data['ref'];
        //     const docSnap = await getDoc(ref);
        //     let docData = docSnap.data();
        //     cartItems.push({
        //         // item_name: docData['item_name'],
        //         // description: docData['description'],
        //         // imageURL: docData['imageURL'],
        //     });
        // });
    } catch (e) {
        console.log(e);
    }

    return cartItems;
}

export const findCartItemA = async (productId: string, field: string) => {
    let productData: string = '';
    console.log('inside findcartitem');
    try {
        let docRef = doc(firestore, "products", productId);
        let docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            let docData = docSnap.data();
            productData = docData[field];
        }
    } catch (e) {
        console.log(e);
    }
    console.log("findCartItemA: " + productData);
    return productData;
}

// export const findCartItem = async (productId: string) => {
//     let productData: Object[] = [];

//     try {
//         let docRef = doc(firestore, "products", productId);
//         let docSnap = await getDoc(docRef);
//         if (docSnap.exists()) {
//             let docData = docSnap.data();
//             productData.push(docData['item_name'], docData['price'], docData['imageURL']);
//         }
//     } catch (e) {
//         console.log(e);
//     }

//     return productData;
// }

export const getEmail = async () => {
    let email = user?.email;
    let email_one = "this";

    if (email == null) {
        email_one = 'null'
    }
    else if (email == undefined) {
        email_one = 'undefined'
    }
    else {
        email_one = email;
    }

    return email_one;
}

export const getFirstName = async () => {
    let name = user?.displayName;
    let name_one = "this";

    if (name == null) {
        name_one = 'null'
    }
    else if (name == undefined) {
        name_one = 'undefined'
    }
    else {
        name_one = name;
    }

    return name_one;
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
            if (!data['sold'] && ((data['category'].toString() === category && data['item_name'].toString().toLowerCase().includes(item_name.toLowerCase())) ||
                (category === '' && data['item_name'].toString().toLowerCase().includes(item_name.toLowerCase()))))
            products.push({
                productId: doc.id,
                category: data['category'],
                item_name: data['item_name'],
                price: data['price'],
                description: data['description'],
                Color: data['Color'],
                dimensions: data.dimensions,
                weight: data['weight'],
                size: data['Size'],
                course_number: data['CourseNumber'],
                serial: data['Serial'],
                imageURL: data['imageURL'],
                brand: data['Brand'],
                isbn: data['ISBN'],
                author: data['Author'],
                sport: data['Sport'],
            });

        });
    } catch (e) {
        console.log(e);
    }
    return products;
}

export const getUserProducts = async () => {
    let products: Object[] = [];
    let email = await getEmail();
    const q = query(collection(firestore, "products"), where("sellersEmail", "==", email));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        let data = doc.data();
        products.push({
            category: data['category'],
            item_name: data['item_name'],
            price: data['price'],
            description: data['description'],
            Color: data['Color'],
            dimensions: data.dimensions,
            weight: data['weight'],
            size: data['Size'],
            course_number: data['CourseNumber'],
            serial: data['Serial'],
            imageURL: data['imageURL'],
            brand: data['Brand'],
            isbn: data['ISBN'],
            author: data['Author'],
            sport: data['Sport']
     
        })
    });

    return products;
}

// Checkout (contains clear cart, mark cart items sold, and notify buyer and sellers)

// Clear cart
export const emptyCart = async () => {
    try {
        // Get `user` doc with specified `email` field (https://firebase.google.com/docs/firestore/query-data/get-data#get_multiple_documents_from_a_collection)
        const q = query(collection(firestore, "users"), where("email", "==", user?.email));
        let userDocId: string = '';

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // Cast `userDocId` to `string` type (https://stackoverflow.com/questions/37978528/typescript-type-string-is-not-assignable-to-type)
            userDocId = doc.id as string;
        });
        let userRef = doc(firestore, "users", userDocId);

        // Set `cart` field inside `user` doc to empty array (https://firebase.google.com/docs/firestore/manage-data/add-data#set_a_document)
        await updateDoc(userRef, {
            cart: [],
        });
        console.log('Cart emptied!');
    } catch (e) {
        console.log(e)
    }
}

// Mark cart items sold
export const markItemsSold = async (cartItems: string[]) => {
    try {
        cartItems.forEach(async function (item) {
            let itemRef = doc(firestore, "products", item);
            let itemSnap = await getDoc(itemRef);
            if (itemSnap.exists()) {
                let itemData = itemSnap.data();
                if (itemData['sold'] == false) {
                    updateDoc(itemRef, {
                        sold: true
                    });
                } else {
                    console.log('Item already sold!');
                }
            }
        });
    } catch (e) {
        console.log(e);
    }
}

// Notify buyer and sellers