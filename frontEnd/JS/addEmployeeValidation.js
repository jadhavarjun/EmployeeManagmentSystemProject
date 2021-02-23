
// get employee data
var empData;
function getEmpData() {
    $.ajax({
        type: 'get',
        url: 'http://localhost:3000/employee/get',
        success: function (data) {
            empData = data;
            // console.log(empData);
            printData(data.data);
            //getEmpData(data);
        }
    })
}

getEmpData();
function printData(empData) {
    var table = document.getElementById("emptable")
    for (let i = 0; i < empData.length; i++) {
        var row = `<tr> 
                    <td>${empData[i].empFirstName}</td>
                    <td>${empData[i].empLastName}</td>
                    <td>${empData[i].empEmail}</td>
                    <td>${empData[i].empDepartment}</td>
                    <td>${empData[i].empMobile}</td>` +
            "<td><i class=\"fas fa-user-edit\" data-toggle=\"modal\" data-target=\"#exampleModalLong\"  onclick=\"updateData('" + empData[i]._id + "')\"></i></td>" +
            "<td> <i class=\"fas fa-user-times\" onclick=\"deleteData('" + empData[i]._id + "')\"></i> </td>" +
            "</tr>";

        table.innerHTML += row;

    }

}

function deleteData(id) {
    console.log("id", id);
    $.ajax({
        url: `http://localhost:3000/employee/delete/${id}`,
        type: 'DELETE',
        success: function (data) {
            console.log(data);
            location.reload();
        }
    });
}

function updateData(id) {
    document.getElementById("heading").innerHTML = "Update Employee Details";
    console.log("id", id);
    $.ajax({
        type: 'post',
        url: `http://localhost:3000/employee/getById/${id}`,
        success: function (data) {
            console.log(data);
            // document.getElementById("First_Name").innerHTML = data.data.empFirstName;
            document.getElementById("First_Name").value = data.data.empFirstName;
            document.getElementById("Last_Name").value = data.data.empLastName;
            document.getElementById("email").value = data.data.empEmail;
            document.getElementById("department").value = data.data.empDepartment;
            document.getElementById("mobileNo").value = data.data.empMobile;
            document.getElementById("password").value = data.data.empPassword;
            console.log(data.data.empFirstName);
        }
    })
}

//Post Data Method
function empPostData() {
    document.getElementById("heading").innerHTML = "Add Employee Details";
    let firstName = document.getElementById("First_Name").value;
    let lastName = document.getElementById("Last_Name").value;
    let email = document.getElementById("email").value;
    let department = document.getElementById("department").value;
    let mobileNo = document.getElementById("mobileNo").value;
    let password = document.getElementById("password").value;

    let empData = {
        empFirstName: firstName,
        empLastName: lastName,
        empEmail: email,
        empDepartment: department,
        empMobile: mobileNo,
        empPassword: password
    }
    console.log(empData);
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: 'http://localhost:3000/employee/create',
        dataType: "json",
        data: JSON.stringify(empData),
        success: function (data) {
            console.log(data);
            location.reload();
        }
    })
}

