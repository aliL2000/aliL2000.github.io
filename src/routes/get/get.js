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

function setObjectView(object, isResumeDeleted) {
  document.getElementById("render-object").innerHTML = "";
  switch (object) {
    case "resume":
      if (!isResumeDeleted) {
        var resumeObject = document.createElement("embed");
        resumeObject.src = "assets/AliLadhaResume.pdf";
        resumeObject.type = "application/pdf";
        document.getElementById("render-object").appendChild(resumeObject);
      } else {
        document.getElementById("render-object").innerHTML =
          "You tried getting my resume when you deleted it, didn't you?";
      }

      break;
    case "projects":
      const achievements = [
        "Collaborated with 2 Agile Development teams on 2 separate projects, working on over 30+ tickets to meet project deadlines and technical requirements.",
        "Modified code-base structures to implement fixes and ensure backwards compatibility, increasing efficiency of systems by up to 48%, and writing up to 750+ lines of code.",
        "Updated 15+ sub-critical QA Tests on existing codebase to ensure expected software behavior in TDD.",
      ];
      var projectObject = document.createElement("div");
      const ul = document.createElement("ul");

      achievements.forEach((achievement) => {
        const li = document.createElement("li");
        li.textContent = achievement;
        ul.appendChild(li);
      });
      projectObject.appendChild(ul);
      document.getElementById("render-object").appendChild(projectObject);

      break;
  }
}

export { setGetForm, setObjectView };
