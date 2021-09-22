// Error & success message
var cferrmsg = `<h3 class="title">Error</h3><p>Sorry, an error occurred while receiving your message, Try to contact with me in another method.</p>`;
var cfsuccessmsg = `<h3 class="title">Message Sent</h3><p>Your message has been successfully came to me, I will contact with you soon. 🍻</p>`;
var cfformcontent = `<h3 class="title">Contact</h3><p>Send me a message I will contact with you soon.</p><div><input class="element" onchange="cfonChange('cfname')" id="cfname" type="text" name="name" placeholder="Name" autocomplete="off" data-required="true"><input class="element" onchange="cfonChange('cfemail')" id="cfemail" type="text" name="email" placeholder="Email" autocomplete="off" data-required="true" data-validation="email"><input class="element" onchange="cfonChange('cfphone')" id="cfphone" type="number" name="phoneno" placeholder="Phone No" autocomplete="off" data-required="true"><input class="element" onchange="cfonChange('cfsubject')" id="cfsubject" type="text" name="subject" placeholder="Subject" autocomplete="off" data-required="true"><textarea class="element" onchange="cfonChange('cfmessage')" id="cfmessage" name="message" placeholder="Your message" data-required="true"></textarea><button id="cfbutton" onclick="cfmessageSend()" class="form-button color">Send your message</button></div>`;

window.onload = () => {
  // init everything after page load

  // Add stylesheet
  var cfstylesheet = document.createElement("link");
  cfstylesheet.rel = "stylesheet";
  cfstylesheet.href =
    "https://cdn.jsdelivr.net/gh/anshumanfauzdar/contact-form@latest/src/style.css";
  document.getElementsByTagName("head")[0].appendChild(cfstylesheet);

  cfstylesheet.onload = function () {
    // If css loaded, add main html to body
    var cfdiv = document.createElement("section");
    cfdiv.classList.add("contact-form-cf");
    cfdiv.innerHTML = `<div class="box right-button" id="cf" style="display: inline-block; z-index: 9999;"><div class="button color animation" onclick="cfClick();"><span class="m-cf-icon-default"><i class="material-icons">email</i></span><span class="icon"><i class="material-icons">close</i></span></div><div class="panel" id="cfcontent"></div></div>`;
    document.getElementsByTagName("body")[0].appendChild(cfdiv);

    // check localstorage for if he already sent a message
    var cfresult = JSON.parse(localStorage.getItem("contact-form"));
    if (cfresult && cfresult.sent) {
      if (cfresult.canSendUnix > new Date().getTime()) {
        document.getElementById("cfcontent").innerHTML = cfsuccessmsg;
      } else {
        document.getElementById("cfcontent").innerHTML = cfformcontent;
      }
    } else {
      document.getElementById("cfcontent").innerHTML = cfformcontent;
    }
  };
};

// Show/Hide contact form
function cfClick() {
  document.getElementById("cf").classList.toggle("showing-state");
  document.getElementById("cf").classList.toggle("showing");
}

// Send message
async function cfmessageSend() {
  var cfvalue = {
    name: document.getElementById("cfname").value,
    email: document.getElementById("cfemail").value.toLowerCase(),
    phone_no: document.getElementById("cfphone").value,
    subject: document.getElementById("cfsubject").value,
    message: document.getElementById("cfmessage").value,
  };

  if (cfvalue.name === "") {
    document.getElementById("cfname").classList.add("error");
  } else if (
    cfvalue.email === "" ||
    !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      cfvalue.email
    )
  ) {
    document.getElementById("cfemail").classList.add("error");
  } else if (cfvalue.phone_no === "") {
    document.getElementById("cfphone").classList.add("error");
  } else if (cfvalue.subject === "") {
    document.getElementById("cfsubject").classList.add("error");
  } else if (cfvalue.message === "") {
    document.getElementById("cfmessage").classList.add("error");
  } else {
    document.getElementById("cfbutton").removeAttribute("onclick");
    document.getElementById("cfbutton").classList.remove("color");
    document.getElementById("cfbutton").classList.add("onclick");
    document.getElementById("cfbutton").innerHTML = "Sending...";

    try {
      var sendmessage = await (
        await fetch(
          document
            .getElementById("contactform")
            .getAttribute("form_worker_url"),
          {
            method: "POST",
            body: JSON.stringify(cfvalue),
          }
        )
      ).json();

      if (sendmessage.status) {
        document.getElementById("cfcontent").innerHTML = cfsuccessmsg;

        // Freeze the form for half day
        localStorage.setItem(
          "contact-form",
          JSON.stringify({
            sent: true,
            canSendUnix: new Date().getTime() + 43200000,
          })
        );
      } else {
        throw new Error("Error");
      }
    } catch (error) {
      console.log(error);
      document.getElementById("cfcontent").innerHTML = cferrmsg;
    }
  }
}

// Change error class on input change
function cfonChange(id) {
  document.getElementById(id).classList.remove("error");
}
