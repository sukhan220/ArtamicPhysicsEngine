function artamic(selector)
{
    const self =
    {
        element: document.querySelector(selector),
        htmt: ()=> self.element,
        on:(e,callbackfunction)=>{
            document.addEventListener(e,callbackfunction)
        },
        hide:()=>{
            self.element.style.display="none";
        },
        show: ()=>{
            self.element.style.display="block"
        },
        attr: (name, value)=>{
            if (value==null)
                self.element.getAttribute(name)
            else
                self.element.setAttribute(name,value)
        }
    }
    return self;    
}
