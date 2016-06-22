var app = angular.module('myApp');


app.controller('MyCtrl', ['$scope','$log', function($scope,$log) {
    $scope.cols=1;
    $scope.items = 1;
    $log.log('foo');
  $scope.additem = function() {
   if($scope.items < 5) {
     $scope.items += 1;
   }
  };
  $scope.removeitem = function() {
   if($scope.items > 1) {
     $scope.items -= 1;
   }
  };
  $scope.hello = function() {
     //alert('hello');
     $scope.divs =["test1","test2"];
     var foo = $scope.permutator([1,2]);
     alert(foo);
     var baz = $scope.combinations([1,2]);
     alert(baz);
  };
    $scope.hello2 = function() {
     //alert('hello');
     $scope.divs = ["test1","test2","test3","test4","test5"];
  };
  
  $scope.permutator = function(inputArr) {
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
  
   $scope.combinations = function (list){
    var set = [],
        listSize = list.length,
        combinationsCount = (1 << listSize),
        combination;

      for (var i = 1; i < combinationsCount ; i++ ){
          var combination = [];
          for (var j=0;j<listSize;j++){
              if ((i & (1 << j))){
                  combination.push(list[j]);
              }
          }
          set.push(combination);
      }
      return set;
   };

}]);