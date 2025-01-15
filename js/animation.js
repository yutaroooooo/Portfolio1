// DOMの読み込み後にアニメーション開始
window.addEventListener('load', () => {
    const element = document.querySelector('.graphic1');
    
    // アニメーションパラメータ
    let amplitude = 3; // 浮遊の強さ
    let speed = 0.004; // 浮遊の速さ
    let offsetY = 80; // Y軸方向の移動量

    function animate() {
        // サイン波で上下の浮遊を実現
        offsetY = amplitude * Math.sin(Date.now() * speed);

        // CSSに変換を適用
        element.style.transform = `translateY(${offsetY}px)`;

        // アニメーションを継続
        requestAnimationFrame(animate);
    }

    // アニメーション開始
    animate();
});

// DOMの読み込み後にアニメーション開始
window.addEventListener('load', () => {
    const element = document.querySelector('.graphic2');
    
    // アニメーションパラメータ
    let amplitude = 3; // 浮遊の強さ
    let speed = 0.004; // 浮遊の速さ
    let offsetY = 80; // Y軸方向の移動量

    function animate() {
        // サイン波で上下の浮遊を実現
        offsetY = amplitude * Math.sin(Date.now() * speed);

        // CSSに変換を適用
        element.style.transform = `translateY(${offsetY}px)`;

        // アニメーションを継続
        requestAnimationFrame(animate);
    }

    // アニメーション開始
    animate();
});

// DOMの読み込み後にアニメーション開始
window.addEventListener('load', () => {
    const element = document.querySelector('.graphic3');
    
    let rotationY = 0; // Y軸回転の初期角度

    function animate() {
        // Y軸回転のアニメーション
        rotationY += 1; // 1度ずつ回転
        if (rotationY >= 360) {
            rotationY = 0; // 360度を超えたら再び0度に戻る
        }

        // CSSのtransformプロパティで回転を適用
        element.style.transform = `rotateY(${rotationY}deg)`;

        // アニメーションを継続
        requestAnimationFrame(animate);
    }

    // アニメーション開始
    animate();
});