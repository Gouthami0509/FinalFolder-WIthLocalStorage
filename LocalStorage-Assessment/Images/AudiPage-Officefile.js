
    $(document).ready(function(){
    $(window).scroll(function() {
        var sticky = $('#IDSticky'),
            scroll = $(window).scrollTop();
    
        if (scroll >= 100)
        {
            sticky.addClass('fixed');
            $('#IDSticky').css("background-color","black");
            // $('#IDSticky').css("background-color","red");
        }
        else{
         sticky.removeClass('fixed');
         var colorPic = Math.round((1-$(window).scrollTop()/100)*255);
      
            // $('#IDSticky').css("background-color","orange");
            $('#IDSticky').css("background-color","");
        }
    });



        // adding Animation to cars
        $('.ClsLeeCooper,.ClsLexsus,.ClsPorche, .ClsAudiCar').hover(function(){
            $(this).addClass('animate__animated animate__zoomIn');
        })
        .mouseleave(function(){
            $(this).removeClass('animate__animated animate__zoomIn');
        })
    
        
    //     $("#my-rating-1").starRating({
    //         totalStars:5,
    //         activeColor: 'blue',
    //         initialRating: 4,
    //         readOnly: true,
    //         starSize: 20,
    //         useGradient: false,
    //    });

    //    $("#my-rating-2").starRating({
    //     initialRating: 3,
    //     starSize: 20,
    //    });

    //    $("#my-rating-3").starRating({
    //     initialRating: 5,
    //     starSize: 20,
    //    });

    $(".ClsSubscribe").click(function(){
       //Validation for email
              var Email=$(".ClsEmail").val();
            if(Email==0 || Email==" " || Email==null )
            {
                swal("","Please enter your EmailId","warning")
              
                return false;
            }
            else
            {
                var EmailIDexp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
                if(!EmailIDexp.test(Email))
                {
                    $(".ClsEmailp").html("Email should be in the format xxx@gmail.com");
                    $(".ClsEmailp").css({"color":"#cc4452"});
                    return false;
                } 
                else
                {    swal("","You will updated through your mail","success")
                    $(".ClsEmailp").text(" ");
                }
            }

    });
        

        $(".ClsLoginBody").hide();
        $("#IdUserLogin").click(function(){
            //alert("hey")
            $(".ClsLoginBody").show();

        })

//to display login form        
        $("#IdUserLogin").click(function () {
            $("#IdLoginForm").css("display", "block")
        })

        $(".ClsCloseModal").click(function () {
            //alert("he")
            $("#IdLoginForm").hide();
        })

//to display registration form
//$("#IdRegistrationForm").show();
         $("#IdRegisterBtn").click(function(){
            
             $("#IdLoginForm").hide();

           $("#IdRegistrationForm").show();
            
         })
//         //$("#IdRegistrationForm").show()
        $(".ClsCloseModal").click(function () {
            //alert("he")
            $("#IdRegistrationForm").hide();
        })



//Validation for Register form
        //disabling all buttons
        $("#IdRegisterPhoneInp").attr("disabled", true)
        $("#IdRegisterEmailInp").attr("disabled", true)
        $("#IdRegisterDLNoInp").attr("disabled", true)
        $("#IdRegisterPswdInp").attr("disabled", true)
        $("#IdRegisterConfirmPswdInp").attr("disabled", true)
        $("#IdRegisterBtnTwo").attr("disabled", true)

       //validation for name
        $("#IdRegisterUserInp").blur(function(){
            var username = $("#IdRegisterUserInp").val();
            //alert(username)
            if(username=='')
            {
                $("#IdRegisterPhoneInp").attr("disabled", true)
                swal("","Name cannot be empty", "warning")
                }
                else
                {
                   Regex=/^[A-Za-z]+(\s|\.)[A-Za-z]+$/i;
                 //var Regex=/^(?![\s.]+$)[a-zA-Z\s.]*$/
                    if(!Regex.test(username))
                    {
                        swal("","Name must contain only alphabets", "error")
                    }
                    else
                    {
                        $("#IdRegisterPhoneInp").attr("disabled", false);
                        //localStorage.setItem("RegistedUserName", username);
                    }
                }
            })

          //validation for phonenumber
          $("#IdRegisterPhoneInp").blur(function(){
            var phone = $("#IdRegisterPhoneInp").val();
            //alert(ucsername)
            if(phone=='')
            {
                $("#IdRegisterEmailInp").attr("disabled", true)
                swal("","PhoneNumber cannot be empty", "warning")
                }
                else
                {
                    Regex=/^[6-9]{1}[0-9]{9}$/;
                    if(!Regex.test(phone))
                    {
                        swal("","PhoneNumber must contain only 10Digits \n and it can start only from 6-9", "error")
                    }
                    else
                    {
                        $("#IdRegisterEmailInp").attr("disabled", false)
                        //localStorage.setItem("RegistedPhoneNumber", phone)

                    }
                }
            })
        

        //validation for email
          $("#IdRegisterEmailInp").blur(function(){
            var email = $("#IdRegisterEmailInp").val();
            //alert(username)
            if(email==null)
            {
                $("#IdRegisterDLNoInp").attr("disabled", true)
                swal("","MailId cannot be empty", "warning")
                }
                else
                {
                    Regex=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                    if(!Regex.test(email))
                    {
                        swal("","MailId must be in the format xxx@gmail.com", "error")
                    }
                    else
                    {
                        $("#IdRegisterDLNoInp").attr("disabled", false)
                        //localStorage.setItem("RegistedMailId", email)

                    }
                }
            })

            
        //validation for Dl Number
          $("#IdRegisterDLNoInp").blur(function(){
            var dlnumber = $("#IdRegisterDLNoInp").val();
            //alert(username)
            if(dlnumber==null)
            {
                        $("#IdRegisterConfirmPswdInp").attr("disabled", false)
                        $("#IdRegisterPswdInp").attr("disabled", true)
                swal("","MailId cannot be empty", "warning")
                }
                else
                {
                    Regex=/^[A-Z]{2}[\d]{2}[\s][\d]{11}$/;
                    if(!Regex.test(dlnumber))
                    {
                        swal("","DL Number must be in the format KA21 12345678912", "error")
                    }
                    else
                    {
                        $("#IdRegisterPswdInp").attr("disabled", false)
                        $("#IdRegisterConfirmPswdInp").attr("disabled", false)
                        //localStorage.setItem("RegistedDlNumber", dlnumber)

                    }
                }
            })

        //for password
            $("#IdRegisterPswdInp").blur(function(){
                var password=$("#IdRegisterPswdInp").val();
                if(password==''){
                    swal("","Password should not be empty","warning")
                }
                else{
                //reg exp to check Alphabets
                Regex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\S)(?=.*[!@#$%^&*]).{8}$/;
                if(!Regex.test(password))
                {
                    $("#IdRegisterConfirmPswdInp").attr("disabled",true);
                    swal("","Password must be Alpha-numeric \n and contain  Special characters(minimun of length-8)","warning")
                }
                else{
                        $("#IdRegisterConfirmPswdInp").attr("disabled",false);
                        //localStorage.setItem("Password",password);
                    }
                }
            })

            //Entered password validation
            $("#IdRegisterConfirmPswdInp").blur(function(){
                var password=$("#IdRegisterPswdInp").val();
                var Confirmpass=$("#IdRegisterConfirmPswdInp").val();
                if(password==''){
                    swal("","Password should not be empty","warning")
                }
                else{
                //reg exp to check Alphabets
                if(password!=Confirmpass)
                {
                    swal("","Password does not match","warning")
                }
                else{
                    $("#IdRegisterBtnTwo").attr("disabled",false);
                    }
                }
            });

            //login validation
            $("#IdSignUpBtn").click(function(){
                var UserPhone = $("#IdUserPhoneNumber").val();
                var UserPswd = $("#IdUserPswd").val();
                if(UserPhone =='')
                {
                    swal("","Please enter phone number");              
                }
                else if(UserPswd == ''){
                    swal("","Please enter password");
                }
                else{
                    var LocalStorageData = JSON.parse(localStorage.getItem("FullAllUserData"));
                    if(LocalStorageData == null){
                        swal(""," user id not found, please register");
                    }
                    else{
                        debugger

                        var FoundFlag=false;
                        var PswdFlag=false;

                        for(var i = 0; i<LocalStorageData.length; i++){
                            if(UserPhone == LocalStorageData[i].phone) 
                            {
                                FoundFlag=true;
                                if(UserPswd == LocalStorageData[i].password){
                                    PswdFlag=true;
                                }
                            }
                        }
                        if(FoundFlag==true){
                            if(PswdFlag == true){
                                swal("","Login Successful");
                            }
                            else{
                                swal("","Incorrect password");
                            }
                        }
                        else
                        {
                            swal(""," user id not found, please register");
                        }
                    }
                }
                    
            });

            $("#IdRegisterBtnTwo").click(function(){
                var username = $("#IdRegisterUserInp").val();
                var phone = $("#IdRegisterPhoneInp").val();
                var email = $("#IdRegisterEmailInp").val();
                var dlnumber = $("#IdRegisterDLNoInp").val();
                var password=$("#IdRegisterPswdInp").val();
                var GetUserData = JSON.parse(localStorage.getItem("FullAllUserData"));
                if(GetUserData == null){
                    GetUserData = [];
                }
                var IncorrectFlag = true;
                var Msg = "";
                for(var i = 0; i < GetUserData.length; i++){
                    if(phone == GetUserData[i].phone){
                        IncorrectFlag=false;
                        Msg = Msg + "Phone, ";
                    }
                    if(dlnumber == GetUserData[i].dlnumber){
                        IncorrectFlag=false;
                        Msg  += "DL Number, ";
                    }
                }
                if(IncorrectFlag==true){
                    GetUserData.push({
                        "username": username,
                        "phone":phone,
                        "email":email,
                        "dlnumber":dlnumber,
                        "password":password
                    });
    
                    localStorage.setItem("FullAllUserData",JSON.stringify(GetUserData));
                    swal("Hurray:)","You are Registered Successfully!!!","success");    
                }
                else{
                    alert(Msg + " already exists, please again with another value(s).");
                }               
                
            });


//-----------Password Plugin----------------

       // $('#myPassword').strength_meter();


//----------Login Validation--------
            


         //validation for phonenumber
         $(".ClsInputBox").blur(function(){
            var phone = $(".ClsInputBox").val();
            //alert(ucsername)
            if(phone=='')
            {
                swal("","PhoneNumber cannot be empty", "warning")
                }
                else
                {
                    localStorage.getItem("RegistedPhoneNumber")
                    var Regex = /^[\d]{10}$/
                    if(!Regex.test(phone))
                    {
                        swal("","PhoneNumber must contain only 10Digits \n and it can start only from 6-9", "error")
                    }
                    else
                    {
                        $("#IdRegisterEmailInp").attr("disabled", false)
                        localStorage.setItem("RegistedPhoneNumber", phone)

                    }
                } 
            })


            // $("#IdBookingFromDiv").dialog({
            //     width: 500,
            //     height: 400

            // });
            $("#IDNewBookingForm").css("display","none")
        $(".ClsAudiA3Img").click(function(){ 
            $("#IDNewBookingForm").dialog({
                title:"Booking Form",
                width: 600,
                height: 800
            });
        });
//---------validation for new booking page------------
    $("#IdBFPhoneNumber").attr("disabled", true)
    $("#IdBFEmail").attr("disabled", true)
    $("#IdBFPickUpDate").attr("disabled", true)
    $("#IdBFPickUpLocation").attr("disabled", true)
    $("#IdBFDropDate").attr("disabled", true)
    $("#IdBFDropLocation").attr("disabled", true)
    $("#IdBFSubmitBtn").attr("disabled", true)


            
            //validation for name
            $(".ClsErrorMsgs,.ClsErrorMsgsTwo,.ClsErrorMsgsThree,.ClsErrorMsgsFour").css({"color":"red","float":"right"})
        $("#IdBFUserName").blur(function(){
            var username = $("#IdBFUserName").val();
            //alert(username)
            if(username=='')
            {
                $("#IdBFPhoneNumber").attr("disabled", true)
                $(".ClsErrorMsgs").text("*Name should not be empty")
                }
                else
                {
                   Regex=/^[A-Za-z]+(\s|\.)[A-Za-z]+$/i;
                    if(!Regex.test(username))
                    {
                       $(".ClsErrorMsgs").text(" ")
                        $(".ClsErrorMsgs").text("*It must contain oly alphabets")
                    }
                    else
                    {
                        $(".ClsErrorMsgs").text(" ")
                        $("#IdBFPhoneNumber").attr("disabled", false)
                        localStorage.setItem("BookingUserName", username)
                    }
                }
            })




 //validation for phonenumber
          $("#IdBFPhoneNumber").blur(function(){
            var phone = $("#IdBFPhoneNumber").val();
            //alert(ucsername)
            if(phone=='')
            {
                $("#IdBFEmail").attr("disabled", true)
                $(".ClsErrorMsgsTwo").text("*Please fill up your PhoneNumber")
                }
                else
                {
                    Regex=/^[6-9]{1}[0-9]{9}$/;
                    if(!Regex.test(phone))
                    {
                        $(".ClsErrorMsgsTwo").text(" ")
                        $(".ClsErrorMsgsTwo").text("*PhoneNumber must contain only 10Digits  and it can start only from 6-9")
                        //swal("","PhoneNumber must contain only 10Digits \n and it can start only from 6-9", "error")
                    }
                    else
                    {
                        $("#IdBFEmail").attr("disabled", false)
                        $(".ClsErrorMsgsTwo").text(" ")
                        localStorage.setItem("RegistedPhoneNumber", phone)

                    }
                }
            })
        

        //validation for email
          $("#IdBFEmail").blur(function(){
            var email = $("#IdBFEmail").val();
            //alert(username)
            if(email=='')
            {
                $("#IdBFPickUpLocation").attr("disabled", true)
                $(".ClsErrorMsgsThree").text("*Please enter your MailId")
               // swal("","MailId cannot be empty", "warning")
                }
                else
                {
                   
                    Regex=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                    if(!Regex.test(email))
                    {
                        $(".ClsErrorMsgsThree").text("*MailId must be in the format xxx@gmail.com")
                    }
                    else
                    {
                        $(".ClsErrorMsgsThree").text(" ")
                        $("#IdBFPickUpLocation").attr("disabled", false)
                        localStorage.setItem("RegistedMailId", email)

                    }
                }
            })

            var AvailableLocations = [
                                    "Jaynagar","Nagarbhavi","Malleshwaram","Indranagar"
            ]

            $("#IdBFPickUpLocation").blur(function(){
                var pickuplocation = $("#IdBFPickUpLocation").val();
                if(pickuplocation=='')
                {
                    $("#IdBFPickUpDate").attr("disabled", true)
                    $(".ClsErrorMsgsFour").text("*Please select your Location")
                   // swal("","MailId cannot be empty", "warning")
                }
                else
                {
                $("#IdBFPickUpLocation").autocomplete({
                    source: AvailableLocations,
                    minLength:0,
                    close: function( event, ui ) {
                            $(".ClsErrorMsgsFour").text(" ")
                            $("#IdBFPickUpDate").attr("disabled", false)
                            localStorage.setItem("RegistedMailId", pickuplocation)
                        }
                    })
                }
            })
          
            

            
            $("#IdBFPickUpDate").blur(function(){
                $(this).datepicker({
                    minDate:0,
                    maxDate:"+1w",
                    onClose: function(event,ui){
                        $("#IdBFDropLocation").attr("disabled", false)
                        $("#IdBFDropDate").attr("disabled", false)
                        $("#IdBookingConfrimBtn").attr("disabled", false)

                    }
                });

            });


            $("#IdBookingConfrimBtn").click(function(){
                swal("hey")
            })







































    });


