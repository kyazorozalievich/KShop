namespace KShop {
  interface IProduct {
    _id?: number;
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
  interface IAllContent {
    current_page: number;
    per_page: number;
    total_pages: number;
    total_items: number;
    data: IProduct[];
  }

  type postKShopResponse = IAllContent;
  type postKShopRequest = IProduct;

  type getKShopResponse = IAllContent;
  type getKShopRequest = void;

  type patchKShopResponse = IAllContent;
  type patchKShopRequest = {
    id: number;
    data: IAllContent;
  };

  type deleteKShopResponse = IAllContent;
  type deleteKShopRequest = number | undefined;
}
