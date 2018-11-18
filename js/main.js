$(document).ready(function(){
  $(".not-int-btn").click(function(){
    $(this).closest('.col-md-4').remove();
    checkNow("newRequest","requests");
  });
  $(".int-btn").click(function(){
    $(this).closest('.col-md-4').remove();
    checkNow("newRequest","requests");
  });
  $(".container-fluid").on('click', '.complete-btn', function(){
    $(this).closest('.col-md-4').remove();
    checkNow("acceptedRequest","bookings");
  });
  $(".container-fluid").on('click', '.cancel-btn', function(){
    $(this).closest('.col-md-4').remove();
    checkNow("acceptedRequest","bookings");
  });
});

noBook = true;
noHire = true;

function addToOngoing(place, image, name, date, budget, message){
  var reqHTML = "<div class='col-md-4 mb-5'><div class='card'><div class='card-header p-4'><div class='row justify-content-center'><img src='media/"+image+".png' class='rounded-circle mr-3' style='width: 50px;'><h3 class='mt-2'>"+name+"</h3></div></div><div class='card-body p-5'><div class='row mb-3'><h4 class='mr-auto'>Place</h4><p class='ml-auto'>"+place+"</p></div><div class='row mb-3'><h4 class='mr-auto'>Date</h4><p class='ml-auto'>"+date+"</p></div><div class='row mb-3'><h4 class='mr-auto'>Budget</h4><p><i class='fas fa-rupee-sign'></i> "+budget+"</p></div><div class='row'><div class='mr-auto'><h4>Message</h4><hr></div><p class='ml-auto'>"+message+"</p></div></div> <div class='card-footer text-center p-4'><button class='mr-3 custom-button bg-light text-dark complete-btn' onclick=\"(addToHired('"+place+"', '"+name+"', '"+date+"', '"+budget+"'))\"><i class='fas fa-check-circle mr-3'></i> Complete</button></div></div></div>";
  if(noBook){
    $("#acceptedRequest").html(reqHTML);
    noBook = false;
  }
  else{
    $("#acceptedRequest").append(reqHTML);
  }
}

function addToHired(place, name, date, budget){
  var bookHTML = "<div class='col-md-4 mb-5'><div class='card'><div class='card-header text-center p-5'><i class='fas fa-calendar-alt fa-lg'></i><br><br><h5>"+date+"</h5></div><div class='card-body text-center p-5'><h4 class='mb-5'>"+name+"</h4><p class='mb-5 font-italic'>"+place+"</p><h5><i class='fas fa-rupee-sign'></i> "+budget+"</h5></div><div class='card-footer text-center p-5'><button class='mr-3 custom-button bg-light text-dark'><i class='fas fa-receipt mr-3'></i> Recipt</button><button class='ml-3 custom-button bg-dark text-white'><i class='fas fa-exclamation mr-3'></i> Report Issues</button></div></div></div>";
  if (noHire) {
    $("#completedBooking").html(bookHTML);
    noHire = false;
  }
  else{
    $("#completedBooking").append(bookHTML);
  }
}

function checkNow(id,type) {
  var n = document.getElementById(id).innerHTML.trim();
  if (n === "") {
    document.getElementById(id).innerHTML = '<div class="col-12 p-5 text-center"><h1>Now, You do not have any ' +type+'.</h1></div>';
  }
}

function check(){
  var booking = document.getElementById("acceptedRequest").innerHTML.trim();
  if (booking === "") {
    document.getElementById("acceptedRequest").innerHTML = '<div class="col-12 p-5 text-center"><h1>You do not have any bookings.</h1></div>';
  }
  var hiring = document.getElementById("completedBooking").innerHTML.trim();
  if (hiring === "") {
    document.getElementById("completedBooking").innerHTML = '<div class="col-12 p-5 text-center"><h1>You do not have any hirings.</h1></div>';
  }
}

check();