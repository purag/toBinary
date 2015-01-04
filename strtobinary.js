function numToBinary(num) {
    return (num == 0)
        ? ""
        : numToBinary(~~(num/2)) + "" + (num % 2);
}

function strToBinary(str) {
    var binary = "";
    for (var i = 0; i < str.length; i++) {
        var num = str.charCodeAt(i);
        if (i > 0) binary += " ";
        binary += numToBinary(num);
    }
    return binary;
}