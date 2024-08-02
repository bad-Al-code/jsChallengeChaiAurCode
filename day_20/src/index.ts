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
