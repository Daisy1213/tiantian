//若输入框为空，阻止表单的提交
function checkInput() {
    var a = document.getElementsByTagName("input")[0].value;
    var b = document.getElementsByTagName("input")[1].value;
    if(a != '' && b != ''){
        $("#login").attr('disabled', false);
        //TODO
    }
}
