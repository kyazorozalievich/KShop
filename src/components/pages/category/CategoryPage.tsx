"use client";
import Image from "next/image";
import scss from "./CategoryPage.module.scss";
import outerwear from "../../assets/sectionImg/chapterImg 1.png";
import trouser from "../../assets/sectionImg/chapterImg 2.png";
import boots from "../../assets/sectionImg/chapterImg 3.png";
import access from "../../assets/sectionImg/chapterImg 4.png";
import { useRouter } from "next/navigation";

const CategoryPage = () => {
  const router = useRouter();
  return (
    <section className={scss.CategoryPage}>
      <div className="container">
        <div className={scss.content}>
          <h1>Category</h1>
          <div className={scss.blocks}>
            <div
              className={scss.block}
              onClick={() => {
                router.push("/category/outerwear");
              }}
            >
              <Image src={outerwear} alt="" />
              <h2>Outerwear</h2>
            </div>
            <div
              className={scss.block}
              onClick={() => {
                router.push("/category/trouser");
              }}
            >
              <Image src={trouser} alt="" />
              <h2>Trouser</h2>
            </div>
            <div
              className={scss.block}
              onClick={() => {
                router.push("/category/boots");
              }}
            >
              <Image src={boots} alt="" />
              <h2>Boots</h2>
            </div>
            <div
              className={scss.block}
              onClick={() => {
                router.push("/category/access");
              }}
            >
              <Image src={access} alt="" />
              <h2>Accessories</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
