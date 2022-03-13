const images=['flower1.jpg','flower2.jpg','flower3.jpg','flower4.jpg','flower5.jpg','flower6.jpg']
let imgIndex =0;
const imageSlider =document.getElementById('image-slider')
setInterval(()=>{

if(imgIndex >= images.length){
    imgIndex=0
}
const imgUrl = images[imgIndex]
imageSlider.setAttribute('src',imgUrl)
imgIndex++
},2000)
