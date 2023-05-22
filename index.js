$(document).ready(function () {
  //2.1
  function toggleHeader() {
    $(".btn-warning").on("click", function () {
      $(".header").toggleClass("hide");
    });
  }
  toggleHeader();

  //2.2
  function swipeBlocks() {
    $(".btn-success").on("click", function () {
      if ($(".one").hasClass("first-by-order")) {
        $(".one").removeClass("first-by-order");
        $(".one").addClass("second-by-order");

        $(".two").removeClass("second-by-order");
        $(".two").addClass("first-by-order");
      } else {
        $(".one").removeClass("second-by-order");
        $(".one").addClass("first-by-order");

        $(".two").removeClass("first-by-order");
        $(".two").addClass("second-by-order");
      }
    });
  }
  swipeBlocks();

  //2.3
  $(window).on("load", function () {
    $(".modal").modal("show");
  });

  $(".modal__close-button").click(function () {
          $(".window").removeClass("modal");
          $(".window").addClass("modal_close");
  })})