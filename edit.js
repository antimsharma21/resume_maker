let edit=document.createElement("button");

edit.innerText="Make Changes in Resume";

edit.className="w-full h-11 rounded-xl m-2 bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white font-bold shadow-lg shadow-red-500/20 transition-all duration-200 hover:-translate-y-0.5";

editBtnDiv.appendChild(edit);


let done=document.createElement("button");

done.innerText="Done";

done.className="w-full h-11 rounded-xl m-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold shadow-lg shadow-green-500/20 transition-all duration-200 hover:-translate-y-0.5";

editBtnDiv.appendChild(done);

let personaledit = document.getElementById("personal");

personaledit.contentEditable=false;

let educationedit = document.getElementById("education");

educationedit.contentEditable=false;

let companyedit = document.getElementById("company-in-html");

companyedit.contentEditable=false;


let skillsedit = document.getElementById("skills");

skillsedit.contentEditable=false;

let projectsedit = document.getElementById("projects");

projectsedit.contentEditable=false;


edit.addEventListener("click",()=>{

personaledit.contentEditable=true;

personaledit.className="border-2 border-dashed border-blue-400 rounded-xl p-3 bg-blue-50";

educationedit.contentEditable=true;

educationedit.className="border-2 border-dashed border-blue-400 rounded-xl p-3 bg-blue-50";

companyedit.contentEditable=true;

companyedit.className="border-2 border-dashed border-blue-400 rounded-xl p-3 bg-blue-50";

skillsedit.contentEditable=true;

skillsedit.className="border-2 border-dashed border-blue-400 rounded-xl p-3 bg-blue-50";

projectsedit.contentEditable=true;

projectsedit.className="border-2 border-dashed border-blue-400 rounded-xl p-3 bg-blue-50";


let save=document.createElement("button");

save.innerText="Save changes in resume";

save.className="w-full h-11 rounded-xl m-2 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-slate-900 font-bold shadow-lg shadow-yellow-500/20 transition-all duration-200 hover:-translate-y-0.5";

editBtnDiv.appendChild(save);

edit.style.display="none";

save.addEventListener("click",()=>{

personaledit.contentEditable=false;

personaledit.className="border-0";


educationedit.contentEditable=false;

educationedit.className="border-0";


companyedit.contentEditable=false;

companyedit.className="border-0";

skillsedit.contentEditable=false;

skillsedit.className="border-0";

projectsedit.contentEditable=false;

projectsedit.className="border-0";

edit.style.display="block";

save.remove();

});

});


done.addEventListener("click",()=>{

let mainsection = document.getElementById("main-sections");

personaledit.contentEditable=false;

educationedit.contentEditable=false;

companyedit.contentEditable=false;

skillsedit.contentEditable=false;

projectsedit.contentEditable=false;

mainsection.remove();

});