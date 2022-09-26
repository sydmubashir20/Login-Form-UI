let regEmail = /^[a-zA-Z]+[0-9]+@gmail.com$/;
    let regPassword = /^[a-zA-Z]+[0-9]+@$/;
    let inpCount = 0;

    //Function for validating email and password upo parameters  
    let validation = (reg, empty, invalid, tocheck, error, inp) => {
        if (tocheck == "") {
            document.getElementById(error).innerHTML = empty;
            document.getElementById(error).style.color = "red";
            document.getElementById(inp).style.borderColor = "red";

            document.getElementById(inp).style.borderWidth = "1px";
        } else {
            if (!tocheck.match(reg)) {
                document.getElementById(error).innerHTML = invalid;
                document.getElementById(error).style.color = "red";
                document.getElementById(inp).style.borderColor = "red";
                document.getElementById(inp).style.borderWidth = "1px";
            } else {
                document.getElementById(error).innerHTML = "";
                document.getElementById(inp).style.borderColor = "";
                document.getElementById(inp).style.borderWidth = "";
                inpCount++;
            }
        }
    }

    //Function for ivoking the validation functionality on clicking on submit button
    let abc = () => {
        let Email = document.getElementById('txtemail').value;
        let Password = document.getElementById('txtpass').value;

        validation(regEmail, "You can't leave this empty.", "Enter a valid email e.g.(ali@123gamil.com)", Email, "Eeror", "emailInp");
        validation(regPassword, "You can't leave this empty.", "should contain a special character and number e.g.(@,1) ", Password, "Peror", "passInp");


    }


    //Function for password shide and show and eye open and close functionality
    let eyebeh = () => {
        let pass = document.getElementById("txtpass");
        let EyeImg = document.getElementById("eye-img");

        if (pass.type === "password") {
            pass.type = "text";
            EyeImg.src = "img-holder/eye-open.png"
        } else {
            pass.type = "password";
            EyeImg.src = "img-holder/eye-closed.png"
        }
    }