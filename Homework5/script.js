function chessboard1() {
    var newTable = document.createElement( 'table' ),
        lets = [ '','A','B','C','D','E','F','G','H','' ],
        blackFigs1 = [ '8','&#9820;','&#9822;','&#9821;','&#9819;','&#9818;','&#9821;','&#9822;','&#9820;','8' ],  // Фигурки для шахмат
        whiteFigs1 = [ '1','&#9814;','&#9816;','&#9815;','&#9812;','&#9813;','&#9815;','&#9816;','&#9814;','1' ],
        blackFigs2 = [ '7','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','7' ],
        whiteFigs2 = [ '2','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','2' ];
    for ( var i = 0, a = 9; i < 10, a >= 0; i++, a-- ) {
        var tr = newTable.insertRow(i);
        for ( var j = 0; j < 10; j++ ) {
            var td = tr.insertCell( j );
                        switch (i) {
                case 0:
                    td.innerText = lets[ j ]; //буквы
                    break;
                case 1:
                    td.innerHTML = blackFigs1[ j ];
                    break;
                case 2:
                    td.innerHTML = blackFigs2[ j ];
                    break;
                case 7:
                    td.innerHTML = whiteFigs2[ j ];
                    break;
                case 8:
                    td.innerHTML = whiteFigs1[ j ];
                    break;
                case 9:
                    td.innerText = lets[ j ]; //буквы
                    break;
                default:
                    if ( j === 0 || j === 9 ) {
                        td.innerHTML = a;
                    }
                    break;
            }
        }
    }
    document.body.appendChild( newTable );
};
chessboard1();