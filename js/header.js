function loadHeader() {
    fetch('../header.html')
        .then(response => response.text())
        .then(html => {
            document.querySelector('header').innerHTML = html; 
        })
        .catch(error => {
            console.error('ヘッダーの読み込みエラー:', error);
        });
}

document.addEventListener('DOMContentLoaded', loadHeader);