// business logic
function Order(type, crust, size, topping) {
    this.type = type;
    this.crust = crust;
    this.size = size;
    this.topping = topping;
}

Order.prototype.fullOrder = function () {
    return this.type + " with a crust of " + this.crust + " and size " + this.topping + " as a topping";
}

function Total(quantity, delivery, price) {
    this.quantity = quantity;
    this.delivery = delivery;
    this.price = price;
}
Total.prototype.finalTotal = function () {
    return this.price * this.quantity + this.delivery;
};

var sizePrice = [ 1500, 900, 600];
var deliveryPrice = [0, 200];
var crustPrice = [150, 200, 300, 285];

// user interface
// USE OF JQUERY

$(document).ready(function () {
    $('form#myForm').submit(function (event) {
        // event.preventDefault();
        var pizzaType = $('#type').val();
        var pizzaSize = parseInt($('#size').val());
        var pizzaCrust = $('#crust').val();
        var pizzaPick = parseInt($('#pick').val());
        var pizzaTop = $('#top').val();
        var pizzaQty = parseInt($('#qty').val());
        var price = sizePrice[pizzaSize - 1];
        var deliveryFee = deliveryPrice[pizzaPick - 1];

         newOrder = new Order(pizzaType, pizzaSize, pizzaCrust, pizzaTop);
         newTotal = new Total(price, deliveryFee, pizzaQty);

        if (pizzaPick === 1) {
            alert("Your order is : " + newOrder.fullOrder() + " click to see your total bill.");
            alert("Your bill is: " + newTotal.finalTotal());
        } else {
            // (pizzaPick === 2) {
                prompt("Please enter your location.");
                alert("Your order has been received and will be delivered to your location.");
                alert("Your order is : " + newOrder.fullOrder() + " click to see your total bill.");
                alert("Your bill is: " + newTotal.finalTotal());
            
        };
    });
});