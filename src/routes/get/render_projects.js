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
  //Create each project as it's own seperate object
  var project1 = createProject(
    projectNames[0],
    projectLinks[0],
    paragraphs[0],
    4,
    technologies[0]
  );
  var project2 = createProject(
    projectNames[1],
    projectLinks[1],
    paragraphs[1],
    3,
    technologies[1]
  );
  var project3 = createProject(
    projectNames[2],
    projectLinks[2],
    paragraphs[2],
    2,
    technologies[2]
  );
  var project4 = createProject(
    projectNames[3],
    projectLinks[3],
    paragraphs[3],
    2,
    technologies[3]
  );
  //Create a div tag that encapsulates all projects, and appends it to the parent div
  var projects = document.createElement("div");
  projects.appendChild(project1);
  projects.appendChild(project2);
  projects.appendChild(project3);
  projects.appendChild(project4);
  return projects;
}

function createProject(name, url, description, arrayLength, technologies) {
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
  //Add descriptions
  var projectdescription = document.createElement("p");
  projectdescription.id = "description-container";
  projectdescription.innerHTML = description;
  project.append(projectdescription);
  return project;
}

function renderTechStack(arrayLength, technologies) {}

export { createProjects };
