"use client";
import scss from "./OutfitCard.module.scss";
import { MdFavorite } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";

interface IProduct {
  title: string;
  price: number; 
  img: string;
  description: string;
  size: string;
  material: string;
  rate: number;
  count: number;
  typeMain: string;
  typeNext: string;
}

interface IAllType {
  el: IProduct;
}

const OutfitCard = ({ el }: IAllType) => {
  return (
    <div className={scss.outfit}>
      <Image src={el.img} alt="outfit" width={250} height={350} />
      <div className={scss.text}>
        <div className={scss.textTop}>
          <h3>${el.price}</h3>
          <div className={scss.icons}>
            <a>
              <FaShoppingCart />
            </a>
            <a>
              <MdFavorite />
            </a>
          </div>
        </div>
        <div className={scss.textBtm}>
          <h2>{el.title}</h2>
          <button>Подробнее</button>
        </div>
      </div>
    </div>
  );
};

export default OutfitCard;
