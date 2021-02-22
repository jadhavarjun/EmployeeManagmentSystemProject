





//email Address Pattern
const emailRegex = RegExp(
    /^[a-zA-Z0-9]+([._+-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2,3})?$/
);

const department = RegExp(
    /^[A-Za-z]/
);

//Mobile No Pattern 
const mobileNumber = RegExp(
    /^[0-9]{10}$/
)

// password Pattern
const password = RegExp(
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
);

function Validation() {
    //First and Last Name Pattern 
    const name = RegExp(
        /^[A-Z]{1}[A-Za-z]{2}/
    );
    let firstName = document.getElementById("First_Name").value;
    console.log(firstName);
    let result = name.test(firstName);
    console.log(result);
    if(result==false){
        document.getElementById("FirstNameError").innerHTML = "first name should be minimum 3 characters and first Alphabet should be Capital";
        return false;
    }
    //First and Last Name Pattern 
    let lastNameCheck = name.test(document.getElementById("Last_Name").value);
    if(lastNameCheck==false){
        document.getElementById("LastNameError").innerHTML = "last name should be minimum 3 characters and first Alphabet should be Capital";
        return false;
    }


}