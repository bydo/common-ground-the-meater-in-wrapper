$(document).ready (function () {
    $(['.good','.bad','.okay']).map(
    $('.good').click(function (g) {
        $('.good').map(function () { this.style.opacity = 1;});
    // holy shit there has to be a better way to do this.
    });
});
