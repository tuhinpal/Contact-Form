[![Contact Form](https://telegra.ph/file/052787c00bcbc37cb88a0.png "Contact Form")](https://github.com/cachecleanerjeet/Contact-Form "Contact Form")

------------

### Features :

- Cool Layout
- Message goes on your Telegram
- 7 KB of JS Code 
- Serverless Backend (Cloudflare Worker)
- One Line of Integration


### Deploy :

**Setup the Backend  👇**

- Create a Telegram Bot from [Botfather](http://telegram.dog/botfather "Botfather") & Grab the Token.
- Goto your created bot and send <code>/start</code>.
- Now GoTo  [userinfobot](http://telegram.dog/userinfobot "userinfobot") send it any message it will give your Telegram ID (9 Digit) and copy the ID.
- Open <code>[cf-worker.js](https://github.com/cachecleanerjeet/Contact-Form/blob/main/cf-worker.js "cf-worker.js")</code> and copy the whole code.
- Go to <code>[Cloudflare Workers](https://workers.cloudflare.com/ "Cloudflare Workers")</code> and create a worker & paste the copied code.
- Replace the <code>BOT_TOKEN</code> & <code>CHATID</code> with your previously copied Bot Token and User ID.
- Save and Deploy & copy the Worker Url

**Connect it with your website 👇**
- Paste this Script  :

```html
<script src="https://cdn.jsdelivr.net/gh/cachecleanerjeet/contact-form@master/src/contact-form.min.js" id="contactform" form_worker_url="https://yourapp.example.workers.dev/"></script>

<!-- Replace https://yourapp.example.workers.dev with your backend url-->
```

**Use The Backend API 👇**
- This is very simple to, Just do a POST or GET request with this JSON Body 


```json
{
   "name" : "Tuhin Kanti Pal",
   "phone_no" : "000000000",
   "email" : "me@thetuhin.com",
   "subject" : "Just a Testing",
   "message" : "Just a Testing"
}
```

### Connect :
- [Channel](https://telegram.dog/tprojects)
- [Support Group](https://telegram.dog/t_projects)

### License & Copyright :
- This Project is [Apache-2.0](https://github.com/cachecleanerjeet/Contact-Form/blob/main/LICENSE) Licensed
- Copyright 2021 by [Tuhin Kanti Pal](https://github.com/cachecleanerjeet)





