window.addEventListener('load', () => {
    // header.htmlを非同期で取得
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            // 取得したHTMLを<header></header>タグに挿入
            document.querySelector('header').innerHTML = data;
        })
        .catch(error => {
            console.error('ヘッダーの読み込みに失敗しました:', error);
        });
});