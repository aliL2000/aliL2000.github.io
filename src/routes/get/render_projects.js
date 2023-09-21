/*
function for:
over-all div, accept (name, paragraph)
within this
    render tech-stack (input arr, length, list)

*/

//Create const to hold the data that I will be adding to the page
const projectNames = [
  "LumberViz",
  "ROSEN Capstone",
  "Canvas Gamification",
  "Neetcode 150",
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
    paragraphs[0],
    4,
    technologies[0]
  );
  var project2 = createProject(
    projectNames[1],
    paragraphs[1],
    3,
    technologies[1]
  );
  var project3 = createProject(
    projectNames[2],
    paragraphs[2],
    2,
    technologies[2]
  );
  var project4 = createProject(
    projectNames[3],
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

function createProject(name, description, arrayLength, technologies) {
  var project = document.createElement("div");
  project.innerHTML = name;
  return project;
}

function renderTechStack(arrayLength, technologies) {}
