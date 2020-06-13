
$('.btn-number').click(function(e){
    e.preventDefault();
    
    fieldName = $(this).attr('data-field');
    type      = $(this).attr('data-type');
    var input = $("input[name='"+fieldName+"']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if(type == 'minus') {
            
            if(currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            } 
            if(parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if(type == 'plus') {

            if(currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if(parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
});
$('.input-number').focusin(function(){
   $(this).data('oldValue', $(this).val());
});
$('.input-number').change(function() {
    
    minValue =  parseInt($(this).attr('min'));
    maxValue =  parseInt($(this).attr('max'));
    valueCurrent = parseInt($(this).val());
    
    name = $(this).attr('name');
    if(valueCurrent >= minValue) {
        $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the minimum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    if(valueCurrent <= maxValue) {
        $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the maximum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    
    
});
$(".input-number").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) || 
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });

 function handleFormSubmit() {
            var hoursworkers, service, bedroom, toilet;
            service = $("input[name='propertyType']:checked").val();
            bedroom = Number(document.getElementById("bedroomNo").value);
            toilet = Number(document.getElementById("toiletNo").value);

            if (document.getElementById('landed').checked) {
                  service = Number(document.getElementById('landed').value);
                }
                else if (document.getElementById('highrise').checked) {
                    service = Number(document.getElementById('highrise').value);
                }

              if (service == 1) {
                if(toilet == 1){
                    if(bedroom == 1){
                        hoursworkers = "4 Hour 1 Worker";
                    } else if(bedroom == 2){
                        hoursworkers = "4 Hour 1 Worker";
                    } else if(bedroom == 3){
                        hoursworkers = "4 Hour 1 Worker";
                    } else if(bedroom == 4){
                        hoursworkers = "4 Hour 1 Worker";
                    } else if(bedroom == 5){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 6){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 7){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 8){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 9){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 10){
                        hoursworkers = "4 Hours 3 Workers";
                    }
                  }
                  else if(toilet == 2){
                    if(bedroom == 1){
                        hoursworkers = "4 Hour 1 Worker";
                    } else if(bedroom == 2){
                        hoursworkers = "4 Hour 1 Worker";
                    } else if(bedroom == 3){
                        hoursworkers = "4 Hour 1 Worker";
                    } else if(bedroom == 4){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 5){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 6){
                        hoursworkers = "5 Hours 2 Workers";
                    } else if(bedroom == 7){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 8){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 9){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 10){
                        hoursworkers = "4 Hours 3 Workers";
                    }
                  }
                  else if(toilet == 3){
                    if(bedroom == 1){
                        hoursworkers = "4 Hour 1 Worker";
                    } else if(bedroom == 2){
                        hoursworkers = "4 Hour 1 Worker";
                    } else if(bedroom == 3){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 4){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 5){
                        hoursworkers = "5 Hours 2 Workers";
                    } else if(bedroom == 6){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 7){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 8){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 9){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 10){
                        hoursworkers = "4 Hours 3 Workers";
                    }
                  }
                  else if(toilet == 4){
                    if(bedroom == 1){
                        hoursworkers = "4 Hour 1 Worker";
                    } else if(bedroom == 2){
                        hoursworkers = "4 Hour 1 Worker";
                    } else if(bedroom == 3){
                        hoursworkers = "5 Hours 2 Workers";
                    } else if(bedroom == 4){
                        hoursworkers = "5 Hours 2 Workers";
                    } else if(bedroom == 5){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 6){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 7){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 8){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 9){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 10){
                        hoursworkers = "4 Hours 3 Workers";
                    }
                  }
                  else if(toilet == 5){
                    if(bedroom == 1){
                        hoursworkers = "4 Hour 1 Worker";
                    } else if(bedroom == 2){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 3){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 4){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 5){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 6){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 7){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 8){
                        hoursworkers = "4 Hours 4 Workers";
                    } else if(bedroom == 9){
                        hoursworkers = "4 Hours 4 Workers";
                    } else if(bedroom == 10){
                        hoursworkers = "4 Hours 4 Workers";
                    }
                  }
                  else if(toilet == 6){
                    if(bedroom == 1){
                        hoursworkers = "4 Hour 1 Worker";
                    } else if(bedroom == 2){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 3){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 4){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 5){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 6){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 7){
                        hoursworkers = "4 Hours 4 Workers";
                    } else if(bedroom == 8){
                        hoursworkers = "4 Hours 4 Workers";
                    } else if(bedroom == 9){
                        hoursworkers = "4 Hours 4 Workers";
                    } else if(bedroom == 10){
                        hoursworkers = "4 Hours 4 Workers";
                    }
                  }
                  else if(toilet == 7){
                    if(bedroom == 1){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 2){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 3){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 4){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 5){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 6){
                        hoursworkers = "4 Hours 4 Workers";
                    } else if(bedroom == 7){
                        hoursworkers = "4 Hours 4 Workers";
                    } else if(bedroom == 8){
                        hoursworkers = "4 Hours 4 Workers";
                    } else if(bedroom == 9){
                        hoursworkers = "4 Hours 4 Workers";
                    } else if(bedroom == 10){
                        hoursworkers = "4 Hours 4 Workers";
                    }
                  }
                  else if(toilet == 8){
                    if(bedroom == 1){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 2){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 3){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 4){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 5){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 6){
                        hoursworkers = "4 Hours 4 Workers";
                    } else if(bedroom == 7){
                        hoursworkers = "4 Hours 4 Workers";
                    } else if(bedroom == 8){
                        hoursworkers = "4 Hours 4 Workers";
                    } else if(bedroom == 9){
                        hoursworkers = "4 Hours 4 Workers";
                    } else if(bedroom == 10){
                        hoursworkers = "4 Hours 4 Workers";
                    }
                  }
                  else if(toilet == 9){
                    if(bedroom == 1){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 2){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 3){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 4){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 5){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 6){
                        hoursworkers = "4 Hours 4 Workers";
                    } else if(bedroom == 7){
                        hoursworkers = "4 Hours 4 Workers";
                    } else if(bedroom == 8){
                        hoursworkers = "4 Hours 4 Workers";
                    } else if(bedroom == 9){
                        hoursworkers = "4 Hours 4 Workers";
                    } else if(bedroom == 10){
                        hoursworkers = "4 Hours 5 Workers";
                    }
                  }
                  else if(toilet == 10){
                    if(bedroom == 1){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 2){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 3){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 4){
                        hoursworkers = "4 Hours 4 Workers";
                    } else if(bedroom == 5){
                        hoursworkers = "4 Hours 4 Workers";
                    } else if(bedroom == 6){
                        hoursworkers = "4 Hours 4 Workers";
                    } else if(bedroom == 7){
                        hoursworkers = "4 Hours 4 Workers";
                    } else if(bedroom == 8){
                        hoursworkers = "4 Hours 4 Workers";
                    } else if(bedroom == 9){
                        hoursworkers = "4 Hours 5 Workers";
                    } else if(bedroom == 10){
                        hoursworkers = "4 Hours 5 Workers";
                    }
                  }
              }else if(service == 2) {
                if(toilet == 1){
                    if(bedroom == 1){
                        hoursworkers = "4 Hour 1 Worker";
                    } else if(bedroom == 2){
                        hoursworkers = "4 Hour 1 Worker";
                    } else if(bedroom == 3){
                        hoursworkers = "4 Hour 1 Worker";
                    } else if(bedroom == 4){
                        hoursworkers = "4 Hour 1 Worker";
                    } else if(bedroom == 5){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 6){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 7){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 8){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 9){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 10){
                        hoursworkers = "4 Hours 3 Workers";
                    }
                  }
                  else if(toilet == 2){
                    if(bedroom == 1){
                        hoursworkers = "4 Hour 1 Worker";
                    } else if(bedroom == 2){
                        hoursworkers = "4 Hour 1 Worker";
                    } else if(bedroom == 3){
                        hoursworkers = "4 Hour 1 Worker";
                    } else if(bedroom == 4){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 5){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 6){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 7){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 8){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 9){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 10){
                        hoursworkers = "4 Hours 3 Workers";
                    }
                  }
                  else if(toilet == 3){
                    if(bedroom == 1){
                        hoursworkers = "4 Hour 1 Worker";
                    } else if(bedroom == 2){
                        hoursworkers = "4 Hour 1 Worker";
                    } else if(bedroom == 3){
                        hoursworkers = "4 Hour 1 Worker";
                    } else if(bedroom == 4){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 5){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 6){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 7){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 8){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 9){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 10){
                        hoursworkers = "4 Hours 3 Workers";
                    }
                  }
                  else if(toilet == 4){
                    if(bedroom == 1){
                        hoursworkers = "4 Hour 1 Worker";
                    } else if(bedroom == 2){
                        hoursworkers = "4 Hour 1 Worker";
                    } else if(bedroom == 3){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 4){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 5){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 6){
                        hoursworkers = "5 Hours 3 Workers";
                    } else if(bedroom == 7){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 8){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 9){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 10){
                        hoursworkers = "4 Hours 4 Workers";
                    }
                  }
                  else if(toilet == 5){
                    if(bedroom == 1){
                        hoursworkers = "4 Hour 1 Worker";
                    } else if(bedroom == 2){
                        hoursworkers = "4 Hour 1 Worker";
                    } else if(bedroom == 3){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 4){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 5){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 6){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 7){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 8){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 9){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 10){
                        hoursworkers = "4 Hours 4 Workers";
                    }
                  }
                  else if(toilet == 6){
                    if(bedroom == 1){
                        hoursworkers = "4 Hour 1 Worker";
                    } else if(bedroom == 2){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 3){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 4){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 5){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 6){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 7){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 8){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 9){
                        hoursworkers = "4 Hours 4 Workers";
                    } else if(bedroom == 10){
                        hoursworkers = "4 Hours 4 Workers";
                    }
                  }
                  else if(toilet == 7){
                    if(bedroom == 1){
                        hoursworkers = "4 Hour 1 Worker";
                    } else if(bedroom == 2){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 3){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 4){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 5){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 6){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 7){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 8){
                        hoursworkers = "4 Hours 4 Workers";
                    } else if(bedroom == 9){
                        hoursworkers = "4 Hours 4 Workers";
                    } else if(bedroom == 10){
                        hoursworkers = "4 Hours 4 Workers";
                    }
                  }
                  else if(toilet == 8){
                    if(bedroom == 1){
                        hoursworkers = "4 Hour 1 Worker";
                    } else if(bedroom == 2){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 3){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 4){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 5){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 6){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 7){
                        hoursworkers = "4 Hours 4 Workers";
                    } else if(bedroom == 8){
                        hoursworkers = "4 Hours 4 Workers";
                    } else if(bedroom == 9){
                        hoursworkers = "4 Hours 4 Workers";
                    } else if(bedroom == 10){
                        hoursworkers = "4 Hours 4 Workers";
                    }
                  }
                  else if(toilet == 9){
                    if(bedroom == 1){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 2){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 3){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 4){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 5){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 6){
                        hoursworkers = "4 Hours 4 Workers";
                    } else if(bedroom == 7){
                        hoursworkers = "4 Hours 4 Workers";
                    } else if(bedroom == 8){
                        hoursworkers = "4 Hours 4 Workers";
                    } else if(bedroom == 9){
                        hoursworkers = "4 Hours 4 Workers";
                    } else if(bedroom == 10){
                        hoursworkers = "4 Hours 5 Workers";
                    }
                  }
                  else if(toilet == 10){
                    if(bedroom == 1){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 2){
                        hoursworkers = "4 Hours 2 Workers or 8 Hours 1 Worker";
                    } else if(bedroom == 3){
                        hoursworkers = "4 Hours 3 Workers";
                    } else if(bedroom == 4){
                        hoursworkers = "4 Hours 4 Workers";
                    } else if(bedroom == 5){
                        hoursworkers = "4 Hours 4 Workers";
                    } else if(bedroom == 6){
                        hoursworkers = "4 Hours 4 Workers";
                    } else if(bedroom == 7){
                        hoursworkers = "4 Hours 4 Workers";
                    } else if(bedroom == 8){
                        hoursworkers = "4 Hours 4 Workers";
                    } else if(bedroom == 9){
                        hoursworkers = "4 Hours 4 Workers";
                    } else if(bedroom == 10){
                        hoursworkers = "4 Hours 5 Workers";
                    }
                  }
              }
              
              document.getElementById("estimate").innerHTML = hoursworkers ;
            }