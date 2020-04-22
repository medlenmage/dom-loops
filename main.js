// const dinos = [
//   {
//     dinoType: 't-rex',
//     name: 'Tommy',
//     age: '100'
//   },
//   {
//     dinoType: 'stegosaurus',
//     name: 'Steve',
//     age: '10'
//   },
//   {
//     dinoType: 'velociraptor',
//     name: 'Ian',
//     age: '23'
//   }
// ];

// const printToDom = (selector, textToPrint) => {
//   const selectedDiv = document.querySelector(selector);
//   selectedDiv.innerHTML = textToPrint;
// }

// const buildDinoCards = () => {
//   let domString = '';

//   for (let i = 0; i < dinos.length; i++) {
//     domString += '<div class="dino"';
//     domString += `<h3>${dinos[i].name}</h3>`;
//     domString += `<p>This is a ${dinos[i].dinoType} and is ${dinos[i].age} years old</p>`;
//     domString += '</div>';
//   }
//   printToDom('#dino-pen', domString);
// }

// const init = () => {
//   buildDinoCards();
// }

// init();



const assignment = [
  {
    title: 'History Essay',
    dueDate: 'May 1st',
    topic: 'American Revolution',
    notes: 'started 1776',
  },
  {
    title: 'Algebra',
    dueDate: 'April 24',
    topic: 'find your x',
    notes: 'its ok to cry'
  },
  {
    title: 'Psych Eval',
    dueDate: 'end of time',
    topic: 'study yo brain',
    notes: 'it can get abit crazy in there'
  },
]


const printToDom = (selector, textToPrint) => {
    const selectedDiv = document.querySelector(selector);
    selectedDiv.innerHTML = textToPrint;
  }


const assignmentCards = () => {
  let domString = '';
  for (let i = 0; i < assignment.length; i++) {
    domString += '<div class="assign-cards">';
    domString += `<h3>${assignment[i].title}</h3>`;
    domString += `<p>This assignments topic is ${assignment[i].topic} it's due on ${assignment[i].dueDate}</p>`;
    domString += `<p>these are my notes here : ${assignment[i].notes}</p>`
    domString += '</div>';
  }
  printToDom('#assn-card', domString);
  }


const init = () => {

}
