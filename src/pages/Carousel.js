import React from "react";

import imgContent from "../imgs/age.png";
import edu from "../imgs/educate.png";
import entertain from "../imgs/entertain.png";
import btnEdu from "../imgs/dragon-btn.png";
import btnLearn from "../imgs/learn-btn.png";
function Carousel() {
  return (
    <div className="carousel_container" id="carousel">
      <div className="carousel">
        <div className="carousel_top">
          <div className="title_top">
            <span>WELCOME TO</span>
          </div>
          <div className="title_content">
            <h1>
              <span style={{ fontSize: "162px" }}>d</span>
              <span className="R">R</span>AG
              <span className="O">O</span>N
              <span style={{ fontSize: "162px" }} className="V">
                V
              </span>
              e<span className="R">r</span>se
            </h1>
            <h2>
              <span>W</span>HERE WE AIM TO
            </h2>
          </div>
        </div>
        <div className="g-0 row carousel_content">
          <div className="order-1 order-lg-0 col-lg-4 cart_item item-right">
            <h2>EDUCATE</h2>
            <img src={edu} alt="Educate" class="fluid"></img>
            <p class="educateText">
              Access To Our Learning Application, DragonCamp, To Teach Children
              The Basics Like Numbers, And The Alphabet, Will ALWAYS Be Free.
            </p>
            <a href={() => false} target="">
              <img src={btnEdu} alt="btn" class="" />
            </a>
          </div>
          <img
            src={imgContent}
            alt="img content"
            className="order-0 order-lg-1 col-lg-4 cart_item item-img"
          />
          <div className="order-1 order-lg-3 col-lg-4 cart_item item-left">
            <h2>ENTERTAIN</h2>
            <img src={entertain} alt="Educate" class="fluid"></img>
            <p
              class="educateText"
              style={{
                maxWidth: "500px",
              }}
            >
              Make Learning Fun By Uploading Your Custom Audio Of Your Child
              Saying Numbers 1-10 Or Their ABC’s And We Will Create A Custom
              Video Using Grant The Dragon. Be The Best Mom, Dad, Grandparent,
              Aunt Or Uncle And Get Your Custom Video Today.
            </p>
            <a href={() => false} target="">
              <img src={btnLearn} alt="btn" class="" />
            </a>
          </div>
        </div>
        <div className="carousel_bottom">
          <span>FUN FOR ALL AGES</span>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
