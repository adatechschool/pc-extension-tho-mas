var changeWelcomePage = function (style) {

    let name = $('p.um-header-avatar-name').find('a').text().split(' ')[0]
    if (name.length === 0) window.location.replace('https://vibe.adatechschool.fr/login')
    $('.entry-content').empty();
    
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

        let dashboardHTML = `<div class='wrapper w-full'>
        <h2 class="centered">Bienvenue sur Vibe, ${name}! 🙂</h2>
        <p id="meteo" class="centered">M&eacute;t&eacute;o: ${desc}, ${temp}&deg;C (ressenti: ${feelsLike}&deg;C)</p>
        <div class="wrapper w-full">
            <h3 class="centered">Liens Rapides</h3>
            <h4 class="centered">Liens Vibe</h3>
            <div class="flex flex-col">
                <div class="flex flex-row justify-center">
                    <a class="button" href="/les-level-ups-semaine-a-la-carte">Biblioth&egrave;que des Level-Up</a>
                    <a class="button" href="/liste-des-competences-disponibles">Liste des comp&eacute;tences</a>
                    <a class="button" href="/pauline">Liste de tous les badges</a>
                </div>
                <div class="flex flex-row justify-center">
                    <a class="button" href="/members">Liste des membres</a>
                    <a class="button" href="/mes-badges">Liste de mes badges</a>
                    <a class="button" href="/mes-competences">Liste de mes comp&eacute;tences</a>
                </div>
            </div>
            <h4 class="centered">Liens Externes</h3>
            <div class="flex flex-col">
                <div class="flex flex-row justify-center">
                    <a class="button" target="_blank" style="background-color: rgb(244,128,36);" href="https://stackoverflow.com/"><i class="fab fa-stack-overflow"></i>&nbsp;StackOverflow</a>
                    <a class="button" target="_blank" style="background-color: #161B22;" href="https://github.com/"><i class="fab fa-github"></i>&nbsp;GitHub</a>
                    <a class="button" target="_blank" style="background-color: #2977c9;" href="https://www.linkedin.com/"><i class="fab fa-linkedin"></i>&nbsp;LinkedIn</a>
                </div>
                <div class="flex flex-row justify-center">
                    <a class="button" target="_blank" style="background-color: #2557a7;" href="https://www.indeed.com/"><i class="fas fa-info"></i>&nbsp;Indeed</a>
                    <a class="button" target="_blank" style="background-color: rgb(12, 170, 65);" href="https://www.glassdoor.fr/"><i class="fas fa-door-open"></i>&nbsp;Glassdoor</a>
                    <a class="button" target="_blank" style="background-color: rgb(255, 205, 0);" href="https://www.welcometothejungle.com/"><i class="fas fa-door-open"></i>&nbsp;Welcome to the Jungle</a>
                </div>
            </div>
            <h4 class="centered">Les Favoris de toto</h3>
            <div class="flex flex-row justify-center wrap">
                <a class="button" target="_blank" style="background: linear-gradient(130deg,#ff7a18,#af002d 41.07%,#319197 76.05%);" href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"><i class="fab fa-css3"></i>&nbsp;Guide des flexbox</a>
                <a class="button" target="_blank" style="background: linear-gradient(130deg,#ff7a18,#af002d 41.07%,#319197 76.05%);" href="https://css-tricks.com/examples/GradientBorder/"><i class="fab fa-css3"></i>&nbsp;Exemples de bordures d&eacute;grad&eacute;es</a>
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

var createNewPage = function (page_title,content_title,content,style) {
    $('.page-content').empty();
    $('.page-title').text(content_title)
    $("title").text(page_title+" – Vibe – Ada Tech School")
    $("body").removeClass("error404").addClass("page-template page-template-template-parts page-template-template-leftsidebar page-template-template-partstemplate-leftsidebar-php page")
    $(style).appendTo("head");
    $('.page-content').html(content)
    }

var badgesDisplay = function (style) {
    let styleRefacto = `<style>
    ul.ls_grid_container.grid {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row
        justify-content: flex-start;
        align-content: flex-start;
    }
    div#badgeos-achievements-container ul.ls_grid_container.grid li {
        width: 10vw;
        border: none;
        padding: 0;
    }
    .badgeos-arrange-buttons {
        display:flex;
        justify-content:space-between;
    }
    .badgeos-filter span, .badgeos-searchbar{
        margin: 0 1rem 0 1rem;
    }
    </style>
    `

    let searchBarHTML = '<div class="badgeos-searchbar"><input id="searchbar" type="text" placeholder="Search for a badge..."></div>'
    let filterHTML = '<div class="badgeos-filter"><input id="earned-filter" type="checkbox" checked="checked"><span>Voir les comp&eacute;tences d&eacute;j&agrave; obtenues</span></div>'
    $(style).appendTo("head")
    $(styleRefacto).appendTo("head")
    $('#badgeos-achievements-container').on('change DOMNodeInserted', 'ul', function () {
        $('.badgeos-item-description').remove()
        $('.badgeos-item-image').css('paddingBottom','0')

        let obtainedHTML = `<div class="badgeos-obtained-badges"><span>Comp&eacute;tences obtenues: ${$('.user-has-earned').length}/52</span></div>`

        $(".badgeos-arrange-buttons").html(searchBarHTML+obtainedHTML+filterHTML)
        $('#searchbar').on('change keyup paste click',function(){
            $('.badgeos-item-image').find('a').toArray().forEach(e=>{
                badgeName = e.getAttribute('href').split('/')[5]
                if (!(badgeName.includes($(this).val())) && ($(this).val().length != 0)) $(e).parents('li').css('display', 'none')
                else $(e).parents('li').css('display', 'list-item')
            })
        })
        $('#earned-filter').on('click', _=>{
            if ($('#earned-filter').prop('checked') == false) $('.user-has-earned').parents('li').css('display', 'none')
            else $('.user-has-earned').parents('li').css('display', 'list-item')
        })

        
    })
}

var usersSidebar = function() {

    $.ajax({
        async: true,
        url: "https://vibe.adatechschool.fr/wp-json/wp/v2/users?per_page=100"
    }).done(response =>{
        let sidebarStyle=`<style>
        #user-sidebar {
            width: 20%;
            float: right;
        }
        #body-flex{
            display:flex;
            justify-content: space-between;
        }
        .user-card a {
            display: flex;

        }
        #content{
            width: 80vw;
        }
        .user-name{
            padding-left: 2rem;
        }
        .user-photo img{
            padding-left: 1rem
        }
        .user-card {
            padding: 1rem 0.5rem 1rem 0.5rem;
            background-color: white;
            border-radius:20px;
            margin:0.5rem;
            width: 90%;
            box-shadow: 1px 9px 22px -6px rgba(0,0,0,0.1);
            -webkit-box-shadow: 1px 9px 22px -6px rgba(0,0,0,0.1);
            -moz-box-shadow: 1px 9px 22px -6px rgba(0,0,0,0.1);
        }
        </style>`
        let html = `<div id="user-sidebar">
        `
        let link
        for (const user of response) {
            link = `https://vibe.adatechschool.fr/user/${user.slug}`
            let userHtml = `
            <div class="user-card">
                <a class="user-link" href="${link}" target="_blank">
                    <div class="user-photo">
                        <img src="${user.avatar_urls['24']}" alt="${user.name}" srcset="${user.avatar_urls['24']}">
                    </div>
                    <div class="user-card-text">
                        <span class="user-name">${user.name}</span>
                    </div>
                </a>
            </div>
            `
            html += userHtml
        }
        html+="</div>"
        $('#masthead').after('<div id="body-flex"></div>')
        $("#page div.boot-row").has('div').has('#content').detach().appendTo("#body-flex");
        $('#body-flex').append(html);
        $(sidebarStyle).appendTo('head')
    })
}

window.onload = function () {
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
    if (window.location.href==="https://vibe.adatechschool.fr/" || window.location.href.includes("https://vibe.adatechschool.fr/#")) changeWelcomePage(style);
    else if (window.location.href==="https://vibe.adatechschool.fr/tob" || window.location.href.includes("https://vibe.adatechschool.fr/tob#")) createNewPage('tob','Tob',`<div class='wrapper w-full'>test</div>`,style);
    else if (window.location.href==="https://vibe.adatechschool.fr/liste-des-competences-disponibles" || window.location.href.includes("https://vibe.adatechschool.fr/liste-des-competences-disponibles#")) badgesDisplay(style)
    usersSidebar()
}