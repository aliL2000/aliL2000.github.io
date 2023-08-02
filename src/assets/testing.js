document.getElementById("title-name").innerHTML = "Hi, I'm Ali Ladha";

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
      document.getElementById("test").innerHTML = document.getElementById("object-choice").value;
      document.getElementById("object-choice").addEventListener("change", function () {
        setObjectView(document.getElementById("object-choice").value);
      });
      
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

function setGetForm() {
  document.getElementById("demo").innerHTML = "...personal-site/resource?type=";
  form = document.createElement("form");
  form.id = "request-object";
  select = document.createElement("select");
  select.id = "object-choice";
  form.appendChild(select);

  optionDefault = document.createElement("option");
  optionDefault.value = "";
  optionDefault.hidden = true;optionDefault.disabled=true; optionDefault.selected=true;
  select.appendChild(optionDefault);

  option1 = document.createElement("option");
  option1.value = 'resume';
  option1.innerHTML = "Resume";
  select.appendChild(option1);

  option2 = document.createElement("option");
  option2.value = 'projects';
  option2.innerHTML = "Projects";
  select.appendChild(option2);

  document.getElementById("demo").after(form);
}

function setObjectView(object){
  switch (object) {
    case "resume":
      resumeObject = document.createElement("embed");
      resumeObject.src = "assets/AliLadhaResume.pdf";
      resumeObject.type = "application/pdf";
      document.getElementById("render-object").appendChild(resumeObject);
    case "projects":
  }
} 