setInterval(function(){
    var xhr = new XMLHttpRequest();
    URL = 'http://event.qpyou.cn/ci/2015/08/soul_ghost/event?uid=31299208&hash=0d038534ab08a6d0e0157d8314bf2eac&did=175815184&lang=jpn&go_back=http%253A%252F%252Fm-mercury.qpyou.cn%252Fmercury_new%252Fmain&title=News&main=%25E3%2583%25A1%25E3%2582%25A4%25E3%2583%25B3%25E3%2581%25B8%25E6%2588%25BB%25E3%2582%258B&eid=50172&additionalinfo=%7B%22server%22%3A%22asia%22%7D';
    METHOD = 'GET';
    xhr.open(METHOD, URL, true);
    // DOMのParseには 'document' を指定する
    xhr.responseType = 'document';
    xhr.onload = function(e) {
        if (this.status === 200) {
            // ポイント部分のDOMを取得
            var evtCountDom = this.responseXML.getElementById("EVTcount");
            var numImgDom = evtCountDom.getElementsByTagName("img");
            var numCount = numImgDom.length;
            var eventPoint = 0;
            for (var i = 0; i < numCount; i++) {
                // ポイントを算出
                eventPoint += Math.pow(10, numCount - (i + 1)) * numImgDom[i].getAttribute("alt");
            }
            chrome.browserAction.setBadgeText({text:String(eventPoint)});
        }
    };

    xhr.send();
} , 10000);
