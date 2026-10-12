let personaledit = document.getElementById("personal");
personaledit.contentEditable = false;

let educationedit = document.getElementById("education-data");
educationedit.contentEditable = false;

let companyedit = document.getElementById("company-in-html");
companyedit.contentEditable = false;

let skillsedit = document.getElementById("skills");
skillsedit.contentEditable = false;

let projectsedit = document.getElementById("projects");
projectsedit.contentEditable = false;

let noteedit = document.getElementById("note");
noteedit.contentEditable = false;


// ===============================
// BUTTON CONTAINER
// ===============================

editBtnDiv.style.display = "flex";
editBtnDiv.style.flexDirection = "row";
editBtnDiv.style.flexWrap = "nowrap";
editBtnDiv.style.alignItems = "center";
editBtnDiv.style.justifyContent = "center";
editBtnDiv.style.gap = "30px";


// ===============================
// BUTTON STYLE
// ===============================

function styleButton(button) {

    button.style.width = "50px";
    button.style.height = "50px";
    button.style.minWidth = "50px";
    button.style.maxWidth = "50px";

    button.style.flex = "0 0 50px";
    button.style.flexShrink = "0";

    button.style.margin = "0";
    button.style.padding = "0";

    button.className =
        "rounded-xl " +
        "flex items-center justify-center " +
        "cursor-pointer " +
        "text-white " +
        "shadow-md " +
        "transition-all duration-200";
}


// ===============================
// EDIT BUTTON
// ===============================

let edit = document.createElement("button");

edit.type = "button";

edit.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg"
     width="24"
     height="24"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     stroke-width="2"
     stroke-linecap="round"
     stroke-linejoin="round">

    <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/>

    <path d="m15 5 4 4"/>

</svg>
`;

styleButton(edit);

edit.classList.add(
    "bg-blue-600",
    "hover:bg-blue-700"
);

editBtnDiv.appendChild(edit);


// ===============================
// DONE BUTTON
// ===============================

let done = document.createElement("button");

done.type = "button";

done.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg"
     width="24"
     height="24"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     stroke-width="2"
     stroke-linecap="round"
     stroke-linejoin="round">

    <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/>

    <path d="m16 9-5.5 5.5L8 12"/>

</svg>
`;

styleButton(done);

done.classList.add(
    "bg-green-600",
    "hover:bg-green-700"
);

editBtnDiv.appendChild(done);


// ===============================
// EDIT CLICK
// ===============================

edit.addEventListener("click", () => {

    personaledit.contentEditable = true;
    personaledit.className =
        "border-2 border-dashed border-blue-400 rounded-xl p-3 bg-blue-50";

    educationedit.contentEditable = true;
    educationedit.className =
        "border-2 border-dashed border-blue-400 rounded-xl p-3 bg-blue-50";

    companyedit.contentEditable = true;
    companyedit.className =
        "border-2 border-dashed border-blue-400 rounded-xl p-3 bg-blue-50";

    skillsedit.contentEditable = true;
    skillsedit.className =
        "border-2 border-dashed border-blue-400 rounded-xl p-3 bg-blue-50";

    projectsedit.contentEditable = true;
    projectsedit.className =
        "border-2 border-dashed border-blue-400 rounded-xl p-3 bg-blue-50";

    noteedit.contentEditable = true;
    noteedit.className =
        "border-2 border-dashed border-blue-400 rounded-xl p-3 bg-blue-50";


    // ===============================
    // SAVE BUTTON
    // ===============================

    let save = document.createElement("button");

    save.type = "button";

    save.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         stroke-width="2"
         stroke-linecap="round"
         stroke-linejoin="round">

        <path d="M12.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4v4.35"/>

        <path d="m16 19 2 2 4-4"/>

        <path d="M17 15.13V14a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"/>

        <path d="M7 3v4a1 1 0 0 0 1 1h7"/>

    </svg>
    `;

    styleButton(save);

    save.classList.add(
        "bg-amber-500",
        "hover:bg-amber-600"
    );


    // IMPORTANT:
    // Save ko Edit ki jagah par insert karna hai

    editBtnDiv.insertBefore(save, edit);

    edit.style.display = "none";


    // ===============================
    // SAVE CLICK
    // ===============================

    save.addEventListener("click", () => {

        personaledit.contentEditable = false;
        educationedit.contentEditable = false;
        companyedit.contentEditable = false;
        skillsedit.contentEditable = false;
        projectsedit.contentEditable = false;
        noteedit.contentEditable = false;


        personaledit.className = "border-0";

        educationedit.className = "border-0";

        companyedit.className = "border-0";

        skillsedit.className = "border-0";

        projectsedit.className = "border-0";

        noteedit.className = "border-0";


        // Save remove
        save.remove();


        // Edit wapas
        edit.style.display = "flex";
    });

});


// ===============================
// DONE CLICK
// ===============================

done.addEventListener("click", () => {

    let mainsection =
        document.getElementById("main-sections");

    personaledit.contentEditable = false;
    educationedit.contentEditable = false;
    companyedit.contentEditable = false;
    skillsedit.contentEditable = false;
    projectsedit.contentEditable = false;
    noteedit.contentEditable = false;

    mainsection.remove();

});

let downloadBtn=document.getElementById("download-btn")
downloadBtn.addEventListener("click",()=>{
 const resume =document.getElementById("resume-area")
const options = {

                // PDF file ka naam
                filename: "My-Resume.pdf",


                // Image quality
                image: {
                    type: "jpeg",
                    quality: 1
                },


                // HTML ko canvas mein convert karne ki settings
                html2canvas: {

                    scale: 2,

                    useCORS: true,

                    backgroundColor: "#ffffff"
                },


                // PDF settings
                jsPDF: {

                    unit: "mm",

                    format: "a4",

                    orientation: "portrait"
                }

            };


            // 5. Resume ko PDF mein convert karke download karo

            html2pdf()

                .set(options)

                .from(resume)

                .save();

        
})let personaledit = document.getElementById("personal");
personaledit.contentEditable = false;

let educationedit = document.getElementById("education-data");
educationedit.contentEditable = false;

let companyedit = document.getElementById("company-in-html");
companyedit.contentEditable = false;

let skillsedit = document.getElementById("skills");
skillsedit.contentEditable = false;

let projectsedit = document.getElementById("projects");
projectsedit.contentEditable = false;

let noteedit = document.getElementById("note");
noteedit.contentEditable = false;


// ===============================
// BUTTON CONTAINER
// ===============================

editBtnDiv.style.display = "flex";
editBtnDiv.style.flexDirection = "row";
editBtnDiv.style.flexWrap = "nowrap";
editBtnDiv.style.alignItems = "center";
editBtnDiv.style.justifyContent = "center";
editBtnDiv.style.gap = "30px";


// ===============================
// BUTTON STYLE
// ===============================

function styleButton(button) {

    button.style.width = "50px";
    button.style.height = "50px";
    button.style.minWidth = "50px";
    button.style.maxWidth = "50px";

    button.style.flex = "0 0 50px";
    button.style.flexShrink = "0";

    button.style.margin = "0";
    button.style.padding = "0";

    button.className =
        "rounded-xl " +
        "flex items-center justify-center " +
        "cursor-pointer " +
        "text-white " +
        "shadow-md " +
        "transition-all duration-200";
}


// ===============================
// EDIT BUTTON
// ===============================

let edit = document.createElement("button");

edit.type = "button";

edit.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg"
     width="24"
     height="24"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     stroke-width="2"
     stroke-linecap="round"
     stroke-linejoin="round">

    <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/>

    <path d="m15 5 4 4"/>

</svg>
`;

styleButton(edit);

edit.classList.add(
    "bg-blue-600",
    "hover:bg-blue-700"
);

editBtnDiv.appendChild(edit);


// ===============================
// DONE BUTTON
// ===============================

let done = document.createElement("button");

done.type = "button";

done.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg"
     width="24"
     height="24"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     stroke-width="2"
     stroke-linecap="round"
     stroke-linejoin="round">

    <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/>

    <path d="m16 9-5.5 5.5L8 12"/>

</svg>
`;

styleButton(done);

done.classList.add(
    "bg-green-600",
    "hover:bg-green-700"
);

editBtnDiv.appendChild(done);


// ===============================
// EDIT CLICK
// ===============================

edit.addEventListener("click", () => {

    personaledit.contentEditable = true;
    personaledit.className =
        "border-2 border-dashed border-blue-400 rounded-xl p-3 bg-blue-50";

    educationedit.contentEditable = true;
    educationedit.className =
        "border-2 border-dashed border-blue-400 rounded-xl p-3 bg-blue-50";

    companyedit.contentEditable = true;
    companyedit.className =
        "border-2 border-dashed border-blue-400 rounded-xl p-3 bg-blue-50";

    skillsedit.contentEditable = true;
    skillsedit.className =
        "border-2 border-dashed border-blue-400 rounded-xl p-3 bg-blue-50";

    projectsedit.contentEditable = true;
    projectsedit.className =
        "border-2 border-dashed border-blue-400 rounded-xl p-3 bg-blue-50";

    noteedit.contentEditable = true;
    noteedit.className =
        "border-2 border-dashed border-blue-400 rounded-xl p-3 bg-blue-50";


    // ===============================
    // SAVE BUTTON
    // ===============================

    let save = document.createElement("button");

    save.type = "button";

    save.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         stroke-width="2"
         stroke-linecap="round"
         stroke-linejoin="round">

        <path d="M12.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4v4.35"/>

        <path d="m16 19 2 2 4-4"/>

        <path d="M17 15.13V14a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"/>

        <path d="M7 3v4a1 1 0 0 0 1 1h7"/>

    </svg>
    `;

    styleButton(save);

    save.classList.add(
        "bg-amber-500",
        "hover:bg-amber-600"
    );


    // IMPORTANT:
    // Save ko Edit ki jagah par insert karna hai

    editBtnDiv.insertBefore(save, edit);

    edit.style.display = "none";


    // ===============================
    // SAVE CLICK
    // ===============================

    save.addEventListener("click", () => {

        personaledit.contentEditable = false;
        educationedit.contentEditable = false;
        companyedit.contentEditable = false;
        skillsedit.contentEditable = false;
        projectsedit.contentEditable = false;
        noteedit.contentEditable = false;


        personaledit.className = "border-0";

        educationedit.className = "border-0";

        companyedit.className = "border-0";

        skillsedit.className = "border-0";

        projectsedit.className = "border-0";

        noteedit.className = "border-0";


        // Save remove
        save.remove();


        // Edit wapas
        edit.style.display = "flex";
    });

});


// ===============================
// DONE CLICK
// ===============================

done.addEventListener("click", () => {

    let mainsection =
        document.getElementById("main-sections");

    personaledit.contentEditable = false;
    educationedit.contentEditable = false;
    companyedit.contentEditable = false;
    skillsedit.contentEditable = false;
    projectsedit.contentEditable = false;
    noteedit.contentEditable = false;

    mainsection.remove();

});

let downloadBtn=document.getElementById("download-btn")
downloadBtn.addEventListener("click",()=>{
 const resume =document.getElementById("resume-area")
const options = {

                // PDF file ka naam
                filename: "My-Resume.pdf",


                // Image quality
                image: {
                    type: "jpeg",
                    quality: 1
                },


                // HTML ko canvas mein convert karne ki settings
                html2canvas: {

                    scale: 2,

                    useCORS: true,

                    backgroundColor: "#ffffff"
                },


                // PDF settings
                jsPDF: {

                    unit: "mm",

                    format: "a4",

                    orientation: "portrait"
                }

            };


            // 5. Resume ko PDF mein convert karke download karo

            html2pdf()

                .set(options)

                .from(resume)

                .save();

        
})let personaledit = document.getElementById("personal");
personaledit.contentEditable = false;

let educationedit = document.getElementById("education-data");
educationedit.contentEditable = false;

let companyedit = document.getElementById("company-in-html");
companyedit.contentEditable = false;

let skillsedit = document.getElementById("skills");
skillsedit.contentEditable = false;

let projectsedit = document.getElementById("projects");
projectsedit.contentEditable = false;

let noteedit = document.getElementById("note");
noteedit.contentEditable = false;


// ===============================
// BUTTON CONTAINER
// ===============================

editBtnDiv.style.display = "flex";
editBtnDiv.style.flexDirection = "row";
editBtnDiv.style.flexWrap = "nowrap";
editBtnDiv.style.alignItems = "center";
editBtnDiv.style.justifyContent = "center";
editBtnDiv.style.gap = "30px";


// ===============================
// BUTTON STYLE
// ===============================

function styleButton(button) {

    button.style.width = "50px";
    button.style.height = "50px";
    button.style.minWidth = "50px";
    button.style.maxWidth = "50px";

    button.style.flex = "0 0 50px";
    button.style.flexShrink = "0";

    button.style.margin = "0";
    button.style.padding = "0";

    button.className =
        "rounded-xl " +
        "flex items-center justify-center " +
        "cursor-pointer " +
        "text-white " +
        "shadow-md " +
        "transition-all duration-200";
}


// ===============================
// EDIT BUTTON
// ===============================

let edit = document.createElement("button");

edit.type = "button";

edit.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg"
     width="24"
     height="24"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     stroke-width="2"
     stroke-linecap="round"
     stroke-linejoin="round">

    <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/>

    <path d="m15 5 4 4"/>

</svg>
`;

styleButton(edit);

edit.classList.add(
    "bg-blue-600",
    "hover:bg-blue-700"
);

editBtnDiv.appendChild(edit);


// ===============================
// DONE BUTTON
// ===============================

let done = document.createElement("button");

done.type = "button";

done.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg"
     width="24"
     height="24"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     stroke-width="2"
     stroke-linecap="round"
     stroke-linejoin="round">

    <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/>

    <path d="m16 9-5.5 5.5L8 12"/>

</svg>
`;

styleButton(done);

done.classList.add(
    "bg-green-600",
    "hover:bg-green-700"
);

editBtnDiv.appendChild(done);


// ===============================
// EDIT CLICK
// ===============================

edit.addEventListener("click", () => {

    personaledit.contentEditable = true;
    personaledit.className =
        "border-2 border-dashed border-blue-400 rounded-xl p-3 bg-blue-50";

    educationedit.contentEditable = true;
    educationedit.className =
        "border-2 border-dashed border-blue-400 rounded-xl p-3 bg-blue-50";

    companyedit.contentEditable = true;
    companyedit.className =
        "border-2 border-dashed border-blue-400 rounded-xl p-3 bg-blue-50";

    skillsedit.contentEditable = true;
    skillsedit.className =
        "border-2 border-dashed border-blue-400 rounded-xl p-3 bg-blue-50";

    projectsedit.contentEditable = true;
    projectsedit.className =
        "border-2 border-dashed border-blue-400 rounded-xl p-3 bg-blue-50";

    noteedit.contentEditable = true;
    noteedit.className =
        "border-2 border-dashed border-blue-400 rounded-xl p-3 bg-blue-50";


    // ===============================
    // SAVE BUTTON
    // ===============================

    let save = document.createElement("button");

    save.type = "button";

    save.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         stroke-width="2"
         stroke-linecap="round"
         stroke-linejoin="round">

        <path d="M12.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4v4.35"/>

        <path d="m16 19 2 2 4-4"/>

        <path d="M17 15.13V14a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"/>

        <path d="M7 3v4a1 1 0 0 0 1 1h7"/>

    </svg>
    `;

    styleButton(save);

    save.classList.add(
        "bg-amber-500",
        "hover:bg-amber-600"
    );


    // IMPORTANT:
    // Save ko Edit ki jagah par insert karna hai

    editBtnDiv.insertBefore(save, edit);

    edit.style.display = "none";


    // ===============================
    // SAVE CLICK
    // ===============================

    save.addEventListener("click", () => {

        personaledit.contentEditable = false;
        educationedit.contentEditable = false;
        companyedit.contentEditable = false;
        skillsedit.contentEditable = false;
        projectsedit.contentEditable = false;
        noteedit.contentEditable = false;


        personaledit.className = "border-0";

        educationedit.className = "border-0";

        companyedit.className = "border-0";

        skillsedit.className = "border-0";

        projectsedit.className = "border-0";

        noteedit.className = "border-0";


        // Save remove
        save.remove();


        // Edit wapas
        edit.style.display = "flex";
    });

});


// ===============================
// DONE CLICK
// ===============================

done.addEventListener("click", () => {

    let mainsection =
        document.getElementById("main-sections");

    personaledit.contentEditable = false;
    educationedit.contentEditable = false;
    companyedit.contentEditable = false;
    skillsedit.contentEditable = false;
    projectsedit.contentEditable = false;
    noteedit.contentEditable = false;

    mainsection.remove();

});

let downloadBtn=document.getElementById("download-btn")
downloadBtn.addEventListener("click",()=>{
 const resume =document.getElementById("resume-area")
const options = {

                // PDF file ka naam
                filename: "My-Resume.pdf",


                // Image quality
                image: {
                    type: "jpeg",
                    quality: 1
                },


                // HTML ko canvas mein convert karne ki settings
                html2canvas: {

                    scale: 2,

                    useCORS: true,

                    backgroundColor: "#ffffff"
                },


                // PDF settings
                jsPDF: {

                    unit: "mm",

                    format: "a4",

                    orientation: "portrait"
                }

            };


            // 5. Resume ko PDF mein convert karke download karo

            html2pdf()

                .set(options)

                .from(resume)

                .save();

        
})
