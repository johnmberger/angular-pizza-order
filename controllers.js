(function() {
  'use strict';

  const app = angular.module('pizzaApp');

  app.controller('pizzaCtrl', function() {
    this.deliveryOption = 'pickup';
    this.size = 'Small';
    this.crust = 'White';
    this.sauce = 'Tomato';
    this.selectedToppings = [];
    this.subtotal = 8;
    this.deliveryFee = 0;

    this.submit = function() {
      alert('Thanks for your order!');
    }

    this.addTopping = function(topping) {
      if (this.selectedToppings.length) {
        if (this.selectedToppings.indexOf(topping) === -1) {
          this.selectedToppings.push(topping);
        } else {
          this.selectedToppings.splice(this.selectedToppings.indexOf(topping), 1);
        }
      } else {
        this.selectedToppings.push(topping);
      }
    }

    this.updatePricing = function() {
      var total = 0;
      var sizeCost = 0;
      if (this.deliveryOption === 'delivery') {
        this.deliveryFee = 5;
      }
      if (this.size === 'Small') {
        sizeCost = 8;
      } else if (this.size === 'Medium') {
        sizeCost = 10;
      } else if (this.size === 'Large') {
        sizeCost = 12;
      } else {
        sizeCost = 14;
      }
      this.selectedToppings.forEach((topping) => {
        total += topping.price;
      });
      this.subtotal = total + sizeCost;
    }

    this.toppings = [
      {
        id: 1,
        name: 'Extra Cheese',
        price: 1.75
      },
      {
        id: 2,
        name: 'Pepperoni',
        price: 0.75
      },
      {
        id: 3,
        name: 'Sausage',
        price: 0.75
      },
      {
        id: 4,
        name: 'Bacon',
        price: 1.50
      },
      {
        id: 5,
        name: 'Salami',
        price: 0.75
      },
      {
        id: 6,
        name: 'Ham',
        price: 0.75
      },
      {
        id: 7,
        name: 'Chicken',
        price: 1.50
      },
      {
        id: 8,
        name: 'Feta Cheese',
        price: 0.75
      },
      {
        id: 9,
        name: 'Soy Cheese',
        price: 0.75
      },
      {
        id: 10,
        name: 'Banana Peppers',
        price: 0.75
      },
      {
        id: 11,
        name: 'Jalapeño Peppers',
        price: 0.75
      },
      {
        id: 12,
        name: 'Onion',
        price: 0.75
      },
      {
        id: 13,
        name: 'Olives',
        price: 0.75
      },
      {
        id: 14,
        name: 'Pineapple',
        price: 0.75
      },
      {
        id: 15,
        name: 'Mushrooms',
        price: 0.75
      },
      {
        id: 16,
        name: 'Add Breadsticks',
        price: 5
      }
    ]
  });

}());
