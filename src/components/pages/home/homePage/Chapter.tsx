"use client";
import scss from "./Chapter.module.scss";
import chapterImg1 from "../../../assets/sectionImg/chapterImg 1.png";
import chapterImg2 from "../../../assets/sectionImg/chapterImg 2.png";
import chapterImg3 from "../../../assets/sectionImg/chapterImg 3.png";
import Image from "next/image";

const Chapter = () => {
  return (
    <section className={scss.Chapter}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.chapterInfo}>
            <Image src={chapterImg1} alt="chapterImg1" />
            <ul>
              <li>Classic</li>
              <li>Sport</li>
              <li>Jacket</li>
              <li>T-Shirt</li>
            </ul>
          </div>
          <hr />
          <div className={scss.chapterInfo}>
            <Image src={chapterImg2} alt="chapterImg2" />
            <ul>
              <li>Classic</li>
              <li>Sport</li>
              <li>Warm</li>
              <li>Shorts</li>
            </ul>
          </div>
          <hr />
          <div className={scss.chapterInfo}>
            <Image src={chapterImg3} alt="chapterImg3" />
            <ul>
              <li>Classic</li>
              <li>Sport</li>
              <li>Boots</li>
              <li>Slipper</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chapter;
