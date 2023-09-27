class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }
    addClock(time, callback) {
        if (time === "undefined" || time === null || typeof callback === "undefined") {
            throw new Error("Отсутствуют обязательные аргументы");
        }
        this.alarmCollection.push({
            callback: callback,
            time: time,
            canCall: true
        })
    }
    removeClock(clock) {
        const newClockSchedule = this.alarmCollection.filter(checkClock);

        function checkClock(array) {
            return array.time != clock;
        }
        this.alarmCollection = newClockSchedule;
        //console.log (newClockSchedule);
    }
    getCurrentFormattedTime() {
        let currentTime = new Date();
        let timeFormat = t => ("" + t).padStart(2, '0')
        let newTimeFormat = timeFormat(currentTime.getHours()) + ":" + timeFormat(currentTime.getMinutes());
        return newTimeFormat;
    }
    start() {
        if (!this.intervalId) {
            this.alarmCollection.forEach((element) => {
                if (element.time === this.getCurrentFormattedTime() && element.canCall) {
                    element.canCall = false;
                    element.callback();
                }
            });
        }
    }
    stop() {
        this.intervalId = null;
    }
    resetAllCalls() {
        const temp = this.alarmCollection.forEach((element) => {
            element.canCall = true;
        });

    }
    clearAlarms() {
        this.alarmCollection = [];
    }

}