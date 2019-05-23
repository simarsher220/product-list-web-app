﻿'use strict';

// the storeController contains two objects:
// - store: contains the product list
// - cart: the shopping cart object
// - detailsprod: contains the details product
storeApp.controller('storeController', function ($scope, $routeParams, DataService) {

    // get store and cart from service
    $scope.detailsprod = DataService.detailsprod;
    $scope.store = DataService.store;
    $scope.cart = DataService.cart;

    if ($routeParams.productCode != null) {
        $scope.product = $scope.store.getProduct($routeParams.productCode);
        $scope.detail = $scope.detailsprod.getDetail($routeParams.productCode);
    }
});
