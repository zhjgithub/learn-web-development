(function() {
    const outputAverage = document.getElementById('output-average');
    const quizInputs = [
        document.getElementById('for-quiz1'),
        document.getElementById('for-quiz2'),
        document.getElementById('for-quiz3'),
        document.getElementById('for-quiz4')
    ];

    document.getElementById('calculate-average').onclick = event => {
        const sum = quizInputs.reduce(
            (previous, current) => parseInt(current.value) + previous,
            0
        );
        outputAverage.innerHTML = 1.0 * sum / quizInputs.length;
    };
})();
