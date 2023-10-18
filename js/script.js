'use strict'
document.querySelector('.right').onclick = function(){
    const widthItem = document.querySelector('.classic-spring').offsetWidth;
    document.querySelector('.men-item').scrollLeft += widthItem;
}
document.querySelector('.left').onclick = function(){
    const widthItem = document.querySelector('.classic-spring').offsetWidth;
    document.querySelector('.men-item').scrollLeft -= widthItem;
}