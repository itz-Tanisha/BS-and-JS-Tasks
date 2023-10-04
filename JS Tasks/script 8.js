let form = document.querySelector("form");
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let repwd = document.getElementById("repwd");
let age = document.getElementById("age");
let phn = document.getElementById("phn");
let address = document.getElementById("address");
let state = document.getElementById("state");

function validate() {
    flag = 1;
    if (fname.value == "") {
    document.getElementById("pfn").innerHTML = "POOR";
    pfn.style.color = "red";
    flag = 0;
    } else {
    document.getElementById("pfn").innerHTML = "GOOD";
    pfn.style.color = "green";
    }

    if (lname.value == "") {
    document.getElementById("pln").innerHTML = "POOR";
    pln.style.color = "red";
    flag = 0;
    } else {
    document.getElementById("pln").innerHTML = "GOOD";
    pln.style.color = "green";
    }

    if (email.value == "") {
    document.getElementById("pem").innerHTML = "POOR";
    pem.style.color = "red";
    flag = 0;
    } else {
    document.getElementById("pem").innerHTML = "GOOD";
    pem.style.color = "green";
    }

    if (pwd.value == "") {
    document.getElementById("ppwd").innerHTML = "POOR";
    ppwd.style.color = "red";
    document.getElementById("prepwd").innerHTML = "POOR";
    prepwd.style.color = "red";
    flag = 0;
    } else {
    document.getElementById("ppwd").innerHTML = "GOOD";
    ppwd.style.color = "green";
    if (repwd.value == "") {
        document.getElementById("prepwd").innerHTML = "POOR/<br>MISMATCH";
        prepwd.style.color = "red";
        flag = 0;
    } else {
        document.getElementById("prepwd").innerHTML = "GOOD";
        prepwd.style.color = "green";
    }
    }

    if (age.value == "") {
    document.getElementById("page").innerHTML = "POOR";
    page.style.color = "red";
    flag = 0;
    } else {
    document.getElementById("page").innerHTML = "GOOD";
    page.style.color = "green";
    }

    if (phn.value == "") {
    document.getElementById("pphn").innerHTML = "POOR";
    pphn.style.color = "red";
    flag = 0;
    } else {
    document.getElementById("pphn").innerHTML = "GOOD";
    pphn.style.color = "green";
    }

    if (address.value == "") {
    document.getElementById("padd").innerHTML = "POOR";
    padd.style.color = "red";
    flag = 0;
    } else {
    document.getElementById("padd").innerHTML = "GOOD";
    padd.style.color = "green";
    }

    if (state.value == "") {
    document.getElementById("pstt").innerHTML = "POOR";
    pstt.style.color = "red";
    flag = 0;
    } else {
    document.getElementById("pstt").innerHTML = "GOOD";
    pstt.style.color = "green";
    }

    if (flag == 1) {
    alert("Registration Successful");
    }
}