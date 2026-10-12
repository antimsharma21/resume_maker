let companyArray = [];

console.log("company details", companyDetails);


let companydiv = document.createElement("div");

companydiv.className =
    "rounded-2xl bg-white border border-slate-200 " +
    "p-5 shadow-sm shadow-slate-200/70";

companydiv.id = "companydiv";

companyDetails.appendChild(companydiv);


// ------------------------------------
// SECTION HEADER
// ------------------------------------

let companyTitle = document.createElement("div");

companyTitle.className = "mb-5";


companyTitle.innerHTML = `
    <div class="flex items-center gap-3">

        <div class="w-10 h-10 rounded-xl
                    bg-purple-100 text-purple-600
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

                <rect width="20" height="14"
                      x="2" y="3" rx="2"/>

                <line x1="8" x2="16"
                      y1="21" y2="21"/>

                <line x1="12" x2="12"
                      y1="17" y2="21"/>

            </svg>

        </div>

        <div>

            <h2 class="font-bold text-lg text-slate-800">
                Work Experience
            </h2>

            <p class="text-xs text-slate-500">
                Add your professional experience
            </p>

        </div>

    </div>
`;

companydiv.appendChild(companyTitle);


// ------------------------------------
// INPUTS
// ------------------------------------

createLabelAndInputs(
    companydiv,
    "About Company",
    "text",
    "company"
);

createLabelAndInputs(
    companydiv,
    "About Role",
    "text",
    "role"
);

createLabelAndInputs(
    companydiv,
    "About Duration",
    "text",
    "duration"
);


// ------------------------------------
// SUBMIT
// ------------------------------------

let submitForCom =
    createBtn(companydiv, "Continue");


submitForCom.addEventListener("click", () => {

    details = {

        "Company Name":
            document.getElementById("company").value,

        "Role":
            document.getElementById("role").value,

        "Duration":
            document.getElementById("duration").value

    };


    companyArray.push(details);


    personalDetails.style.display = "none";

    educationDetails.style.display = "none";

    companyDetails.style.display = "none";

    projectDetails.style.display = "none";

    skillsDetails.style.display = "block";


    showCompanyData();

});let companyArray = [];

console.log("company details", companyDetails);


let companydiv = document.createElement("div");

companydiv.className =
    "rounded-2xl bg-white border border-slate-200 " +
    "p-5 shadow-sm shadow-slate-200/70";

companydiv.id = "companydiv";

companyDetails.appendChild(companydiv);


// ------------------------------------
// SECTION HEADER
// ------------------------------------

let companyTitle = document.createElement("div");

companyTitle.className = "mb-5";


companyTitle.innerHTML = `
    <div class="flex items-center gap-3">

        <div class="w-10 h-10 rounded-xl
                    bg-purple-100 text-purple-600
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

                <rect width="20" height="14"
                      x="2" y="3" rx="2"/>

                <line x1="8" x2="16"
                      y1="21" y2="21"/>

                <line x1="12" x2="12"
                      y1="17" y2="21"/>

            </svg>

        </div>

        <div>

            <h2 class="font-bold text-lg text-slate-800">
                Work Experience
            </h2>

            <p class="text-xs text-slate-500">
                Add your professional experience
            </p>

        </div>

    </div>
`;

companydiv.appendChild(companyTitle);


// ------------------------------------
// INPUTS
// ------------------------------------

createLabelAndInputs(
    companydiv,
    "About Company",
    "text",
    "company"
);

createLabelAndInputs(
    companydiv,
    "About Role",
    "text",
    "role"
);

createLabelAndInputs(
    companydiv,
    "About Duration",
    "text",
    "duration"
);


// ------------------------------------
// SUBMIT
// ------------------------------------

let submitForCom =
    createBtn(companydiv, "Continue");


submitForCom.addEventListener("click", () => {

    details = {

        "Company Name":
            document.getElementById("company").value,

        "Role":
            document.getElementById("role").value,

        "Duration":
            document.getElementById("duration").value

    };


    companyArray.push(details);


    personalDetails.style.display = "none";

    educationDetails.style.display = "none";

    companyDetails.style.display = "none";

    projectDetails.style.display = "none";

    skillsDetails.style.display = "block";


    showCompanyData();

});let companyArray = [];

console.log("company details", companyDetails);


let companydiv = document.createElement("div");

companydiv.className =
    "rounded-2xl bg-white border border-slate-200 " +
    "p-5 shadow-sm shadow-slate-200/70";

companydiv.id = "companydiv";

companyDetails.appendChild(companydiv);


// ------------------------------------
// SECTION HEADER
// ------------------------------------

let companyTitle = document.createElement("div");

companyTitle.className = "mb-5";


companyTitle.innerHTML = `
    <div class="flex items-center gap-3">

        <div class="w-10 h-10 rounded-xl
                    bg-purple-100 text-purple-600
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

                <rect width="20" height="14"
                      x="2" y="3" rx="2"/>

                <line x1="8" x2="16"
                      y1="21" y2="21"/>

                <line x1="12" x2="12"
                      y1="17" y2="21"/>

            </svg>

        </div>

        <div>

            <h2 class="font-bold text-lg text-slate-800">
                Work Experience
            </h2>

            <p class="text-xs text-slate-500">
                Add your professional experience
            </p>

        </div>

    </div>
`;

companydiv.appendChild(companyTitle);


// ------------------------------------
// INPUTS
// ------------------------------------

createLabelAndInputs(
    companydiv,
    "About Company",
    "text",
    "company"
);

createLabelAndInputs(
    companydiv,
    "About Role",
    "text",
    "role"
);

createLabelAndInputs(
    companydiv,
    "About Duration",
    "text",
    "duration"
);


// ------------------------------------
// SUBMIT
// ------------------------------------

let submitForCom =
    createBtn(companydiv, "Continue");


submitForCom.addEventListener("click", () => {

    details = {

        "Company Name":
            document.getElementById("company").value,

        "Role":
            document.getElementById("role").value,

        "Duration":
            document.getElementById("duration").value

    };


    companyArray.push(details);


    personalDetails.style.display = "none";

    educationDetails.style.display = "none";

    companyDetails.style.display = "none";

    projectDetails.style.display = "none";

    skillsDetails.style.display = "block";


    showCompanyData();

});let companyArray = [];

console.log("company details", companyDetails);


let companydiv = document.createElement("div");

companydiv.className =
    "rounded-2xl bg-white border border-slate-200 " +
    "p-5 shadow-sm shadow-slate-200/70";

companydiv.id = "companydiv";

companyDetails.appendChild(companydiv);


// ------------------------------------
// SECTION HEADER
// ------------------------------------

let companyTitle = document.createElement("div");

companyTitle.className = "mb-5";


companyTitle.innerHTML = `
    <div class="flex items-center gap-3">

        <div class="w-10 h-10 rounded-xl
                    bg-purple-100 text-purple-600
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

                <rect width="20" height="14"
                      x="2" y="3" rx="2"/>

                <line x1="8" x2="16"
                      y1="21" y2="21"/>

                <line x1="12" x2="12"
                      y1="17" y2="21"/>

            </svg>

        </div>

        <div>

            <h2 class="font-bold text-lg text-slate-800">
                Work Experience
            </h2>

            <p class="text-xs text-slate-500">
                Add your professional experience
            </p>

        </div>

    </div>
`;

companydiv.appendChild(companyTitle);


// ------------------------------------
// INPUTS
// ------------------------------------

createLabelAndInputs(
    companydiv,
    "About Company",
    "text",
    "company"
);

createLabelAndInputs(
    companydiv,
    "About Role",
    "text",
    "role"
);

createLabelAndInputs(
    companydiv,
    "About Duration",
    "text",
    "duration"
);


// ------------------------------------
// SUBMIT
// ------------------------------------

let submitForCom =
    createBtn(companydiv, "Continue");


submitForCom.addEventListener("click", () => {

    details = {

        "Company Name":
            document.getElementById("company").value,

        "Role":
            document.getElementById("role").value,

        "Duration":
            document.getElementById("duration").value

    };


    companyArray.push(details);


    personalDetails.style.display = "none";

    educationDetails.style.display = "none";

    companyDetails.style.display = "none";

    projectDetails.style.display = "none";

    skillsDetails.style.display = "block";


    showCompanyData();

});let companyArray = [];

console.log("company details", companyDetails);


let companydiv = document.createElement("div");

companydiv.className =
    "rounded-2xl bg-white border border-slate-200 " +
    "p-5 shadow-sm shadow-slate-200/70";

companydiv.id = "companydiv";

companyDetails.appendChild(companydiv);


// ------------------------------------
// SECTION HEADER
// ------------------------------------

let companyTitle = document.createElement("div");

companyTitle.className = "mb-5";


companyTitle.innerHTML = `
    <div class="flex items-center gap-3">

        <div class="w-10 h-10 rounded-xl
                    bg-purple-100 text-purple-600
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

                <rect width="20" height="14"
                      x="2" y="3" rx="2"/>

                <line x1="8" x2="16"
                      y1="21" y2="21"/>

                <line x1="12" x2="12"
                      y1="17" y2="21"/>

            </svg>

        </div>

        <div>

            <h2 class="font-bold text-lg text-slate-800">
                Work Experience
            </h2>

            <p class="text-xs text-slate-500">
                Add your professional experience
            </p>

        </div>

    </div>
`;

companydiv.appendChild(companyTitle);


// ------------------------------------
// INPUTS
// ------------------------------------

createLabelAndInputs(
    companydiv,
    "About Company",
    "text",
    "company"
);

createLabelAndInputs(
    companydiv,
    "About Role",
    "text",
    "role"
);

createLabelAndInputs(
    companydiv,
    "About Duration",
    "text",
    "duration"
);


// ------------------------------------
// SUBMIT
// ------------------------------------

let submitForCom =
    createBtn(companydiv, "Continue");


submitForCom.addEventListener("click", () => {

    details = {

        "Company Name":
            document.getElementById("company").value,

        "Role":
            document.getElementById("role").value,

        "Duration":
            document.getElementById("duration").value

    };


    companyArray.push(details);


    personalDetails.style.display = "none";

    educationDetails.style.display = "none";

    companyDetails.style.display = "none";

    projectDetails.style.display = "none";

    skillsDetails.style.display = "block";


    showCompanyData();

});let companyArray = [];

console.log("company details", companyDetails);


let companydiv = document.createElement("div");

companydiv.className =
    "rounded-2xl bg-white border border-slate-200 " +
    "p-5 shadow-sm shadow-slate-200/70";

companydiv.id = "companydiv";

companyDetails.appendChild(companydiv);


// ------------------------------------
// SECTION HEADER
// ------------------------------------

let companyTitle = document.createElement("div");

companyTitle.className = "mb-5";


companyTitle.innerHTML = `
    <div class="flex items-center gap-3">

        <div class="w-10 h-10 rounded-xl
                    bg-purple-100 text-purple-600
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

                <rect width="20" height="14"
                      x="2" y="3" rx="2"/>

                <line x1="8" x2="16"
                      y1="21" y2="21"/>

                <line x1="12" x2="12"
                      y1="17" y2="21"/>

            </svg>

        </div>

        <div>

            <h2 class="font-bold text-lg text-slate-800">
                Work Experience
            </h2>

            <p class="text-xs text-slate-500">
                Add your professional experience
            </p>

        </div>

    </div>
`;

companydiv.appendChild(companyTitle);


// ------------------------------------
// INPUTS
// ------------------------------------

createLabelAndInputs(
    companydiv,
    "About Company",
    "text",
    "company"
);

createLabelAndInputs(
    companydiv,
    "About Role",
    "text",
    "role"
);

createLabelAndInputs(
    companydiv,
    "About Duration",
    "text",
    "duration"
);


// ------------------------------------
// SUBMIT
// ------------------------------------

let submitForCom =
    createBtn(companydiv, "Continue");


submitForCom.addEventListener("click", () => {

    details = {

        "Company Name":
            document.getElementById("company").value,

        "Role":
            document.getElementById("role").value,

        "Duration":
            document.getElementById("duration").value

    };


    companyArray.push(details);


    personalDetails.style.display = "none";

    educationDetails.style.display = "none";

    companyDetails.style.display = "none";

    projectDetails.style.display = "none";

    skillsDetails.style.display = "block";


    showCompanyData();

});
