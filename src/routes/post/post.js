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
      var OR1 = document.createElement("h3");
      OR1.innerHTML = "OR";
      var OR2 = document.createElement("h3");
      OR2.innerHTML = "OR";
      //Append the LinkedIn link
      var linkedInLink = document.createElement("a");
      linkedInLink.href = "https://www.linkedin.com/in/ali-hassan-ladha/";
      var linkedInPhoto = document.createElement("img");
      linkedInPhoto.classList.add('photo');
      linkedInPhoto.src = "../src/assets/linkedin_photo.png";
      linkedInLink.appendChild(linkedInPhoto);
      document.getElementById("render-object").appendChild(linkedInLink);
      //Append the Github link photo
      document.getElementById("render-object").appendChild(OR1);
      var githubLink = document.createElement("a");
      githubLink.href = "https://github.com/aliL2000";
      var githubPhoto = document.createElement("img");
      githubPhoto.classList.add('photo');
      githubPhoto.src = "../src/assets/github_logo.png";
      githubLink.appendChild(githubPhoto);
      document.getElementById("render-object").appendChild(githubLink);
      //Append the email container to the site
      document.getElementById("render-object").appendChild(OR2);
      var emailObject = document.createElement("textarea");
      emailObject.id = "emailBody";
      var button = document.createElement("button");
      button.id = "sendButton";
      button.innerHTML = "Send Email";
      document.getElementById("render-object").appendChild(emailObject);
      document.getElementById("render-object").appendChild(button);
      document.getElementById('sendButton').addEventListener('click', function() {
        const emailBody = encodeURIComponent(document.getElementById('emailBody').value);
        const mailtoLink = `mailto:aliladha2000@gmail.com?body=${emailBody}`;
        window.location.href = mailtoLink;
    });
      break;
  }
}

export { setPostForm, setPostView };
