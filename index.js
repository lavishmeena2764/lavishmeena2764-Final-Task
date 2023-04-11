function call(){
    var search = document.getElementById("search").value;
console.log(search);
localStorage.setItem("searchValue", search);
}
  for(let i = 1;i<100;i++){
        url = "https://api.tvmaze.com/shows/" + i;
        
        fetch(url).then((response) => {
            return response.json();
            console.log(response);
        }).then((object) => {
            fetchshow(object);  
        });
    }
   
    function fetchshow(showData){
        let allShowContainer = document.getElementById("show-container");
        let link = document.createElement("a");
        let showContainer = document.createElement("div");
        let hiddenItems = document.createElement("div");
        let showIcon = document.createElement("img");
        let title = document.createElement("h3");
        let date = document.createElement("p");
        let time = document.createElement("p");
        let br = document.createElement("br");
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
    
        link.href = showData.url;
        showIcon.srcset = showData.image.medium;
        title.innerText = showData.name;
        date.innerText = "• "+showData.premiered;
        time.innerText = "Duration : "+showData.runtime + " min";
        rating.innerText = "Rating: " + showData.rating.average + "/10";
        showDesc.innerHTML = showData.summary; 
        showDesc.style = "max-height : 150px; text-overflow:ellipsis;";

        
        
        hiddenItems.append(title,date, rating, time, br,showDesc);
        showContainer.append(showIcon);
        
        showContainer.append(hiddenItems);
        allShowContainer.append(link);
        link.append(showContainer);
    }
