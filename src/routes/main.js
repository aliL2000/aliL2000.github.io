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

renderJSON();

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
      document
        .getElementById("object-choice")
        .addEventListener("change", function () {
          setObjectView(document.getElementById("object-choice").value);
          renderJSON(
            requestType,
            document.getElementById("object-choice").value
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
          renderJSON(
            requestType,
            document.getElementById("object-choice").value
          );
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
          renderJSON(
            requestType,
            document.getElementById("object-choice").value
          );
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

function renderJSON(requestType, requestChoice) {
  let choiceData;
  if (requestType === "get") {
    if (requestChoice === "resume") {
      choiceData = {
        requestType: "GET",
        title: "Resume",
        author: "Ali Ladha",
        file_url: "../src/assets/RESUMEDEVELOPER.pdf",
        file_type: "application/pdf",
        file_size: "61.8 KB",
      };
    } else if (requestChoice === "projects") {
      choiceData = {
        requestType: "GET",
        projects: [
          {
            id: 1,
            title: "LumberViz",
            description:
              "Created an EDA tool that allows simultaneous filtering and visualization, providing users with insightful tools for data exploration.",
            link: "https://github.com/aliL2000/olympic",
            tags: ["Flask", "HTML", "JS", "CSS"],
          },
          {
            id: 2,
            title: "ROSEN Capstone",
            description:
              "Lead BE Developer for a ML Web application performing object detection, streamlining manual analysis and enhancing overall efficiency.",
            link: "https://github.com/Rosen-Team-B/Rosen_B_2",
            tags: ["Django", "DjangoREST", "MongoDB"],
          },
          {
            id: 3,
            title: "Canvas Gamification",
            description:
              "Developed a JUnit framework, testing and validating student-submitted code in an introductory computer science course.",
            tags: ["Java", "JUnit"],
          },
          {
            id: 4,
            title: "Neetcode 150",
            description:
              "Solving and optimizing the Neetcode 150 problems, practicing my algorithm analysis skills and code development.",
            link: "https://github.com/aliL2000/leetcode-practice",
            tags: ["Python", "Java"],
          },
        ],
      };
    }
  } else if (requestType === "post") {
    if (requestChoice === "contact") {
      choiceData = {
        requestType: "POST",
        name: "Ali Ladha",
        social_links: {
          linkedin: "https://www.linkedin.com/in/ali-hassan-ladha/",
          github: "https://github.com/aliL2000",
          email: "mailto:aliladha2000@gmail.com",
        },
      };
    }
  } else if (requestType === "delete") {
    if (requestChoice === "styling") {
      choiceData = {
        requestType: "DELETE",
        message: "The styling has been successfully deleted.",
      };
    }
  } else {
    choiceData = {
      requestType: "GET",
      content: "landingPage",
      profession: "Aspiring Backend Software Developer",
    };
  }

  let jsonObject = {
    status: "success",
    data: choiceData,
  };

  // Convert the JSON object to a formatted JSON string
  const jsonString = JSON.stringify(jsonObject, null, 2);

  // Display the formatted JSON string in the <pre> element
  document.getElementById("json-container").textContent = jsonString;
}
