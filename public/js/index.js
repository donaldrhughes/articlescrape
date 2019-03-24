$("#submitBtn").on("click", function () {
    var id = $(this).attr("data-id");

    $.ajax({
        method: "POST",
        url: "/notes/" + id,
        data: {
            note: "id.note"
        }

    })
        .then(function (data) {
            console.log(data);

         
        });

    $("#addNote").val("");

});
