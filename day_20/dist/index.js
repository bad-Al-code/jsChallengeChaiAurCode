"use strict";
var _a;
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
class FormDataManager {
    static saveFormData(name, email) {
        try {
            const formData = { name, email };
            const jsonString = JSON.stringify(formData);
            localStorage.setItem(this.FORM_KEY, jsonString);
            console.log(`Success: The raven has delivered the form data. "${this.FORM_KEY}" is now stored.`);
        }
        catch (error) {
            console.error(`Error: The raven was unable to deliver the form data. ${error}`);
        }
    }
    static retrieveFormData() {
        try {
            const jsonString = localStorage.getItem(this.FORM_KEY);
            if (jsonString) {
                const formData = JSON.parse(jsonString);
                console.log(`Success: The form data has been retrieved from the archives.`, formData);
                return formData;
            }
            else {
                console.warn(`Warning: No form data found under the name "${this.FORM_KEY}".`);
                return null;
            }
        }
        catch (error) {
            console.error(`Error: The archives are unreachable or the data is corrupted. ${error}`);
            return null;
        }
    }
}
FormDataManager.FORM_KEY = "userFormData";
window.onload = () => {
    const formData = FormDataManager.retrieveFormData();
    if (formData) {
        document.getElementById("nameDisplay").textContent = `Name: ${formData.name}`;
        document.getElementById("emailDisplay").textContent = `Email: ${formData.email}`;
    }
};
(_a = document.getElementById("userForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", (event) => {
    event.preventDefault();
    const nameInput = document.getElementById("name").value;
    const emailInput = document.getElementById("email")
        .value;
    FormDataManager.saveFormData(nameInput, emailInput);
});
class LocalStorageCleanupManager {
    static logLocalStorageContent(message) {
        console.log(message);
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key) {
                const value = localStorage.getItem(key);
                console.log(`Key: ${key}, Value: ${value}`);
            }
        }
    }
    static removeItem(key) {
        try {
            this.logLocalStorageContent(`Before Removal:`);
            localStorage.removeItem(key);
            console.log(`Success: The item with key "${key}" has been removed.`);
            this.logLocalStorageContent(`After Removal:`);
        }
        catch (error) {
            console.error(`Error: The raven was unable to remove the item. ${error}`);
        }
    }
}
const keyToRemove = "starkFamily";
LocalStorageCleanupManager.removeItem(keyToRemove);
class SessionStorageManager {
    static saveString(key, value) {
        try {
            sessionStorage.setItem(key, value);
            console.log(`Success: The raven has delivered your message. "${key}" is now stored in the session.`);
        }
        catch (error) {
            console.error(`Error: The raven was unable to deliver your message. ${error}`);
        }
    }
    static retrieveString(key) {
        try {
            const value = sessionStorage.getItem(key);
            if (value) {
                console.log(`Success: The message from "${key}" has been retrieved from the session.`, value);
            }
            else {
                console.warn(`Warning: No message found under the name "${key}".`);
            }
        }
        catch (error) {
            console.error(`Error: The archives are unreachable. ${error}`);
        }
    }
}
SessionStorageManager.saveString("kingInTheNorth", "Jon Snow");
SessionStorageManager.retrieveString("kingInTheNorth");
class SessionStorageObjectManager {
    static saveObject(key, obj) {
        try {
            const jsonString = JSON.stringify(obj);
            sessionStorage.setItem(key, jsonString);
            console.log(`Success: The raven has delivered the object. "${key}" is now stored in the session.`);
        }
        catch (error) {
            console.error(`Error: The raven was unable to deliver the object. ${error}`);
        }
    }
    static retrieveObject(key) {
        try {
            const jsonString = sessionStorage.getItem(key);
            if (jsonString) {
                const obj = JSON.parse(jsonString);
                console.log(`Success: The object from "${key}" has been retrieved from the session.`, obj);
            }
            else {
                console.warn(`Warning: No object found under the name "${key}".`);
            }
        }
        catch (error) {
            console.error(`Error: The archives are unreachable or the data is corrupted. ${error}`);
        }
    }
}
const lannisterFamily = {
    family: "Lannister",
    members: ["Tywin", "Cersei", "Jaime", "Tyrion"],
};
SessionStorageObjectManager.saveObject("lannisterFamily", lannisterFamily);
SessionStorageObjectManager.retrieveObject("lannisterFamily");
