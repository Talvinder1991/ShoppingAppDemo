export interface ShopListItems {
    id: number,
    colour: string,
    name: string,
    price: number,
    img: string,
    count: number
}

export interface FailedIndexInfo {
    index: number;
    highestMeasuredFrameIndex: number;
    averageItemLength: number;
}
