let k=5,n=75
const result=[]
for(let i=0;i<k;i++)result.push('')

let j=k-1

while(j>=0)
{
    const f=j
    if(n-f<=26){

        result[j]=String.fromCharCode(n-f+96)
        j--
        while(j>=0){result[j]='a'; j--;}
    }
    else{
        result[j]='z'
        j--;
        n-=26
    }
}
console.log(result)










