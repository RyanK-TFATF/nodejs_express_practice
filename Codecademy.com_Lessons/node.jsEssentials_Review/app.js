setTimeout (() => {
    const buffer1 = Buffer.alloc(6, 'yo');
    const buffer2 = Buffer.alloc(6, 'lo');
    const buffArr = [buffer1, buffer2]; 
    const bufferJoin = Buffer.concat(buffArr);
    
    console.log(bufferJoin.toString()); 
    }, 3000);
    