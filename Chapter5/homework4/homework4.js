$(document).ready(function(){
    $.getJSON("http://localhost:3000/actors", function(data){
      for (var key in data) {
    var obj = data[key];

    var content = "";
        content += "<div class=\"mdl-list__item\">";
        content += "<span class=\"mdl-list__item-primary-content\">";
        content += "<i class=\"material-icons mdl-list__item-avatar\">person</i>";

        content += "<span>" + obj['name']+ "</span>";
        content += "</span>";
        content += "<a class=\"mdl-list__item-secondary-action\" href=\"#\"><i id='material-icon"+obj['id']+"' class=\"material-icons star\"value="+obj['id']+" name="+obj['name']+">";

        if (obj['starred']) {
            content += "star";
        }
        else {
            content += "star_border";
        }
        content += "</i></a>";
        content += "</div>";
        //alert (content);
        $(".demo-list-action").append(content);

}
return content;

    });

    $('.add_Actor').click(function() {
        //alert ($('.actor_Name').val());
        var actor_name = $('.actor_Name').val();
        $.ajax({
            url: 'http://localhost:3000/actors',
            type: 'POST',
            data: {
              name: actor_name,
              starred: false},
            dataType: 'json',
        });
      });

      $(document).on("click",".material-icons", function() {
        var id = $(this).attr("value"),
            name = $(this).attr("name");
            //console.log(id+""+name);
            var bool_val;
            $.getJSON("http://localhost:3000/actors/"+id, function(data){
                if(data.starred === false){
                  bool_val = true;
                }
                else {
                  bool_val = false;
                }
                $.ajax({
                    url: 'http://localhost:3000/actors/' + id,
                    type: 'PUT',
                    data: {
                      name:name,
                      starred: bool_val},
                    dataType: 'json',
                    success:function(data){
                      console.log(data);
                      if(data.starred === false){
                        //console.log("")
                        $("#material-icon"+data.id).html("star_border");
                      }
                      else {
                        $("#material-icon"+data.id).html("star");
                      }
                    }
                });
                //$(this).children(".mdl-list__item-secondary-action").children("i").html(bool_val);
                //console.log("id is"+id);
                //console.log($(".material-icons star").html("sdfsd"));
                //$(".material-icons").html(bool_val);
            });
            /*
            $.getJSON("http://localhost:3000/actors", function(data){
              for (var key in data) {
            var obj = data[key];
              if (obj[id] == id){
                if(obj[starred] == false){
                  bool_val = true;
                }
                else {
                bool_val = false;
                }
              }
            }
          });*/


      });
});
