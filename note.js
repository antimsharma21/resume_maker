let mynote = [];


let note = document.createElement("div");

note.className =
    "rounded-2xl bg-white border border-slate-200 " +
    "p-5 shadow-sm shadow-slate-200/70";

noteDetails.appendChild(note);


// ------------------------------------
// HEADER
// ------------------------------------

let noteTitle = document.createElement("div");

noteTitle.className = "mb-5";


noteTitle.innerHTML = `
    <div class="flex items-center gap-3">

        <div class="w-10 h-10 rounded-xl
                    bg-amber-100 text-amber-600
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

                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
                <path d="M14 2v6h6"/>
                <path d="M8 13h8"/>
                <path d="M8 17h5"/>

            </svg>

        </div>

        <div>

            <h2 class="font-bold text-lg text-slate-800">
                Finishing Note
            </h2>

            <p class="text-xs text-slate-500">
                Add any additional information
            </p>

        </div>

    </div>
`;

note.appendChild(noteTitle);


// ------------------------------------
// NOTE
// ------------------------------------

createTextArea(
    note,
    "text",
    "note",
    "Enter your finishing note..."
);


// ------------------------------------
// SUBMIT
// ------------------------------------

let submitFornote =
    createBtn(note, "Finish Resume");


submitFornote.addEventListener("click", () => {

    mydetails = {

        "NOTE":
            document.getElementById("note").value

    };


    mynote.push(mydetails);


    personalDetails.style.display = "none";

    educationDetails.style.display = "none";

    companyDetails.style.display = "none";

    projectDetails.style.display = "none";

    skillsDetails.style.display = "none";

    noteDetails.style.display = "none";


    showNoteData();

});let mynote = [];


let note = document.createElement("div");

note.className =
    "rounded-2xl bg-white border border-slate-200 " +
    "p-5 shadow-sm shadow-slate-200/70";

noteDetails.appendChild(note);


// ------------------------------------
// HEADER
// ------------------------------------

let noteTitle = document.createElement("div");

noteTitle.className = "mb-5";


noteTitle.innerHTML = `
    <div class="flex items-center gap-3">

        <div class="w-10 h-10 rounded-xl
                    bg-amber-100 text-amber-600
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

                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
                <path d="M14 2v6h6"/>
                <path d="M8 13h8"/>
                <path d="M8 17h5"/>

            </svg>

        </div>

        <div>

            <h2 class="font-bold text-lg text-slate-800">
                Finishing Note
            </h2>

            <p class="text-xs text-slate-500">
                Add any additional information
            </p>

        </div>

    </div>
`;

note.appendChild(noteTitle);


// ------------------------------------
// NOTE
// ------------------------------------

createTextArea(
    note,
    "text",
    "note",
    "Enter your finishing note..."
);


// ------------------------------------
// SUBMIT
// ------------------------------------

let submitFornote =
    createBtn(note, "Finish Resume");


submitFornote.addEventListener("click", () => {

    mydetails = {

        "NOTE":
            document.getElementById("note").value

    };


    mynote.push(mydetails);


    personalDetails.style.display = "none";

    educationDetails.style.display = "none";

    companyDetails.style.display = "none";

    projectDetails.style.display = "none";

    skillsDetails.style.display = "none";

    noteDetails.style.display = "none";


    showNoteData();

});let mynote = [];


let note = document.createElement("div");

note.className =
    "rounded-2xl bg-white border border-slate-200 " +
    "p-5 shadow-sm shadow-slate-200/70";

noteDetails.appendChild(note);


// ------------------------------------
// HEADER
// ------------------------------------

let noteTitle = document.createElement("div");

noteTitle.className = "mb-5";


noteTitle.innerHTML = `
    <div class="flex items-center gap-3">

        <div class="w-10 h-10 rounded-xl
                    bg-amber-100 text-amber-600
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

                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
                <path d="M14 2v6h6"/>
                <path d="M8 13h8"/>
                <path d="M8 17h5"/>

            </svg>

        </div>

        <div>

            <h2 class="font-bold text-lg text-slate-800">
                Finishing Note
            </h2>

            <p class="text-xs text-slate-500">
                Add any additional information
            </p>

        </div>

    </div>
`;

note.appendChild(noteTitle);


// ------------------------------------
// NOTE
// ------------------------------------

createTextArea(
    note,
    "text",
    "note",
    "Enter your finishing note..."
);


// ------------------------------------
// SUBMIT
// ------------------------------------

let submitFornote =
    createBtn(note, "Finish Resume");


submitFornote.addEventListener("click", () => {

    mydetails = {

        "NOTE":
            document.getElementById("note").value

    };


    mynote.push(mydetails);


    personalDetails.style.display = "none";

    educationDetails.style.display = "none";

    companyDetails.style.display = "none";

    projectDetails.style.display = "none";

    skillsDetails.style.display = "none";

    noteDetails.style.display = "none";


    showNoteData();

});let mynote = [];


let note = document.createElement("div");

note.className =
    "rounded-2xl bg-white border border-slate-200 " +
    "p-5 shadow-sm shadow-slate-200/70";

noteDetails.appendChild(note);


// ------------------------------------
// HEADER
// ------------------------------------

let noteTitle = document.createElement("div");

noteTitle.className = "mb-5";


noteTitle.innerHTML = `
    <div class="flex items-center gap-3">

        <div class="w-10 h-10 rounded-xl
                    bg-amber-100 text-amber-600
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

                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
                <path d="M14 2v6h6"/>
                <path d="M8 13h8"/>
                <path d="M8 17h5"/>

            </svg>

        </div>

        <div>

            <h2 class="font-bold text-lg text-slate-800">
                Finishing Note
            </h2>

            <p class="text-xs text-slate-500">
                Add any additional information
            </p>

        </div>

    </div>
`;

note.appendChild(noteTitle);


// ------------------------------------
// NOTE
// ------------------------------------

createTextArea(
    note,
    "text",
    "note",
    "Enter your finishing note..."
);


// ------------------------------------
// SUBMIT
// ------------------------------------

let submitFornote =
    createBtn(note, "Finish Resume");


submitFornote.addEventListener("click", () => {

    mydetails = {

        "NOTE":
            document.getElementById("note").value

    };


    mynote.push(mydetails);


    personalDetails.style.display = "none";

    educationDetails.style.display = "none";

    companyDetails.style.display = "none";

    projectDetails.style.display = "none";

    skillsDetails.style.display = "none";

    noteDetails.style.display = "none";


    showNoteData();

});let mynote = [];


let note = document.createElement("div");

note.className =
    "rounded-2xl bg-white border border-slate-200 " +
    "p-5 shadow-sm shadow-slate-200/70";

noteDetails.appendChild(note);


// ------------------------------------
// HEADER
// ------------------------------------

let noteTitle = document.createElement("div");

noteTitle.className = "mb-5";


noteTitle.innerHTML = `
    <div class="flex items-center gap-3">

        <div class="w-10 h-10 rounded-xl
                    bg-amber-100 text-amber-600
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

                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
                <path d="M14 2v6h6"/>
                <path d="M8 13h8"/>
                <path d="M8 17h5"/>

            </svg>

        </div>

        <div>

            <h2 class="font-bold text-lg text-slate-800">
                Finishing Note
            </h2>

            <p class="text-xs text-slate-500">
                Add any additional information
            </p>

        </div>

    </div>
`;

note.appendChild(noteTitle);


// ------------------------------------
// NOTE
// ------------------------------------

createTextArea(
    note,
    "text",
    "note",
    "Enter your finishing note..."
);


// ------------------------------------
// SUBMIT
// ------------------------------------

let submitFornote =
    createBtn(note, "Finish Resume");


submitFornote.addEventListener("click", () => {

    mydetails = {

        "NOTE":
            document.getElementById("note").value

    };


    mynote.push(mydetails);


    personalDetails.style.display = "none";

    educationDetails.style.display = "none";

    companyDetails.style.display = "none";

    projectDetails.style.display = "none";

    skillsDetails.style.display = "none";

    noteDetails.style.display = "none";


    showNoteData();

});let mynote = [];


let note = document.createElement("div");

note.className =
    "rounded-2xl bg-white border border-slate-200 " +
    "p-5 shadow-sm shadow-slate-200/70";

noteDetails.appendChild(note);


// ------------------------------------
// HEADER
// ------------------------------------

let noteTitle = document.createElement("div");

noteTitle.className = "mb-5";


noteTitle.innerHTML = `
    <div class="flex items-center gap-3">

        <div class="w-10 h-10 rounded-xl
                    bg-amber-100 text-amber-600
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

                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
                <path d="M14 2v6h6"/>
                <path d="M8 13h8"/>
                <path d="M8 17h5"/>

            </svg>

        </div>

        <div>

            <h2 class="font-bold text-lg text-slate-800">
                Finishing Note
            </h2>

            <p class="text-xs text-slate-500">
                Add any additional information
            </p>

        </div>

    </div>
`;

note.appendChild(noteTitle);


// ------------------------------------
// NOTE
// ------------------------------------

createTextArea(
    note,
    "text",
    "note",
    "Enter your finishing note..."
);


// ------------------------------------
// SUBMIT
// ------------------------------------

let submitFornote =
    createBtn(note, "Finish Resume");


submitFornote.addEventListener("click", () => {

    mydetails = {

        "NOTE":
            document.getElementById("note").value

    };


    mynote.push(mydetails);


    personalDetails.style.display = "none";

    educationDetails.style.display = "none";

    companyDetails.style.display = "none";

    projectDetails.style.display = "none";

    skillsDetails.style.display = "none";

    noteDetails.style.display = "none";


    showNoteData();

});let mynote = [];


let note = document.createElement("div");

note.className =
    "rounded-2xl bg-white border border-slate-200 " +
    "p-5 shadow-sm shadow-slate-200/70";

noteDetails.appendChild(note);


// ------------------------------------
// HEADER
// ------------------------------------

let noteTitle = document.createElement("div");

noteTitle.className = "mb-5";


noteTitle.innerHTML = `
    <div class="flex items-center gap-3">

        <div class="w-10 h-10 rounded-xl
                    bg-amber-100 text-amber-600
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

                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
                <path d="M14 2v6h6"/>
                <path d="M8 13h8"/>
                <path d="M8 17h5"/>

            </svg>

        </div>

        <div>

            <h2 class="font-bold text-lg text-slate-800">
                Finishing Note
            </h2>

            <p class="text-xs text-slate-500">
                Add any additional information
            </p>

        </div>

    </div>
`;

note.appendChild(noteTitle);


// ------------------------------------
// NOTE
// ------------------------------------

createTextArea(
    note,
    "text",
    "note",
    "Enter your finishing note..."
);


// ------------------------------------
// SUBMIT
// ------------------------------------

let submitFornote =
    createBtn(note, "Finish Resume");


submitFornote.addEventListener("click", () => {

    mydetails = {

        "NOTE":
            document.getElementById("note").value

    };


    mynote.push(mydetails);


    personalDetails.style.display = "none";

    educationDetails.style.display = "none";

    companyDetails.style.display = "none";

    projectDetails.style.display = "none";

    skillsDetails.style.display = "none";

    noteDetails.style.display = "none";


    showNoteData();

});let mynote = [];


let note = document.createElement("div");

note.className =
    "rounded-2xl bg-white border border-slate-200 " +
    "p-5 shadow-sm shadow-slate-200/70";

noteDetails.appendChild(note);


// ------------------------------------
// HEADER
// ------------------------------------

let noteTitle = document.createElement("div");

noteTitle.className = "mb-5";


noteTitle.innerHTML = `
    <div class="flex items-center gap-3">

        <div class="w-10 h-10 rounded-xl
                    bg-amber-100 text-amber-600
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

                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
                <path d="M14 2v6h6"/>
                <path d="M8 13h8"/>
                <path d="M8 17h5"/>

            </svg>

        </div>

        <div>

            <h2 class="font-bold text-lg text-slate-800">
                Finishing Note
            </h2>

            <p class="text-xs text-slate-500">
                Add any additional information
            </p>

        </div>

    </div>
`;

note.appendChild(noteTitle);


// ------------------------------------
// NOTE
// ------------------------------------

createTextArea(
    note,
    "text",
    "note",
    "Enter your finishing note..."
);


// ------------------------------------
// SUBMIT
// ------------------------------------

let submitFornote =
    createBtn(note, "Finish Resume");


submitFornote.addEventListener("click", () => {

    mydetails = {

        "NOTE":
            document.getElementById("note").value

    };


    mynote.push(mydetails);


    personalDetails.style.display = "none";

    educationDetails.style.display = "none";

    companyDetails.style.display = "none";

    projectDetails.style.display = "none";

    skillsDetails.style.display = "none";

    noteDetails.style.display = "none";


    showNoteData();

});let mynote = [];


let note = document.createElement("div");

note.className =
    "rounded-2xl bg-white border border-slate-200 " +
    "p-5 shadow-sm shadow-slate-200/70";

noteDetails.appendChild(note);


// ------------------------------------
// HEADER
// ------------------------------------

let noteTitle = document.createElement("div");

noteTitle.className = "mb-5";


noteTitle.innerHTML = `
    <div class="flex items-center gap-3">

        <div class="w-10 h-10 rounded-xl
                    bg-amber-100 text-amber-600
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

                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
                <path d="M14 2v6h6"/>
                <path d="M8 13h8"/>
                <path d="M8 17h5"/>

            </svg>

        </div>

        <div>

            <h2 class="font-bold text-lg text-slate-800">
                Finishing Note
            </h2>

            <p class="text-xs text-slate-500">
                Add any additional information
            </p>

        </div>

    </div>
`;

note.appendChild(noteTitle);


// ------------------------------------
// NOTE
// ------------------------------------

createTextArea(
    note,
    "text",
    "note",
    "Enter your finishing note..."
);


// ------------------------------------
// SUBMIT
// ------------------------------------

let submitFornote =
    createBtn(note, "Finish Resume");


submitFornote.addEventListener("click", () => {

    mydetails = {

        "NOTE":
            document.getElementById("note").value

    };


    mynote.push(mydetails);


    personalDetails.style.display = "none";

    educationDetails.style.display = "none";

    companyDetails.style.display = "none";

    projectDetails.style.display = "none";

    skillsDetails.style.display = "none";

    noteDetails.style.display = "none";


    showNoteData();

});let mynote = [];


let note = document.createElement("div");

note.className =
    "rounded-2xl bg-white border border-slate-200 " +
    "p-5 shadow-sm shadow-slate-200/70";

noteDetails.appendChild(note);


// ------------------------------------
// HEADER
// ------------------------------------

let noteTitle = document.createElement("div");

noteTitle.className = "mb-5";


noteTitle.innerHTML = `
    <div class="flex items-center gap-3">

        <div class="w-10 h-10 rounded-xl
                    bg-amber-100 text-amber-600
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

                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
                <path d="M14 2v6h6"/>
                <path d="M8 13h8"/>
                <path d="M8 17h5"/>

            </svg>

        </div>

        <div>

            <h2 class="font-bold text-lg text-slate-800">
                Finishing Note
            </h2>

            <p class="text-xs text-slate-500">
                Add any additional information
            </p>

        </div>

    </div>
`;

note.appendChild(noteTitle);


// ------------------------------------
// NOTE
// ------------------------------------

createTextArea(
    note,
    "text",
    "note",
    "Enter your finishing note..."
);


// ------------------------------------
// SUBMIT
// ------------------------------------

let submitFornote =
    createBtn(note, "Finish Resume");


submitFornote.addEventListener("click", () => {

    mydetails = {

        "NOTE":
            document.getElementById("note").value

    };


    mynote.push(mydetails);


    personalDetails.style.display = "none";

    educationDetails.style.display = "none";

    companyDetails.style.display = "none";

    projectDetails.style.display = "none";

    skillsDetails.style.display = "none";

    noteDetails.style.display = "none";


    showNoteData();

});
