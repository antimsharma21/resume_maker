let mydetails = [];

let personal = document.createElement("div");

personal.className =
    "rounded-2xl bg-white border border-slate-200 p-5 " +
    "shadow-sm shadow-slate-200/70";

personalDetails.appendChild(personal);


// ------------------------------------
// LABEL + INPUT
// ------------------------------------

function createLabelAndInputs(container, label_Name, input_type, id) {

    let fieldWrapper = document.createElement("div");
    fieldWrapper.className = "mb-4";

    let label = document.createElement("label");

    label.innerText = label_Name;

    label.className =
        "block text-sm font-bold text-slate-700 mb-2";


    let input = document.createElement("input");

    input.type = input_type;
    input.id = id;

    input.className =
        "w-full h-12 px-4 " +
        "border border-slate-200 rounded-xl " +
        "bg-slate-50 text-slate-700 " +
        "placeholder-slate-400 " +
        "shadow-sm " +
        "transition-all duration-200 " +
        "hover:border-blue-300 hover:bg-white " +
        "focus:bg-white " +
        "focus:border-blue-500 " +
        "focus:ring-4 focus:ring-blue-100 " +
        "focus:outline-none";


    if (input_type === "email") {
        input.required = true;
    }


    if (input_type === "tel") {

        input.required = true;

        input.pattern = "[0-9]{10}";

        input.maxLength = 10;

        input.addEventListener("input", () => {

            input.value = input.value.replace(/[^0-9]/g, "");

        });
    }


    fieldWrapper.appendChild(label);
    fieldWrapper.appendChild(input);

    container.appendChild(fieldWrapper);
}


// ------------------------------------
// TEXTAREA
// ------------------------------------

function createTextArea(
    container,
    input_type,
    id,
    placeholderText
) {

    let wrapper = document.createElement("div");

    wrapper.className = "mt-2 mb-4";


    let input = document.createElement("textarea");

    input.type = input_type;

    input.id = id;

    input.placeholder = placeholderText;

    input.className =
        "w-full min-h-32 px-4 py-3 " +
        "border border-slate-200 rounded-xl " +
        "bg-slate-50 text-slate-700 " +
        "placeholder-slate-400 " +
        "shadow-sm " +
        "resize-y " +
        "transition-all duration-200 " +
        "hover:border-blue-300 hover:bg-white " +
        "focus:bg-white " +
        "focus:border-blue-500 " +
        "focus:ring-4 focus:ring-blue-100 " +
        "focus:outline-none";


    wrapper.appendChild(input);

    container.appendChild(wrapper);
}


// ------------------------------------
// BUTTON
// ------------------------------------

function createBtn(container, BtnText) {

    let submit = document.createElement("button");

    submit.innerText = BtnText;

    submit.type = "button";

    submit.className =
        "w-full h-12 rounded-xl mt-3 " +
        "bg-gradient-to-r from-blue-600 to-indigo-600 " +
        "hover:from-blue-700 hover:to-indigo-700 " +
        "active:scale-[0.98] " +
        "text-white font-bold " +
        "shadow-lg shadow-blue-500/20 " +
        "transition-all duration-200 " +
        "flex items-center justify-center " +
        "gap-2";


    container.appendChild(submit);

    return submit;
}


// ------------------------------------
// PERSONAL FIELDS
// ------------------------------------

createLabelAndInputs(
    personal,
    "Full Name",
    "text",
    "fullname"
);

createLabelAndInputs(
    personal,
    "Email",
    "email",
    "email"
);

createLabelAndInputs(
    personal,
    "Phone Number",
    "tel",
    "pno"
);

createLabelAndInputs(
    personal,
    "Address",
    "text",
    "address"
);

createTextArea(
    personal,
    "text",
    "summary",
    "Enter your profile summary..."
);


// ------------------------------------
// SUBMIT
// ------------------------------------

let submit = createBtn(personal, "Continue");


submit.addEventListener("click", () => {

    let emailInput =
        document.getElementById("email");


    if (!emailInput.checkValidity()) {

        emailInput.reportValidity();

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please use a valid email address!"
        });

        return;
    }


    let phoneInput =
        document.getElementById("pno");


    if (!phoneInput.checkValidity()) {

        phoneInput.reportValidity();

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Phone number must contain exactly 10 digits!"
        });

        return;
    }


    details = {

        "Full Name":
            document.getElementById("fullname").value,

        Email:
            document.getElementById("email").value,

        Phone_no:
            document.getElementById("pno").value,

        Address:
            document.getElementById("address").value,

        "Profile summary":
            document.getElementById("summary").value
    };


    mydetails.push(details);


    personalDetails.style.display = "none";

    educationDetails.style.display = "block";

    companyDetails.style.display = "none";

    projectDetails.style.display = "none";

    skillsDetails.style.display = "none";


    showPersonalData();

});let mydetails = [];

let personal = document.createElement("div");

personal.className =
    "rounded-2xl bg-white border border-slate-200 p-5 " +
    "shadow-sm shadow-slate-200/70";

personalDetails.appendChild(personal);


// ------------------------------------
// LABEL + INPUT
// ------------------------------------

function createLabelAndInputs(container, label_Name, input_type, id) {

    let fieldWrapper = document.createElement("div");
    fieldWrapper.className = "mb-4";

    let label = document.createElement("label");

    label.innerText = label_Name;

    label.className =
        "block text-sm font-bold text-slate-700 mb-2";


    let input = document.createElement("input");

    input.type = input_type;
    input.id = id;

    input.className =
        "w-full h-12 px-4 " +
        "border border-slate-200 rounded-xl " +
        "bg-slate-50 text-slate-700 " +
        "placeholder-slate-400 " +
        "shadow-sm " +
        "transition-all duration-200 " +
        "hover:border-blue-300 hover:bg-white " +
        "focus:bg-white " +
        "focus:border-blue-500 " +
        "focus:ring-4 focus:ring-blue-100 " +
        "focus:outline-none";


    if (input_type === "email") {
        input.required = true;
    }


    if (input_type === "tel") {

        input.required = true;

        input.pattern = "[0-9]{10}";

        input.maxLength = 10;

        input.addEventListener("input", () => {

            input.value = input.value.replace(/[^0-9]/g, "");

        });
    }


    fieldWrapper.appendChild(label);
    fieldWrapper.appendChild(input);

    container.appendChild(fieldWrapper);
}


// ------------------------------------
// TEXTAREA
// ------------------------------------

function createTextArea(
    container,
    input_type,
    id,
    placeholderText
) {

    let wrapper = document.createElement("div");

    wrapper.className = "mt-2 mb-4";


    let input = document.createElement("textarea");

    input.type = input_type;

    input.id = id;

    input.placeholder = placeholderText;

    input.className =
        "w-full min-h-32 px-4 py-3 " +
        "border border-slate-200 rounded-xl " +
        "bg-slate-50 text-slate-700 " +
        "placeholder-slate-400 " +
        "shadow-sm " +
        "resize-y " +
        "transition-all duration-200 " +
        "hover:border-blue-300 hover:bg-white " +
        "focus:bg-white " +
        "focus:border-blue-500 " +
        "focus:ring-4 focus:ring-blue-100 " +
        "focus:outline-none";


    wrapper.appendChild(input);

    container.appendChild(wrapper);
}


// ------------------------------------
// BUTTON
// ------------------------------------

function createBtn(container, BtnText) {

    let submit = document.createElement("button");

    submit.innerText = BtnText;

    submit.type = "button";

    submit.className =
        "w-full h-12 rounded-xl mt-3 " +
        "bg-gradient-to-r from-blue-600 to-indigo-600 " +
        "hover:from-blue-700 hover:to-indigo-700 " +
        "active:scale-[0.98] " +
        "text-white font-bold " +
        "shadow-lg shadow-blue-500/20 " +
        "transition-all duration-200 " +
        "flex items-center justify-center " +
        "gap-2";


    container.appendChild(submit);

    return submit;
}


// ------------------------------------
// PERSONAL FIELDS
// ------------------------------------

createLabelAndInputs(
    personal,
    "Full Name",
    "text",
    "fullname"
);

createLabelAndInputs(
    personal,
    "Email",
    "email",
    "email"
);

createLabelAndInputs(
    personal,
    "Phone Number",
    "tel",
    "pno"
);

createLabelAndInputs(
    personal,
    "Address",
    "text",
    "address"
);

createTextArea(
    personal,
    "text",
    "summary",
    "Enter your profile summary..."
);


// ------------------------------------
// SUBMIT
// ------------------------------------

let submit = createBtn(personal, "Continue");


submit.addEventListener("click", () => {

    let emailInput =
        document.getElementById("email");


    if (!emailInput.checkValidity()) {

        emailInput.reportValidity();

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please use a valid email address!"
        });

        return;
    }


    let phoneInput =
        document.getElementById("pno");


    if (!phoneInput.checkValidity()) {

        phoneInput.reportValidity();

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Phone number must contain exactly 10 digits!"
        });

        return;
    }


    details = {

        "Full Name":
            document.getElementById("fullname").value,

        Email:
            document.getElementById("email").value,

        Phone_no:
            document.getElementById("pno").value,

        Address:
            document.getElementById("address").value,

        "Profile summary":
            document.getElementById("summary").value
    };


    mydetails.push(details);


    personalDetails.style.display = "none";

    educationDetails.style.display = "block";

    companyDetails.style.display = "none";

    projectDetails.style.display = "none";

    skillsDetails.style.display = "none";


    showPersonalData();

});let mydetails = [];

let personal = document.createElement("div");

personal.className =
    "rounded-2xl bg-white border border-slate-200 p-5 " +
    "shadow-sm shadow-slate-200/70";

personalDetails.appendChild(personal);


// ------------------------------------
// LABEL + INPUT
// ------------------------------------

function createLabelAndInputs(container, label_Name, input_type, id) {

    let fieldWrapper = document.createElement("div");
    fieldWrapper.className = "mb-4";

    let label = document.createElement("label");

    label.innerText = label_Name;

    label.className =
        "block text-sm font-bold text-slate-700 mb-2";


    let input = document.createElement("input");

    input.type = input_type;
    input.id = id;

    input.className =
        "w-full h-12 px-4 " +
        "border border-slate-200 rounded-xl " +
        "bg-slate-50 text-slate-700 " +
        "placeholder-slate-400 " +
        "shadow-sm " +
        "transition-all duration-200 " +
        "hover:border-blue-300 hover:bg-white " +
        "focus:bg-white " +
        "focus:border-blue-500 " +
        "focus:ring-4 focus:ring-blue-100 " +
        "focus:outline-none";


    if (input_type === "email") {
        input.required = true;
    }


    if (input_type === "tel") {

        input.required = true;

        input.pattern = "[0-9]{10}";

        input.maxLength = 10;

        input.addEventListener("input", () => {

            input.value = input.value.replace(/[^0-9]/g, "");

        });
    }


    fieldWrapper.appendChild(label);
    fieldWrapper.appendChild(input);

    container.appendChild(fieldWrapper);
}


// ------------------------------------
// TEXTAREA
// ------------------------------------

function createTextArea(
    container,
    input_type,
    id,
    placeholderText
) {

    let wrapper = document.createElement("div");

    wrapper.className = "mt-2 mb-4";


    let input = document.createElement("textarea");

    input.type = input_type;

    input.id = id;

    input.placeholder = placeholderText;

    input.className =
        "w-full min-h-32 px-4 py-3 " +
        "border border-slate-200 rounded-xl " +
        "bg-slate-50 text-slate-700 " +
        "placeholder-slate-400 " +
        "shadow-sm " +
        "resize-y " +
        "transition-all duration-200 " +
        "hover:border-blue-300 hover:bg-white " +
        "focus:bg-white " +
        "focus:border-blue-500 " +
        "focus:ring-4 focus:ring-blue-100 " +
        "focus:outline-none";


    wrapper.appendChild(input);

    container.appendChild(wrapper);
}


// ------------------------------------
// BUTTON
// ------------------------------------

function createBtn(container, BtnText) {

    let submit = document.createElement("button");

    submit.innerText = BtnText;

    submit.type = "button";

    submit.className =
        "w-full h-12 rounded-xl mt-3 " +
        "bg-gradient-to-r from-blue-600 to-indigo-600 " +
        "hover:from-blue-700 hover:to-indigo-700 " +
        "active:scale-[0.98] " +
        "text-white font-bold " +
        "shadow-lg shadow-blue-500/20 " +
        "transition-all duration-200 " +
        "flex items-center justify-center " +
        "gap-2";


    container.appendChild(submit);

    return submit;
}


// ------------------------------------
// PERSONAL FIELDS
// ------------------------------------

createLabelAndInputs(
    personal,
    "Full Name",
    "text",
    "fullname"
);

createLabelAndInputs(
    personal,
    "Email",
    "email",
    "email"
);

createLabelAndInputs(
    personal,
    "Phone Number",
    "tel",
    "pno"
);

createLabelAndInputs(
    personal,
    "Address",
    "text",
    "address"
);

createTextArea(
    personal,
    "text",
    "summary",
    "Enter your profile summary..."
);


// ------------------------------------
// SUBMIT
// ------------------------------------

let submit = createBtn(personal, "Continue");


submit.addEventListener("click", () => {

    let emailInput =
        document.getElementById("email");


    if (!emailInput.checkValidity()) {

        emailInput.reportValidity();

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please use a valid email address!"
        });

        return;
    }


    let phoneInput =
        document.getElementById("pno");


    if (!phoneInput.checkValidity()) {

        phoneInput.reportValidity();

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Phone number must contain exactly 10 digits!"
        });

        return;
    }


    details = {

        "Full Name":
            document.getElementById("fullname").value,

        Email:
            document.getElementById("email").value,

        Phone_no:
            document.getElementById("pno").value,

        Address:
            document.getElementById("address").value,

        "Profile summary":
            document.getElementById("summary").value
    };


    mydetails.push(details);


    personalDetails.style.display = "none";

    educationDetails.style.display = "block";

    companyDetails.style.display = "none";

    projectDetails.style.display = "none";

    skillsDetails.style.display = "none";


    showPersonalData();

});let mydetails = [];

let personal = document.createElement("div");

personal.className =
    "rounded-2xl bg-white border border-slate-200 p-5 " +
    "shadow-sm shadow-slate-200/70";

personalDetails.appendChild(personal);


// ------------------------------------
// LABEL + INPUT
// ------------------------------------

function createLabelAndInputs(container, label_Name, input_type, id) {

    let fieldWrapper = document.createElement("div");
    fieldWrapper.className = "mb-4";

    let label = document.createElement("label");

    label.innerText = label_Name;

    label.className =
        "block text-sm font-bold text-slate-700 mb-2";


    let input = document.createElement("input");

    input.type = input_type;
    input.id = id;

    input.className =
        "w-full h-12 px-4 " +
        "border border-slate-200 rounded-xl " +
        "bg-slate-50 text-slate-700 " +
        "placeholder-slate-400 " +
        "shadow-sm " +
        "transition-all duration-200 " +
        "hover:border-blue-300 hover:bg-white " +
        "focus:bg-white " +
        "focus:border-blue-500 " +
        "focus:ring-4 focus:ring-blue-100 " +
        "focus:outline-none";


    if (input_type === "email") {
        input.required = true;
    }


    if (input_type === "tel") {

        input.required = true;

        input.pattern = "[0-9]{10}";

        input.maxLength = 10;

        input.addEventListener("input", () => {

            input.value = input.value.replace(/[^0-9]/g, "");

        });
    }


    fieldWrapper.appendChild(label);
    fieldWrapper.appendChild(input);

    container.appendChild(fieldWrapper);
}


// ------------------------------------
// TEXTAREA
// ------------------------------------

function createTextArea(
    container,
    input_type,
    id,
    placeholderText
) {

    let wrapper = document.createElement("div");

    wrapper.className = "mt-2 mb-4";


    let input = document.createElement("textarea");

    input.type = input_type;

    input.id = id;

    input.placeholder = placeholderText;

    input.className =
        "w-full min-h-32 px-4 py-3 " +
        "border border-slate-200 rounded-xl " +
        "bg-slate-50 text-slate-700 " +
        "placeholder-slate-400 " +
        "shadow-sm " +
        "resize-y " +
        "transition-all duration-200 " +
        "hover:border-blue-300 hover:bg-white " +
        "focus:bg-white " +
        "focus:border-blue-500 " +
        "focus:ring-4 focus:ring-blue-100 " +
        "focus:outline-none";


    wrapper.appendChild(input);

    container.appendChild(wrapper);
}


// ------------------------------------
// BUTTON
// ------------------------------------

function createBtn(container, BtnText) {

    let submit = document.createElement("button");

    submit.innerText = BtnText;

    submit.type = "button";

    submit.className =
        "w-full h-12 rounded-xl mt-3 " +
        "bg-gradient-to-r from-blue-600 to-indigo-600 " +
        "hover:from-blue-700 hover:to-indigo-700 " +
        "active:scale-[0.98] " +
        "text-white font-bold " +
        "shadow-lg shadow-blue-500/20 " +
        "transition-all duration-200 " +
        "flex items-center justify-center " +
        "gap-2";


    container.appendChild(submit);

    return submit;
}


// ------------------------------------
// PERSONAL FIELDS
// ------------------------------------

createLabelAndInputs(
    personal,
    "Full Name",
    "text",
    "fullname"
);

createLabelAndInputs(
    personal,
    "Email",
    "email",
    "email"
);

createLabelAndInputs(
    personal,
    "Phone Number",
    "tel",
    "pno"
);

createLabelAndInputs(
    personal,
    "Address",
    "text",
    "address"
);

createTextArea(
    personal,
    "text",
    "summary",
    "Enter your profile summary..."
);


// ------------------------------------
// SUBMIT
// ------------------------------------

let submit = createBtn(personal, "Continue");


submit.addEventListener("click", () => {

    let emailInput =
        document.getElementById("email");


    if (!emailInput.checkValidity()) {

        emailInput.reportValidity();

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please use a valid email address!"
        });

        return;
    }


    let phoneInput =
        document.getElementById("pno");


    if (!phoneInput.checkValidity()) {

        phoneInput.reportValidity();

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Phone number must contain exactly 10 digits!"
        });

        return;
    }


    details = {

        "Full Name":
            document.getElementById("fullname").value,

        Email:
            document.getElementById("email").value,

        Phone_no:
            document.getElementById("pno").value,

        Address:
            document.getElementById("address").value,

        "Profile summary":
            document.getElementById("summary").value
    };


    mydetails.push(details);


    personalDetails.style.display = "none";

    educationDetails.style.display = "block";

    companyDetails.style.display = "none";

    projectDetails.style.display = "none";

    skillsDetails.style.display = "none";


    showPersonalData();

});let mydetails = [];

let personal = document.createElement("div");

personal.className =
    "rounded-2xl bg-white border border-slate-200 p-5 " +
    "shadow-sm shadow-slate-200/70";

personalDetails.appendChild(personal);


// ------------------------------------
// LABEL + INPUT
// ------------------------------------

function createLabelAndInputs(container, label_Name, input_type, id) {

    let fieldWrapper = document.createElement("div");
    fieldWrapper.className = "mb-4";

    let label = document.createElement("label");

    label.innerText = label_Name;

    label.className =
        "block text-sm font-bold text-slate-700 mb-2";


    let input = document.createElement("input");

    input.type = input_type;
    input.id = id;

    input.className =
        "w-full h-12 px-4 " +
        "border border-slate-200 rounded-xl " +
        "bg-slate-50 text-slate-700 " +
        "placeholder-slate-400 " +
        "shadow-sm " +
        "transition-all duration-200 " +
        "hover:border-blue-300 hover:bg-white " +
        "focus:bg-white " +
        "focus:border-blue-500 " +
        "focus:ring-4 focus:ring-blue-100 " +
        "focus:outline-none";


    if (input_type === "email") {
        input.required = true;
    }


    if (input_type === "tel") {

        input.required = true;

        input.pattern = "[0-9]{10}";

        input.maxLength = 10;

        input.addEventListener("input", () => {

            input.value = input.value.replace(/[^0-9]/g, "");

        });
    }


    fieldWrapper.appendChild(label);
    fieldWrapper.appendChild(input);

    container.appendChild(fieldWrapper);
}


// ------------------------------------
// TEXTAREA
// ------------------------------------

function createTextArea(
    container,
    input_type,
    id,
    placeholderText
) {

    let wrapper = document.createElement("div");

    wrapper.className = "mt-2 mb-4";


    let input = document.createElement("textarea");

    input.type = input_type;

    input.id = id;

    input.placeholder = placeholderText;

    input.className =
        "w-full min-h-32 px-4 py-3 " +
        "border border-slate-200 rounded-xl " +
        "bg-slate-50 text-slate-700 " +
        "placeholder-slate-400 " +
        "shadow-sm " +
        "resize-y " +
        "transition-all duration-200 " +
        "hover:border-blue-300 hover:bg-white " +
        "focus:bg-white " +
        "focus:border-blue-500 " +
        "focus:ring-4 focus:ring-blue-100 " +
        "focus:outline-none";


    wrapper.appendChild(input);

    container.appendChild(wrapper);
}


// ------------------------------------
// BUTTON
// ------------------------------------

function createBtn(container, BtnText) {

    let submit = document.createElement("button");

    submit.innerText = BtnText;

    submit.type = "button";

    submit.className =
        "w-full h-12 rounded-xl mt-3 " +
        "bg-gradient-to-r from-blue-600 to-indigo-600 " +
        "hover:from-blue-700 hover:to-indigo-700 " +
        "active:scale-[0.98] " +
        "text-white font-bold " +
        "shadow-lg shadow-blue-500/20 " +
        "transition-all duration-200 " +
        "flex items-center justify-center " +
        "gap-2";


    container.appendChild(submit);

    return submit;
}


// ------------------------------------
// PERSONAL FIELDS
// ------------------------------------

createLabelAndInputs(
    personal,
    "Full Name",
    "text",
    "fullname"
);

createLabelAndInputs(
    personal,
    "Email",
    "email",
    "email"
);

createLabelAndInputs(
    personal,
    "Phone Number",
    "tel",
    "pno"
);

createLabelAndInputs(
    personal,
    "Address",
    "text",
    "address"
);

createTextArea(
    personal,
    "text",
    "summary",
    "Enter your profile summary..."
);


// ------------------------------------
// SUBMIT
// ------------------------------------

let submit = createBtn(personal, "Continue");


submit.addEventListener("click", () => {

    let emailInput =
        document.getElementById("email");


    if (!emailInput.checkValidity()) {

        emailInput.reportValidity();

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please use a valid email address!"
        });

        return;
    }


    let phoneInput =
        document.getElementById("pno");


    if (!phoneInput.checkValidity()) {

        phoneInput.reportValidity();

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Phone number must contain exactly 10 digits!"
        });

        return;
    }


    details = {

        "Full Name":
            document.getElementById("fullname").value,

        Email:
            document.getElementById("email").value,

        Phone_no:
            document.getElementById("pno").value,

        Address:
            document.getElementById("address").value,

        "Profile summary":
            document.getElementById("summary").value
    };


    mydetails.push(details);


    personalDetails.style.display = "none";

    educationDetails.style.display = "block";

    companyDetails.style.display = "none";

    projectDetails.style.display = "none";

    skillsDetails.style.display = "none";


    showPersonalData();

});let mydetails = [];

let personal = document.createElement("div");

personal.className =
    "rounded-2xl bg-white border border-slate-200 p-5 " +
    "shadow-sm shadow-slate-200/70";

personalDetails.appendChild(personal);


// ------------------------------------
// LABEL + INPUT
// ------------------------------------

function createLabelAndInputs(container, label_Name, input_type, id) {

    let fieldWrapper = document.createElement("div");
    fieldWrapper.className = "mb-4";

    let label = document.createElement("label");

    label.innerText = label_Name;

    label.className =
        "block text-sm font-bold text-slate-700 mb-2";


    let input = document.createElement("input");

    input.type = input_type;
    input.id = id;

    input.className =
        "w-full h-12 px-4 " +
        "border border-slate-200 rounded-xl " +
        "bg-slate-50 text-slate-700 " +
        "placeholder-slate-400 " +
        "shadow-sm " +
        "transition-all duration-200 " +
        "hover:border-blue-300 hover:bg-white " +
        "focus:bg-white " +
        "focus:border-blue-500 " +
        "focus:ring-4 focus:ring-blue-100 " +
        "focus:outline-none";


    if (input_type === "email") {
        input.required = true;
    }


    if (input_type === "tel") {

        input.required = true;

        input.pattern = "[0-9]{10}";

        input.maxLength = 10;

        input.addEventListener("input", () => {

            input.value = input.value.replace(/[^0-9]/g, "");

        });
    }


    fieldWrapper.appendChild(label);
    fieldWrapper.appendChild(input);

    container.appendChild(fieldWrapper);
}


// ------------------------------------
// TEXTAREA
// ------------------------------------

function createTextArea(
    container,
    input_type,
    id,
    placeholderText
) {

    let wrapper = document.createElement("div");

    wrapper.className = "mt-2 mb-4";


    let input = document.createElement("textarea");

    input.type = input_type;

    input.id = id;

    input.placeholder = placeholderText;

    input.className =
        "w-full min-h-32 px-4 py-3 " +
        "border border-slate-200 rounded-xl " +
        "bg-slate-50 text-slate-700 " +
        "placeholder-slate-400 " +
        "shadow-sm " +
        "resize-y " +
        "transition-all duration-200 " +
        "hover:border-blue-300 hover:bg-white " +
        "focus:bg-white " +
        "focus:border-blue-500 " +
        "focus:ring-4 focus:ring-blue-100 " +
        "focus:outline-none";


    wrapper.appendChild(input);

    container.appendChild(wrapper);
}


// ------------------------------------
// BUTTON
// ------------------------------------

function createBtn(container, BtnText) {

    let submit = document.createElement("button");

    submit.innerText = BtnText;

    submit.type = "button";

    submit.className =
        "w-full h-12 rounded-xl mt-3 " +
        "bg-gradient-to-r from-blue-600 to-indigo-600 " +
        "hover:from-blue-700 hover:to-indigo-700 " +
        "active:scale-[0.98] " +
        "text-white font-bold " +
        "shadow-lg shadow-blue-500/20 " +
        "transition-all duration-200 " +
        "flex items-center justify-center " +
        "gap-2";


    container.appendChild(submit);

    return submit;
}


// ------------------------------------
// PERSONAL FIELDS
// ------------------------------------

createLabelAndInputs(
    personal,
    "Full Name",
    "text",
    "fullname"
);

createLabelAndInputs(
    personal,
    "Email",
    "email",
    "email"
);

createLabelAndInputs(
    personal,
    "Phone Number",
    "tel",
    "pno"
);

createLabelAndInputs(
    personal,
    "Address",
    "text",
    "address"
);

createTextArea(
    personal,
    "text",
    "summary",
    "Enter your profile summary..."
);


// ------------------------------------
// SUBMIT
// ------------------------------------

let submit = createBtn(personal, "Continue");


submit.addEventListener("click", () => {

    let emailInput =
        document.getElementById("email");


    if (!emailInput.checkValidity()) {

        emailInput.reportValidity();

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please use a valid email address!"
        });

        return;
    }


    let phoneInput =
        document.getElementById("pno");


    if (!phoneInput.checkValidity()) {

        phoneInput.reportValidity();

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Phone number must contain exactly 10 digits!"
        });

        return;
    }


    details = {

        "Full Name":
            document.getElementById("fullname").value,

        Email:
            document.getElementById("email").value,

        Phone_no:
            document.getElementById("pno").value,

        Address:
            document.getElementById("address").value,

        "Profile summary":
            document.getElementById("summary").value
    };


    mydetails.push(details);


    personalDetails.style.display = "none";

    educationDetails.style.display = "block";

    companyDetails.style.display = "none";

    projectDetails.style.display = "none";

    skillsDetails.style.display = "none";


    showPersonalData();

});
