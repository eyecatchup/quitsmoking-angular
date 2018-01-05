app.service('calculate', function() {
    this.addMs = function(startDt, secs) {
        return new Date(startDt.valueOf() + (secs * 1000));
    };

    this.getProgress = function(startDt, endDt, currDt) {
        currDt = currDt ? currDt : new Date;
        var progress = (currDt.valueOf() - startDt.valueOf()) /
                       ((endDt.valueOf() - startDt.valueOf()) / 100);

        return (progress > 100) ? 100
            : (progress < 0) ? 0
            : parseFloat(progress.toFixed(2));
    };

    this.getDaysDiff = function(fromDt) {
        var timeDiff  = (new Date) - (new Date(fromDt));
        return parseFloat(timeDiff / (1000 * 60 * 60 * 24)).toFixed(1);
    };
});
