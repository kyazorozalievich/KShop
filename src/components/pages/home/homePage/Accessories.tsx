"use client";
import { useGetKShopQuery } from "@/redux/api/kshop";
import scss from "./Accessories.module.scss";
import ClothesCard from "../../cards/ClothesCard";

const Accessories = () => {
  const { data } = useGetKShopQuery();
  return (
    <section className={scss.Accessories}>
      <div className="container">
        <div className={scss.content}>
          <h1>Accessories</h1>
          <div className={scss.cards}>
            {data?.data.map(
              (el) =>
                el.typeMain === "accessories" && (
                  <ClothesCard el={el} key={el._id} />
                )
            )}
          </div>
        </div>
      </div>
    </section> 
  );
};

export default Accessories;
