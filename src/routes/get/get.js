import { createProjects } from "./render_projects.js";
import { isResumeDeleted } from "../main.js";

function setGetForm() {
  document.getElementById("demo").innerHTML = "...personal-site/resource?type=";
  var form = document.createElement("form");
  form.id = "request-object";
  var select = document.createElement("select");
  select.id = "object-choice";
  form.appendChild(select);

  var optionDefault = document.createElement("option");
  optionDefault.value = "";
  optionDefault.hidden = true;
  optionDefault.disabled = true;
  optionDefault.selected = true;
  select.appendChild(optionDefault);

  var option1 = document.createElement("option");
  option1.value = "resume";
  option1.innerHTML = "Resume";
  select.appendChild(option1);

  var option2 = document.createElement("option");
  option2.value = "projects";
  option2.innerHTML = "Projects";
  select.appendChild(option2);

  document.getElementById("demo").after(form);
}

function setObjectView(object) {
  document.getElementById("render-object").innerHTML = "";
  switch (object) {
    case "resume":
      if (!isResumeDeleted) {
        var resumeObject = document.createElement("embed");
        resumeObject.src = "assets/RESUMEDEVELOPER.pdf";
        resumeObject.type = "application/pdf";
        document.getElementById("render-object").appendChild(resumeObject);
      } else {
        document.getElementById("render-object").innerHTML =
          "You tried getting my resume when you deleted it, didn't you?";
      }
      break;
    case "projects":
      var projectObject = createProjects();
      document.getElementById("render-object").appendChild(projectObject);
      break;
  }
}

export { setGetForm, setObjectView };
