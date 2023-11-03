//Khởi tạo các biến để lấy giá trị từ các thẻ được gắn class vào ở bên html
let openShopping = document.querySelector('.shopping');
//Khởi tạo biến openShopping để lấy giá trị từ các thẻ được gắn class shopping vào ở bên html
let closeShopping = document.querySelector('.closeShopping');
//Khởi tạo biến closeShopping để lấy giá trị từ các thẻ được gắn class closeShopping vào ở bên html
let list = document.querySelector('.list');
//Khởi tạo biến list để lấy giá trị từ các thẻ được gắn class list vào ở bên html
let listCard = document.querySelector('.listCard');
//Khởi tạo biến listCard để lấy giá trị từ các thẻ được gắn class listCard vào ở bên html
let body = document.querySelector('body');
//Khởi tạo biến body để lấy giá trị từ các thẻ được gắn class body vào ở bên html
let total = document.querySelector('.total');
//Khởi tạo biến total để lấy giá trị từ các thẻ được gắn class total vào ở bên html
let quantity = document.querySelector('.quantity');
//Khởi tạo biến quantity để lấy giá trị từ các thẻ được gắn class quantity vào ở bên html
//Khi nút bấm giỏ hàng được kích hoạt vào thì sẽ xảy ra sự kiện thêm sản phẩm vào giỏ hàng
openShopping.addEventListener('click', ()=>{
//Khi bấm nút thêm giỏ hàng
    body.classList.add('active');
//Xảy ra sự kiện thêm sản phẩm vào giỏ hàng
})
//Khi nút bấm xóa giỏ hàng thì sản phẩm sẽ bị xóa ra khỏi giỏ hàng
closeShopping.addEventListener('click', ()=>{
//Khi bấm nút xóa giỏ hàng
    body.classList.remove('active');
//Sản phẩm sẽ bị xóa ra khỏi giỏ hàng
})

//list các danh sách sản phẩm được hiển thị lên trên trang web
let products = [
    {
        id: 1,
        name: 'KẸO NGÔ',
        image: 'KEONGO.webp',
        price: 99000
    },
//Hiển thị sản phẩm KẸO NGÔ lên trang web.
    {
        id: 2,
        name: 'MẠNG NHỆN TRANG TRÍ',
        image: 'mangnhen.jpg',
        price: 120000
    },
//Hiển thị sản phẩm MẠNG NHỆN TRANG TRÍ lên trang web.
    {
        id: 3,
        name: 'GIỎ BÍ NGÔ',
        image: 'giobingo.jpg',
        price: 220000
    },
//Hiển thị sản phẩm GIỎ BÍ NGÔ lên trang web.
    {
        id: 4,
        name: 'ĐÈN BÍ NGÔ',
        image: 'denbingo.jpg',
        price: 123000
    },
//Hiển thị sản phẩm ĐÈN BÍ NGÔ lên trang web.
    {
        id: 5,
        name: 'TRANG PHỤC CƯỚP BIỂN',
        image: 'cuopbien.jpg',
        price: 720000
    },
//Hiển thị sản phẩm TRANG PHỤC CƯỚP BIỂN lên trang web.
    {
        id: 6,
        name: 'TRANG PHỤC BỘ XƯƠNG',
        image: 'boxuong.jpg',
        price: 520000
    },
//Hiển thị sản phẩm TRANG PHỤC BỘ XƯƠNG lên trang web.
    {
        id: 7,
        name: 'MIẾNG DÁN HALLOWEEN',
        image: 'miengdan.jpg',
        price: 123000
    },
//Hiển thị sản phẩm MIẾNG DÁN HALLOWEEN lên trang web.
    {
        id: 8,
        name: 'HÌNH NỘM',
        image: 'hinhnom.webp',
        price: 320000
    },
//Hiển thị sản phẩm HÌNH NỘM lên trang web.
    {
        id: 9,
        name: 'NỒI XÁCH TAY MINI',
        image: 'noixachtay.webp',
        price: 128000
    }
//Hiển thị sản phẩm NỒI XÁCH TAY MINI lên trang web.
];

//Lấy các giá trị từ các trường mà mình đã khai báo ở bên trên
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        //Khởi tạo thành phần lấy từng giá trị của sản phẩm vào từng div (từng ô đồ ăn)
        let newDiv = document.createElement('div');
        //Thêm sản phẩm được lấy tía trị vào div
        newDiv.classList.add('item');
        //Lấy các giá trị như image, title và price từ dữ liệu
        newDiv.innerHTML = `
            <img src="/image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">THÊM VÀO GIỎ HÀNG</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
//Chuyển dữ liệu giữa dạng json và string thông qua key của product
//Chức năng thanh giỏ hàng
function reloadCard(){
    listCard.innerHTML = '';
    //Đếm các sản phẩm trong giỏ hàng
    let count = 0;
    //Tính tổng các sản phẩm trong giỏ hàng
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            //Lấy các sản phẩm mà mình đã bấm thêm vào giỏ hàng vào trong phần thanh giỏ hàng
            newDiv.innerHTML = `
                <div><img src="/./../image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button class="dau" onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button class="dau" onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
//Thay đổi số lượng sản phẩm trong giỏ hàng
function changeQuantity(key, quantity){
    if(quantity == 0){
    //Nếu số lượng bằng 0
        delete listCards[key];
    //Xóa sản phẩm
    }else{
        listCards[key].quantity = quantity;
        //tăng số lượng
        listCards[key].price = quantity * products[key].price;
        //đơn giá=số lượng nhân với giá của sản phẩm
    }
    reloadCard();
    //Tải lại thẻ
}