let myprojects = [];


let project = document.createElement("div");

project.className =
    "rounded-2xl bg-white border border-slate-200 " +
    "p-5 shadow-sm shadow-slate-200/70";

projectDetails.appendChild(project);


// ------------------------------------
// HEADER
// ------------------------------------

let projectTitle = document.createElement("div");

projectTitle.className = "mb-5";


projectTitle.innerHTML = `
    <div class="flex items-center gap-3">

        <div class="w-10 h-10 rounded-xl
                    bg-orange-100 text-orange-600
                    flex items-center justify-center">

            <svg xmlns="http://www.w3.org/2000/svg"
                 width="21"
                 height="21"
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 stroke-width="2"
                 stroke-linecap="round"
                 stroke-linejoin="round">

                <rect width="18"
                      height="18"
                      x="3"
                      y="3"
                      rx="2"/>

                <path d="M3 9h18"/>
                <path d="M9 21V9"/>

            </svg>

        </div>

        <div>

            <h2 class="font-bold text-lg text-slate-800">
                Projects
            </h2>

            <p class="text-xs text-slate-500">
                Showcase your projects and achievements
            </p>

        </div>

    </div>
`;

project.appendChild(projectTitle);


// ------------------------------------
// PROJECT FIELDS
// ------------------------------------

createLabelAndInputs(
    project,
    "Project Title",
    "text",
    "project"
);

createTextArea(
    project,
    "text",
    "tech",
    "Enter all technologies used in this project..."
);

createTextArea(
    project,
    "text",
    "des",
    "Enter your project description..."
);


// ------------------------------------
// SUBMIT
// ------------------------------------

let submitForProject =
    createBtn(project, "Add Project");


submitForProject.addEventListener("click", () => {

    details = {

        "Project Title":
            document.getElementById("project").value,

        "Technology":
            document.getElementById("tech").value,

        "Description":
            document.getElementById("des").value

    };


    myprojects.push(details);


    Swal.fire({

        title: "Add another project?",

        text: "You can add another project if you want.",

        icon: "question",

        showCancelButton: true,

        confirmButtonColor: "#2563eb",

        cancelButtonColor: "#64748b",

        confirmButtonText: "Yes, add another",

        cancelButtonText: "No, continue"

    }).then((result) => {


        if (result.isConfirmed) {

            document.getElementById("project").value = "";

            document.getElementById("tech").value = "";

            document.getElementById("des").value = "";


            Swal.fire({

                title: "Ready!",

                text: "Enter the details of your next project.",

                icon: "success",

                confirmButtonColor: "#2563eb"

            });

        }

        else {

            personalDetails.style.display = "none";

            noteDetails.style.display = "block";

            educationDetails.style.display = "none";

            companyDetails.style.display = "none";

            projectDetails.style.display = "none";

            skillsDetails.style.display = "none";


            showProjectsData();

        }

    });

});
