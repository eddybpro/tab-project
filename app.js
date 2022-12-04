const btns = document.querySelectorAll('.btn')
const historyBtn = document.querySelector('.history')
const visionBtn = document.querySelector('.vision')
const goalsBtn = document.querySelector('.goals')
const paraTitle = document.querySelector('.para-title')
const textContent = document.getElementById('txt-content')


btns.forEach(btn => {
    btn.addEventListener('click',(e)=>{

        for (let i = 0; i < btns.length; i++) {
            if(e.currentTarget){
                btn.style.backgroundColor = '#fff'
                btn.classList.remove('hover')

            }if(e.currentTarget != btns[i]){
                btns[i].style.backgroundColor = '#dcdbdb';
                btns[i].classList.add('hover')
            }
            
        }
    })
});


historyBtn.addEventListener('click', ()=>{

    paraTitle.innerText ='History';
    textContent.innerText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur fugiat nesciunt. Neque possimus, accusamus dolore doloribus quasi beatae ducimus, ipsa in iusto, optio et quod illo dicta nihil Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dicta commodi illum minus. Unde maxime fugiat ipsam neque sunt voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur fugiat nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur fugiat nesciunt.'
})

visionBtn.addEventListener('click', ()=>{
    
    paraTitle.innerText ='Vision';
    textContent.innerText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur fugiat nesciunt. Neque possimus, accusamus dolore doloribus quasi beatae ducimus, ipsa in iusto, optio et quod illo dicta nihil Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dicta commodi illum minus. Unde maxime fugiat ipsam neque sunt voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur fugiat nesciunt. Neque possimus, accusamus dolore doloribus quasi beatae ducimus, ipsa in iusto, optio et quod illo dicta nihil Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dicta commodi illum minus. Unde maxime fugiat ipsam neque sunt voluptatem.'
})

goalsBtn.addEventListener('click', ()=>{
    paraTitle.innerText ='Goals';
    textContent.innerText=`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur fugiat nesciunt. Neque possimus, accusamus dolore doloribus quasi beatae ducimus, ipsa in iusto, optio et quod illo dicta nihil Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dicta commodi illum minus. Unde maxime fugiat ipsam neque sunt voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur fugiat nesciunt.
    goal: 1
    goal: 2
    goal: 3.`
})

























