// fetch using async await

let fetchData = async (url) => {
  console.log("response in the way");

  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new error("request failed status: " + response.status);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
fetchData("https://jsonplaceholder.typicode.com/posts").then((data) =>
  console.log(data)
);
