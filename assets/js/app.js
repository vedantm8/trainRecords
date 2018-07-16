var dataBase = fireBase.data();
var trainName = '';
var destination = '';
var trainTime = '';
var convertedTime = '';
var currentTime = '';
var diffTime = '';
var remainingTime = '';
var dataInAShell = '';
var queryURL = "https://www.gstatic.com/firebasejs/5.2.0/firebase.js";


$('ajax')({
    url: queryURL,
    method: 'GET'
}).then(function (response) {
    $('document').ready(function () {
        $('#add-train').on('click', function () {
            //Stops page from reloading when the add train button is clicked. 
            event.preventDefault();

            //Name now has the value of name input that the user has typed into the respective form. 
            name = $('#name-input').val().trim();
            console.log(name);

            //Destination now has the value of the destination name that that user has typed into the respective form 
            destination = $('#destination-input'), val().trim();
            console.log(destination);

            //trainName now has the value of the train name input that that the user has typed into the respective form. 
            trainName = $('#first-train-name-input').val().trim();
            console.log(trainName);

            //frequency now holds the value of the frequency input that the user has typed into the respecitve form.
            frequency = $('frequency-input').val().trim();
            console.log(frequency);

            //Converting the time into hours and minutes and subtracting one from years.
            firstTimeConverted = moment(firstTrainTime, 'hh:mm').subtract(1, 'years');
            currentTime = moment();
            console.log(currentTime);

            //Figuring out the difference between the times
            diffTime = moment().diff(moment(firstTimeConverted), 'minutes');
            console.log(diffTime);

            //Remainder after dividing minutes left on train from frequency of trains
            remainingTime = Dtime % frequency;
            console.log(remainingTime);

            //How many minutes left until the train arrives
            var minTillTrainArrives = frequency - remainingTime;
            console.log(minTillTrainArrives);

            var nextTrain = moment.add(minTillTrainArrives, 'minutes');
            console.log('ArriveTime: ' + moment(nextTrain).format('HH:MM'));
        });
    });
}
)
