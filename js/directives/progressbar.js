app.directive('progressbar', function() {
    return {
        restrict: 'EA',
        replace: true,
        template: "<div class='progress-bar'><span style=\"width:{{progress}}%;\">{{progress}}%</span></div>",
        scope: {
            progress: '@'
        }
    };
});
