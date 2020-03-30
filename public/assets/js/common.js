function getHerfId(href) {
    var href = href
    var str = href.split('?')[1] 
    // 判断 str 是否存在
    if (!str) {
        alert('请注意查看是否携带有id')
        return
    }
    var arr = str.split('&')
    var result = {}
    arr.forEach(item => {
        var tmp = item.split('=')
        result[tmp[0]] = tmp[1]
    })

    console.log(result.id)
    return result.id
}