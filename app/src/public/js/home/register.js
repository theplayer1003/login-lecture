"use strict";



//DOM : Document Object Model, interface, scan html data

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confirm-psword"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
    if(!id.value) return alert("Please enter ID");
    if(psword !==confirmPsword) return alert("incorrect PW");

    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,
    };

    
    fetch("/register", {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = "/login";
        }else {
            alert(res.msg);
        }
    })
    .catch((err) => {
     console.error(new Error("회원가입 에러"));
    });
}