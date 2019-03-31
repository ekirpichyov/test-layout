//async image loading
$(document).ready(function(){
    $(".big-image").each(function(index, element){
        $(element).attr("src", $(element).attr("data-src"));
    });
});

//slider

$(document).ready(function(){
    $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    variableWidth: true,
    asNavFor: '.slider-nav',
    fade: true
 });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        variableWidth: true,
        focusOnSelect: true
    });
});

//button replacer

const specialButtons = document.getElementsByClassName("special-buttons")[0]
const tabletParent = document.getElementsByClassName("price")[0]
const desktopParent = document.getElementsByClassName("product")[0]
const tabletSibiling = document.getElementsByClassName("price__calculation")[0]

const replaceButtons = () => { 
    if($("body").width() <= 1024 && desktopParent.contains(specialButtons)){
        specialButtons.remove()
        tabletParent.insertBefore(specialButtons, tabletSibiling)
    } else if (tabletParent.contains(specialButtons)) {
        specialButtons.remove()
        desktopParent.appendChild(specialButtons)
    }
}

$(document).ready(replaceButtons)
$(window).resize(replaceButtons)

//show full image popup

const img = $("<img class='popup'>")
const closeButton = $("<div class='close'><i class='fas fa-times'></i><div/>")
const popup = $("<div class='slider__popup'></div>")

    $("html").on("click", ".big-image", ()=>{
        popup.appendTo("body")
        img.attr("src", "images/"+$(event.target).attr("value")+"-big.jpg")
        img.appendTo(".slider__popup")

        closeButton.appendTo(".slider__popup")
    })

    $("html").on("click touchover", ".close", ()=>{
        $(".popup").remove()
        $(".close").remove()
        $(".slider__popup").remove()
    })

//show calculate popup

const calculatePopup = $('<div class="calculate__popup">\
<div id="popup" action="" method="post">\
    <label for="name">Имя: </label>\
    <input type="text" name="name" id="name" placeholder="Введите имя">\
    <label for="number">Телефон: </label>\
    <input type="tel" name="number" id="number" placeholder="Введите номер">\
    <input type="submit" id="submit" disabled value="Отправить"></div></div>')

    $("html").on("click", ".price__calculation", ()=>{
        calculatePopup.appendTo("body")
        closeButton.appendTo("body")
    })

    $("html").on("click touchover", ".close", ()=>{
        $(".calculate__popup").remove()
        $(".close").remove()
    })

//todo: validate