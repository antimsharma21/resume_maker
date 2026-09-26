let mydetails = [];

let personal = document.createElement("div");
personal.className="rounded-2xl bg-gradient-to-br from-white to-blue-50 p-4 shadow-sm";
personalDetails.appendChild(personal);

// create inputs and labels 

function createLabelAndInputs(container,label_Name,input_type,id)
{
    let label = document.createElement("label");
    label.innerText=label_Name;
    label.className="block text-sm font-bold text-slate-700 mb-1 mt-3";

    let input = document.createElement("input");
    input.type=input_type;
    input.id=id;
    input.className="w-full border-2 border-blue-100 rounded-xl p-3 gap-3 m-0 shadow-sm bg-white text-slate-700 transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none";
if (input_type === "email") {
    input.required = true;
}

if (input_type === "tel") {
    input.required = true;
    input.pattern = "[0-9]{10}";
    input.addEventListener("input", () => {

        
        input.value = input.value.replace(/[^0-9]/g, "");
       

    });
}
    
    container.appendChild(label);
    container.appendChild(input);
    container.appendChild(document.createElement("br"));
}

// call function 

createLabelAndInputs(personal,"Full Name","text","fullname");
createLabelAndInputs(personal,"Email","email","email");
createLabelAndInputs(personal,"Phone Number","tel","pno");
createLabelAndInputs(personal,"Address","text","address");


function createTextArea(container,input_type,id,placeholderText)
{
    let input = document.createElement("textarea");
    input.type=input_type;
    input.id=id;
    input.placeholder=placeholderText;
    input.className="w-full min-h-28 h-28 border-2 border-blue-100 rounded-xl p-3 mt-4 shadow-sm bg-white text-slate-700 resize-y transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none";

container.appendChild(input);

}

createTextArea(personal,"text","summary","enter your profile summary");



let submit = document.createElement("button");
submit.innerText="Submit";
submit.className="w-full h-11 rounded-xl mt-5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold shadow-lg shadow-blue-500/20 transition-all duration-200 hover:-translate-y-0.5";
personal.appendChild(submit);

     
console.log("submit");
submit.addEventListener("click",()=>{
      let emailInput = document.getElementById("email");

    if (!emailInput.checkValidity()) {
        emailInput.reportValidity();
Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Please use @ symbol in the email address!",
  footer: "<a href=\"#\">Why do I have this issue?</a>"
});
        return;
    }

 let phoneInput = document.getElementById("pno");

    if (!phoneInput.checkValidity()) {
        phoneInput.reportValidity();

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Phone number must contain exactly 10 digits!"
        });

        return;
    }

details={
    
"Full Name" :document.getElementById("fullname").value,
Email :   document.getElementById("email").value,
Phone_no :document.getElementById("pno").value,
Address :document.getElementById("address").value,
"Profile summary" :document.getElementById("summary").value
};

mydetails.push(details);
personalDetails.style.display="none";

educationDetails.style.display="block";
companyDetails.style.display="none";
projectDetails.style.display="none";
skillsDetails.style.display="none";
showPersonalData();

console.log(mydetails);

});