var form,select,optionDefault,option1,option2,resumeObject,projectObject;

function setGetForm() {

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

function setObjectView(object,isResumeDeleted) {
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

export { setGetForm, setObjectView };