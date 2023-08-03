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
  switch (requestType) {
    case "get":
      console.log(requestType);
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
      console.log(requestType);
      setPostForm();
      document
        .getElementById("object-choice")
        .addEventListener("change", function () {
          setPostView(document.getElementById("object-choice").value);
        });
      break;
    case "patch":
      console.log(requestType);
      break;
    case "put":
      console.log(requestType);
      break;
    case "delete":
      console.log(requestType);
      //Show user's what they can delete and a description of what they're deleting
      setDeleteForm();
      document
        .getElementById("object-choice")
        .addEventListener("change", function () {
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

function setGetForm() {
  resetForm(document.getElementById("demo"));
  document.getElementById("demo").innerHTML = "...personal-site/resource?type=";
  form = document.createElement("form");
  form.id = "request-object";
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
  option2.value = "projects";
  option2.innerHTML = "Projects";
  select.appendChild(option2);

  document.getElementById("demo").after(form);
}

function setPostForm() {
  resetForm(document.getElementById("demo"));
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

function setDeleteForm() {
  resetForm(document.getElementById("demo"));
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

function setObjectView(object) {
  document.getElementById("render-object").innerHTML = "";
  switch (object) {
    case "resume":
      if (!isResumeDeleted) {
        resumeObject = document.createElement("embed");
        resumeObject.src = "assets/AliLadhaResume.pdf";
        resumeObject.type = "application/pdf";
        document.getElementById("render-object").appendChild(resumeObject);
      } else {
        document.getElementById("render-object").innerHTML =
          "You tried getting my resume when you deleted it, didn't you?";
      }

      break;
    case "projects":
      projectObject = document.createElement("p");
      projectObject.innerHTML = "test";
      document.getElementById("render-object").appendChild(projectObject);
      break;
  }
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
