---
layout: page
titlebar: true
ft-image: ''
title: Contact [beta]
customTitle: Samenwerken?
subTitle: Laat een berichtje achter
permalink: Contact-beta
add-to-menu: true
fullWidth: false
short-desc: ''
pageWidgets:
- template: widget-page
  buttonShow: true
  title: Mail me
  subtitle: Direct mailen
  body: Antwoord binnen een paar uur tot 2 dagen
  buttonLabel: Mailen
  buttonHref: hello@lennertderyck.be?subject=Hallo!
- template: widget-page
  buttonShow: true
  title: Linked In
  subtitle: Zakelijk
  body: Antwoord binnen een paar uur
  buttonLabel: Linked In
  buttonHref: https://www.linkedin.com/in/lenndertderyck/
- template: widget-page
  buttonShow: true
  title: Messenger
  body: Antwoord binnen een paar uur
  subtitle: Let's have a chat
  buttonHref: https://www.messenger.com/t/1997323257173637
  buttonLabel: Messenger

---

<div class="row">
  <div class="col-12">
    <form action="">
      <div class="form-group mb-4">
        <label for="contactFormName">naam</label>
        <input type="text" class="form-control" id="contactFormName" placeholder="Fons Van Calleberghe">
      </div>
      <div class="form-group mb-4">
        <label for="contactFormEmail">email</label>
        <input type="email" class="form-control" id="contactFormEmail" placeholder="willyfons@gmail.com">
      </div>
      <div class="form-group mb-4">
        <label for="contactFormCompany">organisatie / bedrijf</label>
        <input type="text" class="form-control" id="contactFormCompany" placeholder="Planeet Jamaica">
      </div>
      <div class="form-group mb-4">
        <label for="contactFormSubject">onderwerp</label>
        <input type="text" class="form-control" id="contactFormSubject" placeholder="Zalmtoastjes en Orvallekes">
      </div>
      <div class="form-group form-control-textarea">
        <label for="contactFormMessage">bericht</label>
        <small class="d-block mb-3 fontw-700"><i class="fab fa-markdown"></i><span class="ml-1">Markdown supported</span></small>
        <textarea class="form-control" id="contactFormMessage" rows="2"></textarea>
      </div>
      <a class="btn" href="#">verzenden</a>
    </form>
  </div>
</div>