function getTotalListValue() {
    let inputDom = document.getElementById("totalList");
    inputDom.readOnly = true;
    let value = inputDom.value;
    console.log(value);
    if (value < 1) {
        alert("输入的学习单元有误（不能小于1）");
        return -1;
    }
    MakeSchedule(value);
}

function MakeSchedule(value) {
    let firstTag = 1;
    let tbody = document.getElementById('tbMain');
    for (let i = 0; i < value; i++) {
        let row = document.createElement('tr');
        let dayCell = document.createElement('td');
        dayCell.innerHTML = `第${i + 1}天`;
        row.appendChild(dayCell);
        if (firstTag <= value) {
            let firstCell = document.createElement('td');
            firstCell.innerHTML = `□${firstTag}List`;
            row.appendChild(firstCell);
            firstTag++;
        }
        else {
            let bankCell = document.createElement('td');
            bankCell.innerHTML = '';
            row.appendChild(bankCell);
        }
        for (let j = 0; j < value; j++) {
            if (i === j + 1) {
                let reviewCell = document.createElement('td');
                reviewCell.innerHTML = `□${j + 1}List`;
                row.appendChild(reviewCell);
            }
            else if (i === j + 2) {
                let reviewCell = document.createElement('td');
                reviewCell.innerHTML = `□${j + 1}List`;
                row.appendChild(reviewCell);
            }
            else if (i === j + 6) {
                let reviewCell = document.createElement('td');
                reviewCell.innerHTML = `□${j + 1}List`;
                row.appendChild(reviewCell);
            }
            else if (i === j + 14) {
                let reviewCell = document.createElement('td');
                reviewCell.innerHTML = `□${j + 1}List`;
                row.appendChild(reviewCell);
            }
            else if (i === j + 29) {
                let reviewCell = document.createElement('td');
                reviewCell.innerHTML = `□${j + 1}List`;
                row.appendChild(reviewCell);
            }
            else {
                let bankCell = document.createElement('td');
                bankCell.innerHTML = '';
                row.appendChild(bankCell);
            }
        }
        tbody.appendChild(row);
    }
    combineReview();
}

function combineReview(){
    let inputDom = document.getElementById("totalList");
    let value = inputDom.value;
    let cells = document.getElementById('table').rows[0].cells;
    cells[2].colSpan = value;
}




