console.log("hello world");
const rows = $(".container");
const saveBtn = $(".savebtn");
const m = moment();
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


//declare current time
const currentTime = moment().hour();

console.log(m.format("MMMM Do YYYY, h:mm:ss a"));
window.setInterval(function () {
  $("#currentDay").html(moment().format("ddd MM/DD/YYYY h:mm:ss a"));
}, 1000);


    function changeColor(){
      $(".time-block").each(function(){
        const time = parseInt($(this).attr("id"))

        if(currentTime < time){
          $(this).addClass("future");
        }else if(currentTime === time){
          $(this).addClass("present");
        }else{
          $(this).addClass("past");
        }
      })
    }

//Declare current day element

//Declare time Entries container element

//render a block for each hour of the day 

//for loop
function createRow(){
for( let i = 0; i < timeArr.length; i++ ) {

// Attempt to get the saved data for the hour of the loop
    let Key = `hour-${i}`
    let data = " ";
    // console.log(timeArr[i]);

    var template =`
      <div id class="row time-block">
            <div class="col-md-1 hour">${timeArr[i]}</div>
           <textarea  class="col-md-10 description">${data}</textarea>
           <button data-hour="${i}" type="button" class="saveBtn">Save</button>
      </div>

    `;
    //  Append the html to the container element
    
     rows.append(template);  
  }
}


createRow();
changeColor();
saveLocalStorage();
// Save an hour to local storage
function saveLocalStorage(){
  const storage = JSON.parse(window.localStorage.getItem("data"));
  console.log(storage);
  $(".description").each(function() {
    const time = $(this).parent().attr("id");
    for(let i = 0; i < storage.length; i++){
      const dataEl = storage[i];
      if(time ==  dataEl.time){
        $(this).text(dataEl.value);
      }
    }
  })

}


// Set up a "click" event listner on container
saveBtn.on("click", "button", function(event){
    console.log(event.target);
    event.preventDefault();
    const time = $(this).parent().attr("id");
    const textData = $(this).siblings(".description").val();
    const convert = JSON.parse(window.localStorage.getItem("data")) || [];
    convert.push({time, textData});
    window.localStorage.setItem("data", JSON.stringify(convert))

});