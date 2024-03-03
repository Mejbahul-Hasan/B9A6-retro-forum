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
                                <button onclick="newCard('${item.description}', '${item.view_count}')" class="rounded-full"><img src="./images/icons8-post-48.png" alt=""></button>
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
    <div class="flex bg-purple-100 rounded-box p-5">
                        <div>${find1}</div>
                        <div class="flex px-5">
                            <div class="mx-3"><img src="./images/icons8-view-24.png" alt=""></div>
                            <div>${find2}</div>
                        </div>
                    </div>
    `;
    newCard.appendChild(smallCard);
}

loadPosts();

const loadLatestPosts = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const dataLatest = await res.json();
    const finalCard = document.getElementById('final-card');
    dataLatest.forEach(latest =>{
        const finalDiv = document.createElement('div');
        finalDiv.innerHTML = `
        <div class="card w-96 bg-purple-100 shadow-xl">
            <figure class="px-10 pt-10">
              <img src="${latest.cover_image}" alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="flex my-5 mx-10">
                <div>
                    <img src="./images/icons8-date-24.png" alt="">
                </div>
                <div class="px-5">${latest.author.posted_date ? latest.author.posted_date : 'No publish date'}</div>
            </div>
            <div class="card-body -mt-8">
              <h2 class="card-title">${latest.title}</h2>
              <p>${latest.description}</p>
              <div class="flex">
                <div class="avatar">
                    <div class="w-24 rounded-full">
                      <img src="${latest.profile_image}" />
                    </div>
                </div>
                <div class="p-5">
                    <p class="font-bold">${latest.author.name}</p>
                    <p>${latest.author.designation ? latest.author.designation : 'Unknown'}</p>
                </div>
              </div>
            </div>
          </div>
        `;
        finalCard.appendChild(finalDiv);
    })
}
 
loadLatestPosts();
