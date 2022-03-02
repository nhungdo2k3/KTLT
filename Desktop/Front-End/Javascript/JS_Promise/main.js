//link video: https://fullstack.edu.vn/learning/javascript-co-ban?id=2352

var link1 = [{
        id: 1,
        user_id: 1,
        content: "Ban co khoe khong?"
    },
    {
        id: 2,
        user_id: 2,
        content: "Cam on ban, toi khoe"
    }
];

var link2 = [{
        id: 1,
        name: "Phuong Minh"
    },
    {
        id: 2,
        name: "Ha My"
    },
    {
        id: 3,
        name: "Minh Chua"
    }
];

function getComments() {
    return new Promise(function(resolve) {
        resolve(link1);
    })
}

function getUsers(UserIdList) {
    return new Promise(function(resolve) {
        var result = link2.filter(function(user) {
            return UserIdList.includes(user.id);
        })
        resolve(result);
    })
}

getComments()
    .then(function(data1) {
        var UserIdList = data1.map(function(comment) {
            return comment.user_id;
        })
        return getUsers(UserIdList)
            .then(function(data2) {
                return {
                    users: data2,
                    comments: data1
                }
            })
    })
    .then(function(data) {
        var blockComments = document.getElementById('block_comments');

        var html = '';

        data.comments.forEach(function(comment) {
            var user = data.users.find(function(user) {
                return user.id === comment.user_id
            });
            html += `<li>${user.name}: ${comment.content}</li>`;
        })

        blockComments.innerHTML = html;
    })