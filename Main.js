let arrobj = JSON.parse(localStorage.getItem("arrobj"));

//let arrobj = ["n", "s"];
showitms();
function additems() {
  let inputelement = document.querySelector("#todoinput");
  let inputdate = document.querySelector("#tododate");
  let todoinput = inputelement.value;
  let tododate = inputdate.value;
  arrobj.push({ name: todoinput, duedate: tododate });
  localStorage.setItem("arrobj", JSON.stringify(arrobj));
  inputelement.value = "";
  inputdate.value = "";

  showitms();
}
function showitms() {
  let showelement = document.querySelector("#todotext");
  //let showdate = document.querySelector("#tododate");
  let theHtml = "";
  showelement.innerText = "";
  for (let i = 0; i < arrobj.length; i++) {
    let todoname = arrobj[i].name;
    let tododate = arrobj[i].duedate;

    theHtml += `
    
    <span>${todoname}</span>
    <span>${tododate}</span>
    <button onClick="arrobj.splice(${i}, 1);showitms();">Delete</button>
    `;
    showelement.innerHTML = theHtml;
    localStorage.setItem("arrobj", JSON.stringify(arrobj));
  }
}
