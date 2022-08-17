import requests from "@/api/requests";

export const reqCategoryList = () => requests.get('product/getBaseCategoryList');
