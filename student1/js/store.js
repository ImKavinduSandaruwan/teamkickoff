let value = [];
let name = [];
let msg = [];
let cart = [];
let point = [parseInt(window.localStorage.getItem('points'))];
let sum = 0;


document.querySelectorAll('.buy').forEach(product => {
  product.onclick = () => {
    alert("Item Added To Cart");
    let b = document.getElementById('quantity-e1').value; // Set quantity to 1
    let A = parseInt(b);
    value.push(A * product.value);
    name.push(product.name);
    let a = product.name + " = " + product.value + "$"; // Removed quantity from display
    let p = parseInt(product.value) * A;
    let g = A + "x" + product.name + " at cost of " + p + "$";
    cart.push(a);
    msg.push(g);
    document.getElementById("items").innerHTML = cart.join(",");
   

    conosle
    for (let i = 0; i < value.length; i++) {
      sum += value[i];
    }

    console.log("Total = " + sum);

    document.getElementById("subtotal").innerHTML = "gggggggg";
    if (0 < parseInt(window.localStorage.getItem('points'))) {
      let points = parseInt(point[0]);
      document.getElementById("discount").innerHTML = (sum - (sum / 100) * points) + "$" + " (by " + points + " points)";
    } else {
      document.getElementById("discount").innerHTML = sum + "$" + " (0 points available)";
    }
  };
});
function clearOrder() {
   value = [];
   name = [];
   msg = [];
  let cart = [];
  document.getElementById('items').innerHTML = '';
  document.getElementById('subtotal').innerHTML = '$0';
  if (point[0] > 0) {
    let points = parseInt(point[0]);
    document.getElementById('discount').innerHTML = '$0' + ' (by ' + points + ' points)';
  } else {
    document.getElementById('discount').innerHTML = '$0' + ' (0 points available)';
  }
}


function validateForm() {
    let x = document.forms["Registration-form"]["name"].value;
    let z = document.forms["Registration-form"]["email"].value;
    let y = document.forms["Registration-form"]["address"].value;
    let w = document.forms["Registration-form"]["telephone"].value;
    let a = document.getElementById("subtotal").innerText;
    let b = document.getElementById("discount").innerText;
    let len =document.forms["Registration-form"]["telephone"].value.length;
    if (x==='') {
        document.getElementById('pop').innerHTML
            = 'Name must be provided !';
        return false;
    }
    if (z === "") {
        document.getElementById('pop').innerHTML
            = 'email must be provided !';
        return false;
    }
    if (y === "") {
        document.getElementById('pop').innerHTML
            = 'address must be provided !';
        return false;
    }
    if (w === "") {
        document.getElementById('pop').innerHTML
            = 'Telephone number must be provided !';
        return false;
    }
    if (len <=10) {
        document.getElementById('pop').innerHTML
            = 'Telephone number must be at least 8 characters';
        return false;
    }
    if (w === "") {
        document.getElementById('pop').innerHTML
            = 'Telephone number must be provided !';
        return false;
    }
    if (a === "") {
        document.getElementById('pop').innerHTML
            = 'Cart Is Empty !';
        return false;
    }
    else {
        alert("dear "+x+" ,you have ordered "+msg+".Your Total Bill Is "+a+" After the Discount final price is "+b)
    }

}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollUpButton").style.display = "block";
  } else {
    document.getElementById("scrollUpButton").style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}





