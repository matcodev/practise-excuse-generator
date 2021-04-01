// Import stylesheets
import './style.css';

//window.onload = function() {
  //document.getElementById('app').innerHTML = '<h1>hello</h1>';
//};

let excuseGenerator = () => {
  let who = ["Mi Perro", "Mi abuela", "Su tortuga", "Mi Pajaro"];
  let action = ["comí", "orinó", "aplastó", "quebró"];
  let what = ["mi tarea", "las llaves", "el auto"];
  let when = [
   "antes de la clase",
    "justo a tiempo",
    "cuando terminé",
    "durante mi almuerzo",
    "mientras rezaba"
  ];

  let whoExc = Math.floor(Math.random() * who.length);
  let actionExc = Math.floor(Math.random() * action.length);
  let whatExc = Math.floor(Math.random() * what.length);
  let whenExc = Math.floor(Math.random() * when.length);

  let excuse =
    who[whoExc] +
    " " +
    action[actionExc] +
    " " +
    what[whatExc] +
    " " +
    when[whenExc];
  return excuse;
};

const appDiv = document.getElementById('app');
appDiv.innerHTML = excuseGenerator()
