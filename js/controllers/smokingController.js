app.controller('smokingController', ['$scope', 'achievements', 'calculate', function($scope, achievements, calculate) {
    var calc = function(doTheMath) {
        $scope.achievements = achievements.getAll().map(function(achievement) {
            var progress = true !== doTheMath ? 0 : calculate.getProgress($scope.startDate,
                calculate.addMs($scope.startDate, achievement.secondsDiff));

            return {
                achievement: achievement.achievement,
                progress: progress
            };
        });

        if (true === doTheMath) {
            $scope.nonSmokingDays = calculate.getDaysDiff($scope.startDate);
            $scope.moneySaved = $scope.nonSmokingDays * $scope.user.costsPerDay;
        }
    };

    $scope.achievements = calc();

    var arr = Array.apply(null, {length: 21}).map(Number.call, Number);
    arr.shift();
    $scope.costs = arr;

    $scope.startDate = null;
    $scope.nonSmokingDays = 0;
    $scope.moneySaved = 0;

    $scope.user = {
        costsPerDay: 7,
        stopDate: false
    };

    $scope.showForm = function() {
        $scope.user.stopDate = false;
    };

    $scope.$watch('user.stopDate', function(date) {
        if (date) {
            $scope.startDate = date;
            document.cookie = 'stoppedSmoking=' + date.valueOf()
                + '; expires=Thu, 31 Dec 2099 12:00:00 UTC';

            calc(true);
        }
    });

    var init = function() {
        if (document.cookie.indexOf('stoppedSmoking') !== -1) {
            var cookieDt = document.cookie.split(' ').map(function(cookie) {
                if (cookie.indexOf('stoppedSmoking') !== -1) {
                    return cookie.replace(';', '').split('=')[1];
                }
            });
            var cookieVal = cookieDt.pop();

            $scope.user.stopDate = new Date(parseInt(cookieVal));
        }
    };
    init();
}]);

app.config(function($mdThemingProvider) {
    // Configure a light theme with primary foreground yellow
    $mdThemingProvider.theme('docs-light', 'default')
        .primaryPalette('yellow')
        .dark();
});
