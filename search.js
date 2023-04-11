function call(){
    var search = document.getElementById("search").value;
console.log(search);
localStorage.setItem("searchValue", search);
}
var search = localStorage.getItem("searchValue");
const url = "https://api.tvmaze.com/search/shows?q=" + search;
console.log(url);
let len = "";
fetch(url).then((response) => {
    return response.json();
}).then((object) => {
    fetchshow(object,Object.keys(object).length);  
    len = Object.keys(object).length;
});
console.log("Working till here!!!!");

function fetchshow(showData,len){
    console.log(len);
    for(let i = 0;i<len;i++){
        console.log("hi");
        let allShowContainer = document.getElementById("show-container");
        let link = document.createElement("a");
        let showContainer = document.createElement("div");
        let hiddenItems = document.createElement("div");
        let showIcon = document.createElement("img");
        let title = document.createElement("h3");
        let date = document.createElement("p");
        let br = document.createElement("br");
        let time = document.createElement("p");
        let rating = document.createElement("p");
        let showDesc = document.createElement("p");
    
        link.classList.add("page-link");
        showContainer.classList.add("card");
        hiddenItems.classList.add("hiddenItems");
        showIcon.classList.add("icon");
        title.classList.add("title");
        date.classList.add("date");
        time.classList.add("time");
        rating.classList.add("rating");
        showDesc.classList.add("desc");
    
        link.href = showData[i].show.url;
        showIcon.srcset = showData[i].show.image.medium;
        title.innerText = showData[i].show.name;
        date.innerText = "• "+showData[i].show.premiered;
        time.innerText = "Duration : "+showData[i].show.runtime + " min";
        rating.innerText = "Rating: " + showData[i].show.rating.average + "/10";
        showDesc.innerHTML = showData[i].show.summary; 
        showDesc.style = "max-height : 150px; text-overflow:ellipsis;";
    
        
        
        hiddenItems.append(title,date, rating,time,br,showDesc);
        showContainer.append(showIcon);
        
        showContainer.append(hiddenItems);
        allShowContainer.append(link);
        link.append(showContainer);
    }
    
}

