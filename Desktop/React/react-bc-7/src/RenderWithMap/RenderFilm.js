import React, { Component } from "react";
import style from "./RenderFilm.module.css";

export default class RenderFilm extends Component {
  arrMovie = [
    {
      id: 1,
      name: "Avatar",
      decription:
        "Phim khoa học viễn tưởng của James Cameron, “Avatar”, với sự tham gia của Sam Worthington và Zoe Saldana, được phát hành vào năm 2009.",
      img: "https://i.pinimg.com/474x/ba/e3/64/bae36437168d3dbc3de89c6f193602a3.jpg",
      trailer: "https://www.youtube.com/watch?v=5PSNL1qE6VY",
    },
    {
      id: 2,
      name: "Avengers: Endgame",
      decription:
        "“Avengers: Endgame” của Marvel, phần thứ tư trong loạt phim “Avengers”, phá vỡ kỷ lục doanh thu cuối tuần mở màn lớn nhất mọi thời đại được phát hành vào năm 2019.",
      img: "https://i.pinimg.com/originals/66/bd/9b/66bd9b1f8354a9aa6900dee35bc2a911.jpg",
      trailer:
        "https://www.youtube.com/watch?v=5PSNL1qE6VYhttps://www.youtube.com/watch?v=TcMBFSGVi1c",
    },
    {
      id: 3,
      name: "Titanic",
      decription:
        "Phim của James Cameron, “Titanic”, với sự tham gia của Leonardo DiCaprio và Kate Winslet, được phát hành vào năm 1997.",
      img: "https://i.pinimg.com/564x/78/f1/a6/78f1a6f0a449aca76fa3f610d04d5269.jpg",
      trailer: "https://www.youtube.com/watch?v=kVrqfYjkTdQ",
    },
    {
      id: 4,
      name: "Chiến tranh giữa các vì sao: Thần lực thức tỉnh",
      decription:
        "Phim giả tưởng khoa học viễn tưởng của JJ Abrams, “Star Wars: The Force Awakens”, với sự tham gia của John Boyega, Daisy Ridley, Harrison Ford, Adam Driver, Oscar Isaac và Carrie Fisher, được phát hành vào năm 2015.",
      img: "https://chophim.net/wp-content/uploads/2021/11/Chien-tranh-giua-cac-vi-sao-7-Than-luc-thuc-tinh-P-300x400.jpg",
      trailer: "https://www.youtube.com/watch?v=6KAPX9Wb_Hw",
    },
  ];
  renderContent = () => {
    let contentHTML = this.arrMovie.map((movie) => {
      return (
        <div className="col-3">
          <div key={movie.id} className={style["item-container"]}>
            <img src={movie.img} />
            <div className={style["item-content"]}>
              <h5>{movie.name}</h5>
              <p>{movie.decription}</p>
              <a
                className="btn btn-primary"
                href={movie.trailer}
                target="_blank"
              >
                Trailer
              </a>
            </div>
          </div>
        </div>
      );
    });
    return contentHTML;
  };
  render() {
    return (
      <div className="container mt-2">
        <div className="row">{this.renderContent()}</div>
      </div>
    );
  }
}
