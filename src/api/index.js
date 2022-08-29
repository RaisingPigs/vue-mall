import requests from "@/api/requests";
import mockRequests from "@/api/mockRequests";

/*获取分类地址*/
export const reqCategoryList = () => requests.get('/product/getBaseCategoryList');

/*获取banner数据*/
export const reqBannerList = () => mockRequests.get('/getBannerList');

/*获取floor数据*/
export const reqFloorList = () => mockRequests.get('/getFloorList');

/*获取floor中的item数据*/
export const reqFloorItem = (floorItemId) => mockRequests.get('/getFloorItemById', {params: {floorItemId}});

export const reqSearchList = (searchParams) => requests.post('/list', searchParams)

export const reqGoodsInfo = (skuId) => requests.get(`/item/${skuId}`);

export const reqAddOrUpdateShopcart = (skuId, skuNum) => requests.post(`/cart/addToCart/${skuId}/${skuNum}`)

export const reqShopcartList = () => requests.get('/cart/cartList');

export const reqDelCartItem = (skuId) => requests.delete(`/cart/deleteCart/${skuId}`);

export const reqCheckCartItem = (skuId, isChecked) => requests.get(`/cart/checkCart/${skuId}/${isChecked}`);

export const reqRegistCode = (phone) => requests.get(`/user/passport/sendCode/${phone}`);

export const reqRegist = (registParams) => requests.post(`/user/passport/register`, registParams);

export const reqLogin = (user) => requests.post(`/user/passport/login`, user);

export const reqLogout = () => requests.get(`/user/passport/logout`);

export const reqUserInfo = () => requests.get(`/user/passport/auth/getUserInfo`);

export const reqTradeInfo = () => requests.get(`/order/auth/trade`);

export const reqOrderList = (page, limit) => requests.get(`/order/auth/${page}/${limit}`);

export const reqOrderSubmit = (tradeNo, submitData) => requests.post(`/order/auth/submitOrder`, submitData, {params: {tradeNo}});

export const reqPayInfo = (orderId) => requests.get(`/payment/weixin/createNative/${orderId}`);

export const reqOrderPayStatus = (orderId) => requests.get(`/payment/weixin/queryPayStatus/${orderId}`);
