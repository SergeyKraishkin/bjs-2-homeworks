class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }
    addClock(time, callback) {
        if (time === undefined || time === null || callback === undefined) {
            throw new Error("Отсутствуют обязательные аргументы");
        }
        if ((this.alarmCollection.find(el => el.time === time))) {
            console.warn("Уже присутствует звонок на это же время");
        }
        this.alarmCollection.push({
            callback: callback,
            time: time,
            canCall: true
        })
    }
    removeClock(clock) {
        this.alarmCollection = this.alarmCollection.filter(array => array.time != clock);

    }
    getCurrentFormattedTime() {
        let currentTime = new Date();
        let timeFormat = t => ("" + t).padStart(2, '0')
            /*let newTimeFormat = timeFormat(currentTime.getHours()) + ":" + timeFormat(currentTime.getMinutes());*/
        return timeFormat(currentTime.getHours()) + ":" + timeFormat(currentTime.getMinutes());
    }
    start() {
        while (!this.intervalId) {
            this.intervalId = setInterval(this.alarmCollection.forEach((element) => {
                if (element.time === this.getCurrentFormattedTime() && element.canCall) {
                    element.canCall = false;
                    element.callback();
                }
            }), 1000);
        }
    }
    stop() {
        let currentime = this.getCurrentFormattedTime();
        this.removeClock(currentime);
        this.intervalId = null;
    }
    resetAllCalls() {
        const temp = this.alarmCollection.forEach((element) => {
            element.canCall = true;
        });

    }
    clearAlarms() {
        this.alarmCollection = [];
        this.stop();
    }

}