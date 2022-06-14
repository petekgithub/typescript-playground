function getDivisor(n) {
    var num = 0;
    for (var i = 0; i <= n; i++) {
        if (n % i == 0) {
            num++;
        }
    }
    return num;
}
