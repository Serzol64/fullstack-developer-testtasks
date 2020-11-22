$(document).ready(function () {
    const form = $('.form > form');

    form.submit(FormDataSend);
});
function FormDataSend(form) {
    const data = $('.form > form');
    const query = FormData(data);

    const headerprogressbar = $('#main > .content:nth-child(1) header h3');
    const console_content = $('#main > .content .console span');

//Подготовка данных...

    headerprogressbar.text(SendEnd(0));

    console_content.text(JSON.stringify(data.serializeArray()) + "\n");


//Отправка данных...

    ServiceCall(query,data.attr('action'),data.attr('method'));

//Завершение операции...

    return false;
}