const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PlAYER_STORAGE_KEY = "F8_PLAYER";

const playList = $('.playlist');
const cd = $('.cd');
const cdThumb = $('.cd-thumb');
const nameMusic = $('header h2');
const audio = $('audio');
const btnPlay = $('.btn-toggle-play');
const player = $('.player');
const btnProgress = $('#progress');
const btnNext = $('.btn-next');
const btnPrev = $('.btn-prev');
const btnRepeat = $('.btn-repeat');
const btnRandom = $('.btn-random');

// console.log([cd]);

const app = {
    isPlaying: false,
    isRepeat: false,
    isRandom: false,
    currentIndex: 0,
    config: JSON.parse(localStorage.getItem(PlAYER_STORAGE_KEY)) || {},
    songs: [{
            name: "Muộn rồi mà sao còn",
            singer: "Sơn Tùng M-TP",
            path: "./assets/music/song-1.mp3",
            image: "./assets/thumbnail/thumbnail-1.jpeg"
        },
        {
            name: "Ước mơ của mẹ",
            singer: "Cara",
            path: "./assets/music/song-2.mp3",
            image: "./assets/thumbnail/thumbnail-2.jpeg"
        },
        {
            name: "Khóc thêm lần nữa",
            singer: "Bảo Thy",
            path: "./assets/music/song-3.mp3",
            image: "./assets/thumbnail/thumbnail-3.jpeg"
        },
        {
            name: "Kính vạn hoa",
            singer: "Bích Ngân",
            path: "./assets/music/song-4.mp3",
            image: "./assets/thumbnail/thumbnail-4.jpeg"
        },
        {
            name: "Tặng em một chút buồn",
            singer: "Phạm Nguyên Ngọc",
            path: "./assets/music/song-5.mp3",
            image: "./assets/thumbnail/thumbnail-5.jpeg"
        },
        {
            name: "Thức giấc",
            singer: "DaLab",
            path: "./assets/music/song-6.mp3",
            image: "./assets/thumbnail/thumbnail-6.jpeg"
        },
        {
            name: "3107-3",
            singer: "W/n x ( Nâu,Duongg,Titie )",
            path: "./assets/music/song-7.mp3",
            image: "./assets/thumbnail/thumbnail-7.jpeg"
        },
        {
            name: "Âm thầm bên em",
            singer: "Sơn Tùng M-TP",
            path: "./assets/music/song-8.mp3",
            image: "./assets/thumbnail/thumbnail-8.jpeg"
        },
        {
            name: "Bài ca tình yêu",
            singer: "Đinh Mạnh Ninh",
            path: "./assets/music/song-9.mp3",
            image: "./assets/thumbnail/thumbnail-9.jpeg"
        },
        {
            name: "Chỉ còn lại tình yêu",
            singer: "Bùi Anh Tuấn",
            path: "./assets/music/song-10.mp3",
            image: "./assets/thumbnail/thumbnail-10.jpeg"
        }
    ],
    setConfig: function(key, value) {
        this.config[key] = value;
        localStorage.setItem(PlAYER_STORAGE_KEY, JSON.stringify(this.config));
    },
    renderPlayList() {
        let htmls = this.songs.map((song, index) => {
            return `
            <div class="song ${index == this.currentIndex ? "active" : ""}" data-index="${index}">
                <div class="thumb" style="background-image: url('${song.image}')">
                </div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
            `
        })
        playList.innerHTML = htmls.join('');
    },
    handleEvent() {
        _this = this;
        cdWidth = cd.offsetWidth;
        arrayRandomSong: []
        const cdThumbAnimate = cdThumb.animate([
            { transform: 'rotate(360deg' }
        ], {
            duration: 10000,
            iterations: Infinity
        })
        cdThumbAnimate.pause();
        document.onscroll = function() {
            let scroll = window.scrollY || document.documentElement.scrollTop;
            let newWidth = cdWidth - scroll;
            cd.style.width = newWidth > 0 ? newWidth + 'px' : '0px';
            cd.style.opacity = newWidth > 0 ? newWidth / cdWidth : '0';
        }
        btnPlay.onclick = function() {
            if (_this.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
        }
        audio.onplay = function() {
            _this.isPlaying = true;
            player.classList.add('playing');
            cdThumbAnimate.play();
        }
        audio.onpause = function() {
            _this.isPlaying = false;
            player.classList.remove('playing');
            cdThumbAnimate.pause();
        }
        audio.ontimeupdate = function() {
            if (audio.currentTime) {
                btnProgress.value = (audio.currentTime / audio.duration) * 100;
            }
        }
        btnProgress.oninput = function() {
            audio.currentTime = btnProgress.value * audio.duration / 100;
        }
        btnNext.onclick = function() {
            if (!_this.isRandom) {
                _this.currentIndex++;
                if (_this.currentIndex == _this.songs.length) {
                    _this.currentIndex = 0;
                }
            } else {
                _this.randomSong();
            }
            _this.loadCurrentSong();
            audio.play();
            markActiveSong();
        }
        btnPrev.onclick = function() {
            if (!_this.isRandom) {
                _this.currentIndex--;
                if (_this.currentIndex < 0) {
                    _this.currentIndex = _this.songs.length - 1;
                }
            } else {
                _this.randomSong();
            }
            _this.loadCurrentSong();
            audio.play();
            markActiveSong();
        }
        btnRepeat.onclick = function() {
            if (_this.isRandom) {
                btnRandom.classList.remove('active');
                _this.isRandom = !_this.isRandom;
                _this.setConfig("isRandom", _this.isRandom);
            }
            btnRepeat.classList.toggle('active');
            _this.isRepeat = !_this.isRepeat;
            _this.setConfig("isRepeat", _this.isRepeat);
        }
        btnRandom.onclick = function() {
            if (_this.isRepeat) {
                btnRepeat.classList.remove('active');
                _this.isRepeat = !_this.isRepeat;
                _this.setConfig("isRepeat", _this.isRepeat);
            }
            btnRandom.classList.toggle('active');
            _this.isRandom = !_this.isRandom;
            _this.setConfig("isRandom", _this.isRandom);
        }
        audio.onended = function() {
            if (_this.isRepeat) {
                audio.play();
            } else {
                btnNext.click();
            }
        }
        const markActiveSong = function() {
            $('.song.active').classList.remove('active');
            $$('.song')[_this.currentIndex].classList.add('active');
            $('.song.active').scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest"
            });
        }
        playList.onclick = function(e) {
            let songElementNotActive = e.target.closest('.song:not(.active)')
            if (songElementNotActive && !e.target.closest('.option')) {
                _this.currentIndex = songElementNotActive.getAttribute('data-index');
                _this.loadCurrentSong();
                audio.play();
                markActiveSong();
            }
        }
    },
    defineProperties() {
        Object.defineProperty(this, 'currentSong', {
            get() {
                return this.songs[this.currentIndex];
            }
        })
    },
    randomSong() {
        do {
            var newIndex = Math.floor(Math.random() * this.songs.length);
        } while (newIndex >= this.currentIndex - 1 && newIndex <= this.currentIndex + 1);
        this.currentIndex = newIndex;
    },
    loadCurrentSong() {
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        nameMusic.innerHTML = this.currentSong.name;
        audio.src = `${this.currentSong.path}`;
    },
    loadConfig() {
        this.isRandom = this.config.isRandom;
        this.isRepeat = this.config.isRepeat;
    },
    start() {
        this.loadConfig();

        this.defineProperties();

        this.loadCurrentSong();

        this.renderPlayList();

        this.handleEvent();

        btnRandom.classList.toggle("active", this.isRandom);
        btnRepeat.classList.toggle("active", this.isRepeat);
    }
}

app.start();