$(document).ready(function () {

    $('[data-func="loadmore"]').click(function (e) {
        e.preventDefault();
      var $posts_per_page = $(this).attr("data-postsperpage");
      var $template = $(this).attr("data-template");
      var $term = $(this).attr("data-term");
      var $taxonomy = $(this).attr("data-taxonomy");
      if( $(this).attr("data-posttype")){
         $post_type = $(this).attr("data-posttype");
      }else{
         $post_type = false;
      }
      var $paged =  parseInt($(this).attr("data-page")) + 1;
      $(this).attr("data-page", $paged);
      $buton = $(this);
      $.ajax({
        url: "/wp-json/load/more/",
        dataType:'json',
        method: "POST",
        data:  { 'posts_per_page': $posts_per_page, 'template' : $template, 'taxonomy' : $taxonomy, 'term': $term, 'paged' : $paged, 'post_type' : $post_type}
      }).done(function(result) {
        if(result.max_num_pages==$paged || result.max_num_pages==0){
          $($buton).remove();
        }
        $(".archive__results.gridle-row").append( result.html );
      });

      }
    )

    $('.common-collapse__body').hide();
    $('.common-collapse__btn').click(function (e) {
        e.preventDefault();
        $(this).siblings('.common-collapse__body').slideToggle();
        $(this).children('.icon-elem').toggleClass('animate');
    });

    var $textbuscar = 'Búsqueda';
    var $textcancelar = 'Cancelar';
    $('#buscar').click(function (e) {
        e.preventDefault();
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

$(document).on('submit','#filtro',function(){
  var data = $(this).serialize();
  $.ajax({
    method : 'POST',
    url : 'filtro.php',
    dataType : 'json',
    data : data,
    succes : function(data){
      //$(".parent").html(data).fadeIn();
      alert(data);
    },
    //complete: function(){
    //  setTimeout(function(){
    //    $(".parent").fadeOut;
    //  },15000);
    //}
  });
});
