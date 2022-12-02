require('fs').readFile('d01p01.txt', (err, file) => {

    const mostCalories =
        // load from file and group by blank line
        file.toString().split('\n').reduce((prev, item) => {
            item === '' ? prev.push([]) : prev[prev.length - 1].push(Number(item));
            return prev;
        }, [[]]).filter(a => a.length) // drop empty array
            // sum arrays
            .map(g => g.reduce((prev, item) => prev + item))
            // sort descending and grab first
            .sort((a, b) => b - a)[0];

    console.log('Most calories: ' + mostCalories);

});