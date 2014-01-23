var phonecatApp = angular.module('phonecatApp', []);


phonecatApp.controller('PhoneListCtrl', function ($scope) {
    $scope.phones = [
    { 'name': 'Nexus S',
        'snippet': 'Fast just got faster with Nexus S.'
    },
    { 'name': 'Motorola XOOM™ with Wi-Fi',
        'snippet': 'The Next, Next Generation tablet.'
    },
    { 'name': 'MOTOROLA XOOM™',
        'snippet': 'The Next, Next Generation tablet.'
    }
  ];
});

//var examePaperCtrl = angular.module('ExamePaperCtrl', []);

var questionModel = {
    newtitle: '新建试题',
    previewtitle: '预览试题',
    name: '',
    fraction: '',
    type: '1',
    options: []
};

phonecatApp.controller('ExamePaperCtrl', function ($scope) {
    $scope.question = questionModel;
    $scope.addOption = function () {
        var o = { content: '' };
        $scope.question.options.push(o);
    }
});