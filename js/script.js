function addClickListener() {
    const btn = $('#btn');
    btn.click(generateEmail);
}
function generateEmail() {
    for (let i=0; i<10; i++){
    $.ajax({
        url: 'https://flynn.boolean.careers/exercises/api/random/mail',
        method: 'GET',
        success: function(data) {
            console.log(data);
            const mail = data.response;
            console.log(mail);
            const target = $('#target');
            target.append('<li><p>' + mail,'</p></li>');
            const res = true;
        },
        error: function() {
            console.log('error');
        }
    }); }
}

function init() {
   addClickListener();
}
document.addEventListener('DOMContentLoaded', init);