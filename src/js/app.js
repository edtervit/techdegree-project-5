function mySearch(){
    let input = document.getElementById('search');
    let upperInput = input.value.toUpperCase();
    let allImgs = document.getElementsByTagName('a');
    
    for ( i = 0; i < allImgs.length; ++i) {
        
        let caption = allImgs[i].getAttributeNode('data-caption').value.toUpperCase();

        if (caption.includes(upperInput)){
            allImgs[i].removeAttribute('hidden','')
        }
        else {
            allImgs[i].setAttribute('hidden','')
        }
        
    }

}

