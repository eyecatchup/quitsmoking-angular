app.service('achievements', function() {
    this.getAll = function() {
        return [
            {
                achievement: 'bloodPressure',
                secondsDiff: 7200, // 2 hrs
                icon: ''
            },
            {
                achievement: 'oxygen',
                secondsDiff: 43200, // 12 hrs
                icon: ''
            },
            {
                achievement: 'bloodNicotine',
                secondsDiff: 86400, // 1 day
                icon: ''
            },
            {
                achievement: 'smellAndTaste',
                secondsDiff: 172800, // 2 days
                icon: ''
            },
            {
                achievement: 'respiratorySystem',
                secondsDiff: 259200, // 3 days
                icon: ''
            },
            {
                achievement: 'nicotineAddiction',
                secondsDiff: 345600, // 4 days
                icon: ''
            },
            {
                achievement: 'bloodCirculation',
                secondsDiff: 864000, // 10 days
                icon: ''
            },
            {
                achievement: 'mentalHealth',
                secondsDiff: 2592000, // 30 days
                icon: ''
            },
            {
                achievement: 'insulinResistance',
                secondsDiff: 5184000, // 60 days
                icon: ''
            },
            {
                achievement: 'physicalFitness',
                secondsDiff: 10368000, // 120 days
                icon: ''
            },
            {
                achievement: 'lungHealth',
                secondsDiff: 15552000, // 180 days
                icon: ''
            },
            {
                achievement: 'heartDiseases',
                secondsDiff: 31536000, // 365 days
                icon: ''
            },
            {
                achievement: 'strokeRisk',
                secondsDiff: 157680000, // 5 years
                icon: ''
            },
            {
                achievement: 'lungCancer',
                secondsDiff: 315360000, // 10 years
                icon: ''
            }
        ];
    };
});
