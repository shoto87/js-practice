// implementation of a function that makes multiple API calls
let APIcall = (url, callback) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((err) => console.error("error : ", err.message));
};

const handledata = (data) => {
  console.log("Data received", data);
};

let main = () => {
  const url1 = "https://jsonplaceholder.typicode.com/posts/1";
  const url2 = "https://jsonplaceholder.typicode.com/posts/2";

  APIcall(url1, handledata);
  APIcall(url2, handledata);
};

main();
