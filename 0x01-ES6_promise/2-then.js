function handleResponseFromAPI(promise) {
  promise
    .then((data) => {
      // Handle the resolved promise
      console.log("Got a response from the API");
      return { status: 200, body: "success" };
    })
    .catch((error) => {
      // Handle the rejected promise
      return new Error(); // Return an empty Error object
    });
}

export default handleResponseFromAPI;
