const RC5 = require("rc5");

// import RC5 from "../node_modules/rc5";

//new RC5(key, w, r)


function handleEncryption(string, keyword){
    
    var plainText = document.getElementById('plainText');
    var cipherText = document.getElementById('cipherText');
    var key = document.getElementById('key');
    var wordSize = document.getElementById('wordSize').value;
    var rounds = document.getElementById('rounds').value;

    string = plainText.value;
    keyword = key.value; 
    var rc5 = new RC5(keyword, wordSize, rounds);

    var enBuf = rc5.encrypt(string);
    cipherText.value = enBuf;
}

function handleDecryption(){

    var plainText = document.getElementById('plainText').value;
    var cipherText = document.getElementById('cipherText').value;
    var key = document.getElementById('key').value;
    var wordSize = document.getElementById('wordSize').value;
    var rounds = document.getElementById('rounds').value;

    var rc5 = new RC5(key, wordSize, rounds);

    let deBuf = rc5.decrypt(cipherText);
    // console.log(deBuf);
    // console.log(deBuf.toString());
    plainText = deBuf.toString();
}

module.Exports = [handleEncryption, handleDecryption];










// var RC5={
//     S : [],
//     r : 12,
//     w : 32,
//     cyclicShiftLeft: function (array, positions)
//     { 
//         var temp = array.slice(0, positions);
//         temp = array.slice(positions).concat(temp);
//         return temp;
//     },     
//     ROTL: function (v,n,m) { 
//         y = (v>=0?v:-1-v).toString(2); 
//         z = y.length;
//         if(z < m) y = ("0".repeat(m-z))+y;
//         r = y.split("");
//         if(r.length>m) r = r.slice(r.length-m);
//         if(v<0) r = r.map(function(h){return h=="1"?"0":"1"})
//         r = this.cyclicShiftLeft(r,n);  
//         return parseInt(r.join(""),2) ;         
//     },     
//     ROTR: function (v,n,m){
//         return this.ROTL(v,m-n,m);
//     } ,     
//     /* Key scheduling */
//     rc5_init: function (K)
//     {
//        var b = 16,
//        u = this.w/8,
//        c = Math.max(1, Math.ceil(b/u)),
//        t = 2 * (this.r+1),
//        L = [],
//        P = 0xb7e15163,
//        Q = 0x9e3779b9,i,j,k;
         
//        for(i = 0; i < b; i++)
//           L[i] = 0;
         
//        for(i = b-1, L[c-1] = 0; i != -1; i--)
//           L[Math.floor(i/u)] = (L[Math.floor(i/u)] << 8) + K[i];
           
//        for(this.S[0] = P, i = 1; i < t; i++)
//           this.S[i] = this.S[i-1] + Q;
           
//        var n = Math.max(t,c);
        
//        for(A = B = i = j = k = 0; k < 3 * n; k++, i = (i+1) % t, j = (j+1) % c)
//        {    
//           A = this.S[i] = this.ROTL(this.S[i] + (A + B), 3, this.w);  
//           B = L[j] = this.ROTL(L[j] + (A + B), (A + B)&(this.w-1), this.w); 
//        }
//     },
//     rc5_encrypt: function (pt)
//     {
//          var A,B,i;
//        A = pt[0] + this.S[0]; B = pt[1] + this.S[1];
//        for(i = 1; i <= this.r; i++)
//        {
//           A = this.ROTL(A ^ B, B&(this.w-1), this.w) + this.S[2*i];
//           B = this.ROTL(B ^ A, A&(this.w-1), this.w) + this.S[2*i + 1];                   
//        }
//        return [A & (Math.pow(2,this.w)-1), B & (Math.pow(2,this.w)-1)];
//     },
      
//     rc5_decrypt: function (ct)
//     {
//        var A,B,i;
//        B=ct[1]; A=ct[0];        
//        for(i = this.r; i > 0; i--)
//        {
//           B = this.ROTR(B - this.S[2*i + 1], A&(this.w-1), this.w) ^ A;          
//           A = this.ROTR(A - this.S[2*i], B&(this.w-1), this.w) ^ B; 
//        }        
//        return [(A - this.S[0]) & (Math.pow(2,this.w)-1), (B - this.S[1]) & (Math.pow(2,this.w)-1)];
//     }
// }


// RC5.rc5_init([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
// enc = (RC5.rc5_encrypt( [100,200] )); 
// dec = (RC5.rc5_decrypt( enc )); 
// console.log(enc,dec);

