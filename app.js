let zoom = document.querySelector('.zoom');
zoom.addEventListener('mousemove', (e) => {
    zoom.style.setProperty('--zoom-show', 1);
    //  lấy lần lược vị trí x,y theo đơn vị px
    let positionPx = e.x - zoom.getBoundingClientRect().left;
    let positionPy = e.y - zoom.getBoundingClientRect().top;
    //  chuyển đổi sang đơn vị % 
    let positionX = 100 * positionPx / zoom.offsetWidth;
    let positionY = 100 * positionPy / zoom.offsetHeight;
    // gán vào biến
    zoom.style.setProperty('--zoom-x', positionX + '%');
    zoom.style.setProperty('--zoom-y', positionY + '%');
})
zoom.addEventListener('mouseout', ()=>{
    zoom.style.setProperty('--zoom-show', 0);
})
// <!-- code from youtube Lun Dev -->