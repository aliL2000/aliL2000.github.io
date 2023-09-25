//Create const to hold the data that I will be adding to the page
const projectNames = [
  "LumberViz",
  "ROSEN Capstone",
  "Canvas Gamification",
  "Neetcode 150",
];
const projectLinks = [
  "https://github.com/aliL2000/olympic",
  "https://github.com/Rosen-Team-B/Rosen_B_2",
  "",
  "https://github.com/aliL2000/leetcode-practice",
];
const paragraphs = [
  "Created an EDA tool that allows simultaneous filtering and visualization, providing users with insightful tools for data exploration.",
  "Lead BE Developer for a ML Web application performing object detection, streamlining manual analysis and enhancing overall efficiency.",
  "Developed a JUnit framework, testing and validating student-submitted code in an introductory computer science course.",
  "Solving and optimizing the Neetcode 150 problems, practicing my algorithm analysis skills and code development.",
];
const technologies = [
  ["Flask", "HTML", "JS", "CSS"],
  ["Django", "DjangoREST", "MongoDB"],
  ["Java", "JUnit"],
  ["Python", "Java"],
];

function createProjects() {
  //Create a div tag that encapsulates all projects, and appends it to the parent div
  var projects = document.createElement("div");
  for (var i = 0; i < projectNames.length; i++) {
    var project = createProject(
      projectNames[i],
      projectLinks[i],
      paragraphs[i],
      technologies[i]
    );
    //Append each project to the div, as it's made
    projects.appendChild(project);
  }
  return projects;
}

function createProject(name, url, description, technologies) {
  var project = document.createElement("div");
  //Create project name
  var projectName  = document.createElement("h1");
  projectName.id = "project-container";
  projectName.innerHTML = name;
  project.append(projectName)
  //Appending the unique link to each github project, if url is provided
  if (url !== "") {
    var link = document.createElement("a");
    link.textContent = "Visit My GitHub Repository";
    link.href = url;
    link.target = "_blank";
    project.append(link);
  }
  else {
    var link = document.createElement("a");
    link.style.visibility = "hidden";
    project.append(link);
  }
  //Add descriptions
  var projectDescription = document.createElement("p");
  projectDescription.id = "description-container";
  projectDescription.innerHTML = description;
  project.append(projectDescription);
  //Render the tech-stack used
  project.id = "projects";
  project.append(renderTechStack(technologies));
  return project;
}

function renderTechStack(technologies) {
    var techStack = document.createElement("div");
    techStack.id = "tech-tag-container";
    technologies.forEach(technology => {
        var tag = document.createElement("p");
        tag.id = "tech-tag";
        tag.textContent = technology;
        techStack.appendChild(tag);
    });
    return techStack;
}

export { createProjects };
