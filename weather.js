var api = " https://api.openweathermap.org/data/2.5/forecast?zip=";
var zip = '';
var key='667ab334cf0968b9208d365d70cacd14';

$("form").submit(function(e){
    e.preventDefault();
});
function getWeather(zip){
    var urlString = api + zip + "&appid="+key;
    console.log(urlString);
    $.ajax({
        url: urlString, success: function(result){
            $('#cityname').text(result.city.name);
            $('#date').text("Date "+result.list[0].dt_txt);
            $('#temperature').text("Temperature "+result.list[0].main.temp);
            $('#pressure').text("Pressure "+result.list[0].main.pressure);
            console.log(result.city.name);
            console.log(result.list[0].dt_txt);
            console.log(result.list[0].main.temp);
            console.log(result.list[0].main.pressure);
        }, error: function(xhr){
            var err = xhr.responseText;
            var response = JSON.parse(err);
            $('#notification').addClass("alert alert-danger").text("Error! "+ response.message);
        }
    });
}
$(document).ready(function(){
    $('#update').click(function(){
        $('#cityname').text("City Name");
        $('#notification').removeClass("alert alert-danger").empty();
        zip = $('[name="zip"]').val();
        getWeather(zip);
    });
});