let $inp = document.querySelectorAll("table input"),
    $btn = document.querySelectorAll("table button"),
    $form = document.querySelectorAll("table form"),
    $lside = document.querySelectorAll("table tr td:first-of-type"),
    $rside = document.querySelectorAll("table tr td:last-of-type")
    
const correct = '<img src="img/correct.jpg" alt="">'
const wrong = '<img src="img/wrong.jpg" alt="">'

const answers = ["лелека", "ставок", "чайник", "торт", "вогонь", "цукерка", "зошит", "вікно", "хліб", "свічка"]


for(let i = 0; i < $btn.length; i++) {
    $btn[i].addEventListener('click', (event)=> {
        if ($inp[i].value.toLowerCase().trim() == answers[i]){
            $lside[i].classList.add('correctBg')
            $rside[i].innerHTML = correct
        } else {
            $lside[i].classList.add('wrongBg')
            $rside[i].innerHTML = wrong
        }
    })
}

for(let i = 0; i < $form.length; i++) {
    $form[i].addEventListener("click", function(event){
        event.preventDefault()
    })
}