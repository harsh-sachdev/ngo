jQuery(function($) {
	"use strict";

	$("#contact_form").submit(function() {
        var name = $("#nameinput").val();       // get name field value
        var email = $("#emailinput").val();     // get email field value
        var subject = $("#subjectinput").val();   // get website field value
        var msg = $("#msg").val();              // get message field value

        $.ajax({
            type: "POST",
            url: "https://mandrillapp.com/api/1.0/messages/send.json",
            data: {
                'key': 'OAeMH7cvNDJ4Q4L_hSDvZw',
                'message': {
                    'from_email': email,
                    'from_name': name,
                    'headers': {
                        'Reply-To': email
                    },
                    'subject': subject,
                    'text': msg,
                    'to': [
                    {
                        'email': 'ithemeslab@gmail.com',
                        'name': 'Asif Al Islam',
                        'type': 'to'
                    }]
                }
            }
        })
        .done(function(response) {
            alert('Message sending successful.'); // show success message
            $("#nameinput").val(''); // reset field after successful submission
            $("#emailinput").val(''); // reset field after successful submission
            $("#subjectinput").val(''); // reset field after successful submission
            $("#msg").val(''); // reset field after successful submission
        })
        .fail(function(response) {
            alert('Error sending message.');
        });
        return false; // prevent page refresh
    });

});


