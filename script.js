let memories = document.querySelectorAll(".memory");

window.addEventListener("scroll", function(){

    memories.forEach(function(memory){

        let position = memory.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;

        if(position < screenHeight - 100){
            memory.classList.add("show");
        }

    });

});