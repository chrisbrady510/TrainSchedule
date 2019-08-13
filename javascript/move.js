(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
            
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
           }
           form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();
          //Initialize Firebase
          <script>
          // Your web app's Firebase configuration
          var firebaseConfig = {
            apiKey: "AIzaSyAYVkkVClXog9QY56zm-TtU-p7oAhqyFjU",
            authDomain: "train-project-d1953.firebaseapp.com",
            databaseURL: "https://train-project-d1953.firebaseio.com",
            projectId: "train-project-d1953",
            storageBucket: "train-project-d1953.appspot.com",
            messagingSenderId: "1049203823820",
            appId: "1:1049203823820:web:766e4074707e208f"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
        </script>
          firebase.initializeApp(config);
  
          var database = firebase.database();
  
  
          $("#submit-button").on("click", function(event) {
              event.preventDefault();
  
              //Grabs user Input
              var input = $("input");
              var tName = $("#train-name").val().trim();
              var tDestination = $("#train-destination").val().trim();
              var tFirstTime = moment($("#train-first-time").val().trim(), "HH:mm");
              var tFrequency = parseInt($("#train-frequency").val().trim());

                if (tName.length === 0) {
                tName = "";
                $("#train-name").val("");
                $("#train-name").attr("class", "form-control is-invalid");
                $("#invalid-name").text("Please enter a Train name")
                }
                else {
                    $("#train-name").attr("class", "form-control");
                    $("#invalid-name").text("");
                }

                if (tDestination.length === 0) {
                    tDestination = "";
                    $("#train-destination").val("");
                    $("#train-destination").attr("class", "form-control is-invalid");
                    $("#invalid-destination").text("Please enter a destination");
                    
                }
                else {
                    $("#train-destination").attr("class", "form-control");
                    $("#invalid-destination").text("");
                }

                if (Number.isInteger(tFrequency) === false) {
                    $("#train-frequency").val("");
                    $("#train-frequency").attr("class", "form-control is-invalid");
                    $("#invalid-frequency").text("Please enter a valid frequency");
                }
                else {
                    $("#train-frequency").attr("class", "form-control");
                    $("#invalid-frequency").text("");
                }
            
              if (moment(tFirstTime).isValid() === false) {
                tFirstTime = "";
                $("#train-first-time").val("");
                $("#train-first-time").attr("class", "form-control is-invalid");
                $("#invalid-time").text("Please enter a valid time");

                return    
            }
            
            $("#train-first-time").attr("class", "form-control");
            $("#invalid-time").text("");
  
              //Creates local object for holding train data
              var newTrain = {
                  name: tName,cd
                  destination: tDestination,
                  firstTime: tFirstTime.format("HH:mm"),
                  frequency: tFrequency
              };
              $("#train-first-Time").attr("class", "form-group");
              
              $("#helpBlock").text("");
  
              $("#add-train").on("click", function () {
                event.preventDefault();
                // Storing and retreiving new train data
                name = $("#train-name").val().trim();
                destination = $("#destination").val().trim();
                firstTrain = $("#first-train").val().trim();
                frequency = $("#frequency").val().trim();
                // Pushing to database
                database.ref().push({
                    name: name,
                    destination: destination,
                    firstTrain: firstTrain,
                    frequency: frequency,
                    dateAdded: firebase.database.ServerValue.TIMESTAMP
                });
                $("form")[0].reset();
            });
            
              //Code for pushing train data to Firebase
              database.ref().push(newTrain);
  
              console.log(newTrain.name);
              console.log(newTrain.destination);
              console.log(newTrain.firstTime);
              console.log(newTrain.frequency);
  
              //Clear all of text-boxes
              $("#train-name").val("");
              $("#train-destination").val("");
              $("#train-first-time").val("");
              $("#train-frequency").val("");
  
          });
  
          //Firebase watcher + initial loader
          database.ref().on("child_added", function(childSnapshot) {
  
              var tName = (childSnapshot.val().name);
              var tDestination = (childSnapshot.val().destination);
              var tFirstTime = (childSnapshot.val().firstTime)
              var tFrequency = (childSnapshot.val().frequency);
              
  
              var convertedTime = moment(tFirstTime, "HH:mm").subtract(1, "years");
              console.log(convertedTime);
  
              //Current Time
              var currentTime = moment();
  
              //Difference between the times
              var diffTime = moment().diff(moment(convertedTime), "minutes");
              console.log("Differennce in time: " + diffTime);
  
              //Time apart
              var tRemainder = diffTime % tFrequency;
              console.log(tRemainder);
  
              //Minutes Until Train
              var minutesAway = tFrequency - tRemainder;
              console.log("Minutes until train: " + minutesAway);
  
              //Next Train
              var nextArrival = moment().add(minutesAway, "minutes");
              console.log("Arrival time: " + moment(nextArrival).format("HH:mm"));
  
  
              //Create the new row
              var newRow = $("<tr>").append(
                  $("<td>").text(tName),
                  $("<td>").text(tDestination),
                  $("<td>").text(tFrequency),
                  $("<td>").text(nextArrival.format("HH:mm")),
                  $("<td>").text(minutesAway)
              );
  
              //Append the new row to the table
              $("#full-table").append(newRow);

              <div class="row">
        <div class="col-lg-12">
            <div class="card card-default" style="background: black;">
​
                <div class="card-header">
                    Add Train
                </div>
                <div class="card-body">
                    <form>
                        <div class="form-group row">
                            <label for="bidder-name">Train Name</label>
                            <input class="form-control" id="Train-Name" type="text">
                        </div>
                        <div class="form-group row">
                            <label for="bidder-price">Destination</label>
                            <input class="form-control" id="destination" type="text">
                        </div>
                        <div class="form-group row">
                            <label for="bidder-name">First Train Time (HH:MM AM/PM - Military Time)</label>
                            <input class="form-control" id="Train-Time" type="text">
                        </div>
                        <div class="form-group row">
                            <label for="bidder-name">Frequency (min)</label>
                            <input class="form-control" id="freq" type="text">
                        </div>
                        <button class="btn btn-primary" id="submit-time" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
​
</div>
​
<!-- Script -->
<script>
    //initialize firebase
    const firebaseConfig = {
        apiKey: "AIzaSyCheObSaoVLcknmRw9JuHLufT3ZbNzhadY",
        authDomain: "wez-project.firebaseapp.com",
        databaseURL: "https://wez-project.firebaseio.com",
        projectId: "wez-project",
        storageBucket: "wez-project.appspot.com",
        messagingSenderId: "670168800866",
        appId: "1:670168800866:web:ba25dc32a73897f8"
    };
​
    var now = moment();
​
    firebase.initializeApp(firebaseConfig);
    var database = firebase.database();
​
    //adding user input to the firebaseDB
    $("#submit-time").on("click", function(event) {
        event.preventDefault();
        const tName = $('#Train-Name').val().trim();
        const dest = $('#destination').val().trim();
        const tTime = $('#Train-Time').val().trim();
        const fquent = $('#freq').val().trim();
​
        database.ref('/train').push({
            TrainName : tName,
            Destination: dest,
            TrainTime: tTime,
            Frequency: fquent,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
    });
​
    //update the timetable
    database.ref('/train').on("value", function(snapshot) {
        const table = $('.table').children('tbody');
        const data = snapshot.val();
        for(let key in data){
            const nameT = data[key].TrainName;
            const destin = data[key].Destination;
            const timeT = data[key].TrainTime;
            const quency = data[key].Frequency;
            const row = table.append('<tr>');
            row.append(`<th>${nameT}</th>`);
            row.append(`<th>${destin}</th>`);
            row.append(`<th>${quency}</th>`);
            var firstTrain = moment(timeT, "HH:mm a");
            var diffTime = moment().diff(moment(firstTrain), "minutes");
            console.log("difftime : " + diffTime);
            var tRemainder = diffTime % quency;
            var tMinutesTillTrain = quency - tRemainder;
            var nextTrain = moment().add(tMinutesTillTrain, "minutes").format("HH:mm a");
            if( moment().isBefore(firstTrain)) {
                row.append(`<th> ${firstTrain.format("HH:mm a")} </th>`);
                var beforeDiff = moment().to(moment(firstTrain), "minutes");
​
                console.log("beforeDiff : " + beforeDiff);
                row.append(`<th> ${beforeDiff} </th>`);
            } else {
                row.append(`<th> ${nextTrain} </th>`);
                row.append(`<th> ${tMinutesTillTrain} </th>`);
            }
​
        }
    });
</script>
​
</body>
​
</html>
          })
  
      