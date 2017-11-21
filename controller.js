(function() {
    
        function SetController(StoryService) {
            var vm = this;
            vm.addInfo = function(newInfo) {
                StoryService.setWords(newInfo);
            };
        }
    
        function GetController(StoryService) {
          var vm = this;
          vm.addInfo = StoryService.getWords();
    
        }
    
        angular 
          .module("storyApp")
          .controller("GetController", GetController)
          .controller("SetController", SetController);
    
      })();