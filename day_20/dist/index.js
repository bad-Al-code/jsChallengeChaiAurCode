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
