$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");
  
  // Tangkap elemen audio dari HTML
  var music = document.getElementById("bg-music");

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
    // Mainkan musik saat amplop dibuka
    music.play();
  }
  
  function close() {
    envelope.addClass("close").removeClass("open");
    // Hentikan musik saat amplop ditutup
    music.pause();
    // Kembalikan durasi musik ke detik 0 (awal)
    music.currentTime = 0;
  }
});
