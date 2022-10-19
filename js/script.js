$(document).ready(function() { 
    
// Click Footer scroll top to jump on top
$('#ScrollTop').click(function() {
    $("html, body").animate({ scrollTop: 0 }, 6000);
    return false;
});
         
// Scroll Top Next Section 
$("#got-to-top").click(function() {
    $('html, body').animate({
        scrollTop: $("#section-2-scrolltop").offset().top
    }, 1000);
});

// Select Time Zone
$(".time-zone-selector").click(function(){
    $('.time-zone-selector').removeClass('active');
    $(this).addClass("active");
});

// Select Bank and append their text value to loan field
$(".bank-name-cta").click(function(){
    var bank_name_text= $(this).text();
    $('.bank-selector').text(bank_name_text); 
    $('.bank-name-cta').removeClass('active');
    $(this).addClass("active");
});

//Select Gender 
$(".gender-selector-parent button").click(function(){
      $('.gender-selector-parent button').removeClass('active');
      $(this).addClass('active');
    $('.gender-spouse-selector').show();
});

// Select Siblings 
$("button.btn.btn-primary.self,button.btn.btn-primary.spouse,button.btn.btn-primary.father,button.btn.btn-primary.mother").click(function(){
     $(this).toggleClass('active');
});

// Select Siblings Son Daughter 
$("button.btn.btn-primary.son,button.btn.btn-primary.daughter").click(function(){
    $(this).toggleClass('active');
});


// // Select Siblings 
// $(".self-spouse-selector button").click(function(){
//    // $('.spouse-button-selector button').toggleClass('active');
//     // $(this).addClass("active");
// });
// $(".sibling-selector button").click(function(){
//    // $(this).toggleClass('active');
//    // $(this).addClass("active");
// });
// $(".gen-parent-selector button").click(function(){
//     //$(this).toggleClass('active');
//    // $('.gen-parent-selector button').removeClass('active');
//    // $(this).addClass("active");
// });

    //Select Number Of Children 
    var minVal = 0, maxVal = 5; // Set Max and Min values
    // Increase product quantity on cart page
    $(".increase-number").on('click', function(){
    // alert('working')
        var $parentElm = $(this).parents(".pair-selector");
        var value = $parentElm.find(".total-number-pair").text();
        //  console.log(value);
        if (value < maxVal) {
            value++;
        }
        $parentElm.find(".total-number-pair").text(value);
    });
    // Decrease product quantity on cart page
    $(".decrease-number").on('click', function(){
        var $parentElm = $(this).parents(".pair-selector");
        var value2 = $parentElm.find(".total-number-pair").text();
            console.log(value2);
        if (value2 > minVal) {
            value2--;
        }
        $parentElm.find(".total-number-pair").text(value2);
    });


//Select Annual Income 
$(".annual-income-selector button").click(function(){
    $('.annual-income-selector button').removeClass('active');
    $(this).addClass("active");
});

//Do You smoke yes/no
$(".smoke-field-selector button").click(function(){
    $('.smoke-field-selector button').removeClass('active');
    $(this).addClass("active");
});

// Append second modal on first modal 
$("#show-second-generate-modal").click(function(){
    $('#phone-verification').modal('hide');
    $('#phone-verification-resent-otp').modal('show');
});

// OTP Verification if input value is less than 6 or greater than 6
// $('.field-otp-section input').on('input change', function() {
//     if($(this).val().length >= 6) {
//         $('#btn-verify').prop('disabled', false);
//     } else {
//         $('#btn-verify').prop('disabled', true);
//     }
// });
// $('.field-otp-section2 input').on('input change', function() {
//     if($(this).val().length >= 6) {
//         $('#btn-verify2').prop('disabled', false);
//     } else {
//         $('#btn-verify2').prop('disabled', true);
//     }
// });

// Set +91 as default Value input Mobile
$('#phone').keyup(function() {         
    var oldvalue=$(this).val();
    var field=this;
    setTimeout(function () {
        if(field.value.indexOf('+91') !== 0) {
            $(field).val("+91" +" "+  +oldvalue);
        } 
    },);
});

// Auto add Slash Symbol in Date 
$('#date_selector').bind('keyup','keydown', function(event) {
    var inputLength = event.target.value.length;
    if (event.keyCode != 8){
        if(inputLength === 2 || inputLength === 5){
        var thisVal = event.target.value;
        thisVal += '/';
        $(event.target).val(thisVal);
        }
    }
});


//OTP Functionality 
$(function() {
    var charLimit = 1;
    $(".otp-value").keydown(function(e) {
        var keys = [8, 0, 9, 19, 20, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 144, 145];
        if (e.which == 8 && this.value.length == 0) {
            $(this).prev('.otp-value').focus();
        } else if ($.inArray(e.which, keys) >= 0) {
            return true;
        } else if (this.value.length >= charLimit) {
            $(this).next('.otp-value').focus();
            return false;
        } 
        else if (e.shiftKey || e.which <= 48 || e.which >= 58) {
            return false;
        }
    }).keyup (function () {
        if (this.value.length >= charLimit) {
            $(this).next('.otp-value').focus();
            return false;
        }
    });
});


  // Initialize select2
//   $("#pincode").select2();
}); 
