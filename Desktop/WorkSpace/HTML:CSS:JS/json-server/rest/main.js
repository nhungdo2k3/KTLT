var linkAPI = "http://localhost:3000/player";

function start() {
    getPlayer(renderPlayer);
    handleCreatePlayer();
}

start();

function getPlayer(callback) {
    fetch(linkAPI)
        .then(function(reponse) {
            return reponse.json();
        })
        .then(callback)
}

function createPlayer(data, callback) {
    var option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(linkAPI, option)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function handleCreatePlayer() {
    var btnCreate = document.querySelector('#btn-create');
    btnCreate.onclick = function() {
        var dataNamePlayer = document.querySelector('input[name="name"]').value;
        var dataPositionPlayer = document.querySelector('input[name="position"]').value;
        var data = {
            name: dataNamePlayer,
            position: dataPositionPlayer
        };
        createPlayer(data, renderPlayer);
    }
}

function renderPlayer(players) {
    var playerList = document.querySelector('.player_list');
    var html = players.map(function(player) {
        return `
            <li>
                <p>id: ${player.id}</p>
                <p>name: ${player.name}</p>
                <p>position: ${player.position}</p>
            </li>
        `
    })
    playerList.innerHTML += html.join('');
}
