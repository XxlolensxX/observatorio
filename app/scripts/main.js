$(document).ready(function () {
    $('.common-collapse__body').hide();
    $('.common-collapse__btn').click(function () {
        $(this).siblings('.common-collapse__body').slideToggle(400);
        $(this).children('.icon-elem').toggleClass('animate');
        $(this).toggleClass('active');
    });

    var $textbuscar = 'Búsqueda';
    var $textcancelar = 'Cancelar';
    $('#buscar').click(function () {
        $('#search-box--desktop').slideToggle(200);
        $(this).parent().toggleClass('active');
        $('.icon-elem', this).toggleClass('icon-elem--search');
        $('.icon-elem', this).toggleClass('icon-elem--close');
        $('.text-btn', this).text(function (i, text) {
            return text === $textcancelar ? $textbuscar : $textcancelar;
        });
    });

    $("#horizon-anchor").stick_in_parent();
    $("#single-anchor").stick_in_parent();

    $('.list-dropdown__list').hide();
    $('.list-dropdown__trigger').click(function () {
        $('.list-dropdown__list').slideToggle();
        $('.icon-elem', this).toggleClass('animate');
        $(this).toggleClass('active');
    });
});