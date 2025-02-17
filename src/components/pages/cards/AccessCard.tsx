"use client";
import scss from "./AccessCard.module.scss";
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

const AccessCard = ({ el }: IAllType) => {
  return (
    <section className={scss.AccessCard}>
      <div className="container">
        <div className={scss.content}>AccessCard</div>
      </div>
    </section>
  );
};

export default AccessCard;
