$(document).ready(function () {
    $('button').click(pobierzDane);

    function pobierzDane() {
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {
            console.log(data);


            let div = $('<div id="dane-programisty">')
            $('body').append(div);

            let paragraf1 = $('<p>').text(data.imie);
            let paragraf2 = $('<p>').text(data.nazwisko);
            let paragraf3 = $('<p>').text(data.zawod);
            let paragraf4 = $('<p>').text(data.firma);

            $('#dane-programisty').append(paragraf1);
            $('#dane-programisty').append(paragraf2);
            $('#dane-programisty').append(paragraf3);
            $('#dane-programisty').append(paragraf4);






        })
    }


})