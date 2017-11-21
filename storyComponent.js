(function () {
    var storyComponent = {
            controller: "GetController",
             template: ` 
            <p>One find day, my trusty {{$ctrl.addInfo.animal}} woke up to find a {{$ctrl.addInfo.color}} cat. The cat was {{$ctrl.addInfo.verb}} {{$ctrl.addInfo.adverb}}. What a weird morning...</p>
            <a href="#!/form"><button type="button">Restart Story</button></a>
        `
        };

    angular
        .module("storyApp")
        .component("storyComponent", storyComponent);
})();