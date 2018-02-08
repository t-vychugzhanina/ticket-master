var page = 0;

function getEvents(page) {

  if (page < 0) {
    page = 0;
    return;
  }
  if (page > 0) {
    if (page > getEvents.json.page.totalPages-1) {
      page=0;
      return;
    }
  }
  
  $.ajax({
    type:"GET",
    url:"https://app.ticketmaster.com/discovery/v2/events.json?apikey=5QGCEXAsJowiCI4n1uAwMlCGAcSNAEmG&size=4&page="+page,
    async:true,
    dataType: "json",
    success: function(json) {
          getEvents.json = json;
  			  showEvents(json);
  		   },
    error: function(xhr, status, err) {
  			  console.log(err);
  		   }
  });
}

function getAttraction(id) {
    $.ajax({
        type:"GET",
        url:"https://app.ticketmaster.com/discovery/v2/attractions/"+id+".json?apikey=5QGCEXAsJowiCI4n1uAwMlCGAcSNAEmG",
        async:true,
        dataType: "json",
        success: function(json) {
            showEvents(json);
        },
        error: function(xhr, status, err) {
            console.log(err);
        }
    });
}

function showEvents(json) {
    var items = $('.event');
    var events = json._embedded.events;
    var item = items.first();
    for (var i=0;i<events.length;i++) {
        item.children().children().children('.event__title').text(events[i].name);
        item.children().children().children('.event__data').text(events[i].dates.start.localDate);
        item.children().children().children('.event__descrip').text(events[i]._embedded.venues[0].name + " in " + events[i]._embedded.venues[0].city.name);
        item.children().children().children('.event__descrip').text(events[i].info);
        try {
            getAttraction(eventObject.data._embedded.attractions[0].id);
        } catch (err) {
            console.log('err with img');
        }
        item.show();
        item=item.next();
    }
}


$('#prev').click(function() {
  getEvents(--page);
});

$('#next').click(function() {
  getEvents(++page);
});


getEvents(page);


    function getMusicEvents(page) {

        if (page < 0) {
            page = 0;
            return;
        }
        if (page > 0) {
            if (page > getEvents.json.page.totalPages-1) {
                page=0;
                return;
            }
        }

        $.ajax({
            type:"GET",
            url:"https://app.ticketmaster.com/discovery/v2/events.json?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&classificationName=music"+page,
            async:true,
            dataType: "json",
            success: function(json) {
                getMusicEvents.json = json;
                showMusicEvents(json);
            },
            error: function(xhr, status, err) {
                console.log(err);
            }
        });
    }

function getMusicAttraction(id) {
    $.ajax({
        type:"GET",
        url:"https://app.ticketmaster.com/discovery/v2/attractions/"+id+".json?apikey=5QGCEXAsJowiCI4n1uAwMlCGAcSNAEmG",
        async:true,
        dataType: "json",
        success: function(json) {
            showEvents(json);
        },
        error: function(xhr, status, err) {
            console.log(err);
        }
    });
}

function showMusicEvents(json) {
    var items = $('.event');
    var events = json._embedded.events;
    var item = items.first();
    for (var i=0;i<events.length;i++) {
        item.children().children().children('.event__title').text(events[i].name);
        item.children().children().children('.event__data').text(events[i].dates.start.localDate);
        item.children().children().children('.event__descrip').text(events[i]._embedded.venues[0].name + " in " + events[i]._embedded.venues[0].city.name);
        item.children().children().children('.event__descrip').text(events[i].info);
        try {
            getMusicAttraction(eventObject.data._embedded.attractions[0].id);
        } catch (err) {
            console.log('err with img');
        }
        item.show();
        item=item.next();
    }
}

getMusicEvents(page);