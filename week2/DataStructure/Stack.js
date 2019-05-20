class Stack{
    //create a new constructor to create object of item.
    constructor(){
    this.arr=[];
    this.top;
    }
    //push elements into the stack.
    push(element){
    //Overflow
    if(this.top >= (this.arr.length-1)){
    console.log("Stack overflow");
    
    }
    else{
    this.arr[this.top++]=element;
    }
    }
    //pop elements from the stack.
    pop(){
    //Underflow
    if(this.arr.length==0)
    return "Underflow";
    var element1=this.arr[this.top--];
    return element1;
    }
    peek(){
    //Peek top of stack
    return this.arr[this.arr.length-1];
    }
    isEmpty(){
    //checks if stack is empty are not
    return this.arr.length==0;
    }
    size(){
    return this.arr.length;
    }
    printStack(){
    //print stack 
    var str="";
    for(var i=0;i<this.arr.length;i++){
    str+=this.arr[i]+"";
    }
    return str; 
    }
    }

    module.exports={
        Stack
    }