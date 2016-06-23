var app = angular.module('myApp', []);


app.directive('myElem', function(){
    return {
        restrict: 'E',
        templateUrl: 'set_items.html'
    };
});

app.controller('MyCtrl', ['$scope', '$log', function ($scope, $log) {
    $scope.cols = 1;
    $scope.item_count = 1;
    $log.log('foo');
    $scope.item_names = {
        1: 'One',
        2: 'Two',
        3: 'Three',
        4: 'Four',
        5: 'Five'
    };
    $scope.good_items = [];
    $scope.get_good_items = function()
    {
        var items = [];
        var n = 0;
        while(n <= $scope.item_count) {
            items.push($scope.item_names[n]);
            n++;
        }
        return items;
    };
    $scope.range = function(min, max, step) {
        step = step || 1;
        var input = [];
        for (var i = min; i <= max; i += step) {
            input.push(i);
        }
        return input;
    };
    $scope.additem = function () {
        $log.log('add');
        if ($scope.item_count < 5) {
            $scope.item_count += 1;
        }
    };

    $scope.remove_item = function () {
        $log.log('remove');
        if ($scope.item_count > 1) {
            $scope.item_count -= 1;
        }
    };

    $scope.create = function () {
        //alert($scope.item_count);
        $log.log($scope.item_count);
        var b = _.join(['a','b']);
        $log.log(b);
    };

    $scope.hello = function () {
        //alert('hello');
        $scope.divs = ["test1", "test2"];
        var foo = $scope.permutator([1, 2]);
        alert(foo);
        var baz = $scope.combinations([1, 2]);
        alert(baz);
    };
    $scope.hello2 = function () {
        //alert('hello');
        $scope.divs = ["test1", "test2", "test3", "test4", "test5"];
    };

    $scope.permutator = function (inputArr) {
        var results = [];

        function permute(arr, memo) {
            var cur, memo = memo || [];

            for (var i = 0; i < arr.length; i++) {
                cur = arr.splice(i, 1);
                if (arr.length === 0) {
                    results.push(memo.concat(cur));
                }
                permute(arr.slice(), memo.concat(cur));
                arr.splice(i, 0, cur[0]);
            }

            return results;
        }

        return permute(inputArr);
    };

    $scope.combinations = function (list) {
        var set = [],
            listSize = list.length,
            combinationsCount = (1 << listSize),
            combination;

        for (var i = 1; i < combinationsCount; i++) {
            var combination = [];
            for (var j = 0; j < listSize; j++) {
                if ((i & (1 << j))) {
                    combination.push(list[j]);
                }
            }
            set.push(combination);
        }
        return set;
    };

}]);