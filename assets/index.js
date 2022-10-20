console.log("hello world");
const rows = $(".container");
const saveBtn = $(".savebtn");
const m = moment();
let currentTense = "";
let timeBlock = "";
let data = "";
//declare current time
let currentTime = moment().hour();
const timeArr = [
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
  ];




    // updates the time element
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

    //Starts the planner
    function runDayPlanner(){
      for(i= 0; i<timeArr.length; i++){
        timeBlock = moment(timeArr[i], "H").format("hA");

        changeColor();
        createRow();

      }
    }
//Creates each row
    function createRow(){
        let key = "hour-"+ timeArr[i];
        //Set the info in the textarea to blank in lieu of "null"
        data = localStorage.getItem(key);
        if(data == null){
          data = "";
        }
        var template =`
          <div class="row time-block">
              <div class= "hour"  "col-md-1 ">${timeBlock}</div>
              <textarea class=" col-md-10 ${currentTense}" id="${timeArr[i]}">${data}</textarea>
              <button data-hour="${timeArr[i]}" type="button" class="saveBtn col-md-1">Save</button>
          </div>

        `;
        //Append the html to the container element
        rows.append(template);  
        
      
    }






// Set up a "click" event on container
    rows.on("click", "button", function(event){
        console.log(event.target);
        event.preventDefault();
        let currentSaveBtn = $(event.target).data("hour");
        localStorage.setItem(("hour-" + currentSaveBtn), $("#" + currentSaveBtn).val());
      
    });

runDayPlanner();



