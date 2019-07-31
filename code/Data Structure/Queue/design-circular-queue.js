// 题目:https://leetcode-cn.com/problems/design-circular-queue/
/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
	// 用来保存数据长度为K的数据结构
    this.list = Array(k);
    // 记录队首队尾的指针
    this.front = 0;
    this.end = 0;
    // 记录队列的长度
    this.arrlen = k;
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
    	// 循环队列,如果队列满了,尾指针要回到队首
    	this.end = (this.end + 1) % this.arrlen;
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
		let value = this.list[this.front];
	    this.list[this.front] = null;
	    // 循环队列,如果队列满了,首指针也要回到队首
	    this.front = (this.front + 1) % this.arrlen;
	    return true;
	}
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if(!this.isEmpty())
    	return this.list[this.front]
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
    		return this.list[this.arrlen - 1]
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
    return this.front === this.end && !this.list[this.front]
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.front === this.end && !!this.list[this.front]
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