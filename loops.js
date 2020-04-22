// const colors = ['red', 'orange', 'white', 'blue', 'gold', 'yellow'];


// const colorLoop = () => {
//   let domString = '';
//   for (let i = 0; i < colors.length; i++) {
//     // console.log(colors[i]);
//     domString += `<h2>${colors[i]}</h2>`;
//     console.log(domString)
//   }
//   // return domString
//   console.log(domString)
// }


// const init = () => {

// }

// init();


const instructors = [
  {
    firstName: 'Luke',
    lastName: 'Lancaster'

  },

  {
    firstName: 'Matt',
    lastName: 'Gill'
  },

  {
    firstName: 'Micheal',
    lastName: 'Clark'
  }
]

const teacherName = () => {
  let domString = '';
  for (let i = 0; i < instructors.length; i++) {
    domString += `<h2>${instructors[i].firstName} ${instructors[i].lastName}</h2>`
    // console.log(`${instructors[i].firstName} ${instructors[i].lastName}`)
  }
  // return domString
  console.log(domString)
}

const init = () => {
  teacherName()
}

init();
