"use client";
import scss from "./OutfitAll.module.scss";

const OutfitAll = () => {
  return (
    <section className={scss.OutfitAll}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.filter}>
            <h2>Filter</h2>
            <div className={scss.otdel}>
              <h3>Type Outfit</h3>
              <div className={scss.buttons}>
                <button>Classic</button>
                <button>Sport</button>
                <button>Ordinary</button>
              </div>
            </div>
            <div className={scss.otdel}>
              <h3>Size Outfit</h3>
              <div className={scss.buttons}>
                <button>S</button>
                <button>L</button>
                <button>M</button>
                <button>XL</button>
                <button>2XL</button>
              </div>
            </div>
            <div className={scss.otdel}>
              <h3>Price Outfit</h3>
              <div className={scss.buttons}>
                <button>Expensive</button>
                <button>Cheap</button>
              </div>
            </div>
          </div>
          <hr />
          <div className={scss.blocks}>
            <div className={scss.block}></div>
            <div className={scss.block}></div>
            <div className={scss.block}></div>
            <div className={scss.block}></div>
            <div className={scss.block}></div>
            <div className={scss.block}></div>
            <div className={scss.block}></div>
            <div className={scss.block}></div>
            <div className={scss.block}></div>
            <div className={scss.block}></div>
            <div className={scss.block}></div>
            <div className={scss.block}></div>
            <div className={scss.block}></div>
            <div className={scss.block}></div>
            <div className={scss.block}></div>
            <div className={scss.block}></div>
            <div className={scss.block}></div>
            <div className={scss.block}></div>
            <div className={scss.block}></div>
            <div className={scss.block}></div>
            <div className={scss.block}></div>
            <div className={scss.block}></div>
            <div className={scss.block}></div>
            <div className={scss.block}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutfitAll;
