
// var prev = document.querySelector('.prev')
// var next = document.querySelector('.next')
// var galaryElement = document.querySelector('.element-slider')
// var galary = document.querySelector('.galary')
// var CurentIndex = 0;

// function ShowElement(){
//     if(CurentIndex == 0){
//         prev.classList.add('hide')
//     }else
//         prev.classList.remove('hide')
//     // ElementSection.src = 
//     // galaryElement.src = 
// }

// prev.addEventListener('click', function(){
//     if (CurentIndex > 0 ){
//         CurentIndex--
//         ShowElement()
//     }
// })


// // Lấy danh sách các phần tử
// var sliderItems = document.querySelectorAll('.slider-section-7 .content-section-main-7');

// // Thiết lập chỉ mục hiện tại và số lượng phần tử
// var currentSlide = 0;
// var totalSlides = sliderItems.length;

// // Xử lý sự kiện click cho nút "Previous"
// document.getElementById('prev').addEventListener('click', function() {
//   sliderItems[currentSlide].classList.remove('active');
//   currentSlide--;
//   if (currentSlide < 0) {
//     currentSlide = totalSlides - 1;
//   }
//   sliderItems[currentSlide].classList.add('active');
// });

// // Xử lý sự kiện click cho nút "Next"
// document.getElementById('next').addEventListener('click', function() {
//   sliderItems[currentSlide].classList.remove('active');
//   currentSlide++;
//   if (currentSlide >= totalSlides) {
//     currentSlide = 0;
//   }
//   sliderItems[currentSlide].classList.add('active');
// });