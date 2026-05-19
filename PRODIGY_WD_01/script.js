// LOGIN FUNCTION

function login(){

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if(username !== "" && password !== ""){

    document.getElementById("loginPage").style.display = "none";

    document.getElementById("mainWebsite").style.display = "block";

  }
  else{
    alert("Please enter username and password");
  }

}


// SHOW HOME PAGE

function showHome(){

  hideAllPages();

  document.getElementById("homePage").style.display = "flex";

}


// SHOW DESTINATION PAGE

function showDestinations(){

  hideAllPages();

  document.getElementById("destinationPage").style.display = "block";

}
// OPEN TOURISM PAGE

function openTourism(placeId){

  hideAllPages();

  document.getElementById(placeId).style.display = "block";

}


// SHOW SERVICES PAGE

function showServices(){

  hideAllPages();

  document.getElementById("servicesPage").style.display = "block";

}


// SHOW CONTACT PAGE

function showContact(){

  hideAllPages();

  document.getElementById("contactPage").style.display = "block";

}


// SHOW BOOKING PAGE

function showBooking(type){

  hideAllPages();

  document.getElementById("bookingPage").style.display = "block";

  document.getElementById("bookingTitle").innerHTML = type;

}

// BOOKING NOTIFICATION

function bookNow(event){

  event.preventDefault();

  alert("✅ Your ticket has been booked successfully!");

}

// HIDE ALL PAGES

function hideAllPages(){

  document.getElementById("homePage").style.display = "none";

  document.getElementById("destinationPage").style.display = "none";

  document.getElementById("servicesPage").style.display = "none";

  document.getElementById("bookingPage").style.display = "none";

  document.getElementById("contactPage").style.display = "none";

  document.getElementById("maldivesTourism").style.display = "none";

  document.getElementById("parisTourism").style.display = "none";

  document.getElementById("swissTourism").style.display = "none";

}