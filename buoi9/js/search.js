//Khởi tạo chức năng tìm kiếm
function searchfunc(){
  //Khởi tạo các biến để lấy các giá trị nhập vào từ các thẻ html đã được gắn id 
    let menusearch= document.querySelector('#menu__search');
    //Khởi tạo biến menusearch để lấy giá trị từ các thẻ được gắn id #menu__search vào ở bên html
    let menuitems= Array.from (document.querySelectorAll('.menu__item'));
    //Khởi tạo biến menuitems để lấy giá trị từ các thẻ được gắn id .menu__item vào ở bên html
    //Chuyển các chữ cái in hoa về in thường mà người dùng nhập vào
    menusearch.value=menusearch.value.toLowerCase();
    //Tìm kiếm các nội dung có chữ cái tương tự như người dùng nhập vào bên ô html
    menuitems.forEach(function(el){
      let text=el.innerText;
      if(text.indexOf(menusearch.value)>-1)
      el.style.display="";
      else el.style.display="none";
      //Hiển thị cái mình tìm kiếm
    })
  }