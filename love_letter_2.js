$(document).ready(function () {
  var envelope = $("#envelope");
  var wrapper = $(".envlope-wrapper");
  var btnOpen = $("#open");
  var resetBar = $(".reset");
  var overlay = $("#full-letter-overlay");
  var btnCloseLetter = $("#close-letter");

  envelope.on("click", openEnvelope);
  btnOpen.on("click", openEnvelope);
  btnCloseLetter.on("click", closeLetter);

  // klik area gelap di luar kertas juga menutup popup
  overlay.on("click", function (e) {
    if (e.target === overlay.get(0)) {
      closeLetter();
    }
  });

  function openEnvelope() {
    if (envelope.hasClass("open")) return;

    envelope.addClass("open").removeClass("close");
    resetBar.addClass("hidden-btn");

    // Tunggu animasi amplop terbuka selesai, lalu amplop menghilang
    // dan kertas surat besar muncul
    setTimeout(function () {
      wrapper.addClass("faded");
      overlay.addClass("show");
    }, 900);
  }

  function closeLetter() {
    overlay.removeClass("show");

    setTimeout(function () {
      wrapper.removeClass("faded");
      envelope.addClass("close").removeClass("open");
      resetBar.removeClass("hidden-btn");
    }, 400);
  }
});
