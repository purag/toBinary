function toBinary(num) {
    var binary = "";
    if (num == 1) {
        binary = "1";
    } else if (num % 2 == 0) {
        binary = toBinary(num/2) + "0";
    } else {
        binary = toBinary((num-1)/2) + "1";
    }
    return binary;
}