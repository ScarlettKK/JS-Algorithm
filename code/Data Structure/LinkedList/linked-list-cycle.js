/**
 * 题目: https://leetcode-cn.com/problems/design-circular-queue/
 */

/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.list = Array(k);
    this.start = 0;
    this.end = 0;
    this.len = k;
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.isFull()){
    	return false;
    } else {
    	this.list[this.end] = value;
    	this.end = (this.end + 1) % this.len;
    	return true;
    }
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.isEmpty()){
    	return false;
    } else {
    	let value = this.list[this.start];
	    this.list[this.start] = null;
	    // 循环队列,如果队列满了,首指针也要回到队首
	    this.start = (this.start + 1) % this.len;
	    return true;
    }
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if(!this.isEmpty())
    	return this.list[this.start];
    else
    	return -1
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if(!this.isEmpty()){
    	if(this.end - 1 < 0)
    		return this.list[this.len - 1]
    	else
    		return this.list[this.end - 1]
    }
    else
    	return -1
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.start === this.end && !this.list[this.start]
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.start === this.end && !!this.list[this.start]
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */