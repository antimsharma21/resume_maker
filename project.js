let myprojects=[];

let project = document.createElement("div");
project.className="rounded-2xl bg-gradient-to-br from-white to-blue-50 p-4 shadow-sm";
projectDetails.appendChild(project);


createLabelAndInputs(project,"Project Title","text","project");
createTextArea(project,"text","tech","enter all technologies you used in this project");
createTextArea(project,"text","des","enter your project description");


let submitForProject = document.createElement("button");
submitForProject.innerText="Submit";
submitForProject.className="w-full h-11 rounded-xl mt-5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold shadow-lg shadow-blue-500/20 transition-all duration-200 hover:-translate-y-0.5";
project.appendChild(submitForProject);


submitForProject.addEventListener("click",()=>{

details={
"Project Title" :document.getElementById("project").value, 
"Technology":     document.getElementById("tech").value,
"Description" :   document.getElementById("des").value,
};

myprojects.push(details);

console.log(myprojects);

Swal.fire({
  title: "Would you like to add more projects ?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes",
cancelButtonText: "No"
}).then((result) => {
  if (result.isConfirmed) 
  {
            document.getElementById("project").value = "";
            document.getElementById("tech").value = "";
            document.getElementById("des").value = "";
    Swal.fire({
    title: "ok!",
    text: "You can enter the details of the next",
    icon: "success"
  });
}
else
{
personalDetails.style.display="none";
noteDetails.style.display="block";

educationDetails.style.display="none";
companyDetails.style.display="none";
projectDetails.style.display="none";
skillsDetails.style.display="none";
showProjectsData();

console.log(myprojects);

}


});

});