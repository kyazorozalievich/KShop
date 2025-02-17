"use client";
import { useGetKShopQuery } from "@/redux/api/kshop";
import scss from "./Clothes.module.scss";
import ClothesCard from "../../cards/ClothesCard";

const Clothes = () => {
  const { data } = useGetKShopQuery();
  return (
    <section className={scss.Clothes}>
      <div className="container">
        <div className={scss.content}>
          <h1>Clothes</h1>
          <div className={scss.cards}>
            {data?.data.map(
              (el) =>
                el.typeMain === "clothes" && (
                  <ClothesCard el={el} key={el._id} />
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clothes;
