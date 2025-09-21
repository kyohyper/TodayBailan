const list = [
    "已经努力了0.1秒，先休息一会~~", 
    "宇宙都在膨胀，我休息一会儿怎么了？", 
    "脑子已经打烊了，明天再来。", 
    "今天只负责休息~", 
    "进度+0 经验+0 快乐+100。"
];

function nextQuote() {
    const i = Math.floor(Math.random() * list.length);

    document.getElementById("quote").textContent = list[i];
}

nextQuote();