function validate_email_pattern(){

    var input_e_mail = $("#field_name).val();

    var script_email = /\S+@\S+\.\S+/

        if (script_email.test(input_e_mail) === true){
            console.log("mail address is valid")
        } else {
            console.log("mail address ain't valid")
        }

}
