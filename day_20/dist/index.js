"use strict";
class LocalStorageManager {
    static saveString(key, value) {
        try {
            localStorage.setItem(key, value);
            console.log(`Success: The raven has delivered your message, "${key}" is now stored.`);
        }
        catch (error) {
            console.error(`Error: The raven was unable to deliver your message. ${error}`);
        }
    }
    static retrieveString(key) {
        try {
            const value = localStorage.getItem(key);
            if (value) {
                console.log(`Success: The message from "${key}" has been retrieved from the archives.`);
            }
            else {
                console.warn(`Warning: No message found under the name "${key}".`);
            }
            return value;
        }
        catch (error) {
            console.error(`Error: The archives are unreachable. ${error}`);
            return null;
        }
    }
}
LocalStorageManager.saveString("winterfell", "The North remembers");
const message = LocalStorageManager.retrieveString("winterfell");
console.log(message);
class LocalStorageObjectManager {
    static saveObject(key, obj) {
        try {
            const jsonString = JSON.stringify(obj);
            localStorage.setItem(key, jsonString);
            console.log(`Success: The raven has delivered your object, "${key}" is now stored.`);
        }
        catch (error) {
            console.error(`Error: The raven was unable to deliver your object. ${error}`);
        }
    }
    static retrieveObject(key) {
        try {
            const jsonString = localStorage.getItem(key);
            if (jsonString) {
                const obj = JSON.parse(jsonString);
                console.log(`Success: The object from "${key}" has been retrieved from the archives.`, obj);
                return obj;
            }
            else {
                console.warn(`Warning: No object found under the name "${key}".`);
                return null;
            }
        }
        catch (error) {
            console.error(`Error: The archives are unreachable or the data is corrupted. ${error}`);
            return null;
        }
    }
}
const starkFamily = {
    family: "Stark",
    members: ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Bran", "Rickon"],
};
LocalStorageObjectManager.saveObject("starkFamily", starkFamily);
const retrievedObject = LocalStorageObjectManager.retrieveObject("starkFamily");
console.log(retrievedObject);
