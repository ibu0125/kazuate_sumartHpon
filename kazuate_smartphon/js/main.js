'use strict';
{
    let ansCount = 1;
    const $gameScreen = document.querySelector('.gameScreen');
    const h1 = document.createElement('h1');
    const resultH1 = document.createElement('h1');
    const $gameInput = document.querySelector('.gameInput');
    const $startBtn = document.querySelector('.startBtn');
    const $mainContainer = document.querySelector('.mainContainer');
    const $gameContainer = document.querySelector('.gameContainer');
    const $ansBtn = document.querySelector('.ansBtn');
    const $correct = document.querySelector('#correct');
    const $result = document.querySelector('#result');
    var $ansText = document.querySelector('#ansText');
    let ans = Math.floor(Math.random()*20) + 1;
    let $finishBtn;
    let $thirdImg;

    $startBtn.addEventListener('click',() => {
        $mainContainer.classList.toggle('active');
        $gameContainer.classList.toggle('active');
    });

    $ansBtn.addEventListener('click',function () {
        let $num = Number(document.getElementById('ansText').value);
        $result.appendChild(resultH1);
        $correct.appendChild(h1);
        console.log (ans);
        console.log (typeof $num);
        if($num > 20) {
            h1.textContent = '1~20にしろ';
        } else if (Number.isNaN($num)) {
            return;
        } else if ($num === ans) {
            $result.classList.toggle('resultActive1');
            $gameScreen.classList.toggle('resultActive3');
            resultH1.textContent = 'congratularion! 正解です！';
            finish();
        } else if ($num > ans) {
            alert('もう少し小さいよ！');
            ansCount ++;
            if(ansCount === 6) {
                $result.classList.toggle('resultActive2');
                $gameScreen.classList.toggle('resultActive3');
                resultH1.textContent = 'game over';
                finish();
            }
        } else {
            alert('もう少し大きいよ！');
            ansCount ++;
            if(ansCount === 6) {
                $result.classList.toggle('resultActive2');
                $gameScreen.classList.toggle('resultActive3');
                resultH1.textContent = 'game over';
                finish();
            }
        }     
       

        $ansText.value = '';
        $ansText.focus();
    });


    function finish() {
        $ansText.disabled = true;
        $ansBtn.disabled = true;
        $finishBtn = document.createElement('button');
        $finishBtn.classList.add('finishBtn');
        $finishBtn.textContent = 'finish';
        $finishBtn.addEventListener('click',restartGame);
        $result.appendChild($finishBtn);
        h1.textContent = '';
    }

    function restartGame() {
        $ansText.disabled = false;
        $ansBtn.disabled = false;

        while($correct.firstChild) {
            $correct.removeChild($correct.firstChild);
        }

        resultH1.textContent = '';
        $finishBtn.parentNode.removeChild($finishBtn);
        ansCount = 1;
        ans = Math.floor(Math.random()*20) + 1;

        $mainContainer.classList.toggle('active');
        $gameContainer.classList.toggle('active');
        $gameScreen.classList.toggle('resultActive3');
        if ($result.classList.contains('resultActive1') == true) {
            $result.classList.toggle('resultActive1');
        } else {
            $result.classList.toggle('resultActive2');
        }
    }


}
