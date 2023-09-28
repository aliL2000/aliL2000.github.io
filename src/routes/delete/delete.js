import { isResumeDeleted } from "../main.js";

function setDeleteForm() {
  document.getElementById("demo").innerHTML = "...personal-site/resource?type=";
  var form = document.createElement("form");
  form.id = "delete-object";
  var select = document.createElement("select");
  select.id = "object-choice";
  form.appendChild(select);

  var optionDefault = document.createElement("option");
  optionDefault.value = "";
  optionDefault.hidden = true;
  optionDefault.disabled = true;
  optionDefault.selected = true;
  select.appendChild(optionDefault);

  //   var option1 = document.createElement("option");
  //   option1.value = "resume";
  //   option1.innerHTML = "Resume";
  //   select.appendChild(option1);

  var option2 = document.createElement("option");
  option2.value = "styling";
  option2.innerHTML = "Styling";
  select.appendChild(option2);

  var option3 = document.createElement("option");
  option3.value = "everything";
  option3.innerHTML = "Everything";
  select.appendChild(option3);

  document.getElementById("demo").after(form);
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
      document.styleSheets[0].disabled = !document.styleSheets[0].disabled;
      const bodyElement = document.body;
      const footerElement = document.querySelector('footer');
      bodyElement.classList.add('reset-body-styles');
      footerElement.classList.add('reset-body-styles');
      document.getElementById("render-object").innerHTML =
        "Welp, you deleted all the styling on this website!";
      break;
    case "everything":
      document.getElementsByTagName("html")[0].innerHTML =
        "Welp, you deleted everything on this website! Try reloading to reset";
      break;
  }
}

export { setDeleteDescription, setDeleteForm, setDeletedView };
