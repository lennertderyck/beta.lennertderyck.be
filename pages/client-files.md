---
layout: page
titlebar: true
title: Bestanden
customTitle: Bestanden
subTitle: downloads
permalink: "/files"
add-to-menu: true
ft-image: ''
fullWidth: false
short-desc:
buttonShow: true
pageWidgets: []

---
### Sleutel
##### Invoeren om te activeren
Voer eerst de sleutel in die je per mail ontving om je downloads te bekijken. Vul ook je e-mailadres in zodat wanneer nodig we je een nieuwe code kunnen sturen.

Als je een volgende keer op deze pagina terecht komt zal je direct doorgestuurd worden naar je downloads.
Je kan dan altijd naar beta.lennertderyck.be/files om deze te bekijken.

<form id="clientFilesKey">
    <div class="row">
        <div class="col-12 col-md-6">
            <div class="form-group">
                <label for="contactFormName">Sleutel</label>
                <input type="text" name="key" required class="form-control" placeholder="Bijvoorbeeld ZHUBXRzCZ67DS">
            </div>
        </div>
        <div class="col-12 col-md-6">
            <div class="form-group">
                <label for="contactFormName">E-mailadres</label>
                <input type="email" name="email" required class="form-control" placeholder="">
            </div>
        </div>
    </div>
    <button class="btn" type="submit">Opslaan</button>
</form>

<script> 
    clientFilesKeys.initialize();
</script>