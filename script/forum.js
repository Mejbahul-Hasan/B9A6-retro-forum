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
                    <span class="indicator-item badge badge-secondary mr-3 bg-red-500"></span> 
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
                                <button class="rounded-full"><img src="./images/icons8-post-48.png" alt=""></button>
                            </div>
                        </div>
                    </div>
                  </div>
        `;
        cardContainer.appendChild(postDiv);
    })
}

 
loadPosts();