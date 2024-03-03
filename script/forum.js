const loadPosts = async() =>{
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await response.json();
    const cardContainer = document.getElementById('card-container');

    data.posts.forEach(item=>{
        
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `
        <div class="card card-side bg-purple-100 shadow-xl my-5">
                    <figure>
                    <div class="indicator mt-10">
                    <span class="indicator-item badge badge-secondary mr-3 ${item.isActive? 'bg-green-500' : 'bg-red-500'}"></span> 
                    <div class=""><img class="max-h-20 rounded-3xl ml-5 mb-14" src="${item.image}" alt="Movie"/></div>
                    </div>
                    </figure>
                    <div class="card-body">
                        <p># ${item.category} Author: ${item.author.name}</p>
                        <h2 class="card-title">${item.title} </h2>
                        <p>${item.description} </p>
                        <hr><br>
                        <div class="flex">
                            <div class="flex">
                                <div><img src="./images/icons8-comment-24.png" alt=""></div>
                                <div class="mx-5">${item.comment_count} </div>
                            </div>
                            <div class="flex">
                                <div><img src="./images/icons8-view-24.png" alt=""></div>
                                <div class="mx-5">${item.view_count}</div>
                            </div>
                            <div class="flex">
                                <div><img src="./images/icons8-time-24.png" alt=""></div>
                                <div class="mx-5">${item.posted_time} <span>min</span></div>
                            </div>
                            <div class="card-actions ml-56">
                                <button onclick="newCard('${item.title}', '${item.view_count}' )" class="rounded-full"><img src="./images/icons8-post-48.png" alt=""></button>
                            </div>
                        </div>
                    </div>
                  </div>
        `;
        cardContainer.appendChild(postDiv);
    })
}


let count = 1;

const newCard = (find1, find2)=>{
    
    document.getElementById('click-count').innerText = count;
    count++;

    const newCard = document.getElementById('small-card');
    const smallCard = document.createElement('div');
    smallCard.innerHTML = `
    <div class="flex bg-purple-100 rounded-box p-10">
                        <div>${find1}</div>
                        <div class="flex px-10">
                            <div class="mx-5"><img src="./images/icons8-view-24.png" alt=""></div>
                            <div>${find2}</div>
                        </div>
                    </div>
    `;
    newCard.appendChild(smallCard);
}




// const handleSearch = ()=>{
// }


 
loadPosts();

// if(item.isActive === "true"){
//     document.getElementById('indicator-color').classList.add('bg-green-500');
// }
// else{
//     document.getElementById('indicator-color').classList.add('bg-red-500');
// }