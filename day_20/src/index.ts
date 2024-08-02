class LocalStorageManager {
  static saveString(key: string, value: string): void {
    try {
      localStorage.setItem(key, value);
      console.log(
        `Success: The raven has delivered your message, "${key}" is now stored.`,
      );
    } catch (error) {
      console.error(
        `Error: The raven was unable to deliver your message. ${error}`,
      );
    }
  }

  static retrieveString(key: string): string | null {
    try {
      const value = localStorage.getItem(key);
      if (value) {
        console.log(
          `Success: The message from "${key}" has been retrieved from the archives.`,
        );
      } else {
        console.warn(`Warning: No message found under the name "${key}".`);
      }
      return value;
    } catch (error) {
      console.error(`Error: The archives are unreachable. ${error}`);
      return null;
    }
  }
}

LocalStorageManager.saveString("winterfell", "The North remembers");
const message = LocalStorageManager.retrieveString("winterfell");
console.log(message);

class LocalStorageObjectManager {
  static saveObject(key: string, obj: object): void {
    try {
      const jsonString = JSON.stringify(obj);
      localStorage.setItem(key, jsonString);
      console.log(
        `Success: The raven has delivered your object, "${key}" is now stored.`,
      );
    } catch (error) {
      console.error(
        `Error: The raven was unable to deliver your object. ${error}`,
      );
    }
  }

  static retrieveObject(key: string): object | null {
    try {
      const jsonString = localStorage.getItem(key);
      if (jsonString) {
        const obj = JSON.parse(jsonString);
        console.log(
          `Success: The object from "${key}" has been retrieved from the archives.`,
          obj,
        );
        return obj;
      } else {
        console.warn(`Warning: No object found under the name "${key}".`);
        return null;
      }
    } catch (error) {
      console.error(
        `Error: The archives are unreachable or the data is corrupted. ${error}`,
      );
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
  private static readonly FORM_KEY = "userFormData";

  static saveFormData(name: string, email: string): void {
    try {
      const formData = { name, email };
      const jsonString = JSON.stringify(formData);
      localStorage.setItem(this.FORM_KEY, jsonString);
      console.log(
        `Success: The raven has delivered the form data. "${this.FORM_KEY}" is now stored.`,
      );
    } catch (error) {
      console.error(
        `Error: The raven was unable to deliver the form data. ${error}`,
      );
    }
  }

  static retrieveFormData(): { name: string; email: string } | null {
    try {
      const jsonString = localStorage.getItem(this.FORM_KEY);
      if (jsonString) {
        const formData = JSON.parse(jsonString);
        console.log(
          `Success: The form data has been retrieved from the archives.`,
          formData,
        );
        return formData;
      } else {
        console.warn(
          `Warning: No form data found under the name "${this.FORM_KEY}".`,
        );
        return null;
      }
    } catch (error) {
      console.error(
        `Error: The archives are unreachable or the data is corrupted. ${error}`,
      );
      return null;
    }
  }
}

window.onload = () => {
  const formData = FormDataManager.retrieveFormData();
  if (formData) {
    (
      document.getElementById("nameDisplay") as HTMLParagraphElement
    ).textContent = `Name: ${formData.name}`;
    (
      document.getElementById("emailDisplay") as HTMLParagraphElement
    ).textContent = `Email: ${formData.email}`;
  }
};

document.getElementById("userForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameInput = (document.getElementById("name") as HTMLInputElement).value;
  const emailInput = (document.getElementById("email") as HTMLInputElement)
    .value;
  FormDataManager.saveFormData(nameInput, emailInput);
});

class LocalStorageCleanupManager {
  static logLocalStorageContent(message: string): void {
    console.log(message);
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        const value = localStorage.getItem(key);
        console.log(`Key: ${key}, Value: ${value}`);
      }
    }
  }

  static removeItem(key: string): void {
    try {
      this.logLocalStorageContent(`Before Removal:`);
      localStorage.removeItem(key);
      console.log(`Success: The item with key "${key}" has been removed.`);
      this.logLocalStorageContent(`After Removal:`);
    } catch (error) {
      console.error(`Error: The raven was unable to remove the item. ${error}`);
    }
  }
}

const keyToRemove = "starkFamily";
LocalStorageCleanupManager.removeItem(keyToRemove);

class SessionStorageManager {
  static saveString(key: string, value: string): void {
    try {
      sessionStorage.setItem(key, value);
      console.log(
        `Success: The raven has delivered your message. "${key}" is now stored in the session.`,
      );
    } catch (error) {
      console.error(
        `Error: The raven was unable to deliver your message. ${error}`,
      );
    }
  }

  static retrieveString(key: string): void {
    try {
      const value = sessionStorage.getItem(key);
      if (value) {
        console.log(
          `Success: The message from "${key}" has been retrieved from the session.`,
          value,
        );
      } else {
        console.warn(`Warning: No message found under the name "${key}".`);
      }
    } catch (error) {
      console.error(`Error: The archives are unreachable. ${error}`);
    }
  }
}

SessionStorageManager.saveString("kingInTheNorth", "Jon Snow");
SessionStorageManager.retrieveString("kingInTheNorth");

class SessionStorageObjectManager {
  static saveObject(key: string, obj: object): void {
    try {
      const jsonString = JSON.stringify(obj);
      sessionStorage.setItem(key, jsonString);
      console.log(
        `Success: The raven has delivered the object. "${key}" is now stored in the session.`,
      );
    } catch (error) {
      console.error(
        `Error: The raven was unable to deliver the object. ${error}`,
      );
    }
  }

  static retrieveObject(key: string): void {
    try {
      const jsonString = sessionStorage.getItem(key);
      if (jsonString) {
        const obj = JSON.parse(jsonString);
        console.log(
          `Success: The object from "${key}" has been retrieved from the session.`,
          obj,
        );
      } else {
        console.warn(`Warning: No object found under the name "${key}".`);
      }
    } catch (error) {
      console.error(
        `Error: The archives are unreachable or the data is corrupted. ${error}`,
      );
    }
  }
}

const lannisterFamily = {
  family: "Lannister",
  members: ["Tywin", "Cersei", "Jaime", "Tyrion"],
};
SessionStorageObjectManager.saveObject("lannisterFamily", lannisterFamily);
SessionStorageObjectManager.retrieveObject("lannisterFamily");

class SessionStorageFormManager {
  private static readonly FORM_KEY = "userFormData";

  static saveFormData(name: string, email: string): void {
    try {
      const formData = { name, email };
      const jsonString = JSON.stringify(formData);
      sessionStorage.setItem(this.FORM_KEY, jsonString);
      console.log(
        `Success: The raven has delivered the form data. "${this.FORM_KEY}" is now stored in the session.`,
      );
    } catch (error) {
      console.error(
        `Error: The raven was unable to deliver the form data. ${error}`,
      );
    }
  }

  static retrieveFormData(): { name: string; email: string } | null {
    try {
      const jsonString = sessionStorage.getItem(this.FORM_KEY);
      if (jsonString) {
        const formData = JSON.parse(jsonString);
        console.log(
          `Success: The form data has been retrieved from the session.`,
          formData,
        );
        return formData;
      } else {
        console.warn(
          `Warning: No form data found under the name "${this.FORM_KEY}".`,
        );
        return null;
      }
    } catch (error) {
      console.error(
        `Error: The archives are unreachable or the data is corrupted. ${error}`,
      );
      return null;
    }
  }
}

window.onload = () => {
  const formData = SessionStorageFormManager.retrieveFormData();
  if (formData) {
    (
      document.getElementById("sessionNameDisplay") as HTMLParagraphElement
    ).textContent = `Name: ${formData.name}`;
    (
      document.getElementById("sessionEmailDisplay") as HTMLParagraphElement
    ).textContent = `Email: ${formData.email}`;
  }
};

document.getElementById("sessionForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameInput = (document.getElementById("sessionName") as HTMLInputElement)
    .value;
  const emailInput = (
    document.getElementById("sessionEmail") as HTMLInputElement
  ).value;
  SessionStorageFormManager.saveFormData(nameInput, emailInput);
});
