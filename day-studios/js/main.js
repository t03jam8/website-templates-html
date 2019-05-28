// Smooth Scrolling
$("#navbar a, .btn").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;
    const offset = this.hash === "#navbar" ? 0 : 80;
    console.log("here", offset);

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - offset
      },
      600
    );
  }
});
