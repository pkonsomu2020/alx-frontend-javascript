import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

async function handleProfileSignup(firstName, lastName, fileName) {
  // Use Promise.allSettled() to handle multiple promises
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];

  const results = await Promise.allSettled(promises);

  // Map the results to the required structure
  const mappedResults = results.map((result) => ({
    status: result.status,
    value: result.status === "fulfilled" ? result.value : result.reason,
  }));

  return mappedResults;
}

export default handleProfileSignup;
