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
  $("#currentDay").html(moment().format("ddd MM/DD/YYYY H:mm:ss"));
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
    let Key = "hour-"+ i;
    let data = " ";
    // console.log(timeArr[i]);

    var template =`
    <div id="time-9AM" class="row time-block">
            <div class="col-md-1 hour">${timeArr[i]}</div>
           <textarea id = "tim" class="col-md-10 description">${data}</textarea>
           <button data-hour="${i}" type="button" class="saveBtn">Save</button>
      </div>

    `;
    //  Append the html to the container element
    
     rows.append(template);  
  }
}


createRow();
changeColor();

// Save an hour to local storage


// Set up a "click" event listner on container
containerEl.on("click", "button", function(event){
    console.log(event.target);
    var buttonHour = $(event.target).data("hour");
    localStorage.setItem(("hour-" + buttonHour), $("#" + buttonHour).val());
    //Fetch the hour from the clicked button's (event.target) "data-hour" attribute.

    //Use the hour to create a key for local storage

    // from the clicked button, traverse the DOM to nearby <textarea> to fetch its value

    // use the key and the value to save into local storage.




});


