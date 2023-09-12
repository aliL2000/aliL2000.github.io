import { setGetForm, setObjectView } from "./get/get.js";

let isResumeDeleted = false;
let isStylingDeleted = false;
let isEverythingDeleted = false;

document.getElementById("request-type").addEventListener("change", function () {
  event.preventDefault();
  document.getElementById("demo").innerHTML =
    document.getElementById("request-type").value;
  setRequestBar(document.getElementById("request-type").value);
});

function setRequestBar(requestType) {
  resetForm(document.getElementById("demo"));
  switch (requestType) {
    case "get":
      setGetForm();
      document.getElementById("test").innerHTML =
        document.getElementById("object-choice").value;
      document
        .getElementById("object-choice")
        .addEventListener("change", function () {
          setObjectView(
            document.getElementById("object-choice").value,
            isResumeDeleted
          );
        });
      break;
    case "post":
      //Show users the updated url and what they can send
      setPostForm();
      document
        .getElementById("object-choice")
        .addEventListener("change", function () {
          setPostView(document.getElementById("object-choice").value);
        });
      break;
    case "patch":
      //TODO: Brainstorm and implement this route
      setPatchForm();
      break;
    case "put":
      //TODO: Brainstorm and implement this route
      setPutForm();
      break;
    case "delete":
      //Show user's what they can delete and a description of what they're deleting
      setDeleteForm();
      document
        .getElementById("object-choice")
        .addEventListener("change", function () {
          //Render page with the elements they wanted removed
          setDeleteDescription(document.getElementById("object-choice").value);
          setDeletedView(document.getElementById("object-choice").value);
        });
      //Render page with the elements they wanted removed
      //setDeletedView(document.getElementById("object-choice").value);
      break;
  }
}

function resetForm(element) {
  let current = element.nextElementSibling;
  while (current !== null) {
    const next = current.nextElementSibling;
    current.remove();
    current = next;
  }
}

function setPostForm() {
  // resetForm(document.getElementById("demo"));
  document.getElementById("demo").innerHTML = "...personal-site/resource?type=";
  form = document.createElement("form");
  form.id = "send-object";
  select = document.createElement("select");
  select.id = "object-choice";
  form.appendChild(select);

  optionDefault = document.createElement("option");
  optionDefault.value = "";
  optionDefault.hidden = true;
  optionDefault.disabled = true;
  optionDefault.selected = true;
  select.appendChild(optionDefault);

  option1 = document.createElement("option");
  option1.value = "contact";
  option1.innerHTML = "Contact-Me";
  select.appendChild(option1);

  document.getElementById("demo").after(form);
}

function setPatchForm() {}

function setPutForm() {}

function setDeleteForm() {
  // resetForm(document.getElementById("demo"));
  document.getElementById("demo").innerHTML = "...personal-site/resource?type=";
  form = document.createElement("form");
  form.id = "delete-object";
  select = document.createElement("select");
  select.id = "object-choice";
  form.appendChild(select);

  optionDefault = document.createElement("option");
  optionDefault.value = "";
  optionDefault.hidden = true;
  optionDefault.disabled = true;
  optionDefault.selected = true;
  select.appendChild(optionDefault);

  option1 = document.createElement("option");
  option1.value = "resume";
  option1.innerHTML = "Resume";
  select.appendChild(option1);

  option2 = document.createElement("option");
  option2.value = "styling";
  option2.innerHTML = "Styling";
  select.appendChild(option2);

  option3 = document.createElement("option");
  option3.value = "everything";
  option3.innerHTML = "Everything";
  select.appendChild(option3);

  document.getElementById("demo").after(form);
}

function setPostView(object) {
  document.getElementById("render-object").innerHTML = "";
  switch (object) {
    case "contact":
      emailObject = document.createElement("a");
      emailObject.href = "mailto:aliladha2000@gmail.com";
      emailObject.innerHTML = "Email";
      document.getElementById("render-object").appendChild(emailObject);
      break;
  }
}

function setDeleteDescription(object) {
  document.getElementById("render-object").innerHTML = "";
  switch (object) {
    case "resume":
      document.getElementById("render-object").innerHTML = "resumedeleting";
      break;
    case "styling":
      document.getElementById("render-object").innerHTML = "stylgingdeleting";
      break;
    case "everything":
      document.getElementById("render-object").innerHTML = "everythingdeleting";
      break;
  }
}

function setDeletedView(object) {
  switch (object) {
    case "resume":
      isResumeDeleted = true;
      document.getElementById("render-object").innerHTML =
        "Welp, you deleted the resume, damn!";
      break;
    case "styling":
      isStylingDeleted = true;
      document.styleSheets[0].disabled = !document.styleSheets[0].disabled;
      document.getElementById("render-object").innerHTML =
        "Welp, you deleted all the styling on this website!";
      break;
    case "everything":
      document.getElementsByTagName("html")[0].innerHTML =
        "Welp, you deleted everything on this website! Try reloading to reset";
      break;
  }
}

//The file is a lot of things, maybe split up the file to perform different things?
// JSX is better? (do research on that)
// Why is the raw code not put into a helper function that just repeats what is needed?
// JSDoc, for documentation purposes
