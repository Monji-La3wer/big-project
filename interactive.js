function validateForm(e) {
    e.preventDefault()
    var name = document.loginForm.name.value
    var password = document.loginForm.password.value
   if (name.length>=3)
    return alert(`name is required`)
   if (password.length<5)
    return alert(`password length should more than 5`)
}
window.addEventListener('scroll',function(){
    var anim = document.querySelectorAll('.animation')
    for(var s=0; s<anim.length;s++){
        var windowheight= window.innerHeight;
        var animetop =anim[s].getBoundingClientRect().top;
        var animepoint = 150;
        if(animetop<windowheight - animepoint){
            anim[s].classList.add('active');
        }
        else{
            anim[s].classList.remove('active');
        }
    }
})