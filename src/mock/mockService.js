import Mock from 'mockjs';
/*json格式文件不需要对外暴露, 可以直接引入*/
import bannerList from './banner.json';
import floorList from './floor.json';
import floorItemList from './floorItem.json';

Mock.mock('/mock/getBannerList', 'get', () => {
    return {
        code: 200,
        data: bannerList
    }
});

Mock.mock('/mock/getFloorList', 'get', () => {
    return {
        code: 200,
        data: floorList
    }
});

Mock.mock(RegExp('/mock/getFloorItemById' + ".*"), 'get', (options) => {
    let floorItemId = getUrlQuery(options.url).floorItemId;
    let floorItem;
    for (const item of floorItemList) {
        if (item.id === floorItemId) {
            floorItem = item;
            break;
        }
    }

    return {
        code: 200,
        data: floorItem
    }
});

function getUrlQuery(url) {
    let queryMap = url.split('?')[1].split('&');
    let query = {}
    for (const item of queryMap) {
        let itemArr = item.split('=');
        query[itemArr[0]] = itemArr[1];
    }

    return query;
}
