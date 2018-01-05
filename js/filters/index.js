app.filter('currency', ['$sce', '$filter', function($sce, $filter) {
    var standardNumberFilterFn = $filter('number');

    return function(price) {
        if (price) {
            return $sce.trustAsHtml(standardNumberFilterFn(price, '2') + " €");
        } else {
            return $sce.trustAsHtml(standardNumberFilterFn(0, '2') + " €");
        }
    };
}]);
