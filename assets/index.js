console.log("hello world");
const rows = $(".container");
const saveBtn = $(".savebtn");
const m = moment();
let currentTense = "";
let timeBlock = "";
let data = "";
const timeArr = [
    "9 ",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
  ];


//declare current time
let currentTime = moment().hour();

console.log(m.format("MMMM Do YYYY, h:mm:ss a"));
window.setInterval(function () {
  $("#currentDay").html(moment().format("ddd MM/DD/YYYY h:mm:ss a"));
}, 1000);


    function changeColor(){
        if(timeArr[i] > currentTime){
          currentTense = "future";
          console.log(currentTime);
        }else if(currentTime === timeArr){
          currentTense = "present";
        }else{
          currentTense = "past";
        }
      
    }

//Declare current day element
function runDayPlanner(){
  for(i= 0; i<timeArr.length; i++){
    timeBlock = moment(timeArr[i], "H").format("hA");

    changeColor();
    createRow();

  }
}
//Declare time Entries container element

//render a block for each hour of the day 

//for loop
function createRow(){


// Attempt to get the saved data for the hour of the loop
    let key = "hour-"+ timeArr[i];
    
    data = localStorage.getItem(key)
    if(data == null){
      data = "";
    }
    // console.log(timeArr[i]);

    var template =`
      <div class="row time-block">
          <div class= "hour"  "col-md-1 ">${timeBlock}</div>
          <textarea class=" col-md-10 ${currentTense}" id="${timeArr[i]}">${data}</textarea>
           <button data-hour="${timeArr[i]}" type="button" class="saveBtn col-md-1">Save</button>
      </div>

    `;
    //  Append the html to the container element
    
     rows.append(template);  
     
  
}



// Save an hour to local storage
// function saveLocalStorage(){
//   const storage = JSON.parse(window.localStorage.getItem("data"));
//   console.log(storage);
//   $(".description").each(function() {
//     const time = $(this).parent().attr("id");
//     for(let i = 0; i < storage; i++){
//       const dataEl = storage[i];
//       if(time ==  dataEl.time){
//         $(this).text(dataEl.value);
//       }
//     }
//   })

// }


// Set up a "click" event listner on container
saveBtn.on("click", "button", function(event){
    console.log(event.target);
    event.preventDefault();
    const currentSaveBtn = $(even.target).data("hour");
    localStorage.setItem(("hour-" + currentSaveBtn), $("#" + currentSaveBtn).val());
    // const time = $(this).parent().attr("id");
    // const textData = $(this).siblings(".description").val();
    // const convert = JSON.parse(window.localStorage.getItem("data")) || [];
    // convert.push({time, textData});
    // window.localStorage.setItem("data", JSON.stringify(convert))
    
});

runDayPlanner();

// saveLocalStorage();

