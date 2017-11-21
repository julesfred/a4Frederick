(function() {
    function StoryService($location) {
        var addInfo = {};
  
        return { 
          setWords: setWords,
          getWords: getWords
        };
    
        function setWords(newInfo) {
          addInfo = newInfo;
          $location.path("/story");
        }
    
        function getWords() {
          return addInfo;
        }
      }

  
    angular
      .module("storyApp")
      .factory("StoryService", StoryService);
})();