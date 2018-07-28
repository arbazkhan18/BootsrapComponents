$(document).ready(() => {
    $("#modalButton").click(function () {

        $(".mymodal").show();
    });


    $(".close").click(() => {

        $(".mymodal").hide();
    });

    $("#close2").click(() => {

        $(".mymodal").hide();
    });



    $(window).click((event) => {

        if (event.target.id == "myModal") {
            $(".mymodal").hide();
        }

    });


});