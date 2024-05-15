// send mesaage of form to your mail
const form = document.querySelector("form");
const fullName = document.querySelector("#name");
const emailAddress = document.querySelector("#email");
const phoneNumber = document.querySelector("#phone");
const sub = document.querySelector("#subject");
const yourMessage = document.querySelector("#message");

function sendEmail(){
    const bodyMessage = ` your full name: ${fullName.value} <br> Email: ${emailAddress.value} <br>
                            phone: ${phoneNumber.value} <br> Message: ${yourMessage.value} <br>

    `;


    Email.send({
        SecureToken : " 32a50c16-f185-4eac-9a5a-c3f38de12ba5",
        // Host : "smtp.elasticemail.com",
        // Username : "mdabudojana@gmail.com",
        // Password : "432AC46A11B842FCBDF8E5D8676353BC8DD6",
        To : 'mdabudojana@gmail.com',
        From : "mdabudojana@gmail.com",
        Subject : sub.value,
        Body : bodyMessage
    }).then(
      message => {
        if(message == "OK"){
            Swal.fire({
                title: "Succcess!",
                text: "message sent successfully!",
                icon: "success"
              });
        }
      }
    );
}

function checkInputs(){
    const items= document.querySelectorAll(".item")
    for(const item of items){
        if(item.value == ""){
            item.classList.add('error');
            item.parentElement.classList.add('error');
        }


        if(items[1].value != ""){
            checkEmail();
        }
        items[1].addEventListener("keyup", () => {
            checkEmail();
        })


        item.addEventListener("keyup", ()=>{
            if(item.value != ""){
                console.log('hello world')
            item.classList.remove('error');
            item.parentElement.classList.remove('error');
            }else{
                item.classList.add('error');
                item.parentElement.classList.add('error');
            }
        })
    }
}

function checkEmail(){
    const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

    const errorTxtEmail = document.querySelector(".error-txt.email")

    if(!email.value.match(emailRegex)){
        email.classList.add("error")
        email.parentElement.classList.add("error")
        if(email.value != ""){
            errorTxtEmail.textContent = "Enter a valid Email Address"
        }else{
            errorTxtEmail.innerText = "Email address can't be Blank"
        }
    }
    else{
        email.classList.remove("error")
        email.parentElement.classList.remove("error") 
    }


}




form.addEventListener("submit", (e)=>{
    e.preventDefault();
    sendEmail();
    checkInputs();
    if(!fullName.classList.contains("error") && !emailAddress.classList.contains("error") &&
         !phoneNumber.classList.contains("error") && !sub.classList.contains("error") &&
         !yourMessage.classList.contains("error")){
            sendEmail();
            form.reset();
            return false
         }
})
