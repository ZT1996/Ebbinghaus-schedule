function WriteScheduleExcel() {
    let inputDom = document.getElementById('totalList');
    if (inputDom.value === '' || inputDom.value < 0) {
        alert('请输入需要学习的单元!');
    }
    else {
        let oHtml = document.getElementById('table').outerHTML;
        let excelHtml = `
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>
         #table {
            display: none;
            height: 50px;
            font-size: 15px;
            text-align: center;
        }

        #title {
            display: none;
            font-size: 20px;
            text-align: center;
        }
    </style>
</head>
<body>
${oHtml}
</body>
</html>
`;
        let excelBlob = new Blob([excelHtml], {type: 'application/vnd.ms-excel'});
        let oA = document.createElement('a');
        oA.href = URL.createObjectURL(excelBlob);
        oA.download = '艾宾浩斯记忆表.xls';
        oA.click();
    }

}

