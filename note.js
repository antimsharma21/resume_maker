let mynote=[];

let note = document.createElement("div");
note.className="rounded-2xl bg-gradient-to-br from-white to-blue-50 p-4 shadow-sm";
noteDetails.appendChild(note);

createTextArea(note,"text","note","enter your finishing note");


let submitFornote = document.createElement("button");
submitFornote.innerText="Submit";
submitFornote.className="w-full h-11 rounded-xl mt-5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold shadow-lg shadow-blue-500/20 transition-all duration-200 hover:-translate-y-0.5";
note.appendChild(submitFornote);


submitFornote.addEventListener("click",()=>{

mydetails={
"NOTE" :document.getElementById("note").value, 

};


mynote.push(mydetails);

console.log("skills ",myskills);

personalDetails.style.display="none";

educationDetails.style.display="none";
companyDetails.style.display="none";
projectDetails.style.display="none";
skillsDetails.style.display="none";
noteDetails.style.display="none";

showNoteData();

console.log(myskills);
console.log("education   inside");

});