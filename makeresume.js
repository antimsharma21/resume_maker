console.log("make resume", mydetails);


let personaldata =
    document.getElementById("personal");

personaldata.className =
    "bg-white rounded-xl p-3";


let educationaldata =
    document.getElementById("education-data");

educationaldata.className =
    "bg-white rounded-xl p-3";


let companydata =
    document.getElementById("company-in-html");

companydata.className =
    "bg-white rounded-xl p-3";


let skillsdata =
    document.getElementById("skills");

skillsdata.className =
    "bg-white rounded-xl p-3";


let projectsdata =
    document.getElementById("projects");

projectsdata.className =
    "bg-white rounded-xl p-3";


let notedata =
    document.getElementById("note");

notedata.className =
    "bg-white rounded-xl p-3";


console.log(companydata);


// ------------------------------------
// PERSONAL
// ------------------------------------

async function showPersonalData() {

    mydetails.forEach(item => {

        personaldata.innerHTML += `

        <p class="break-words text-xl text-slate-700">
            ${item["Full Name"]}
        </p>

        <p class="break-words text-blue-700">
            ${item["Email"]}
        </p>

        <p class="break-words">
            Contact : ${item["Phone_no"]}
        </p>

        <p class="break-words">
            Address : ${item["Address"]}
        </p>

        <p class="break-words">
            ${item["Profile summary"]}
        </p>

        `;
    });
}


// ------------------------------------
// EDUCATION
// ------------------------------------

async function showEducationalData() {

    myeducation.forEach(item => {

        educationaldata.innerHTML += `

        <b>
            <h3>Education Section :-</h3>
        </b>

        <p class="break-words">
            ${item["Courses"]}
        </p>

        `;
    });
}


// ------------------------------------
// COMPANY
// ------------------------------------

async function showCompanyData() {

    console.log("calling function");

    console.log(companyArray);


    companyArray.forEach(item => {

        companydata.innerHTML += `

        <b>
            <h3>Experience Section :-</h3>
        </b>

        <p class="break-words">
            ${item["Company Name"]}
        </p>

        <p class="break-words">
            ${item["Role"]}
        </p>

        <p class="break-words">
            ${item["Duration"]}
        </p>

        `;
    });
}


// ------------------------------------
// SKILLS
// ------------------------------------

async function showSkillsData() {

    myskills.forEach(item => {

        skillsdata.innerHTML += `

        <b>
            <h3>Skills Section :-</h3>
        </b>

        <p class="break-words">
            ${item["Skills"]}
        </p>

        `;
    });
}


// ------------------------------------
// PROJECTS
// ------------------------------------

async function showProjectsData() {

    myprojects.forEach(item => {

        projectsdata.innerHTML += `

        <p class="break-words">
            <h4>
                <b>Title:-</b>
            </h4>

            <b>
                <h5>
                    ${item["Project Title"]}
                </h5>
            </b>
        </p>

        <p class="break-words">
            ${item["Technology"]}
        </p>

        <p class="break-words">
            ${item["Description"]}
        </p>

        `;
    });
}


// ------------------------------------
// NOTE
// ------------------------------------

async function showNoteData() {

    mynote.forEach(item => {

        notedata.innerHTML += `

        <p class="break-words">
            <b>NOTE : </b>
            ${item["NOTE"]}
        </p>

        `;
    });
}console.log("make resume", mydetails);


let personaldata =
    document.getElementById("personal");

personaldata.className =
    "bg-white rounded-xl p-3";


let educationaldata =
    document.getElementById("education-data");

educationaldata.className =
    "bg-white rounded-xl p-3";


let companydata =
    document.getElementById("company-in-html");

companydata.className =
    "bg-white rounded-xl p-3";


let skillsdata =
    document.getElementById("skills");

skillsdata.className =
    "bg-white rounded-xl p-3";


let projectsdata =
    document.getElementById("projects");

projectsdata.className =
    "bg-white rounded-xl p-3";


let notedata =
    document.getElementById("note");

notedata.className =
    "bg-white rounded-xl p-3";


console.log(companydata);


// ------------------------------------
// PERSONAL
// ------------------------------------

async function showPersonalData() {

    mydetails.forEach(item => {

        personaldata.innerHTML += `

        <p class="break-words text-xl text-slate-700">
            ${item["Full Name"]}
        </p>

        <p class="break-words text-blue-700">
            ${item["Email"]}
        </p>

        <p class="break-words">
            Contact : ${item["Phone_no"]}
        </p>

        <p class="break-words">
            Address : ${item["Address"]}
        </p>

        <p class="break-words">
            ${item["Profile summary"]}
        </p>

        `;
    });
}


// ------------------------------------
// EDUCATION
// ------------------------------------

async function showEducationalData() {

    myeducation.forEach(item => {

        educationaldata.innerHTML += `

        <b>
            <h3>Education Section :-</h3>
        </b>

        <p class="break-words">
            ${item["Courses"]}
        </p>

        `;
    });
}


// ------------------------------------
// COMPANY
// ------------------------------------

async function showCompanyData() {

    console.log("calling function");

    console.log(companyArray);


    companyArray.forEach(item => {

        companydata.innerHTML += `

        <b>
            <h3>Experience Section :-</h3>
        </b>

        <p class="break-words">
            ${item["Company Name"]}
        </p>

        <p class="break-words">
            ${item["Role"]}
        </p>

        <p class="break-words">
            ${item["Duration"]}
        </p>

        `;
    });
}


// ------------------------------------
// SKILLS
// ------------------------------------

async function showSkillsData() {

    myskills.forEach(item => {

        skillsdata.innerHTML += `

        <b>
            <h3>Skills Section :-</h3>
        </b>

        <p class="break-words">
            ${item["Skills"]}
        </p>

        `;
    });
}


// ------------------------------------
// PROJECTS
// ------------------------------------

async function showProjectsData() {

    myprojects.forEach(item => {

        projectsdata.innerHTML += `

        <p class="break-words">
            <h4>
                <b>Title:-</b>
            </h4>

            <b>
                <h5>
                    ${item["Project Title"]}
                </h5>
            </b>
        </p>

        <p class="break-words">
            ${item["Technology"]}
        </p>

        <p class="break-words">
            ${item["Description"]}
        </p>

        `;
    });
}


// ------------------------------------
// NOTE
// ------------------------------------

async function showNoteData() {

    mynote.forEach(item => {

        notedata.innerHTML += `

        <p class="break-words">
            <b>NOTE : </b>
            ${item["NOTE"]}
        </p>

        `;
    });
}
