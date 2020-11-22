function FormData(data){
    return data.serialize();
}

function SendEnd(code){
    let msg;

    if(0 == code){ msg="Подготовка данных..."; }
    else if(1 == code){ msg="Идёт отправка..."; }
    else if(2 == code){ msg="Получение результатов..."; }
    else if(3 == code){ msg="Ваша оценка успешна отправлена!\nМы постараемся исполнить ваше желание, чтобы сделать наш музей ещё лучше<3"; }
    else if(4 == code){ msg="Ошибка отправки данных! Попробуйте повторить попытку позже;-("; }
    return msg;

}

function ServiceCall(query,service,method) {
    const headerprogressbar = $('#main > .content:nth-child(1) header h3');
    $.ajax({
        type: method,
        url: service,
        data: query,
        beforeSend: function () {
            headerprogressbar.text(SendEnd(1));
        },
        success: function (response) {

            headerprogressbar.text(SendEnd(2));

            if(response == "Success"){ alert(SendEnd(3)); }
            else{ alert(SendEnd(4)); }

            headerprogressbar.text("Введите следующие данные");
        }
    });
}