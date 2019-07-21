function mutateTheArray(n, a) {
    let b = [];
    a.forEach((item, i) => {
        console.log(item, i);
        // if (a[i - 1] === -1) {
        //     b.push(0 + item + a[i + 1]);
        // } else {
        //     b.push(a[i - 1] + item + a[i + 1]);
        // }
    });
    return b;
}


console.log(mutateTheArray(5, [4, 0, 1, -2, 3]));