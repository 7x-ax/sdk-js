import Meridiem from "./Meridiem";
import Hour from "./Hour";
export default class Time {
    hour: Hour;
    minute: number;
    second: number;
    meridiem: Meridiem;

    constructor(hour: Hour, minute: number, second: number, meridiem: Meridiem) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
        this.meridiem = meridiem;
    }
}
