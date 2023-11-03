//khởi tạo các biến tương ứng với các phần như input thanh tìm kiếm, thành phố, quốc gia, ....
var search = document.querySelector('.search');
//khởi tạo biến tương ứng với thanh tìm kiếm
var city = document.querySelector('.city');
//khởi tạo biến tương ứng với thành phố
var country = document.querySelector('.country');
//khởi tạo biến tương ứng với quốc gia
var value = document.querySelector('.value');
//khởi tạo biến tương ứng với giá trị
var ShortDesc = document.querySelector('.short-desc');
//khởi tạo biến tương ứng với thanh tìm kiếm
var visibility = document.querySelector('.visibility span');
//khởi tạo biến tương ứng với khoảng hiển thị
var wind = document.querySelector('.wind span');
//khởi tạo biến tương ứng với gió
var sun = document.querySelector('.sun span');
//khởi tạo biến tương ứng với mặt trời
var value = document.querySelector('.value');
//khởi tạo biến tương ứng với giá trị
var time = document.querySelector('.time');
//khởi tạo biến tương ứng với thời gian
var content = document.querySelector('.content');
//khởi tạo biến tương ứng với nội dung
var body = document.querySelector('body')
//khởi tạo biến tương ứng với thân
//cú pháp gọi Api
async function changeWeatherUI(capitalSearch){
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=69d539405adfac07a67d1b569961ae76`;
    let data = await fetch(apiURL).then(res => res.json())
    //nếu giá trị data == 200
    if(data.cod == 200){
        //xóa các class hide khỏi phần content
        content.classList.remove('hide')
        //gắn giá trị cho các biến ở trên thành dữ liệu từ api
        city.innerText = data.name
        //gắn giá trị cho biến city thành dữ liệu từ api
        country.innerText = data.sys.country
        //gắn giá trị cho biến country thành dữ liệu từ api
        visibility.innerText = data.visibility + 'm'
        //gắn giá trị cho biến visibility thành dữ liệu từ api
        wind.innerText = data.wind.speed + 'm/s'
        //gắn giá trị cho biến wind thành dữ liệu từ api
        sun.innerText = data.main.humidity + '%'
        //gắn giá trị cho biến sun thành dữ liệu từ api
        let temp = Math.round((data.main.temp - 273.15))
        value.innerText = temp
        ShortDesc.innerText = data.weather[0] ? data.weather[0].main: ''
        time.innerText = new Date().toLocaleString('vi')

        console.log(body)
        //điều kiện nhiệt độ để đổi background cho web
        body.setAttribute('class', 'hot')
        //Để background trời nóng
        if(temp <= 25){
        //Nếu nhiệt độ dưới 25 độ C
            body.setAttribute('class','warm')
        //Để background trời ấm
        }

        if(temp <= 22){
        //Nếu nhiệt độ dưới 22 độ C
            body.setAttribute('class','cool')
        //Để background trời mát
        }

        if(temp <= 19){
        //Nếu nhiệt độ dưới 19 độ C
            body.setAttribute('class','cold')
        //Để background trời lạnh
        }
    //nếu không tìm thấy quốc gia, thành phố đã nhập
    }else{
        //thêm class hide cho content
        content.classList.add('hide')
    }
}
//tạo event khi bấm nút enter trên bàn phím sau khi nhập quốc gia/thành phố xong
search.addEventListener('keypress', function(e){
    if(e.code == 'Enter'){
        let capitalSearch = search.value.trim();
        //thực hiện hàm đổi giao diện, thông tin UI ở trên
        changeWeatherUI(capitalSearch)
    }
})

// changeWeatherUI('Ha Noi')