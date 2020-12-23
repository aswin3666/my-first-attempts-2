$(document).ready(function(params){
    $("#signUp").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:6
            },
            sname:{
                    required:true,
                    minlength:4,
                    maxlength:6
            },
            email:{
                required:true,
                email:true
            },
            day:{
                required:true
            }
        },
        messages:{
            fname:{
                required:"enter 1st",
                minlength:"enter atleast"
            }
        }
    })
    
})