const post = document.querySelector(".posts__content")

const data = [
    {

        img: "./assets/img/posts/posts-1.png",
        title: "long established",
        descritpion: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that",
        date: "May 20th 2020",
        link: "Read more",
    },
    {

        img: "./assets/img/posts/posts-2.png",
        title: "long established",
        descritpion: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that",
        date: "May 20th 2020",
        link: "Read more",
    },

    {

        img: "./assets/img/posts/posts-1.png",
        title: "long established",
        descritpion: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that",
        date: "May 20th 2020",
        link: "Read more",
    }
]

for (let i = 0; i < data.length; i++) {
    post.innerHTML +=
        `
    <div class="posts__item">
    <img src=${data[i].img} alt="posts__img" class="posts__img">
    <div class="posts__info">
        <h2 class="posts__title">${data[i].title}</h2>
        <p class="posts__description">${data[i].descritpion}
        </p>
        <div class="actual__bottom">
            <div class="actual__bottom">
                <span class="actual__date">${data[i].date}</span>
                <a href="#" class="actual__link">${data[i].link}</a>
            </div>
        </div>
    </div>
</div>
`

}