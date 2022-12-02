require('fs').readFile('d01p01.txt', (err, file) => {

    const topThreeCalories =
        // load from file and group by blank line
        file.toString().split('\n').reduce((prev, item) => {
            item === '' ? prev.push([]) : prev[prev.length - 1].push(Number(item));
            return prev;
        }, [[]]).filter(a => a.length) // drop empty array
            // sum arrays
            .map(g => g.reduce((prev, item) => prev + item))
            // sort descending
            .sort((a, b) => b - a)
            // grab first 3
            .slice(0, 3)
            // sum
            .reduce((prev, item) => prev + item);

    console.log('Top three calories: ' + topThreeCalories);

});