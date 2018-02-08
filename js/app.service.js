var AppService = (function(){

    var tags=['<search','<add-options', '<event-group'];

    return {

        start: function(temp){
            tags.forEach(function(item, i, tags) {
                var num = temp.indexOf(item);
                alert( num + ": " + item);
            });
        }

    }
})();