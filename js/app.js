AOS.init();

function typ(element){

    let fullText = '',
    i = 0,
    innerText = element.html();
    
    
    let int = setInterval(() => {
        
        fullText += innerText[i]
        i++
        if (innerText.length - 1 < i) {
            clearInterval(int)
        }
        element.html(fullText)
    }, 1000)
}
    typ($('.header_title-span'));
function typing(element){

    let fullText = '',
    i = 0,
    innerText = element.html();
    
    
    let int = setInterval(() => {
        
        fullText += innerText[i]
        i++
        if (innerText.length - 1 < i) {
            clearInterval(int)
        }
        element.html(fullText)
    }, 50)
}

    typing($('.cv'));
    typing($('.cv2'));
    typing($('.cv3'));



    // scroll settings
    // $(window).on('scroll',function () {
    //     if (pageYOffset < 0) {
    //         $('.nav').css({
               
    //         })
    //     }if (pageYOffset < 300) {
    //         $('.nav').css({
    //             background: 'blue'
    //         })}
    //     else if(pageYOffset < 500){
    //         $('.nav').css({
    //             position: 'fixed',
    //         })
    //     }
    // })

    