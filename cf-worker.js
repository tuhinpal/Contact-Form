// Bot API Key
const BOT_TOKEN = "123456789:abcdefghijklmnopqrstuvwxyz";

// Your Telegram USER ID
const CHATID = "981558170";

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  if (request.method == "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
        "Access-Control-Max-Age": "86400",
      },
    });
  } else if (new URL(request.url).pathname == "/" && !request.body) {
    return Response.redirect(
      "https://github.com/cachecleanerjeet/Contact-form",
      301
    );
  } else {
    const body = await request.json();
    const name = body.name;
    const phone_no = body.phone_no;
    const email = body.email;
    const subject = body.subject;
    const message = body.message;

    if (!name || !phone_no || !email || !subject || !message) {
      return new Response(
        JSON.stringify({
          status: false,
          msg: "All fields are required",
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache, no-store, must-revalidate",
            "Access-Control-Allow-Origin": "*",
            "Made-By": "https://github.com/cachecleanerjeet",
          },
        }
      );
    } else {
      const sendmessage = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          body: JSON.stringify({
            chat_id: CHATID,
            text: `<b>New Contact Request Recieved</b>\n\n<b>IP: </b><code>${request.headers.get(
              "cf-connecting-ip"
            )}</code>\n<b>Name: </b><code>${name}</code>\n<b>Phone No: </b>${phone_no}\n<b>Email: </b>${email}\n<b>Subject: </b><code>${subject}</code>\n<b>Message: </b><code>${message}</code>`,
            parse_mode: "HTML",
          }),
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
        }
      );
      const results = await sendmessage.json();
      if (results.ok == true) {
        var status = {
          status: true,
          msg: "Message sent successfully",
        };
      } else {
        var status = {
          status: false,
          msg: "Error while sending the message",
        };
      }
      return new Response(JSON.stringify(status), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache, no-store, must-revalidate",
          "Access-Control-Allow-Origin": "*",
          "Made-By": "https://github.com/cachecleanerjeet",
        },
      });
    }
  }
}
