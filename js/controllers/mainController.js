app.controller('mainController', ['$scope', function($scope) {
    $scope.firstName = '';
    $scope.lastName = '';
    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    };

    $scope.user = {
        title: 'Developer',
        email: 'ipsum@lorem.com',
        firstName: '',
        lastName: '',
        company: 'Google',
        address: '1600 Amphitheatre Pkwy',
        city: 'Mountain View',
        state: 'CA',
        biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
        postalCode: '94043',
        submissionDate: false
    };

    $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
        'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
        'WY').split(' ').map(function(state) {
        return {
            abbrev: state
        };
    });

    $scope.$watch('user.submissionDate', function(data) {
        console.log("**** reference checkers $watch (value function) ****");
        console.dir(data);
        //return scope.data.user.submissionDate;
    }, function(newValue, oldValue) {
        console.log("**** reference checkers $watch (listener function) ****");
        console.dir(newValue);
        console.dir(oldValue);
    });

    $scope.$watchCollection('user', function(data) {
        console.log("**** Collection checkers $watchCollection (value function) ****");
        console.dir(data);
        //return scope.data.user.submissionDate;
    }, function(newValue, oldValue) {
        console.log("**** Collection checkers $watchCollection (listener function) ****");
        console.dir(newValue);
        console.dir(oldValue);
    });

    /*$scope.$watch("user", function() {
        console.log("**** equality checkers with $watch(true) ****")
    }, true);*/
}]);

app.config(function($mdThemingProvider) {
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-light', 'default')
        .primaryPalette('yellow')
        .dark();
});
