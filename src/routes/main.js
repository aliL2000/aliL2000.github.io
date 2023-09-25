import { setGetForm, setObjectView } from "./get/get.js";
import { setPostForm, setPostView } from "./post/post.js";

import {
  setDeleteDescription,
  setDeleteForm,
  setDeletedView,
} from "./delete/delete.js";

export let isResumeDeleted = false;
// let isStylingDeleted = false;
// let isEverythingDeleted = false;

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
          setObjectView(document.getElementById("object-choice").value);
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

function setPatchForm() {}

function setPutForm() {}

//The file is a lot of things, maybe split up the file to perform different things?
// JSX is better? (do research on that)
// Why is the raw code not put into a helper function that just repeats what is needed?
// JSDoc, for documentation purposes
