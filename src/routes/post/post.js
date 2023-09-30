function setPostForm() {
  document.getElementById("demo").innerHTML = "...personal-site/resource?type=";
  var form = document.createElement("form");
  form.id = "send-object";
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
  option1.value = "contact";
  option1.innerHTML = "Contact-Me";
  select.appendChild(option1);

  document.getElementById("demo").after(form);
}

function setPostView(object) {
  document.getElementById("render-object").innerHTML = "";
  switch (object) {
    case "contact":
      var divElement = document.createElement("div");
      divElement.id = "contacts"
      document.getElementById("render-object").appendChild(divElement);

      var OR1 = document.createElement("h3");
      OR1.innerHTML = "OR";
      var OR2 = document.createElement("h3");
      OR2.innerHTML = "OR";
      //Append the LinkedIn link
      var linkedInLink = document.createElement("a");
      linkedInLink.href = "https://www.linkedin.com/in/ali-hassan-ladha/";
      var linkedInPhoto = document.createElement("img");
      linkedInPhoto.classList.add("photo");
      linkedInPhoto.src = "../src/assets/linkedinphoto.png";
      linkedInLink.appendChild(linkedInPhoto);
      divElement.appendChild(linkedInLink);
      //Append the Github link photo
      divElement.appendChild(OR1);
      var githubLink = document.createElement("a");
      githubLink.href = "https://github.com/aliL2000";
      var githubPhoto = document.createElement("img");
      githubPhoto.classList.add("photo");
      githubPhoto.src = "../src/assets/githublogo.png";
      githubLink.appendChild(githubPhoto);
      divElement.appendChild(githubLink);
      //Append the email container to the site
      divElement.appendChild(OR2);
      var emailLink = document.createElement("a");
      emailLink.href = 'mailto:aliladha2000@gmail.com';
      var emailPhoto = document.createElement("img");
      emailPhoto.classList.add("photo");
      emailPhoto.src = "../src/assets/emaillogo.png";
      emailLink.appendChild(emailPhoto);
      divElement.appendChild(emailLink);

      break;
  }
}

export { setPostForm, setPostView };
