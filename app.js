(function () {
    var ShoppingListCheckOff = angular.module('ShoppingListCheckOff', []);
    ShoppingListCheckOff.service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    ShoppingListCheckOff.controller('ToBuyController', ToBuyController);
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var showToBuyItems = this;
        showToBuyItems.toBuyItems = ShoppingListCheckOffService.getToBuyItems();
        showToBuyItems.addtoBought = function (item, index) {
            ShoppingListCheckOffService.removeTobuyItem(index);
            ShoppingListCheckOffService.addToBoughtItem(item.name, item.quantity);
        };


    };

    ShoppingListCheckOff.controller('AlreadyBoughtController', AlreadyBoughtController);
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var showBoughtItems = this;
        showBoughtItems.toBoughtItems = ShoppingListCheckOffService.getBoughtItems();
    };
    function ShoppingListCheckOffService() {
        var service = this;
        var toBuyItems = [
            { name: "cookies", quantity: 10 },
            { name: "candies", quantity: 10 },
            { name: "fruits", quantity: 10 },
            { name: "vegetables", quantity: 10 },
            { name: "ice creams", quantity: 10 }];
        var toBoughtItems = [];
        service.getToBuyItems = function () {
            return toBuyItems;
        };
        service.getBoughtItems = function () {
            return toBoughtItems;
        };
        service.removeTobuyItem = function (index) {
            toBuyItems.splice(index, 1)
        };
        service.addToBoughtItem = function (itemName, itemQuantity) {
            var item = {
                name: itemName,
                quantity: itemQuantity
            };
            toBoughtItems.push(item);
        };


    };
})();