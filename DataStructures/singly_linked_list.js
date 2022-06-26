/*

 */

// Node
class Node{
    constructor(val) {
        this.val = val
        this.next = null
    }
}

// Singly linked list
class LinkedList{
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    // PUSH
    push(val){
        let node = new Node(val)
        if(!this.head){
            this.head = node
            this.tail = this.head
        } else {
            this.tail.next = node // update prev node next to the new node
            this.tail = node // then update tail to point to new node
        }
        this.length++

        return this
    }

    // POP
    pop(){
        if(!this.head) return undefined
        let pre = this.head
        let current = this.head

        while(current.next){
            pre = current
            current = current.next
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--

        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return current
    }

    // SHIFT -- pop off of front
    shift(){
        if(!this.head) return undefined

        let current = this.head
        this.head = this.head.next
        this.length--;
        if(this.length === 0){
            this.tail = null
        }
        return current
    }

    // UNSHIFT -- add to front
    unshift(val){
        let node = new Node(val)

        if(!this.head){
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }

        this.length++

        return this
    }
}

list = new LinkedList()
list.push("Hello")
console.log("CURRENT LIST\n\n\n",list)
console.log("unshift()\n\n\n",list.unshift("WORLD DOMINATION"))
console.log("CURRENT LIST\n\n\n",list)
console.log("shift()\n\n\n",list.shift())
console.log("CURRENT LIST\n\n\n",list)
// list.push("World!")
// console.log(list)
// list.push("afasfasfsa")
// console.log(list)
// let a = list.pop()
// console.log(a)
// console.log(list)
// let ab = list.pop()
// console.log(ab)
// console.log(list)
// let abb = list.pop()
// console.log(abb)
// console.log(list)
/*
let first = new Node("hello")
first.next = new Node("world")
first.next.next = new Node("!")*/
