app.controller('smokingController', ['$scope', 'achievements', 'dtHelper', function($scope, achievements, dtHelper) {
    var calc = function(doTheMath) {
        $scope.achievements = achievements.getAll().map(function(achievement) {
            var progress = true !== doTheMath ? 0 : dtHelper.getProgress($scope.startDate,
                dtHelper.addMs($scope.startDate, achievement.secondsDiff));

            return {
                achievement: achievement.achievement,
                progress: progress
            };
        });

        if (true === doTheMath) {
            $scope.nonSmokingSince = dtHelper.getDaysDiff($scope.startDate);
        }
    };

    $scope.showForm = function() {
        $scope.user.stopDate = false;
    };

    $scope.achievements = calc();

    $scope.startDate = null;
    $scope.user = {
        email: '',
        stopDate: false
    };

    $scope.nonSmokingSince = 0;

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
