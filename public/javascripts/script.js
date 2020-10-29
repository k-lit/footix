$("#btn-search").click(function () {
  var filter = $("#new-search").val();
  $("h4").each(function () {
    console.log($(this).text());
    console.log(filter);
    console.log($(this).text().includes(filter));
    if ($(this).text().includes(filter) || filter == "") {
      $(this).parent().fadeIn();
    } else {
      $(this).parent().parent().delay(200).fadeOut();
    }
  });
});

var match = document.getElementsByClassName("card");
for (var card of match)
  card.addEventListener("click", function () {
    match = "click détécté !";
    console.log(match);
  });

// function alert() {
//   confirm("Confirmer l'envoi");
// }

// {
//   txt = "Message envoyé!";
// } else {
//   txt = "Envoi annulé";
// }
// document.getElementById("send").innerHTML = txt;
// }
