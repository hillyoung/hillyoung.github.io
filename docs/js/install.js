/** 
 * 智能机浏览器版本信息:
 */
 
 var browser={
    versions: function() { 
        var u = navigator.userAgent, app = navigator.appVersion; 
        return {//移动终端浏览器版本信息
                trident: u.indexOf('Trident') > -1, //IE内核
                presto: u.indexOf('Presto') > -1, //opera内核
                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
                mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                // ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
                iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf('iPad') > -1, //是否iPad
                webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };
    }(),
    language:(navigator.browserLanguage || navigator.language).toLowerCase()
}

appInfo = {
    "bttool":{
        "ios":null,
        "Android":"https://www.pgyer.com/bttool"
    }
}

function isEmpty(obj) {
    return obj == null ||
    obj == undefined
}

window.onload = function() {
    var urlObj = new URL(window.location.href)
    let type = urlObj.searchParams.get("type")
    let appInfo = this.appInfo[type]
    if (isEmpty(type) ||
        isEmpty(appInfo)) {
        document.getElementById("s-message").innerHTML = "未找到应用信息"
    } else {
        if(this.browser.versions.ios) {
            let url = appInfo["ios"]
            let link = "<a href='" + url +"'>点击安装</a>"
            document.getElementById("s-message").innerHTML = isEmpty(url) ? "暂不提供iOS版本":link
        } else {
            let url = appInfo["Android"]
            if (isEmpty(url)) {
                document.getElementById("s-message").innerHTML = "暂不提供Android版本"
            } else {
                document.getElementById("s-message").innerHTML = "正在下载请稍后"
                window.location.href = url
            }
        }
        console.log(browser.versions)
    }
}