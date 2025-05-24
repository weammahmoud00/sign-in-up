
var SIemail=document.getElementById("SIemail")
var SIpass=document.getElementById("SIpass")
var SUname=document.getElementById("SUname")
var SUemail=document.getElementById("SUemail")
var SUpass=document.getElementById("SUpass")

var Hsignup=document.getElementById("Hsignup")
var Hsignin=document.getElementById("Hsignin")

var HsuPAGE=document.querySelector(".helloSU")
var HsiPAGE=document.querySelector(".helloSI")

var signinbtn=document.getElementById("signinbtn")
var signupbtn=document.getElementById("signupbtn")

var dialogE=document.getElementById("rulesDialogEMAIL")
var dialogP=document.getElementById("rulesDialogPASS")
var logs

var welcomeName =document.querySelector(".username")

var isEmailValid
var isPassValid
var isEmailValidSU
var isPassValidSU

SUemail.addEventListener("blur", function() {
    validationSU(SUemail);
});
SUpass.addEventListener("blur", function() {
    validationSU(SUpass);
});

if(localStorage.getItem("logs") !=null){
    logs= JSON.parse(localStorage.getItem("logs"))
}
else{
    logs=[]
}
function closeDialog(){
    dialogP.close();
    dialogE.close();
}
function clear(){
    SIemail.value=null;
    SIpass.value=null;
    SUname.value=null;
    SUemail.value=null;
    SUpass.value=null;
}
// function validationSI(element){
//     var regex={
//         SIemail:/^[\w.-]+@[\w.-]+\.\w{2,}$/,
//         SIpass:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
//     }
//     isEmailValid = regex.SIemail.test(SIemail.value);
//     isPassValid = regex.SIpass.test(SIpass.value);
//     if(regex[element.id].test(element.value)){
//         closeDialog()
//         element.classList.add("is-valid")
//         element.classList.remove("is-invalid")
        
//     }
//     else{
//         element.classList.add("is-invalid")
//         element.classList.remove("is-valid")
//         SIemail.addEventListener("blur",function(){
//             if (!regex.SIemail.test(this.value)) {
//                 dialogE.showModal();
//             } else {
//                 dialogE.close();
//             }
//         })
//         SIpass.addEventListener("blur",function(){
//             if (!regex.SIpass.test(this.value)) {
//                 dialogP.showModal();
//             } else {
//                 dialogP.close();
//             }
//         })
//     }
// }
function validationSU(element){
    var regex={
        userName:/^[A-Z][a-zA-Z]{3,}$/,
        SUemail:/^[\w.-]+@[\w.-]+\.\w{2,}$/,
        SUpass:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    }
    isEmailValidSU = regex.SUemail.test(SUemail.value);
    isPassValidSU = regex.SUpass.test(SUpass.value);
    if(regex[element.id].test(element.value)){
        closeDialog()
        element.classList.add("is-valid")
        element.classList.remove("is-invalid")
        
    }
    else{
        element.classList.add("is-invalid")
        element.classList.remove("is-valid")
        SUemail.addEventListener("blur",function(){
            if (!regex.SUemail.test(this.value)) {
                dialogE.showModal();
            } else {
                dialogE.close();
            }
        })
        SUpass.addEventListener("blur",function(){
            if (!regex.SUpass.test(this.value)) {
                dialogP.showModal();
            } else {
                dialogP.close();
            }
        })
    }
}

Hsignup.addEventListener("click",function(){
    HsuPAGE.classList.add("d-none");
    HsiPAGE.classList.remove("d-none");
    clear()
})
Hsignin.addEventListener("click",function(){
    HsuPAGE.classList.remove("d-none");
    HsiPAGE.classList.add("d-none")
    clear()
})


function verification() {
    let found = false;
    for (var i = 0; i < logs.length; i++) {
        if (logs[i].SUemail === SIemail.value && logs[i].SUpass === SIpass.value) {
            found = true;
            break;
        }
    }
    if (found){
        window.location.href = "../html/welcome.html";
    }
    else{
        alert("Please, Enter your personal info correctly!");
    }
    clear()
}
signinbtn.addEventListener("click",function(e){
    e.preventDefault();
    verification()
    clear()
})
function add(){
    var logg={
        SUname:SUname.value,
        SUemail:SUemail.value,
        SUpass:SUpass.value,
    }
    if(isEmailValidSU && isPassValidSU){
        // signupbtn.removeAttribute("disabled");
        for(var i=0; i<logs.length; i++){
            if(logs[i].SUemail===SUemail.value){
                alert("cant add same email!")
                return;
            }
        }
        // signupbtn.removeAttribute("disabled");
        logs.push(logg)
        console.log(logs);
        
        localStorage.setItem("logs", JSON.stringify(logs))
        localStorage.setItem("username", SUname.value);
//////////////////////////////////////////////////////////////////////////////////////////
        HsuPAGE.classList.remove("d-none");
        HsiPAGE.classList.add("d-none")
        
        alert("You signed up succesfully!")
    }
    else{
        alert("Enter your personal info first!")
    }
}
signupbtn.addEventListener("click",function(e){
    e.preventDefault();
    add();
    clear();
})

