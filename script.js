var table = document.createElement("table");
for (var i = 1; i < 9; i++) {
    var tr = document.createElement('tr');
    for (var j = 1; j < 9; j++) {
        var td = document.createElement('td');
        if (i%2 == j%2) {
            td.className = "white";
        } else {
            td.className = "black";
        }
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
document.body.appendChild(table);
var board2 = Chessboard('board2', {
    draggable: true,
    dropOffBoard: 'trash',
    sparePieces: true
  })
  
  $('#startBtn').on('click', board2.start)
  $('#clearBtn').on('click', board2.clear)
  var board = Chessboard('myBoard')