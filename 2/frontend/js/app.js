$(document).ready(function () {
    $('#welcomeModal').modal('show');
    $('#footer > .content #hidder').click(FirstBut_Trigger);
    $('#footer > .content #animator').click(TwoBut_Trigger);
});


function FirstBut_Trigger(e,t) {
    const header = $('#header');

    if (!header.is('.hiddenel')) { header.addClass('hiddenel'); } 
    else { header.removeClass('hiddenel'); }
}
function TwoBut_Trigger(e,t) {
    const left = $('#main > .content:nth-child(1)');
    const middle = $('#main > .content:nth-child(2)');

    if(left.find('a')){ middle.insertBefore(left); }
    else{ middle.insertAfter(left); }

    return false;
}