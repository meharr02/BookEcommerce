if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-area')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('unit')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('shop')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    console.log("nope")
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    console.log("yes")
    var cartRow = document.createElement('div')
    cartRow.classList.add('box')
    var cartItems = document.getElementsByClassName('shop')[0]
    console.log(cartItems)
    var cartRowContents = `
        <div class="shop">	
            <div class="box">
                <img class="cart-item-image" src="${imageSrc}">
                <div class="content">
                   <h3> <span class="cart-item-title">${title}</span></h3>
                    <h4>Price: <span class="cart-price">${price}</span></h4>
                    Quantity: <input class="unit" style="width: 35%;" type="number" value="1">
                    <button  class="btn-area" type="button" style=" "><i aria-hidden="true" class="fa fa-trash"></i>Remove</button>
                </div>
            </div>
            <div class="right-bar">
            <p><span>Total</span> <span class="cart-total-price">$0</span></p><button class="btn-purchase" type="button"><i class="fa fa-shopping-cart"></i>Checkout</button>
        </div>
       
`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-area')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('unit')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('shop')[0]
    var cartRows = cartItemContainer.getElementsByClassName('box')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('unit')[0]
        var price = parseFloat(priceElement.innerText.replace('Rs', ''))
        console.log(price)
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = 'Rs' + total
}