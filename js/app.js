var app = angular.module('myApp', []);


app.directive('myElem', function () {
    return {
        restrict: 'E',
        templateUrl: 'set_items.html'
    };
});

app.directive('permElem', function () {
    return {
        restrict: 'E',
        templateUrl: 'perm_items.html'
    };
});

app.controller('MyCtrl', ['$scope', '$log', function ($scope, $log) {

    $scope.cols = 1;
    $scope.item_count = 1;
    $log.log('foo');
    $scope.item_names = {
        1: {'button_type': 'btn-primary', 'text': 'One', 'sqcolor': 'red'},
        2: {'button_type': 'btn-warning', 'text': 'Two', 'sqcolor': 'green'},
        3: {'button_type': 'btn-info', 'text': 'Three', 'sqcolor': 'orange'},
        4: {'button_type': 'btn-success', 'text': 'Four', 'sqcolor': 'beige'},
        5: {'button_type': 'btn-danger', 'text': 'Five', 'sqcolor': 'purple'}
    };
    $scope.good_items = [];


    $scope.get_good_items = function () {
        var items = [];
        var n = 1;
        while (n <= $scope.item_count) {
            items.push($scope.item_names[n]);
            n++;
        }
        //$log.log(items);
        return items;
    };
    $scope.range = function (min, max, step) {
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
        $scope.get_permutations();
    };

    $scope.remove_item = function () {
        $log.log('remove');
        if ($scope.item_count > 1) {
            $scope.item_count -= 1;
        }
        $scope.get_permutations();
    };

    $scope.create = function () {
        //alert($scope.item_count);
        $log.log($scope.item_count);
        var b = _.join(['a', 'b']);
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

    $scope.permutations_choose = function(xs, r)
    {
        if (!r) return [];
        return xs.reduce(function (memo, cur, i) {
            var others = xs.slice(0, i).concat(xs.slice(i + 1)),
                perms = $scope.permutations_choose(others, r - 1),
                newElms = !perms.length ? [[cur]] :
                    perms.map(function (perm) {
                        return [cur].concat(perm)
                    });
            return memo.concat(newElms);
        }, []);
    };

    $scope.combinations_choose = function (list, choose) {

    };

    $scope.get_permutations = function () {
        var set_items = $scope.range(1, $scope.item_count);
        //var set_items = $scope.range(1,1);
        //$log.log(set_items);
        $scope.perm_list = $scope.permutations_choose(set_items, set_items.length);
        $log.log($scope.perm_list);

        $scope.comb_list = $scope.combinations(set_items);
        //$log.log($scope.comb_list);
    };

}]);