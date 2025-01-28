// DOMの読み込み後にアニメーション開始
window.addEventListener('load', () => {
    // 各要素に対応するクラス
    const elements = [
        { selector: '.GraphicCircle3D', hasRotation: false },
        { selector: '.GraphicDistortedCircle', hasRotation: false },
        { selector: '.GraphicBearGraphic', hasRotation: true },  // 回転を適用する要素
        { selector: '.GraphicHeartGraphic', hasRotation: false }
    ];

    // アニメーションパラメータ
    let amplitude = 3; // 浮遊の強さ
    let speed = 0.004; // 浮遊の速さ
    let offsetY = 80;  // Y軸方向の移動量

    // アニメーション処理
    function animate(element, hasRotation) {
        function animateElement() {
            // サイン波で上下の浮遊を実現
            offsetY = amplitude * Math.sin(Date.now() * speed);

            // 回転を適用した場合、回転角度を追加
            let transform = `translateY(${offsetY}px)`;
            if (hasRotation) {
                transform += ' rotate(-15deg)';
            }

            // CSSに変換を適用
            element.style.transform = transform;

            // アニメーションを継続
            requestAnimationFrame(animateElement);
        }

        // 初期状態で回転を適用（.GraphicBearGraphic の場合）
        if (hasRotation) {
            element.style.transform = 'rotate(-15deg)';
        }

        // アニメーション開始
        animateElement();
    }

    // 各要素にアニメーションを適用
    elements.forEach(({ selector, hasRotation }) => {
        const element = document.querySelector(selector);
        if (element) {
            animate(element, hasRotation);
        }
    });
});