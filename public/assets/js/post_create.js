$(function() {
    $('#create-post').click(() => {
        $.ajax({
            url: `http://localhost:3000/posts`,
            type: 'post',
            dataType: 'json',
            contentType:'application/json;charset=utf-8',
            data: JSON.stringify({
                title:  $('#form-title').prop('value'),
                content: $('#form-content').val()
            }),
            success: function(res) {
                // console.log(res)
                if(res.code === 0) {
                    window.location.href = './index.html'
                }else {
                    console.log(res)
                }
            }
        })
    })
})