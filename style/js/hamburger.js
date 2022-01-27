
    const menuBtn=document.querySelector('.hamburger');
    const menu=document.querySelector('.menu');
    let menuOpen=false;
    
    menuBtn.addEventListener('click',function(){
        if(menuOpen==false) {
            menuBtn.classList.add('open');
            menuOpen=true;
            menu.style.width='100%';
        } else {
            menuBtn.classList.remove('open');
            menuOpen=false;
            menu.style.width='0%';
        }
    });
