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
    const element = document.querySelector('.graphic4');
    
    // アニメーションパラメータ
    let amplitude = 3; // 浮遊の強さ
    let speed = 0.004; // 浮遊の速さ
    let offsetY = 80; // Y軸方向の移動量

    function animate() {
        // サイン波で上下の浮遊を実現
        offsetY = amplitude * Math.sin(Date.now() * speed);

        // CSSに変換を適用 (浮遊 + -15度の回転)
        element.style.transform = `translateY(${offsetY}px) rotate(-15deg)`;

        // アニメーションを継続
        requestAnimationFrame(animate);
    }

    // 初期状態で回転を適用
    element.style.transform = `rotate(-15deg)`;

    // アニメーション開始
    animate();
});


// DOMの読み込み後にアニメーション開始
window.addEventListener('load', () => {
    const element = document.querySelector('.graphic5');
    
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