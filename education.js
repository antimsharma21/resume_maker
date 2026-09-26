let myeducation=[];


console.log(educationDetails.style.display);

let education = document.createElement("div");
education.className="rounded-2xl bg-gradient-to-br from-white to-blue-50  shadow-sm";
educationDetails.appendChild(education);

createTextArea(education,"text","education","enter your education details Degree , Clg / Universities ,Batch");
let edu = document.getElementById("education");

edu.className = "w-full min-h-36 border-2 border-slate-200 rounded-2xl p-4 bg-white text-slate-700 placeholder-slate-400 shadow-sm transition-all duration-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 focus:outline-none hover:border-blue-300 resize-y";



let submitForEdu = document.createElement("button");
submitForEdu.innerText="Submit";
submitForEdu.className="w-full h-11 rounded-xl mt-5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold shadow-lg shadow-blue-500/20 transition-all duration-200 hover:-translate-y-0.5";
education.appendChild(submitForEdu);


submitForEdu.addEventListener("click",()=>{
     let edu = document.getElementById("education");
let mydetails = {
        Courses: edu.value
    };
console.log(mydetails)
myeducation.push(mydetails);
personalDetails.style.display="none";

educationDetails.style.display="none";
companyDetails.style.display="block";
projectDetails.style.display="none";
skillsDetails.style.display="none";
showEducationalData();

});