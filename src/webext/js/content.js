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
        .flex-col{
            flex-direction: column;
        }
        .w-full{
            width: 100%;
        }
        .justify-center{
            justify-content: center;
        }
        .wrap{
            flex-wrap: wrap;
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
        .m-1{
            margin: 0.25em;
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
        <p id="meteo" class="centered">M&eacute;t&eacute;o: ${desc}, ${temp}&deg;C (ressenti: ${feelsLike}&deg;C)</p>
        <div class="wrapper w-full">
            <h3 class="centered">Liens Rapides</h3>
            <h4 class="centered">Liens Vibe</h3>
            <div class="flex flex-col">
                <div class="flex flex-row justify-center wrap">
                    <a class="button" href="/les-level-ups-semaine-a-la-carte">Biblioth&egrave;que des Level-Up</a>
                    <a class="button" href="/liste-des-competences-disponibles">Liste des comp&eacute;tences</a>
                    <a class="button" href="/pauline">Liste de tous les badges</a>
                </div>
                <div class="flex flex-row justify-center wrap">
                    <a class="button" href="/members">Liste des membres</a>
                    <a class="button" href="/mes-badges">Liste de mes badges</a>
                    <a class="button" href="/mes-competences">Liste de mes comp&eacute;tences</a>
                </div>
            </div>
            <h4 class="centered">Liens Externes</h3>
            <div class="flex flex-row justify-center wrap">
            <a class="button" style="background-color: rgb(244,128,36);" href="https://stackoverflow.com/">StackOverflow</a>
            </div>
            <h4 class="centered">Les Favoris de toto</h3>
            <div class="flex flex-row justify-center wrap">
                <a class="button" style="background: linear-gradient(130deg,#ff7a18,#af002d 41.07%,#319197 76.05%);" href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">Guide des flexbox</a>
                <a class="button" href="/members">Liste des membres</a>

            </div>

        </div>
        <div class="wrapper w-full">
            <h3 class="centered">Gestion du compte</h3>
            <div class="flex flex-row justify-center">
                <a class="button" target="_blank" href="/account/general">Param&egrave;tres du compte</a>
                <a class="button" target="_blank" href="/account/password">Changer le mot de passe</a>
                <a class="button" target="_blank" href="/user/?um_action=edit#content">&Eacute;diter mon profil</a>
            </div>
        </div>

        <div class="wrapper w-full">
            <h3 class="centered">Recherche</h3>
            <div class="wrapper flex flex-col">
                <div class="wrapper flex flex-row wrap justify-center">
                    <form target="_blank" action="https://google.com/search" method="GET" class="flex flex-row justify-center m-1">
                        <input type="text" name="q" placeholder="Rechercher sur Google">
                        <button style="background-color: #4C8BF5; border-width: 0;" type="submit"><i style="color:white;" class="fa fa-search"></i></button>
                    </form>
                    <form target="_blank" action="https://www.ecosia.org/search" method="GET" class="flex flex-row justify-center m-1">
                        <input type="text" name="q" placeholder="Rechercher sur Ecosia">
                        <button style="background-color: #4B8B3B; border-width: 0;" type="submit"><i style="color:white;" class="fa fa-search"></i></button>
                    </form>
                    <form target="_blank" action="https://duckduckgo.com/" method="GET" class="flex flex-row justify-center m-1">
                        <input type="text" name="q" placeholder="Rechercher sur DuckDuckGo">
                        <button style="background-color: #FF6600; border-width: 0;" type="submit"><i style="color:white;" class="fa fa-search"></i></button>
                    </form>
                </div>
                <div class="wrapper flex flex-row wrap justify-center">
                    <form target="_blank" action="https://developer.mozilla.org/search" method="GET" class="flex flex-row justify-center m-1">
                        <input type="text" name="q" placeholder="Rechercher sur le MDN">
                        <button style="background-color: #000; border-width: 0;" type="submit"><i style="color:white;" class="fa fa-search"></i></button>
                    </form>
                    <form target="_blank" action="https://css-tricks.com/" method="GET" class="flex flex-row justify-center m-1">
                        <input type="text" name="s" placeholder="Rechercher sur CSS Tricks">
                        <button style="background: linear-gradient(130deg,#ff7a18,#af002d 41.07%,#319197 76.05%); border-width: 0;" type="submit"><i style="color:white;" class="fa fa-search"></i></button>
                    </form>
                    <form target="_blank" action="https://stackoverflow.com/search" method="GET" class="flex flex-row justify-center m-1">
                        <input type="text" name="q" placeholder="Rechercher sur StackOverflow">
                        <button style="background-color: rgb(244,128,36); border-width: 0;" type="submit"><i style="color:white;" class="fa fa-search"></i></button>
                    </form>
                </div>
            </div>
        </div>
        
        <div class="wrapper w-full">
        
        </div>

    </div>
    `
    $('.entry-content').html(dashboardHTML)
    });
    
}
window.onload = function () {
    if (window.location.href==="https://vibe.adatechschool.fr/" || window.location.href.includes("https://vibe.adatechschool.fr/#")) changeWelcomePage();
}