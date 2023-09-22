function setPostForm() {
    // resetForm(document.getElementById("demo"));
    document.getElementById("demo").innerHTML = "...personal-site/resource?type=";
    var form = document.createElement("form");
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

  export { setPostForm, setPostView };