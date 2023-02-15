///////////////////////////////
/// For O(n)

const fun1 = (n) => {
    var tot = 0;

    for (var i = 1; i <= n; i++) {
        tot += i
    }

    console.log(tot);
}

const fun2 = (n) => {console.log(n * (n+1) / 2)}

///////////////////////////////
/// For O(1)

t1 = performance.now();
fun1(1000000000);
t2 = performance.now();

console.log(`Time for fun1: ${(t2-t1) / 1000}sec`)

t3 = performance.now();
fun2(1000000000);
t4 = performance.now();

console.log(`Time for fun1: ${(t4-t3) / 1000}sec`)