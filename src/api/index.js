import requests from "@/api/requests";
import mockRequests from "@/api/mockRequests";

export const reqCategoryList = () => requests.get('/product/getBaseCategoryList');

export const reqBannerList = () => mockRequests.get('/getBannerList');

export const reqFloorList = () => mockRequests.get('/getFloorList');

export const reqFloorItem = (floorItemId) => mockRequests.get('/getFloorItemById', {params: {floorItemId}});
