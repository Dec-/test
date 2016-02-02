app.controller('RjesenjaCtrl', function ($scope, $ionicModal) {
    
    $scope.rjesenja = [
        { "id": 1, "naziv": 'Porezna uprava' },
        { "id": 2, "naziv": 'Carinska uprava' },
        { "id": 3, "naziv": 'Građanin' },
        { "id": 4, "naziv": 'Upravljanje dokumentima' },
        { "id": 5, "naziv": 'Ministarstvo uprave' },
        { "id": 6, "naziv": 'OIB' }];

    showModal();
    var isEdit;

    $scope.onBtnDeleteClick = function (item) {
        $scope.rjesenja.splice($scope.rjesenja.indexOf(item), 1);
    };

    $scope.onBtnAddClick = function () {
        isEdit = false;
        $scope.rjesenje = null;
        $scope.modal.show();
    };

    $scope.onBtnUpdateClick = function (rjesenje) {
        $scope.rjesenje = rjesenje;
        isEdit = true;
        $scope.modal.show();
    };

    $scope.onBtnSaveClick = function (item) {
        if (isEdit) {
            for (var i = 0; i < $scope.rjesenja.length; i++) {
                if ($scope.rjesenja[i].id == item.id) {
                    $scope.rjesenja[i] == item;
                }
            }
        }
        else {
            $scope.rjesenja.push({ "id": $scope.rjesenja.length, 
                "naziv": item.naziv });
        }

        $scope.modal.remove();
        $scope.rjesenje = null;
        showModal();
    };

    //Helpers
    function showModal() {
        $ionicModal.fromTemplateUrl('templates/modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal = modal;
        });
    }
})