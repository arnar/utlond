// expand images
$(function () {
    $("#post img").each(function () {
        var el = $(this);
        el.wrap("<div class=\"photo\"></div>");
        el.after("<span>" + el.attr("alt") + "</span>");
    });
});

