let myStr = "Je hebt links je hebt rechts maar je hebt ook kaas maar ja kaas is anders dan als je een pet op hebt. Dus eigenlijk als je een poster plakt toch op een gebouw betekend het nog niet dat in 2002 de pizza's over datum waren. -Bokoesam-"; //dit is een variabele van het datatype string, waarom? Omdat er woorden worden gebruikt. vul je antwoord in op de lijn
let myInt = 5; //dit is een variabele van het datatype interjure waarom? omdat er een cijfer word gebruikt zonder decimale getallen. vul je antwoorden in op de lijn

//Waarom staat er let voor de variabelen? Een reeks tekens. vul je antwoord in op de lijn

function getName(naam){ //In op welke regel in de HTML file wordt deze functie aangeroepen Regel 17. vul je antwoord in op de lijn

    // vul in wat naam is: naam is de parameter. vul je antwoord in op de lijn, je hebt de eerste letter al gekregen
    // vul in: naam heeft de waarde onclick. de waarde noemen we een Attribute. vul je antwoord in op de lijn, je hebt de eerste letter al gekregen

    alert(naam); //dit toont een alert op het scherm met de tekst de pagina meldt het volgende. deze tekst staan op regel 17. van de HTML vul je antwoord in op de lijn
}

function hideMe(){ //mag je de naam van de functie veranderen? dat mag maar dan ga je de afbeeling niet kunnen zien vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "none"; 
    document.getElementById("show").style.display = "block"; 
    // wat gebeurd er in deze functie? als je erop klikt geeft het de andere afbeelding weer. en waar wordt deze in je HTML aangeroepen? op regel 23 en 25 vul je antwoorden in op de lijn
}

function show(){ //als ik de naam van deze functie verander, waar verander ik deze dan in de HTML die vernader je in de "" van onclick. vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "block"; // wat doet getElementById? zo kan je de id in de html aanroepen zonder die # te gebruiken vul je antwoord in op de lijn
    document.getElementById("show").style.display = "none";     
    // wat gebeurd er in deze functie? dat de weergegeven afbeelding nu toont en de andere niet. vul je antwoord in op de lijn
}

function rekenen(getal){ //In op welke regel in de HTML file wordt deze functie aangeroepen regel 32  en wanneer wordt deze aangeroepen op het klikken van de knop. vul je antwoord in op de lijn

    let antwoord = myInt + getal; //waar komt de waarde van myInt van regel 2 in de javascript sheet en waar komt de waarde van getal vandaan? bij de index.html op regel 32 vul je antwoord in op de lijn

    document.querySelector(".som").innerHTML = antwoord;  // wat doet querySelector? het zorgt ervoor dat het de class in je html aan je js kan linken.  Wat is antwoord hier? vul je antwoorden in op de lijn
    
    //wat gebeurt er in deze functie? de som word uitgerekend en het aantwoord wordt weergegeven. vul je antwoord in op de lijn

    //verander de waarde van myInt (zorg dat je een getal gebruikt) en refresh de pagina, wat gebeurd er? dan komt er een nieuw antwoord de staan op basis van de nummer die j ehebt ingevoerd  vul je antwoord in op de lijn
    //probeer ook eens de + in een - te veranderen of in een * als waarde van de variabele antwoord (regel 28), zie je wat er gebeurt?
}

function setColor(element, kleur, size){ //In op welke regel in de HTML file wordt deze functie aangeroepen regel 44 vul je antwoord in op de lijn

    element.style.color = kleur; //waar komt de waarde van element vandaan this en waar komt de waarde van kleur vandaan? orange vul je antwoord in op de lijn
    element.style.fontSize = size; //waar komt de waarde van szie vandaan? 30px vul je antwoord in op de lijn

    //wat gebeurt er in deze functie? dat de kleur en grootte wordt gewijzigd bij het klikken vul je antwoord in op de lijn
}

getName(myStr);
// wat gebeurd er hierboven je krijgt een pop up melding met die tekst en wanneer gebeurt dat bij het openen van de webpage (tip ververs je pagina eens in je brouwser? vul je antwoord in op de lijn.
// verander de waarde van myStr en kijk wat er dan gebeurt (ververs je browser en test het uit) wat gebeurd er? die waarde wordt dan weergegeven vul je antwoord in op de lijn.