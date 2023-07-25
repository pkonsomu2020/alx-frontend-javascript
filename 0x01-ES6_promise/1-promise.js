function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      // Resolve the Promise with a success object
      resolve({ status: 200, body: 'Success' });
    } else {
      // Reject the Promise with an error object
      reject(new Error('The fake API is not working currently'));
    }
  });
}

export default getFullResponseFromAPI;
