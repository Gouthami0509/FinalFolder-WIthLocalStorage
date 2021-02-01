$(document).ready(function(){
    debugger;
    $("#IdAdminBodyPage").hide();
    $("#IdAdminForm").show();


    var AdminId = ["Admin"];
    var AdminPswd = ["Admin123"];
    $("#IdAdminLogin").click(function () {

     
        // debugger
    if (AdminId.indexOf($("#IdTxtUserName").
    val()) == AdminPswd.indexOf($("#IdTxtPwd").val()) && AdminId.indexOf($("#IdTxtUserName").val()) != -1) {
        // alert(UsernameData.indexOf($("#IdTxtUserName").val(), 1)) //returns 1 = index value of the array(searched element)
        alert(AdminId.indexOf($("#IdTxtUserName").val())!=-1) //returns true if the value is not found in the array
        // alert(PwdData.indexOf($("#IdTxtPwd").val()))  //returns 0th index  coz index of admin's password is 0
        $("#IdUserLogin").hide();
        //  debugger;
        if (AdminId.indexOf($("#IdTxtUserName").val()) == 0)   //if there is no username n pswd then this loop excutes & shows the alert and directly ends the loop
        {
            alert("Admin Logged In");
              $("#IdAdminForm").hide();
            $("#IdAdminBodyPage").show();
        }

        else {
           // $("#UserPage").show(); //1st if and checks the 2nd if(user exists) so it wont go inside the loop if excutes this else
            alert("Please Enter correct password or ID")
        }
    } else {
        alert("Invalid Username/Passwor");  //it checks the 1st condition if it does not match the array element it excutes this else part
    }
         

});

    // $(".ClsLoginBtn").click(function(e){
    //     alert("hey")
    //     $("#IdAdminBodyPage").show();
    //     e.preventDefault();
    //     $("#IdAdminForm").hide();
    // })
    $(".ClsCloseModal").click(function () {
        //alert("he")
        $("#IdAdminForm").hide();
    })

//---------jqgrid--------------

    $("#IdJqGrid").jqGrid({
        data: JSON.parse(localStorage.getItem("FullAllUserData")),
        datatype: "local",
        colModel:[
            {name: "FullName"},
            {name: "EmailAddress"},
            {name: "PhoneNumber"},
            {name: "PickUpLocation"},
            {name: "PickUpDate"},
            {name: "DropLocation"},
            {name: "DropOffDate"},
        ],
        caption:"User Details",
        pager: "#IdPager"
    });
    $("#IdDataSubmit").click(function () {
        var UserDetails = {
            // "Id": '3',
            "FullName": $("#IdBFUserName").val(),
            "EmailAddress": $("#IdBFEmail").val(),
            "PhoneNumber": $("#IdBFPhoneNumber").val(),
            "PickUpLocation": $("#IdBFPickUpLocation").val(),
            "PickUpDate": $("#IdBFPickUpDate").val(),
            "DropLocation": $("#IdBFDropLocation").val(),
            "DropOffDate": $("#IdBFDropDate").val()
        };
        // alert(username + addresss + mobile +emailID ) ;
       // $("#jqgrid").addRowData("", Data,);
        $("#IdJqGrid").jqGrid('addRowData', "new", UserDetails);
    });















































});