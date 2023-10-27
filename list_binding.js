class ListBinding {
    constructor(_element){
        this.listElement = _element
        this.textList = [] // ["Python", "JavaScript", "C#"]
    }

    // Make <li>text</li> element
    static createListItem(text){
        const li = document.createElement("li")

        li.textContent = text

        return li
    }

    update(){
        /* delete all exits elements items in <li>*/
        while(this.listElement.firstChild){
            this.listElement.removeChild(this.listElement.firstChild)
        }

        // fill ul/ol 
        for(const text of this.textList){
            this.listElement.appendChild(ListBinding.createListItem(text))
        }
    }

    add (text) {
        this.textList.push(text)
        this.update()
    }

    remove (index) {
        this.textList.splice(index, 1)
        this.update()
    }
}