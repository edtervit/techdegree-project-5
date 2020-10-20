function mySearch(){
    let input = document.getElementById('search');
    let upperInput = input.value.toUpperCase();
    let allImgs = document.getElementsByTagName('a');
    // console.log(imgs[0].getAttributeNode('data-caption'));

    
    for ( i = 0; i < allImgs.length; ++i) {
        
        let caption = allImgs[i].getAttributeNode('data-caption').value.toUpperCase();

        if (caption.includes(upperInput)){
            console.log(allImgs[i].getAttributeNode('data-caption').value);
            allImgs[i].removeAttribute('hidden','')
        }
        else {
            allImgs[i].setAttribute('hidden','')
        }
        
    }

}

