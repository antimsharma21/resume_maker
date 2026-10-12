let myskills = [];


let skills = document.createElement("div");

skills.className =
    "rounded-2xl bg-white border border-slate-200 " +
    "p-5 shadow-sm shadow-slate-200/70";

skillsDetails.appendChild(skills);


// ------------------------------------
// HEADER
// ------------------------------------

let skillsTitle = document.createElement("div");

skillsTitle.className = "mb-5";


skillsTitle.innerHTML = `
    <div class="flex items-center gap-3">

        <div class="w-10 h-10 rounded-xl
                    bg-emerald-100 text-emerald-600
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

                <path d="m16 6 4 4"/>
                <path d="M14 8 4 18l-2 4 4-2L16 10"/>
                <path d="m18 2 4 4"/>

            </svg>

        </div>

        <div>

            <h2 class="font-bold text-lg text-slate-800">
                Skills
            </h2>

            <p class="text-xs text-slate-500">
                Add your technical and professional skills
            </p>

        </div>

    </div>
`;

skills.appendChild(skillsTitle);


// ------------------------------------
// SKILLS
// ------------------------------------

createTextArea(
    skills,
    "text",
    "text",
    "Enter your skills..."
);


// ------------------------------------
// SUBMIT
// ------------------------------------

let submitForSkills =
    createBtn(skills, "Continue");


submitForSkills.addEventListener("click", () => {

    mydetails = {

        "Skills":
            document.getElementById("text").value

    };


    myskills.push(mydetails);


    personalDetails.style.display = "none";

    educationDetails.style.display = "none";

    companyDetails.style.display = "none";

    projectDetails.style.display = "block";

    skillsDetails.style.display = "none";


    showSkillsData();

});
