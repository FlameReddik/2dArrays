var matrix = [];
var matrixLength = 5;

function onGenerateOneClick() {
    generateFirstMatrix();
    renderMatrix("first-matrix");
}

function onGenerateTwoClick() {
    generateSecondMatrix();
    renderMatrix("second-matrix");
}

function generateFirstMatrix () {
    matrix = [];
    for (let i=0; i<matrixLength; i++) {
        matrix.push([]);
        for (let j=0; j<matrixLength; j++) {
            if (i === 2 || j === 2) {
               matrix[i].push("+");
            } else {
                matrix[i].push("0");
            }
        }
    }
}

function generateSecondMatrix() {
    matrix = [];
    for (let i=0; i<matrixLength; i++) {
        matrix.push([]);
        for (let j=0; j<matrixLength; j++) {
            if (i === j || j === matrixLength-i-1){
                matrix[i].push("+");
            } else {
                matrix[i].push("0");
            }
        }
    }
}

function renderMatrix(containerName) {
    let matrixHtml = "<table border='1px' cellpadding='2px' cellspacing='2px'>";
    for (let i=0; i<matrix.length; i++) {
        matrixHtml +="<tr>";
        for (let j=0; j<matrix[i].length; j++) {
            matrixHtml += "<td>" + matrix[i][j] + "</td>";
        }
        matrixHtml +="</tr>";
    }
    matrixHtml += "</table>";
    document.getElementById(containerName).innerHTML = matrixHtml;
}

generateSecondMatrix();