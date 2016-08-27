$(function () {

  var $t = $("#t").tablesorter({
    widgets: ['editable'],
    widgetOptions: {
      editable_columns       : [0,1,2],
      editable_enterToAccept : true,
      editable_autoResort    : false
    }
  });

  $('#b').on('click', function(){
    var row = '<tr><td>Frank</td><td>Smith</td><td>53</td><td>$39.95</td><td>22%</td><td>Mar 22, 2011 9:33 AM</td></tr>';
//    var $row = $(row);

    $t
      .find('tbody').append(row)
      .trigger('addRows', [row, false, function () {
//        $t.trigger('refreshWidgets');
        $t.find('tr').eq(1).off().remove();
      }]);
  })
})
