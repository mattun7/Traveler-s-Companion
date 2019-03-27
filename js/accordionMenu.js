$(function () {
    $(".accordionbox dt").on("click", function () {
        $(this).next().slideToggle('normal', resetScroll);
        // activeが存在する場合
        if ($(this).children(".accordion_icon").hasClass('active')) {
            // activeを削除
            $(this).children(".accordion_icon").removeClass('active');
        } else {
            // activeを追加
            $(this).children(".accordion_icon").addClass('active');
        }
    });
});

function resetScroll() {
    $('#item3').children('div.content').jScrollPane({
        verticalGutter: 0,
        hideFocus: true,
        showArrows: true
    });
}