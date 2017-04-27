console.log("loaded main.js");

let LoadRandomMarble = () => {

    let bagofmarbles = $("bagofmarbles").children();
    var rand = Math.floor(Math.random * bagofmarbles.length);
    $("#random").html(bagofmarbles[rand].innerHTML);
        
}

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
}