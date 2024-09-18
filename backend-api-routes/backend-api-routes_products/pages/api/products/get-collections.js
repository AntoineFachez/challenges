export const fetch = (req, res, next) =>
  fetch("/api/get-collections")
    .then((response) => response.json())
    .then((collectionNames) => {
      console.log(collectionNames); // Do something with the collection names
    })
    // Handle any errors that occur during the fetch operation  and return

    .catch((error) => {
      console.error("Error fetching collection names:", error);
    });
