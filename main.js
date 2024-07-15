const container = document.getElementById("post");

const posts = [
  {
    title: "Indomie too sweet, but e don cost",
    imagePath: "reddit-img/indomie.jpg",
    poster: "r/caseoh",
  },
  {
    title: "Eggs don dey scarce these days",
    imagePath: "reddit-img/egg.webp",
    poster: "r/pyfuse",
  },
  {
    title: "What are you having for lunch?",
    imagePath: "reddit-img/cookies.webp",
    poster: "r/nigerianfood",
  },
  {
    title: "Small advert no go kill u",
    imagePath: "reddit-img/ad.webp",
    poster: "r/nigerianfood",
  },
  {
    title: "Let's eat",
    imagePath: "reddit-img/indomie.jpg",
    poster: "r/chopchop",
  },
];

posts.map((post, idx) => {
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="post-content">
          <div class="post-header">
            <div class="left-section-post">
              <img src="reddit-img/avatar_default_0.png" />
              <p class="poster-name">
                ${post.poster}<span class="time-of-post">
                  &#8226; 8 hr.ago &#8226; Popular in your country</span
                >
              </p>
            </div>

            <div class="right-section-post">
              <button class="join-post">Join</button>
              <img src="reddit-img/menu-dot-dot-dot-icon.png" />
            </div>
          </div>

          <div class="post">
            <p class="post-dis">${post.title}</p>

            <div class="post-img-container">
              <img src=${post.imagePath} class="post-img" />
            </div>

            <div class="bottom-post">
              <div class="like-dislike">
                <button>
                  <img src="reddit-img/arrow-up-likes-icon.png" />
                </button>
                <p>47</p>
                <button><img src="reddit-img/arrow-down-dislike.png" /></button>
              </div>

              <div class="m-btn-bottom">
                <img src="reddit-img/square -message-icon.png" />
                <p>11</p>
              </div>

              <div class="m-btn-bottom">
                <img src="reddit-img/award-icon.png" />
              </div>

              <div class="m-btn-bottom">
                <img src="reddit-img/share-icon.png" />
                <p>Share</p>
              </div>
            </div>
          </div>
        </div>`
  );
});
