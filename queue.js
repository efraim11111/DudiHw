class Queue {
    
    constructor(len){
        this.len =len
        this.list = Array(len)
        this.first = 0
        this.last = 0
        this.size = 0
    }

    enQueue(x){
        if (this.size==this.len) {
            console.error("cant do this shit");

            return;
        }
        this.list[this.last] = x
        this.last++ 
        this.last = this.last % this.len
        this.size++
        
    }

    dequeue() {   
        if(this.size == 0 ) {    
            console.error("cant do this shit");
            return
        }
        let temp =this.list[this.first]
        this.first++
        this.first = this.first % this.len
        this.size--
        return  temp;
    }

    isEmpty(){
        return this.size ==0
    }


}

function queueNumOfItems(q1){
    let Tq = new Queue(q1.len);

    let count = 0;
    while(!q1.isEmpty()){
        Tq.enQueue(q1.dequeue());

        count++;
    }
    while(!Tq.isEmpty()){
        q1.enQueue(Tq.dequeue())
    }
    return count

}

function queueSumOfItems(q1){
    let Tq = new Queue(q1.len);
    let sum =0

    while(!q1.isEmpty()){
        let temp =q1.dequeue()
        if(temp) sum+=temp
       
        Tq.enQueue(temp);

    }
    while(!Tq.isEmpty()){
        q1.enQueue(Tq.dequeue())
    }
    return sum
}

function queueRemoveFirstInstance(q1,item) {
    let Tq = new Queue(q1.len);
    while(!q1.isEmpty()){
        let temp =q1.dequeue()
        if(temp !=item)Tq.enQueue(temp);
       

    }
    while(!Tq.isEmpty()){
        q1.enQueue(Tq.dequeue())
    }
}

const q1 = new Queue(5);


q1.enQueue(2)
q1.enQueue(3)
q1.enQueue(2)

console.log(q1);
q1.dequeue()
console.log(queueNumOfItems(q1));
console.log(queueSumOfItems(q1));
console.log(q1)
queueRemoveFirstInstance(q1,3)
console.log(q1);

