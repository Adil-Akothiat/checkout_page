const min_ = document.querySelector(".min_");
const pl_ = document.querySelector(".pl_");
const minus = document.querySelector(".min");
const plus = document.querySelector(".pl");
let numOfClick = 0;
function count() {
    pl_.onclick = function() {
        numOfClick += 1;
        pl_.previousElementSibling.textContent = `${numOfClick}`;
    }
    min_.onclick = function() {
        if(numOfClick>0) {
            numOfClick -= 1;
            min_.nextElementSibling.textContent = `${numOfClick}`;
        }else {
            numOfClick = 0;
        }
    }
}
count();
let numOfClick_ = 0;
function count_() {
    plus.onclick = function() {
        numOfClick_ += 1;
        plus.previousElementSibling.textContent = `${numOfClick_}`;
    }
    minus.onclick = function() {
        if(numOfClick_>0) {
            numOfClick_ -= 1;
            minus.nextElementSibling.textContent = `${numOfClick_}`;
        }else {
            numOfClick_ = 0;
        }
    }   
}
count_();
const email = document.querySelector("[name='email']");
const phone = document.querySelector("[name='phone']");
const Name = document.querySelector("[name='name']");
const address = document.querySelector("[name='address']");
const city = document.querySelector("[name='city']");
const country = document.querySelector("select");
const postal = document.querySelector("[name='postal']");
const form = document.querySelector("form");
const mess = document.querySelector(".message");
let an = document.getElementById("an");
let empty = "";
form.onsubmit = function(e) {
    let message;
    e.preventDefault();
    if(email.value==""||city.value==""||phone.value==""||Name.value==""||address.value==""||postal.value=="") {
        message = "please complete all field!!";
        mess.innerHTML = message;
        an.click();
    }else if(numOfClick == 0 && numOfClick_ == 0) {
        message = "please choose the product unit!!";
        mess.innerHTML = message;
        an.click();
    }else {
        message = 'success!';
        mess.innerHTML = message;
        mess.style.color = "green";
        an.click();
    }
}