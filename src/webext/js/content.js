var getName = function (name) {
    var nameEQ = /wordpress_sec_[a-f0-9]{32}=/
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(47,c.length);
    }
    return null;
}
var changeWelcomePage = function () {
    $('.entry-content').empty();
    
    let style = `<style>
        .wrapper{
            margin:1em;
        }
        .centered{
            text-align: center;
        }
        .entry-content{
            border-radius: 1em;
            margin-bottom: 2em;
            background-color: white;
            box-shadow: 1px 9px 22px -6px rgba(0,0,0,0.75);
            -webkit-box-shadow: 1px 9px 22px -6px rgba(0,0,0,0.75);
            -moz-box-shadow: 1px 9px 22px -6px rgba(0,0,0,0.75);
        }
        .flex{
            display: flex;
        }
        .flex-row{
            flex-direction: row;
        }
        .w-full{
            width: 100%;
        }
        .justify-center{
            justify-content: center;
        }
        .button{
            background-color:#e74f3c;
            border-radius:10px;
            color: #fff;
            margin: 0.25em;
        }
        .entry-content a{
            text-decoration: none;
        }
    <style>
    `
    $(style).appendTo("head");
    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": "https://community-open-weather-map.p.rapidapi.com/weather?q=Paris&lat=48.85285&lon=2.36459&lang=fr&units=metric&mode=json",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "c92e4d7844mshc972d7d4a238bd1p12b5edjsn760445d6a2e7",
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
        }
    }).done(function (response) {
        let desc = response.weather[0].description
        let temp = response.main.temp
        let feelsLike = response.main.feels_like

        let name = $('p.um-header-avatar-name').find('a').text().split(' ')[0]

        let dashboardHTML = `<div class='wrapper w-full'>
        <h2 class="centered">Bienvenue sur Vibe, ${name}! 🙂</h2>
        <p id="meteo" class="centered">M&eacute;t&eacute;o: ${desc}, ${temp}&deg;C (ressentie: ${feelsLike}&deg;C)</p>
        <div class="wrapper w-full">
            <h3 class="centered">Gestion du compte</h3>
            <div class="flex flex-row justify-center">
                <a class="button" target="_blank" href="/account/general">Param&egrave;tres du compte</a>
                <a class="button" target="_blank" href="/account/password">Changer le mot de passe</a>
                <a class="button" target="_blank" href="/user/thomas+blochet?um_action=edit#content">&Eacute;diter mon profil</a>
            </div>
        </div>
        <div class="wrapper w-full">
            <h3 class="centered">Liens Rapides</h3>
        </div>
        <div class="wrapper w-full">
            <h3 class="centered">Recherches</h3>
            <div class="flex flex-row justify-center">
                <a class="button" target="_blank" href="/les-level-ups-semaine-a-la-carte">Biblioth&egrave;que des Level-Up</a>
                <a class="button" target="_blank" href="/liste-des-competences-disponibles">Liste des comp&eacute;tences</a>
            </div>
        </div>
        
    </div>
    `
    $('.entry-content').html(dashboardHTML)
    });
    
}
window.onload = function () {
    if (window.location.href === 'https://vibe.adatechschool.fr/') changeWelcomePage();
}