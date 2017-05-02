$("#btn").on("click", function () {
    alert("baby jonson")
})
$("#btn").on("mouseover", function () {
    $("#btn").addclass("big");
    $("#btn").removeclass("small")
});
$("#bite").on("mouseleave", function () {
            $("#bite").addclass("small");
            $("#bite").removeclass("big")
            $("#bite").on("mouseover", function () {
                $("#bite").addclass("big");
                $("#bite").removeclass("small")
            });
            $("#bite").on("mouseleave", function () {
                $("#bite").addclass("small");
                $("#bite").removeclass("big")
            });