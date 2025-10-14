// const title= document.getElementById('title')
// title.textContent += 'New Text'
// const listItem = document.querySelectorAll ('.list-item')
// listItem.forEach((item) =>{
//    item.textContent += ' darslari' 
// })

// const title = document.getElementById('title')
// title.innerHTML = '<i>New Html</i>'

// const link = document.querySelector('a')
// console.log(link.getAttribute('href'))
// link.setAttribute()



// const text = document.querySelector('p')
// console.log(text.getAttribute('class'))
// text.setAttribute('class', 'success')

// const heading =document.querySelector('h1')
// // heading.setAttribute('style', 'margin:50px')
// heading.style.margin  ='50px'
// heading.style.color = 'crimson'

// const content = document.querySelector('p')
// console.log(content.classList)
// content.classList.add('success')

// const article = document.querySelector('article')
// console.log(article.children)
// Array.from(article.children).forEach((child)=>{
//     child.classList.add('article-child')
// })

// let children1 = document.querySelector('children1')
// let parent = document.querySelector("parent");
// console.log(children1.parentElement)
// const btn = document.querySelector("button")

// // let h1 = document.querySelector("button")
// const forEvent = () =>{
//     console.log("Button bosildi")
// };
// btn.addEventListener ("click", forEvent);

const container = document.querySelector(".container");
const btn2 = document.getElementById ("btn");
btn2.addEventListener("click", () =>{
    let div = document.createElement("div");
    div.classList.add("list");
    div.textContent = "ezoza";
    container.append(div);
});