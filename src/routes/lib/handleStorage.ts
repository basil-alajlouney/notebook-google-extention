let sections = {} as any;

let setSections = ()=>{
  if(!localStorage.getItem("sections"))
    localStorage.setItem("sections","{}");
  sections = JSON.parse(localStorage.getItem("sections")!);
}

let updateSections = ()=>{
  localStorage.setItem("sections",JSON.stringify(sections))
}
function addSection(s:string){
  if(sections[s])
    throw new Error("already there");
  if(!s || s == "")
    throw new Error("empty string");
  sections[s] = [];
    console.log(s);
    console.log(sections);
  updateSections();
}
function deleteSection(section:string){
  delete sections[section];
  updateSections();
}
function addNote(section:string, s:string){
  if(sections[section].includes(s))
    throw new Error("already there");
  if(!s || s == "")
    throw new Error("empty string");
  console.log(sections[section]);
  sections[section].push(s);
  updateSections();
}
function deleteNote(section:string, s:string){
  let x = sections[section];
  console.log(x);
  x.splice(x.indexOf(s),1 + x.indexOf(s));
  updateSections();
}

export {
  addNote,
  addSection,
  deleteNote,
  deleteSection,
  setSections,
  sections
}