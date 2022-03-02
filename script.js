const questions = document.querySelectorAll('.question');
const showBtn = document.querySelectorAll('.question-btn');


//solve 2

questions.forEach(function(question){
 const btn = question.querySelector('.question-btn');
 btn.addEventListener('click', function(){
     
     questions.forEach(function(item){
        if(item !== question){
            item.classList.remove('show-text');
        } 
     });

     question.classList.toggle('show-text');
 });
});



//solve 1
// showBtn.forEach(function(btn){
//    btn.addEventListener('click', function(e){
//        e.currentTarget.parentElement.parentElement.classList.toggle('show-text');
//    })
// });


