let companyArray=[];

console.log("company details",companyDetails);

let companydiv = document.createElement("div");
companydiv.className="rounded-2xl bg-gradient-to-br from-white to-blue-50 p-4 shadow-sm";
companydiv.id="companydiv";
companyDetails.appendChild(companydiv);


createLabelAndInputs(companydiv,"About Company","text","company");
createLabelAndInputs(companydiv,"About Role","text","role");
createLabelAndInputs(companydiv,"About Duration","text","duration");


let submitForCom = document.createElement("button");
submitForCom.innerText="Submit";
submitForCom.className="w-full h-11 rounded-xl mt-5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold shadow-lg shadow-blue-500/20 transition-all duration-200 hover:-translate-y-0.5";
companydiv.appendChild(submitForCom);


submitForCom.addEventListener("click",()=>{

details={
"Company Name" :document.getElementById("company").value, 
"Role" :   document.getElementById("role").value,
"Duration" :document.getElementById("duration").value,
};

companyArray.push(details);

console.log("company array",companyArray);

personalDetails.style.display="none";

educationDetails.style.display="none";
companyDetails.style.display="none";
projectDetails.style.display="none";
skillsDetails.style.display="block";


showCompanyData();
console.log("job   inside");

});