import {ref} from "vue";

interface BatteryManager extends EventTarget {
    charging: boolean;
    chargingTime: number;
    dischargingTime: number;
    level: number;
}

type NavigatorWithBattery = Navigator & {
    getBattery: () => Promise<BatteryManager>
}


export function useBattery() {
    //电量
    const level = ref(1);
    // 是否正在充电
    const charging = ref(false);
    // 充满电需要多少秒,0 表示充电完成
    const chargingTime = ref(0);
    // 充满电需要多少秒,0 表示充电完成
    const dischargingTime = ref(0);

    (navigator as NavigatorWithBattery).getBattery().then(battery => {
        level.value = battery.level;
        charging.value = battery.charging;
        chargingTime.value = battery.chargingTime;
        dischargingTime.value = battery.dischargingTime;
        battery.addEventListener('chargingchange', () => {
            charging.value = battery.charging;
        });
        battery.addEventListener('chargingtimechange', () => {
            chargingTime.value = battery.chargingTime;
        });
        battery.addEventListener('dischargingtimechange', () => {
            dischargingTime.value = battery.dischargingTime;
        });
        battery.addEventListener('levelchange', () => {
            level.value = battery.level;
        });
    });

    return {level, charging, chargingTime, dischargingTime};
}
