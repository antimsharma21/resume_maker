let myskills=[];

let skills = document.createElement("div");
skills.className="rounded-2xl bg-gradient-to-br from-white to-blue-50 p-4 shadow-sm";
skillsDetails.appendChild(skills);

createTextArea(skills,"text","text","enter your skills");



let submitForSkills = document.createElement("button");
submitForSkills.innerText="Submit";
submitForSkills.className="w-full h-11 rounded-xl mt-5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold shadow-lg shadow-blue-500/20 transition-all duration-200 hover:-translate-y-0.5";
skills.appendChild(submitForSkills);


submitForSkills.addEventListener("click",()=>{

mydetails={
"Skills" :document.getElementById("text").value, 

};


myskills.push(mydetails);

console.log("skills ",myskills);

personalDetails.style.display="none";

educationDetails.style.display="none";
companyDetails.style.display="none";
projectDetails.style.display="block";
skillsDetails.style.display="none";
showSkillsData();

console.log(myskills);
console.log("education   inside");

});