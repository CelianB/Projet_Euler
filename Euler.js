var performanceNow = require("performance-now")
console.log("Euler 1 :")
Euler1(1000);
console.log("--------")
console.log("Euler 2 :")
Euler2(4000000);
console.log("--------")
console.log("Euler 3 :")
Euler3(600851475143);
console.log("--------")
console.log("Euler 4 :")
Euler4();
console.log("--------")
console.log("Euler 5 :")
Euler5();
console.log("--------")

function Euler1(max) {
    var t1 = performanceNow();
    var i, sum = 0;
    for (i = 0; i < max; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i
        }
    }
    var t2 = performanceNow();
    var timer = t2 - t1;
    timer = timer.toString().split(".");
    sum += " (Trouvé en : " + timer[0] + ',' + timer[1].substring(0, 3) + "ms)";
    console.log(sum);
}

function Euler2(max) {
    var t1 = performanceNow();
    var temp, Somme = 0, a = 0, b = 1;
    while (b < max) {
        temp = a;
        a = b;
        b += temp;
        if ((b % 2) == 0) {
            Somme += b;
        }
    }
    var t2 = performanceNow();
    var timer = t2 - t1;
    timer = timer.toString().split(".");
    Somme += " (Trouvé en : " + timer[0] + ',' + timer[1].substring(0, 3) + "ms)";
    console.log(Somme);
}

function Euler3(x) {
    var t1 = performanceNow();
    var max = Math.round(Math.sqrt(x));
    for (var i = max; i >= 2; i--) {
        if (x % i == 0 && Euler3(i) == 1) {
            var t2 = performanceNow();
            var timer = t2 - t1;
            timer = timer.toString().split(".");
            i += " (Trouvé en : " + timer[0] + ',' + timer[1].substring(0, 3) + "ms)";
            console.log(i);
        }
    }
    return true;
}

function Euler4() {
    var t1 = performanceNow();
    var x, y, z, i = 999, Last = 0, Diviseur = 0;
    for (x = 9; x > 0; x--) {
        for (y = 9; y >= 0; y--) {
            for (z = 9; z >= 0; z--) {
                Last = 100001 * x + 10010 * y + 1100 * z;
                for (i = 999; i >= 100; i--) {
                    if (Last % i === 0) {
                        Diviseur = Last / i
                        if (Diviseur > 999)
                        break;
                        if (Diviseur >= 100) {
                            var result = "Palindrôme : " + Diviseur + " x " + i + " = " + Last;
                            var t2 = performanceNow();
                            var timer = t2 - t1;
                            timer = timer.toString().split(".");
                            result = result + " (Trouvé en : " + timer[0] + ',' + timer[1].substring(0, 3) + "ms)";
                            console.log(result);
                            return;
                        }
                    }
                }
            }
        }
    }
}

function GrComDiviseur(a, b) {
    var x = a;
    var y = b;
    var result;
    while (y != 0) {
        result = x % y;
        x = y;
        y = result;
    }
    return x;
}
function Euler5() {
    var t1 = performanceNow();
    var max = 20;
    var min = 11;
    var n = min;
    for (var i = min; i <= max; i++) {
        n = (n * i) / GrComDiviseur(n, i);
    }
    var t2 = performanceNow();
    var timer = t2 - t1;
    timer = timer.toString().split(".");
    n = n + " (Trouvé en : " + timer[0] + ',' + timer[1].substring(0, 3) + "ms)";
    console.log(n);
}
