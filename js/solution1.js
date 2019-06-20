let books = [

    {
        "title": "Java",
        "author": "Kumar",
        "alreadyRead": false
    },
    {
        "title": "Dot Net",
        "author": "Michal",
        "alreadyRead": false
    },
    {
        "title": "C++",
        "author": "Richard",
        "alreadyRead": false
    },
    {
        "title": "Html",
        "author": "Hibrid",
        "alreadyRead": false
    },
    {
        "title": "React JS",
        "author": "Return Jhon",
        "alreadyRead": false
    }
    ];
    
    
    let booklistings = function () {
    return books.map(book => `<li>${book.title} by ${book.author} <button onclick="BookStatus(this)">read</input></li></br>`).join('');
    }
    
    let template = `<ul>${booklistings()}</ul>`
    
    let container = document.querySelector("#container");
    container.innerHTML = template;
    
    function BookStatus(id) {
    
    let aElements = id.parentNode.parentNode.getElementsByTagName("button");
    let list = id.parentNode.parentNode.getElementsByTagName("li");
    let aElementsLength = aElements.length;
    console.log(aElements[2]);
    var index;
    for (var i = 0; i < aElementsLength; i++) {
        if (aElements[i] == id) 
        {
            index = i;
            list[i].style = "display:none";
            aElements[i] = "UnRead";
            console.log(i);
            return index;
    
        }
    }
    
    }
    