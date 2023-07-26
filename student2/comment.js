//Validate user inputs
function validate(){
  var name = document.getElementById('name')
  var msg = document.getElementById('msg')
  var rating = document.forms["myForm"]["rating"]

  //Validate user name
  if(name.value.length <= 0){
    alert("Name required");
    name.focus();
    return false;
  }

  //Validate user rating
  if(rating[0].checked == false && rating[1].checked == false && rating[2].checked == false && rating[3].checked == false &&
    rating[4].checked == false && rating[5].checked == false && rating[6].checked == false && rating[7].checked == false &&
    rating[8].checked == false && rating[9].checked == false && rating[10].checked == false){
    alert("Rating required.");
    return false;
  }

  //validate feedback
  if(msg.value.length <= 0){
    alert("Feedback required.");
    msg.focus();
    return false;
  }

  //Validte drop down list
  if(ratingContainer.value.length <= 0){
    alert("Rating required");
    rating.focus();
    return false;
  }

  return false;
}