var linkAPI = 'https://jsonplaceholder.typicode.com/posts';

fetch(linkAPI)
    .then(function(reponse) {
        return reponse.json();
        //auto parse json -> javascript 
    })
    .then(function(posts) {
        var blockPost = document.querySelector('.block_post');

        var html = posts.map(function(post) {
            return `<li>${post.id}: ${post.title}</li>`
        })

        blockPost.innerHTML = html.join('');
    })