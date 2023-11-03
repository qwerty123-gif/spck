//Khởi tạo các biến để lấy giá trị từ các thẻ html đã được gắn class
let slider = document.querySelector('.slider .list');
//Khởi tạo biến slider để lấy giá trị từ các thẻ được gắn class .slider .list vào ở bên html
let items = document.querySelectorAll('.slider .list .item');
//Khởi tạo biến items để lấy giá trị từ các thẻ được gắn class .slider .list .item vào ở bên html
let next = document.getElementById('next');
//Khởi tạo biến next để lấy giá trị từ các thẻ được gắn class next vào ở bên html
let prev = document.getElementById('prev');
//Khởi tạo biến prev để lấy giá trị từ các thẻ được gắn class prev vào ở bên html
let dots = document.querySelectorAll('.slider .dots li');
//Khởi tạo biến dots để lấy giá trị từ các thẻ được gắn class .slider .dots li vào ở bên html
let lengthItems = items.length - 1;
let active = 0;
//Khởi tạo chúc năng bấm vào chuyển sang các trang sau
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
//Khởi tạo chức năng bấm vào chuyển sang các trang trước
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
//Khởi tạo chức năng cập nhật slider về trạng và trang đầu
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // khởi tạo chức năng khi bấm vào các chấm tròn sẽ chuyển đến hình ảnh của trang chấm tròn đó
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
//Chuyển sang trang mình ấn vào khi bấm nút tròn
})
window.onresize = function(event) {
    reloadSlider();
};

