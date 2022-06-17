class Basic{
        
    idData = (id)=>{
        return document.getElementById(id)
    }

    innerHtmls =(id, data,getIdData)=>{
        let idElement = getIdData(id)
        return idElement.innerHTML=data

    }

    innerHtmlsAppended =(id, data,getIdData)=>{
        let idElement = getIdData(id)
        return idElement.innerHTML+=data

    }
    getbyclassName=(className)=>{
        return document.getElementsByName(className)
    }
    color=(id,nameOfColor,getIdData)=>{
        let idElement = getIdData(id)
        idElement.style.color=nameOfColor
    }

    backgroundColor=(id, CnameOfColor, getIdData)=>{
        let idElement = getIdData(id)
        idElement.style.backgroundColor=nameOfColor
    }


}
class Navigation extends Basic{
    constructor(start,end){
         super()
         this.start = start
         this.end = end
    }
    checkColor=(displayedColor,chosenColor)=>{
        let result = (displayedColor==chosenColor)?true:false
        return result
    }
    prev=(arr,chosenColor)=>
    {   
        this.innerHtmls('prev',"Start Game",this.idData)
        this.idData('prev').addEventListener('click',()=>{
     
            if(this.start>0)
                this.start--
                       /* settting the question counter */
            this.innerHtmls('questioncounter',(this.start+1)+"/"+this.end,this.idData)
            this.idData('next').style.display="block"    
            this.idData("colorshow-btn").style.display="block"
            this.innerHtmls('questionarea',"What color is this?",this.idData)
            this.innerHtmls('prev',"Previous",this.idData)
            this.idData('colorshow-btn').style.backgroundColor=arr[this.start] 

        }) 
        
        
    }

    next=(arr)=>{
        
        
        this.idData('next').addEventListener('click',()=>{
             
            if(this.end<=this.start)
                this.start=0
                 /* settting the question counter */
             this.innerHtmls('questioncounter',(this.start+1)+"/"+this.end,this.idData)

                if(this.end>this.start)
                this.start++
                
               
                nav.idData("colorshow-btn").style.display="block"
                this.innerHtmls('questionarea',"What color is this?",this.idData)
                this.idData('colorshow-btn').style.backgroundColor=arr[this.start]
        })
    }

}


class Color extends Basic {
    
    constructor(colorName){
        super()
        this.colorName =colorName
    }
    
     getColor=(colorName)=>{
         this.colorName = colorName
         return(this.chosenColor())
    }
    
    chosenColor =()=>{
        return (this.colorName)
    }



}


const color = new Color('')

const colorArr = ['Red','Brown','Blue','Green','Purple','Blue','Green','Gold','Brown','Skyblue','Cyan','Skyblue','Purple','Blue','Green','Gold','Brown','Skyblue','Gray']
/* const [first,second,third,...all] = colorArr
console.log(all) */
const values = colorArr.map((colors,index)=>{return colors})
//console.log(values)

const nav = new Navigation(0,values.length-1)
nav.idData("colorshow-btn").style.display="none"
 nav.prev(values)
 nav.idData('next').style.display="none"
 nav.next(values)
    


 





   






    




    
