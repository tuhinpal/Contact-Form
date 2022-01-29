[![Contact Form](https://telegra.ph/file/052787c00bcbc37cb88a0.png "Contact Form")](https://github.com/tuhinpal/Contact-Form "Contact Form")

---

### Features :

- Cool Layout
- Message goes on your Telegram
- 7 KB of JS Code
- Serverless Backend (Cloudflare Worker)
- One Line of Integration

### Deploy :

**Setup the Backend 👇**

- Create a Telegram Bot from [Botfather](http://telegram.dog/botfather "Botfather") & Grab the Token.
- Goto your created bot and send <code>/start</code>.
- Now GoTo [userinfobot](http://telegram.dog/userinfobot "userinfobot") send it any message it will give your Telegram ID (9 Digit) and copy the ID.
- Open <code>[cf-worker.js](https://github.com/tuhinpal/Contact-Form/blob/main/cf-worker.js "cf-worker.js")</code> and copy the whole code.
- Go to <code>[Cloudflare Workers](https://workers.cloudflare.com/ "Cloudflare Workers")</code> and create a worker & paste the copied code.
- Replace the <code>BOT_TOKEN</code> & <code>CHATID</code> with your previously copied Bot Token and User ID.
- Save and Deploy & copy the Worker Url

**Connect it with your website 👇**

- Paste this Script :

```html
<!--- 

    error_text: Message to display if there is an error.
    success_text: Message to display if the form is successfully submitted.
    disable_waittime: If true, it will not froze a new form subission (after one is successfull) for half a day.
    form_worker_url: URL to the cloudflare backend.

  -->

<script
  src="/src/contact-form.js"
  id="contactform"
  error_text=""
  success_text=""
  disable_waittime="true"
  form_worker_url="https://contact-form.tprojects.workers.dev/"
></script>
```

**Use The Backend API 👇**

- This is very simple too, Just do a POST request with this JSON Body

```JSON
{
  "name": "Tuhin Kanti Pal",
  "phone_no": "000000000",
  "email": "me@thetuhin.com",
  "subject": "Just a Testing",
  "message": "Just a Testing"
}
```

### Connect :

- [Channel](https://telegram.dog/tprojects)
- [Support Group](https://telegram.dog/t_projects)

### License & Copyright :

- This Project is [Apache-2.0](https://github.com/tuhinpal/Contact-Form/blob/main/LICENSE) Licensed
- Copyright 2022 by [Tuhin Kanti Pal](https://github.com/tuhinpal)
