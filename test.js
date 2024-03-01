fibGenerator=(callCount)=>{
    let arr=[];
    arr[0]=0;
    arr[1]=1;
    for(let i =2;i<callCount;i++){
        arr[i]=arr[i-1]+arr[i-2];
    }
    return arr;
}

fibGenerator(3)

