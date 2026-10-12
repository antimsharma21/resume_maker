let myeducation = [];

console.log(educationDetails.style.display);


let education = document.createElement("div");

education.className =
    "rounded-2xl bg-white border border-slate-200 " +
    "p-5 shadow-sm shadow-slate-200/70";

educationDetails.appendChild(education);


// ------------------------------------
// SECTION TITLE
// ------------------------------------

let educationTitle = document.createElement("div");

educationTitle.className = "mb-5";


educationTitle.innerHTML = `
    <div class="flex items-center gap-3">

        <div class="w-10 h-10 rounded-xl
                    bg-indigo-100 text-indigo-600
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

                <path d="M22 10v6"/>
                <path d="M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 2 9 2 12 0v-5"/>
            </svg>

        </div>

        <div>
            <h2 class="font-bold text-lg text-slate-800">
                Education
            </h2>

            <p class="text-xs text-slate-500">
                Add your academic background
            </p>
        </div>

    </div>
`;

education.appendChild(educationTitle);


// ------------------------------------
// EDUCATION TEXTAREA
// ------------------------------------

createTextArea(
    education,
    "text",
    "education",
    "Enter degree, college/university, batch..."
);


let edu = document.getElementById("education");

edu.className =
    "w-full min-h-36 " +
    "border border-slate-200 rounded-xl " +
    "px-4 py-3 " +
    "bg-slate-50 text-slate-700 " +
    "placeholder-slate-400 " +
    "shadow-sm " +
    "transition-all duration-200 " +
    "focus:bg-white " +
    "focus:border-indigo-500 " +
    "focus:ring-4 focus:ring-indigo-100 " +
    "focus:outline-none " +
    "hover:border-blue-300 " +
    "resize-y";


// ------------------------------------
// SUBMIT
// ------------------------------------

let submitForEdu =
    createBtn(education, "Continue");


submitForEdu.addEventListener("click", () => {

    let edu =
        document.getElementById("education");


    let mydetails = {

        Courses: edu.value

    };


    myeducation.push(mydetails);


    personalDetails.style.display = "none";

    educationDetails.style.display = "none";

    companyDetails.style.display = "block";

    projectDetails.style.display = "none";

    skillsDetails.style.display = "none";


    showEducationalData();

});
