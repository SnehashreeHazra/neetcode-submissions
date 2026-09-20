class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.heap = [];
        
        for (let num of nums) {
            this.add(num);
        }
    }

    add(val) {
        // Add new value to heap
        this.heap.push(val);
        this._bubbleUp(this.heap.length - 1);
        
        // Keep heap size at k
        if (this.heap.length > this.k) {
            this._swap(0, this.heap.length - 1);
            this.heap.pop();
            this._sinkDown(0);
        }
        
        // Root is the kth largest
        return this.heap[0];
    }

    _bubbleUp(i) {
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (this.heap[parent] <= this.heap[i]) break;
            this._swap(parent, i);
            i = parent;
        }
    }

    _sinkDown(i) {
        const n = this.heap.length;
        while (true) {
            let smallest = i;
            const left = 2 * i + 1;
            const right = 2 * i + 2;
            
            if (left < n && this.heap[left] < this.heap[smallest]) smallest = left;
            if (right < n && this.heap[right] < this.heap[smallest]) smallest = right;
            
            if (smallest === i) break;
            this._swap(i, smallest);
            i = smallest;
        }
    }

    _swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}
