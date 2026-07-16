class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
    const n = position.length;
    
    // pair positions with their time to reach target
    const cars = position.map((pos, i) => [pos, (target - pos) / speed[i]]);
    
    // sort by position descending (closest to target first)
    cars.sort((a, b) => b[0] - a[0]);
    
    const stack = []; // stores time to reach target

    for (const [pos, time] of cars) {
        stack.push(time);
        
        // if current car reaches before or same time as car ahead → merge fleet
        if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
            stack.pop();
        }
    }

    return stack.length;
    }
}
