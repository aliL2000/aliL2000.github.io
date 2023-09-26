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
      var OR = document.createElement("h3");
      OR.innerHTML = "OR";


      document.getElementById("render-object").appendChild(OR);
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

      // var temp = document.createElement("a");
      // temp.href = "mailto:aliladha2000@gmail.com";
      // temp.innerHTML = "Email";
      // document.getElementById("render-object").appendChild(temp);
      break;
  }
}

export { setPostForm, setPostView };
