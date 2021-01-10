var favstylesheet = document.createElement("style");
favstylesheet.innerHTML = `@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Nunito+Sans:400,700);.m-fab-box *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.m-fab-box :after,.m-fab-box :before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.m-fab-box{position:fixed;z-index:999;width:56px;height:56px;right:20px;bottom:20px;display:none;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;line-height:1.4;text-align:left}.m-fab-button{position:relative;border:none;width:56px;height:56px;cursor:pointer;outline:0!important;border-radius:50%;color:#fff;-webkit-box-shadow:0 3px 3px 0 rgba(0,0,0,.14),0 1px 7px 0 rgba(0,0,0,.12),0 3px 1px -1px rgba(0,0,0,.2);box-shadow:0 3px 3px 0 rgba(0,0,0,.14),0 1px 7px 0 rgba(0,0,0,.12),0 3px 1px -1px rgba(0,0,0,.2);-webkit-transition:all .2s ease-in-out;-moz-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.m-fab-button span{position:absolute;width:56px;height:56px;display:block;left:0;top:0;-webkit-transition:all .2s ease-in-out;-moz-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.m-fab-button i{line-height:56px}.m-fab-button i:not(.material-icons){font-size:18px}.m-fab-icon-open{opacity:0;transform:scale(0)}.m-fab-box.m-showing .m-fab-icon-default{opacity:0;transform:scale(0)}.m-fab-box.m-showing .m-fab-icon-open{opacity:1;transform:scale(1)}.m-fab-panel-close{position:absolute;right:20px;top:20px;cursor:pointer}.m-fab-panel{font-family:Nunito Sans;transform:scale(.5);opacity:0;display:none;position:absolute;padding:20px;width:300px;background-color:#fff;border-radius:3px;-webkit-box-shadow:0 3px 3px 0 rgba(0,0,0,.14),0 1px 7px 0 rgba(0,0,0,.12),0 3px 1px -1px rgba(0,0,0,.2);box-shadow:0 3px 3px 0 rgba(0,0,0,.14),0 1px 7px 0 rgba(0,0,0,.12),0 3px 1px -1px rgba(0,0,0,.2)}.m-bottom-right .m-fab-panel{bottom:70px;right:0;-ms-transform-origin:bottom right;-webkit-transform-origin:bottom right;transform-origin:bottom right}.m-fab-box.m-fab-show .m-fab-panel{display:block}.m-fab-box.m-fab-show.m-showing .m-fab-panel{opacity:1;transform:scale(1)}.m-fab-title{margin:0;padding:0;font-size:24px;font-family:Nunito Sans;margin-bottom:15px}div.m-fab-element{padding-top:8px}.m-fab-element,.m-fab-form-button{display:block;width:100%;height:42px;background-color:#f9fafa;border:solid 2px #d4d9dd;border-radius:3px;outline:0;margin-bottom:10px;padding:5px 10px;font-family:inherit}.error{border:solid 2px #d16666}input.m-fab-element:focus,textarea.m-fab-element:focus{background-color:#fff;border-color:#8c9aa6}.m-fab-element:hover{border-color:#8c9aa6}textarea.m-fab-element{min-height:80px;resize:none}.m-fab-form-button{color:#333;font-weight:700;border-color:transparent!important;cursor:pointer;margin-bottom:0;text-align:center;line-height:32px;text-decoration:none}.m-fab-form-button:hover{-webkit-box-shadow:2px 2px 3px 0 rgba(0,0,0,.2);-moz-box-shadow:2px 2px 3px 0 rgba(0,0,0,.2);box-shadow:2px 2px 3px 0 rgba(0,0,0,.2)}.m-fab-element:last-child{margin-bottom:0}.m-message-box{width:100%;text-align:center;margin-top:10px}.m-fab-color{background-color:#442e65;color:#fff!important}.m-fab-onclick{background-color:#875fc4;color:#fff!important}@-webkit-keyframes sk-bouncedelay{0%,100%,80%{-webkit-transform:scale(0)}40%{-webkit-transform:scale(1)}}@keyframes sk-bouncedelay{0%,100%,80%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}.fabpromo{text-align:center;font-size:6px;margin-top:0;padding:0}`;
document.getElementsByTagName("head")[0].appendChild(favstylesheet);
emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


var favdiv = document.createElement("div");
favdiv.innerHTML = `<div class="m-fab-box m-bottom-right m-fab-fixed" id="fab" style="display: inline-block; z-index: 9999;"><div class="m-fab-button m-fab-color" onclick="fabClick();"><span class="m-fab-icon-default"><i class="material-icons">comment</i></span><span class="m-fab-icon-open"><i class="material-icons">close</i></span></div><div class="m-fab-panel" id="fabcontent"></div></div>`;
document.getElementsByTagName("body")[0].appendChild(favdiv);
document.getElementById('fabcontent').innerHTML = (`<h3 class="m-fab-title">Contact</h3><p>Send me a message I will contact with you soon.</p><div><input class="m-fab-element" onchange="fabonchange('fabformname')" id="fabformname" type="text" name="name" placeholder="Name" autocomplete="off" data-required="true"><input class="m-fab-element" onchange="fabonchange('fabformemail')" id="fabformemail" type="text" name="email" placeholder="Email" autocomplete="off" data-required="true" data-validation="email"><input class="m-fab-element" onchange="fabonchange('fabformphone')" id="fabformphone" type="number" name="phoneno" placeholder="Phone No" autocomplete="off" data-required="true"><input class="m-fab-element" onchange="fabonchange('fabformsubject')" id="fabformsubject" type="text" name="subject" placeholder="Subject" autocomplete="off" data-required="true"><textarea class="m-fab-element" onchange="fabonchange('fabformmessage')" id="fabformmessage" name="message" placeholder="Your message" data-required="true"></textarea><button id="fabbutton" onclick="fabmessagesend()" class="m-fab-form-button m-fab-color">Send your message</button><a href="https://github.com/cachecleanerjeet/Contact-Form" class="fabpromo">Powered by Contact Form</a></div>`);

function fabClick() {
    document.getElementById('fab').classList.toggle('m-fab-show');
    document.getElementById('fab').classList.toggle('m-showing');
};

async function fabmessagesend() {
    var fabvalue = ({
        name: document.getElementById('fabformname').value,
        email: document.getElementById('fabformemail').value.toLowerCase(),
        phone_no: document.getElementById('fabformphone').value,
        subject: document.getElementById('fabformsubject').value,
        message: document.getElementById('fabformmessage').value,
    });

    if (fabvalue.name === "") {
        document.getElementById('fabformname').classList.add('error');
    } else if (fabvalue.email === "" || !emailregex.test(fabvalue.email)) {
        document.getElementById('fabformemail').classList.add('error');
    } else if (fabvalue.phone_no === "") {
        document.getElementById('fabformphone').classList.add('error');
    } else if (fabvalue.subject === "") {
        document.getElementById('fabformsubject').classList.add('error');
    } else if (fabvalue.message === "") {
        document.getElementById('fabformmessage').classList.add('error');
    } else {
        document.getElementById('fabbutton').removeAttribute("onclick");
        document.getElementById('fabbutton').classList.remove("m-fab-color");
        document.getElementById('fabbutton').classList.add("m-fab-onclick");
        document.getElementById('fabbutton').innerHTML = 'Sending...';
        var faberrmsg = `<h3 class="m-fab-title">Error</h3><p>Sorry, an error occurred while receiving your message, Try to contact with me in another method.</p>`;
        fetch(document.getElementById('contactform').getAttribute('form_worker_url'), {
                method: 'POST',
                body: JSON.stringify(fabvalue)
            })
            .then(response => response.json())
            .then(result => {
                if (result.status === true) {
                    document.getElementById('fabcontent').innerHTML = `<h3 class="m-fab-title">Message Sent</h3><p>Your message has been successfully came to me, I will contact with you soon. 🍻</p>`
                } else {
                    document.getElementById('fabcontent').innerHTML = faberrmsg;
                };
            })
            .catch(error => {
                document.getElementById('fabcontent').innerHTML = faberrmsg;
            });
    };
};

function fabonchange(id) {
    document.getElementById(id).classList.remove('error');
};