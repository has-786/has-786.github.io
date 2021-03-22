/*const a=[2,4,3,4,7,5,8,9,11,10,11]
let m={}
const k=45
let f=1
for(let i=0;i<a.length;i++){
    m[a[i]]=(m[a[i]-1]||0)+a[i]
    if(m[a[i]]==k){console.log("YES"); f=0; break;}
}

if(f)console.log("NO")



const obj={name:'Hasnain',roll:12,lang:['C','C++','JS'],hobby:{child:['play','Cartoon'],adult:['cartoon','youtube']}}

let newObj=Object.assign({},obj)
console.log(typeof(obj.name))
console.log(typeof(obj.lang))
console.log(typeof(obj.hobby))

const recurs=(obj,newObj)=>{
    
            for(let o in obj){
                if(typeof obj[o]==='object')newObj[o]=recurs(obj[o],newObj[o])
                else newObj[o]=obj[o]
            }
            return newObj
        }

newObj=recurs(obj,newObj)
newObj.name='Saqlain'
newObj.lang.push('Python')
newObj.hobby?.child.push('Carrom')

console.log(obj)
console.log(newObj)


const x1=false
const p1=new Promise((resolve,reject)=>{
    //setTimeout(()=>{},0)
    if(x1)resolve(10)
    else reject("Error 1")
})


const x2=true
const p2=new Promise((resolve,reject)=>{
    if(x2)resolve(20)
    else reject("Error 2")
})
Promise.prototype.fun=()=>console.log('fun')

console.log(Promise.prototype)

p1
.then(val=>val)
.then(val=>console.log(val))
.catch(err=>console.log(err))




for(var i=1;i<=10;i++){
    
    (function timer(i)
    {
        setTimeout(()=>console.log(i),i*1000)
    })(i)

}


function* iteratorFunc() {
    let count = 0;
    for (let i = 0; i < 2; i++) {
        count++;
        yield i;
    }
    yield count;
  }
  
  let iterator = iteratorFunc();
  do{
    const it=iterator.next()
  console.log(it.value);  
  if(it.done)break
  }while(true)   
  
  
  setTimeout(()=>console.log(vara,leta),0)
  let leta=10
  var vara=20

  const a=[2,3,4,5,7]
  const k=3
  console.log([...a.slice(a.length-k,a.length),...a.slice(0,a.length-k)])
*/
  const a=10_00_0000
  console.log(a)

  var x;
  var y = 2;
  x ??= y;
  console.log(x); // 2


  





