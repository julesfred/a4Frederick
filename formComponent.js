(function () {
    var formComponent = {
            controller: "SetController",
             template: ` 
            <input type="text" placeholder="Animal" ng-model="$ctrl.addInfo.animal">
            <input type="text" placeholder="Color" ng-model="$ctrl.addInfo.color">
            <input type="text" placeholder="Verb" ng-model="$ctrl.addInfo.verb">
            <input type="text" placeholder="adverb" ng-model="$ctrl.addInfo.adverb">
            <button type="button" ng-click="$ctrl.addInfo($ctrl.addInfo)">Read Story</button>
        `
        };

    angular
        .module("storyApp")
        .component("formComponent", formComponent);
})();