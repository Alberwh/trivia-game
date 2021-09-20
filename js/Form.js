class Form{
    constructor(){   
        this.nameInput=createInput('Enter your name')
        this.title=createElement('H1')
        this.button=createButton('Next')
        this.boy =createButton('boy')
        this.girl =createButton('girl')
    }


    display(){
        this.title.html ("TRIVA GAME")
        this.title.position(displayWidth/2.8,50)
        //homework - add color, change size so styling
        this.title.style("font-size","80px")
        this.title.style("color","red")
        




        this.nameInput.position(displayWidth/2.5,displayHeight/3)
        this.nameInput.size(300,50)
        
        this.button.position(displayWidth/2.2,displayHeight/1.5)
        this.button.size(100,40)

        this.boy.position(displayWidth/2.8,displayHeight/2)
        this.boy.size(100,100)
        this.girl.position(displayWidth/1.8,displayHeight/2)
        this.girl.size(100,100)

//#60318F - bg color

        
    }
}