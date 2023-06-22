const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

var ProductImg = document.getElementById("ProductImg");


var SmallImg = document.getElementsByClassName("SmallImg");

  
  SmallImg[0].onclick = function() {
    
    ProductImg.src = SmallImg[0].src;
  }

  
  SmallImg[1].onclick = function() {
    
    ProductImg.src = SmallImg[1].src;
  }

  
  SmallImg[2].onclick = function() {
    
    ProductImg.src = SmallImg[2].src;
  }

  
  SmallImg[3].onclick = function() {

    ProductImg.src = SmallImg[3].src;
  }