
    // Ищем в html элемент с id dino
const dino = document.getElementById('dino'); 

    // Ищем в html элемент с id cactus
const cactus = document.getElementById('cactus'); 

        // Функция jump() отвечает за выполнение действия прыжка для элемента с dino
    function jump(){
        if (dino.classList !='jump') {
            dino.classList.add('jump');

            setTimeout (function () {
                dino.classList.remove('jump');
            }, 300)
        }
    }

        // Делаем игру интерактивной 
        // Выполняем проверку состояния игры для проверки столкновения между динозавром и кактусом 
        // Если кактус слишком близко и динозавр не в прыжке, игроку показывается предупреждение "Uh-oh... Try again"
    let isAlive = setInterval(function () {


        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'))
    
    
            let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'))
                console.log(cactusLeft)

                if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
                    alert('Uh-oh... Try again')
                }

    }, 10)

    // Добавляем обработчик событий к документу, чтобы слушать нажатия клавиш
    // Код позволяет динозавру прыгать когда пользователь нажимает любую клавишу на клавиатуре
document.addEventListener('keydown', function(event) {
    jump()
});
