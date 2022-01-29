// Configurations
const cfConfig = {
  cssBase:
    getElemById("contactform").src.split("/src")[0] ||
    "https://cdn.jsdelivr.net/gh/cachecleanerjeet/contact-form@master",
  error: {
    title: "Error",
    message:
      getElemById("contactform").getAttribute("error_text") ||
      "Sorry, an error occurred while receiving your message, Try to contact with me in another method.",
  },
  success: {
    title: "Message Sent",
    message:
      getElemById("contactform").getAttribute("success_text") ||
      "Thank you for contacting me, I will get back to you soon.",
  },
};

const cfbody = `
<div class="box right-button" id="cf" style="display: inline-block; z-index: 9999;">
	<div class="button color" onclick="cfClick();"><span class="m-cf-icon-default"><i class="material-icons">email</i></span><span class="icon"><i class="material-icons">close</i></span></div>
	<div class="panel" id="cfcontent"></div>
</div>
`;

const cfform = `
<h3 class="title">Contact</h3>
<p>Send me a message I will contact with you soon.</p>
<div>
	<input class="element" onchange="cfonChange('cfname')" id="cfname" type="text" name="name" placeholder="Name" autocomplete="off">
	<input class="element" onchange="cfonChange('cfemail')" id="cfemail" type="text" name="email" placeholder="Email" autocomplete="off">
	<input class="element" onchange="cfonChange('cfphone')" id="cfphone" type="number" name="phoneno" placeholder="Phone No" autocomplete="off">
	<input class="element" onchange="cfonChange('cfsubject')" id="cfsubject" type="text" name="subject" placeholder="Subject" autocomplete="off">
	<textarea class="element" onchange="cfonChange('cfmessage')" id="cfmessage" name="message" placeholder="Your message"></textarea>
	<button id="cfbutton" onclick="cfSubmitMessage()" class="form-button color">Send your message</button><a href="https://github.com/cachecleanerjeet/Contact-Form" class="cfpromo">Powered by Contact Form</a>
</div>
`;

window.onload = () => {
  // init everything after page load

  // Add stylesheet
  var cfstylesheet = document.createElement("link");
  cfstylesheet.rel = "stylesheet";
  cfstylesheet.href = `${cfConfig.cssBase}/src/style.min.css`;
  document.getElementsByTagName("head")[0].appendChild(cfstylesheet);

  cfstylesheet.onload = function () {
    // If css loaded, add main html to body
    var cfdiv = document.createElement("section");
    cfdiv.classList.add("contact-form-cf");
    cfdiv.innerHTML = cfbody;
    document.getElementsByTagName("body")[0].appendChild(cfdiv);

    // check localstorage for if already sent a message
    var cfresult = JSON.parse(localStorage.getItem("contact-form"));
    if (
      getElemById("contactform").getAttribute("disable_waittime") !== "true" &&
      cfresult &&
      cfresult.sent &&
      cfresult.canSendUnix > new Date().getTime()
    ) {
      getElemById("cfcontent").innerHTML = createHtmlFromObj(cfConfig.success);
    } else {
      getElemById("cfcontent").innerHTML = cfform;
    }
  };
};

/**
 * Show/Hide contact form.
 * @constructor
 */
function cfClick() {
  getElemById("cf").classList.toggle("showing-state");
  getElemById("cf").classList.toggle("showing");
}

/**
 * Send message.
 * @constructor
 */
async function cfSubmitMessage() {
  var cfvalue = {
    name: getElemById("cfname").value,
    email: getElemById("cfemail").value.toLowerCase(),
    phone_no: getElemById("cfphone").value,
    subject: getElemById("cfsubject").value,
    message: getElemById("cfmessage").value,
  };

  let emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (cfvalue.name === "") {
    getElemById("cfname").classList.add("error");
  } else if (!emailRegex.test(cfvalue.email)) {
    getElemById("cfemail").classList.add("error");
  } else if (cfvalue.phone_no === "") {
    getElemById("cfphone").classList.add("error");
  } else if (cfvalue.subject === "") {
    getElemById("cfsubject").classList.add("error");
  } else if (cfvalue.message === "") {
    getElemById("cfmessage").classList.add("error");
  } else {
    getElemById("cfbutton").removeAttribute("onclick");
    getElemById("cfbutton").classList.remove("color");
    getElemById("cfbutton").classList.add("onclick");
    getElemById("cfbutton").innerHTML = "Sending...";

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
        getElemById("cfcontent").innerHTML = createHtmlFromObj(
          cfConfig.success
        );

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
      getElemById("cfcontent").innerHTML = createHtmlFromObj(cfConfig.error);
    }
  }
}

/**
 * Change error class on input change.
 * @constructor
 */
function cfonChange(id) {
  getElemById(id).classList.remove("error");
}

/**
 * Grab element by id.
 * @constructor
 */
function getElemById(id) {
  return document.getElementById(id);
}

/**
 * Create html from object
 * @constructor
 */
function createHtmlFromObj({ title, message }) {
  return `<h3 class="title">${title}</h3><p>${message}</p>`;
}
