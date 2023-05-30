var urlParam = function (name) {

    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
        return null;
    }
    else {
        return decodeURI(results[1]) || 0;
    }
}

var language = {
    en: {
        h1_title:"JFET application",
        lang: "Language",
        help: ""
    },
    sk: {
        h1_title:"JFET aplikácia",
        lang: "Jazyk",
        help: " "
    }
};

var lan = urlParam('lang');
if (lan != null) {
    //console.log(lan);
    lan = lan.split("_");
    lan = lan[0];
    //console.log(lan);
}

var userLocale =
    (navigator.languages && navigator.languages.length
        ? navigator.languages[0]
        : navigator.language);
if (lan != null && (lan == 'en' || lan == 'sk')) {
    userLocale = lan;
} else if (userLocale != null) {
    userLocale = userLocale.split("-")
    userLocale = userLocale[0]
} else {
    userLocale = document.getElementsByTagName('html')[0].getAttribute('lang');
}

console.log(userLocale);

function changeAction(value) {
    if ((window.location.href.indexOf("?lang=en") > -1) || (window.location.href.indexOf("?lang=sk") > -1)) {
        window.location.href = window.location.href.slice(0, -8) + value;
    } else
        window.location.href = window.location.href + value;
}



if (window.location.href.indexOf("?lang=en") > -1) {
    h1_title.textContent = language.en.h1_title;
    help.textContent = language.en.help;
    lang.textContent = language.en.lang;
} else {
    h1_title.textContent = language.sk.h1_title;
    help.textContent = language.sk.help;
    lang.textContent = language.sk.lang;
}
