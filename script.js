var contacts = [
    { name: "Ziad Nehad", Number: "01123456789", Email: "Ziad@gmail.com", Gender: "male", image: "ziad.jpg" },
    { name: "Hassan Al-Sharif", Number: "01123456789", Email: "Hassan@gmail.com", Gender: "male", image: "hassan.png" },
    { name: "Abdullah Khames", Number: "01123456789", Email: "Abdullah@gmail.com", Gender: "male", image: "khamis.png" },
    { name: "Hamza Alaa", Number: "01123456789", Email: "Hamza@gmail.com", Gender: "male", image: "hamza.png" }
];

var numberOfcontacts = contacts.length;
$(document).on("click","#list1 li a",function(){
    selectedIndex = $(this).closest("li").index();
    var currentImage = contacts[selectedIndex].image;
    var fullName = contacts[selectedIndex].name;
    var Number = contacts[selectedIndex].Number;
    var Email = contacts[selectedIndex].Email;
    var Gender = contacts[selectedIndex].Gender;
    if (currentImage == "") {
        currentImage = "photo_not_available_wide.png";
    }

    $("section header h1").text(fullName);
    $("#contact_details").empty(); 
    $("#contact_details").append(`<img src="${currentImage}"style="width:300px;height: 300px;" />`);
    $("#contact_details").append(`<h1  style="color: orangered; margin-left: 40%;">fullName : ${fullName} </h1>`);
    $("#contact_details").append(`<h3 style="color: orangered; margin-left: 40%;" >Number : ${Number}  </h3>`);
    $("#contact_details").append(`<p style="color: orangered; margin-left: 40%;">Email : ${Email} </p>`);
    $("#contact_details").append(`<p style="color: orangered ;margin-left: 40%;">Gender : ${Gender} </p>`);

})

function createListView() {
    for (i = 0; i < numberOfcontacts; i++) {
        var fullName = contacts[i].name;
        var Numbers = contacts[i].Number;
        var imag = contacts[i].image;
        var Emails = contacts[i].Email;

        if (imag == "") {
            imag = "photo_not_available_wide.png";
        }
        
        $("#list1").append(`<li>
        <a href="#contact_page">
        <img src= ${imag}  width="307" height="240" alt="image">
        <h3 style='color:orange'>  ${fullName} </h3>
        <h5>${Numbers}</h5>
        <p>${Emails}</p></a>

        <a href="tel:01126350544" id='phone'>  </a>
        </li>`);

        $("#list1").listview().listview("refresh");
    }
}

$(document).ready(function (e) {

    createListView();


})



$("#AddContact").click(function(){
    numberOfcontacts++;
    var fname = document.getElementById("textinput-1").value;
    console.log(fname);
    var fNumber = $("#tel").val();
    console.log(fNumber);
    var fEmail = $("#email").val();
    var fGender = $('input[name="radio-choice"]:checked').val();
    var fimage = $("#profileimage").val();
    if(fNumber != "" && fname!= ""){
    contacts.push({name :fname , Number:fNumber , Email :fEmail , Gender:fGender ,image:fimage })
    $("#list1").empty();
    createListView();
    }
    else{
        alert("cannot be null");
        
    }
 

});


