"use client";
import scss from "./ClothesCard.module.scss";
import Image from "next/image";
import { MdFavorite } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

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

const ClothesCard = ({ el }: IAllType) => {
  return (
    <div className={scss.ClothesCard}>
      <div className={scss.icons}>
        <a>
          <FaShoppingCart />
        </a>
        <a>
          <MdFavorite />
        </a>
      </div>
      <Image src={el.img} alt="Clothes" width={100} height={100} />
      <div className={scss.allText}>
        <h3>{el.title}</h3>
        <div className={scss.text}>
          <h3>Цена:</h3>
          <h4>${el.price}</h4>
        </div>
        <div className={scss.text}>
          <h3>Размер:</h3>
          <h4>{el.size}</h4>
        </div>
        <button>Подробнее</button>
      </div>
    </div>
  );
};

export default ClothesCard;
