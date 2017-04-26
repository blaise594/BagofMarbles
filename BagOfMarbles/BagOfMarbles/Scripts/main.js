console.log("loaded main.js");

let LoadTheMarbles = () => {

    $.ajax({
        url: "/api/marble",
        datatype: "json",
        success: (marble) => {
           marble.map((n) => {
            $("#BagOfMarbles")
                .append($("<li>").html(m.Color))

           });
        }
    });

$(document).ready(() => {
    console.log("ready...");
});