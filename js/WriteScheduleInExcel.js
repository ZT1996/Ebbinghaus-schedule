function WriteScheduleExcel() {
    let oHtml = document.getElementById('table').outerHTML;
    let excelHtml = `
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>
        #table,#title{
            height: 50px;
            font-size: 24px;
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

