function numToBinary(num) {
    if (num == 1) {
        return "1";
    } else if (num % 2 == 0) {
        return numToBinary(num / 2) + "0";
    } else {
        return numToBinary((num - 1) / 2) + "1";
    }
}