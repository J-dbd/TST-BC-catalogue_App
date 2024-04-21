import { ProductsAPIRes } from "lib";
class API {
  baseURL: string;

  constructor() {
    const API_URL =
      process.env.NODE_ENV !== "production"
        ? process.env.REACT_APP_PROD_API_URL
        : process.env.REACT_APP_DEV_API_URL;

    if (API_URL === undefined) {
      console.log("[API] url is undefined");
      this.baseURL = "dummySite";
    } else {
      this.baseURL = API_URL;
    }
  }

  /**
   *
   * @returns all product data with 'products', 'total', 'skip', 'limit' properties.
   */
  async getAllProducts(): Promise<ProductsAPIRes> {
    try {
      const res = await fetch(this.baseURL);
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("[getAllProducts] fetch error:", error);
      throw error;
    }
  }

  async getSeachData(keyword: string): Promise<ProductsAPIRes> {
    const reqUrl = `${this.baseURL}/search?q=${keyword}`;
    console.log("reqUrl", reqUrl);
    try {
      const res = await fetch(reqUrl);
      const data = await res.json();
      console.log("검색데이터", data);
      return data;
    } catch (error) {
      console.error("[getSeracData] fetch error", error);
      throw error;
    }
  }
}

export default API;
