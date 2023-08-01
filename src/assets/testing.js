document.getElementById("title-name").innerHTML = "Hi, I'm Ali Ladha";

document.getElementById("submit-type").addEventListener("click", function () {
  event.preventDefault();
  document.getElementById("demo").innerHTML =
    document.getElementById("request-type").value;
  setRequestBar(document.getElementById("request-type").value);
});

function setRequestBar(requestType) {
  switch (requestType) {
    case "get":
      console.log(requestType);
      document.getElementById("demo").innerHTML =
        "...personal-site/resource?type={resume/projects/interests}";
      break;
    case "post":
      console.log(requestType);
      break;
    case "patch":
      console.log(requestType);
      break;
    case "put":
      console.log(requestType);
      break;
    case "delete":
      console.log(requestType);
      break;
  }
}
