const m = moment();
const saveButton = $(".savebtn");
const box = $(".description")
const timeArr = [
  "9AM",
  "10AM",
  "11AM",
  "12AM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM",
];
const currentTime = moment().hour();

console.log(m.format("MMMM Do YYYY, h:mm:ss a"));
window.setInterval(function () {
  $("#currentDay").html(moment().format("ddd MM/DD/YYYY H:mm:ss"));
}, 1000);



function saveLocalStorage(event){
    console.log(event.target);
    // need to make it so will only target save button not other events. )
    if(!event.target.matches("button")){
      console.log("not a button");
      return
    }
    let lsKey = event.target.parentElement.getAttribute("id");
    let textBoxValue = event.target.previousElementSibling.value;
    console.log(textBoxValue);
    console.log(lsKey);
    localStorage.setItem(lsKey, textBoxValue);
    //i need to save this info into local storage
    // then display any local storage data in the apporiate time block in a new function.
    
}
  
  document.addEventListener("click", test);
    console.log("the save button works!");
  // 1. new function that is going to run when the page loads
  // need some 
  // will have to call this function at the bottom of page ex: function();
  //need to select t9am id 
  // then set the value of t9am to = the value of localstorage at the key time-9am
  // right this for each time black 

// const timeBlockDisplay = () =>{
//     let time = '';

//     for(let i = timeArr; timeArr < 9; timeArr++){
//         time = timeArr;

//         let timeBlock =
//         `
//         <div id="time-9AM" class="row time-block">
//             <div class="col-md-1 hour">${time}</div>
//             <textarea class="col-md-10 description"></textarea>
//             <button type="button" class="saveBtn">Save</button>
//         </div>
//         `
//     }
// }
//  timeBlockDisplay()
