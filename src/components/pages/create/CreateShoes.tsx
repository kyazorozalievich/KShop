"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import scss from "./CreateShoes.module.scss";
import { usePostKShopMutation } from "@/redux/api/kshop";
import { useState } from "react";
import { usePostFileMutation } from "@/redux/api/upload";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";

interface IProduct {
  title: string;
  price: number;
  img: string[];
  description: string;
  size: string;
  material: string;
  rate: number;
  count: number;
  typeMain: string;
  typeNext: string;
}

const CreateShoes = () => {
  const { register, handleSubmit, reset } = useForm<IProduct>();
  const [postKShop] = usePostKShopMutation();
  const [postFile] = usePostFileMutation();
  const [sizeS, setSizeS] = useState(false);
  const [sizeL, setSizeL] = useState(false);
  const [sizeM, setSizeM] = useState(false);
  const [sizeXL, setSizeXL] = useState(false);
  const [size2XL, setSize2XL] = useState(false);
  const [img, setImg] = useState<string>("");
  const [typeMain, setTypeMain] = useState<string>("");
  const [typeNext, setTypeNext] = useState<string>("");

  const onPost: SubmitHandler<IProduct> = async (data) => {
    console.log("hello");
    if (!sizeS && !sizeL && !sizeM && !sizeXL && !size2XL) {
      toast.error("Выберите размер для товара!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      const file = data.img[0];
      const formData = new FormData();
      formData.append("file", file);

      const { data: responseData } = await postFile(formData);

      const newData = {
        title: data.title,
        price: Number(data.price),
        img: responseData?.url!,
        description: data.description,
        size: `${sizeS ? "S" : ""} ${sizeL ? "L" : ""} ${sizeM ? "M" : ""} ${
          sizeXL ? "XL" : ""
        } ${size2XL ? "2XL" : ""}`,
        material: data.material,
        rate: Math.round(Math.random() * 5),
        count: Number(data.count),
        typeMain: typeMain,
        typeNext: typeNext,
      };

      await postKShop(newData);
      // reset();
      setImg("");
      // setSizeS(false);
      // setSizeL(false);
      // setSizeM(false);
      // setSizeXL(false);
      // setSize2XL(false);
      // setTypeMain("");
      // setTypeNext("");

      toast.success("Товар успешно оформлен", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setImg(imageUrl);
    }
  };

  return (
    <section className={scss.CreateShoes}>
      <ToastContainer />
      <div className="container">
        <div className={scss.content}>
          <form onSubmit={handleSubmit(onPost)}>
            <div className={scss.inpBlock}>
              <div className={scss.input}>
                <h4>Title</h4>
                <input
                  type="search"
                  placeholder="title..."
                  {...register("title", { required: true })}
                />
              </div>
              <div className={scss.input}>
                <h4>Price</h4>
                <input
                  type="number"
                  placeholder="price..."
                  {...register("price", { required: true })}
                />
              </div>
              <div className={scss.input}>
                <h4>Type</h4>
                <select onChange={(e) => setTypeMain(e.target.value)}>
                  <option value="">Type?</option>
                  <option value="accessories">Accessories</option>
                  <option value="clothes">Clothes</option>
                  <option value="outfit">Outfit</option>
                </select>
              </div>
              <div className={scss.input}>
                <h4>Material</h4>
                <input
                  type="search"
                  placeholder="material..."
                  {...register("material", { required: true })}
                  className={scss.material}
                />
              </div>
              <div className={scss.input}>
                <h4>Count</h4>
                <input
                  type="number"
                  placeholder="count..."
                  {...register("count", { required: true })}
                />
              </div>
              <div className={scss.input}>
                <h4>Type Toch</h4>
                {typeMain === "clothes" ? (
                  <select onChange={(e) => setTypeNext(e.target.value)}>
                    <option value="">Clothes type</option>
                    <option value="outerwear">Outerwear</option>
                    <option value="trouser">Trouser</option>
                    <option value="boots">Boots</option>
                  </select>
                ) : typeMain === "outfit" ? (
                  <select onChange={(e) => setTypeNext(e.target.value)}>
                    <option value="">Type Outfit</option>
                    <option value="classic">Classic</option>
                    <option value="sport">Sport</option>
                    <option value="ordinary">Ordinary</option>
                  </select>
                ) : typeMain === "accessories" ? (
                  <select onChange={(e) => setTypeNext(e.target.value)}>
                    <option value="">Accessories Type</option>
                  </select>
                ) : (
                  <select onChange={(e) => setTypeNext(e.target.value)}>
                    <option value="">No Type</option>
                  </select>
                )}
              </div>
            </div>
            <div className={scss.inpBlock}>
              <div className={scss.input2}>
                <h4>Image</h4>
                <div className={scss.fileImg}>
                  {img && (
                    <Image
                      src={img}
                      alt="Превью"
                      width={100}
                      height={100}
                      className={scss.previewImg}
                    />
                  )}
                  <input
                    type="file"
                    id="file-upload"
                    {...register("img", { required: true })}
                    onChange={handleFileChange}
                    className={scss.inpFile}
                  />
                  {img && (
                    <button onClick={() => setImg("")}>Выбрать Другое</button>
                  )}
                </div>
              </div>
              <div className={scss.input2}>
                <h4 className={scss.descText}>Description</h4>
                <textarea
                  placeholder="description..."
                  {...register("description", { required: true })}
                  className={scss.inpDesc}
                ></textarea>
              </div>
              <div className={scss.inputSize}>
                <h4>Sizes</h4>
                <div className={scss.allSize}>
                  <div
                    onClick={() => setSizeS(!sizeS)}
                    className={scss.size}
                    style={{
                      background: sizeS ? "black" : "transparent",
                      color: sizeS ? "white" : "black",
                      border: `2px solid ${sizeS ? "black" : "black"}`,
                    }}
                  >
                    S
                  </div>
                  <div
                    onClick={() => setSizeL(!sizeL)}
                    className={scss.size}
                    style={{
                      background: sizeL ? "black" : "transparent",
                      color: sizeL ? "white" : "black",
                      border: `2px solid ${sizeL ? "black" : "black"}`,
                    }}
                  >
                    L
                  </div>
                  <div
                    onClick={() => setSizeM(!sizeM)}
                    className={scss.size}
                    style={{
                      background: sizeM ? "black" : "transparent",
                      color: sizeM ? "white" : "black",
                      border: `2px solid ${sizeM ? "black" : "black"}`,
                    }}
                  >
                    M
                  </div>
                  <div
                    onClick={() => setSizeXL(!sizeXL)}
                    className={scss.size}
                    style={{
                      background: sizeXL ? "black" : "transparent",
                      color: sizeXL ? "white" : "black",
                      border: `2px solid ${sizeXL ? "black" : "black"}`,
                    }}
                  >
                    XL
                  </div>
                  <div
                    onClick={() => setSize2XL(!size2XL)}
                    className={scss.size}
                    style={{
                      background: size2XL ? "black" : "transparent",
                      color: size2XL ? "white" : "black",
                      border: `2px solid ${size2XL ? "black" : "black"}`,
                    }}
                  >
                    2XL
                  </div>
                </div>
              </div>
            </div>
            <button type="submit">+ Save</button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default CreateShoes;
