function numToBinary(num) {
    return (num == 0)
        ? ""
        : numToBinary(~~(num/2)) + "" + (num % 2);
}