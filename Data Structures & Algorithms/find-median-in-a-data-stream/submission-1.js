class MedianFinder {
    constructor() {
        this.small = new MaxHeap(); // left half (max-heap)
        this.large = new MinHeap(); // right half (min-heap)
    }

    addNum(num) {
        // Always push to max-heap first
        this.small.push(num);

        // Balance: ensure small's max <= large's min
        if (this.small.top() > this.large.top()) {
            this.large.push(this.small.pop());
        }

        // Balance sizes (small can have at most 1 extra)
        if (this.small.size() > this.large.size() + 1) {
            this.large.push(this.small.pop());
        } else if (this.large.size() > this.small.size()) {
            this.small.push(this.large.pop());
        }
    }

    findMedian() {
        if (this.small.size() > this.large.size()) {
            return this.small.top();
        }
        return (this.small.top() + this.large.top()) / 2;
    }
}

// ---- Heap implementations ----

class MinHeap {
    constructor() { this.h = []; }
    size() { return this.h.length; }
    top() { return this.h[0] ?? Infinity; }
    push(val) {
        this.h.push(val);
        this._bubbleUp(this.h.length - 1);
    }
    pop() {
        const top = this.h[0];
        const last = this.h.pop();
        if (this.h.length > 0) {
            this.h[0] = last;
            this._sinkDown(0);
        }
        return top;
    }
    _bubbleUp(i) {
        while (i > 0) {
            const parent = (i - 1) >> 1;
            if (this.h[parent] <= this.h[i]) break;
            [this.h[parent], this.h[i]] = [this.h[i], this.h[parent]];
            i = parent;
        }
    }
    _sinkDown(i) {
        const n = this.h.length;
        while (true) {
            let smallest = i;
            const l = 2 * i + 1, r = 2 * i + 2;
            if (l < n && this.h[l] < this.h[smallest]) smallest = l;
            if (r < n && this.h[r] < this.h[smallest]) smallest = r;
            if (smallest === i) break;
            [this.h[smallest], this.h[i]] = [this.h[i], this.h[smallest]];
            i = smallest;
        }
    }
}

class MaxHeap extends MinHeap {
    _bubbleUp(i) {
        while (i > 0) {
            const parent = (i - 1) >> 1;
            if (this.h[parent] >= this.h[i]) break;
            [this.h[parent], this.h[i]] = [this.h[i], this.h[parent]];
            i = parent;
        }
    }
    _sinkDown(i) {
        const n = this.h.length;
        while (true) {
            let largest = i;
            const l = 2 * i + 1, r = 2 * i + 2;
            if (l < n && this.h[l] > this.h[largest]) largest = l;
            if (r < n && this.h[r] > this.h[largest]) largest = r;
            if (largest === i) break;
            [this.h[largest], this.h[i]] = [this.h[i], this.h[largest]];
            i = largest;
        }
    }
}
