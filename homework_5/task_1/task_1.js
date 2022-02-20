function drawDesk() {
    var table = document.createElement('table');
    var flag = true;

    var trRow = document.createElement('tr');
    var symbols = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    for (let i = 0; i < 8; i++) {
        var trCol = document.createElement('tr');

        var tdRow = document.createElement('td');
        tdRow.style.width = '50px';
        tdRow.style.height = '50px';
        tdRow.innerHTML = 8 - i;
        trCol.appendChild(tdRow);

        for (let j = 0; j < 8; j++) {

            if (j === 0)
                flag = !flag;

            var tdCol = document.createElement('td');

            tdCol.style.width = '50px';
            tdCol.style.height = '50px';
            if (flag) {
                tdCol.style.backgroundColor = '#000000';
            } else
                tdCol.style.backgroundColor = '#FFFFFF';

            trCol.appendChild(tdCol);
            flag = !flag;
        }
        table.appendChild(trCol);
    }

    for (let k = 0; k < 9; k++) {

        var td = document.createElement('td');
        td.style.width = '50px';
        td.style.height = '50px';
        td.style.backgroundColor = '#FFFFFF';
        td.innerHTML = symbols[k];

        trRow.appendChild(td);

    }
    table.appendChild(trRow);

    document.body.appendChild(table);
}

drawDesk();