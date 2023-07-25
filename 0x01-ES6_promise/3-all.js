import { uploadPhoto, createUser } from "./utils";

function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoData, userData]) => {
      // Destructure the resolved values from the promises
      console.log(`${photoData.body} ${userData.firstName} ${userData.lastName}`);
    })
    .catch((error) => {
      // Handle the case when any promise rejects
      console.log("Signup system offline");
    });
}

export default handleProfileSignup;
