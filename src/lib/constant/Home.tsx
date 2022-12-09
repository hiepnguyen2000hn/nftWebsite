// export interface Item {
//   srcImg: string;
//   label: string;
//   title: string;
//   avatar: string;
//   name: string;
//   position: string;
//   isDiabledCountdown: boolean;
// }

export interface HeadingTitles {
  [key: string]: {
    title: string;
    des: string;
  };
}

export const HeadingTitle = {
  liveAuction: {
    title: "Live Auctions",
    des: "Most popular gaming digital nft market place",
  },
  latestCollection: {
    title: "Latest Collections",
    des: "Most popular gaming digital nft market place",
  },
  bestSeller: {
    title: "Best Sellers",
    des: "Most popular gaming digital nft market place",
  },
  tredyCollection: {
    title: "Trendy Collection",
    des: "Most popular gaming digital nft market place",
  },
  poplarCategory: {
    title: "Poplar Categories",
    des: "Most popular gaming digital nft market place",
  },

  // explore
  explore: {
    title: "Our Latest Collections",
    des: "Most popular gaming digital nft market place",
  },

  //authors
  topSeller: {
    title: "Top Sellers",
    des: "Most popular gaming digital nft market place",
  },
  hotCollection: {
    title: "Hot Collection",
    des: "Most popular gaming digital nft market place",
  },

  //walletConnect
  walletConnect: {
    title: "Wallet Connect",
    des: "Most popular gaming digital nft market place",
  },

  //create item
  createItem: {
    title: "Create Item",
    des: "Most popular gaming digital nft market place",
  },
};

export interface Common {
  srcImg?: {
    imgItem?: string;
    imgLeft?: string;
    imgRight1?: string;
    imgRight2?: string;
    imgRight3?: string;
  };
  label: string;
  title: string;
  avatar: string;
  name: string;
  position: string;
  isDiabledCountdown?: boolean;
  showStyleLast?: boolean;
  showPrice?: boolean;
  type?: string;
  showStyleLabel?: boolean;

  //field in Explore.tsx
  srcAvt?: any;
  showStyleOurLast?: boolean;
  showAvt?: boolean;

  //field add LiveAuctions
  ETH?: number;
  dollar?: number;
}

export const LiveAuctions: Common[] = [
  {
    srcImg: { imgItem: "/images/product-item/item-5.jpg" },
    label: "BSC",
    title: "‘’3D Space Rocket With Smoke Premium’’",
    avatar: "/images/avatar/avt-7.jpg",
    name: "Daniel M. Bivens",
    position: "Creator",
    isDiabledCountdown: true,
    ETH: 5.23,
    dollar: 32.42,
  },
  {
    srcImg: { imgItem: "/images/product-item/item-2.jpg" },
    label: "BSC",
    title: "‘’3D Space Rocket With Smoke Premium’’",
    avatar: "/images/avatar/avt-7.jpg",
    name: "Daniel M. Bivens",
    position: "Creator",
    isDiabledCountdown: true,
    ETH: 5.23,
    dollar: 32.42,
  },
  {
    srcImg: { imgItem: "/images/product-item/item-3.jpg" },
    label: "BSC",
    title: "‘’3D Space Rocket With Smoke Premium’’",
    avatar: "/images/avatar/avt-7.jpg",
    name: "Daniel M. Bivens",
    position: "Creator",
    isDiabledCountdown: true,
    ETH: 5.23,
    dollar: 32.42,
  },
  {
    srcImg: { imgItem: "/images/product-item/item-4.jpg" },
    label: "BSC",
    title: "‘’3D Space Rocket With Smoke Premium’’",
    avatar: "/images/avatar/avt-7.jpg",
    name: "Daniel M. Bivens",
    position: "Creator",
    isDiabledCountdown: true,
    ETH: 5.23,
    dollar: 32.42,
  },
  {
    srcImg: { imgItem: "/images/product-item/item-1.jpg" },
    label: "BSC",
    title: "‘’3D Space Rocket With Smoke Premium’’",
    avatar: "/images/avatar/avt-7.jpg",
    name: "Daniel M. Bivens",
    position: "Creator",
    isDiabledCountdown: true,
    ETH: 5.23,
    dollar: 32.42,
  },
  {
    srcImg: { imgItem: "/images/product-item/item-2.jpg" },
    label: "BSC",
    title: "‘’3D Space Rocket With Smoke Premium’’",
    avatar: "/images/avatar/avt-7.jpg",
    name: "Daniel M. Bivens",
    position: "Creator",
    isDiabledCountdown: true,
    ETH: 5.23,
    dollar: 32.42,
  },
  {
    srcImg: { imgItem: "/images/product-item/item-3.jpg" },
    label: "BSC",
    title: "‘’3D Space Rocket With Smoke Premium’’",
    avatar: "/images/avatar/avt-7.jpg",
    name: "Daniel M. Bivens",
    position: "Creator",
    isDiabledCountdown: true,
    ETH: 5.23,
    dollar: 32.42,
  },
  {
    srcImg: { imgItem: "/images/product-item/item-3.jpg" },
    label: "BSC",
    title: "‘’3D Space Rocket With Smoke Premium’’",
    avatar: "/images/avatar/avt-7.jpg",
    name: "Daniel M. Bivens",
    position: "Creator",
    isDiabledCountdown: true,
    ETH: 5.23,
    dollar: 32.42,
  },
];

export const latestCollections: Common[] = [
  {
    srcImg: {
      imgItem: "/images/product-item/item-5.jpg",
      imgLeft: "",
      imgRight1: "",
      imgRight2: "",
      imgRight3: "",
    },
    label: "BSC",
    title: "‘’3D Space Rocket With Smoke Premium’’",
    avatar: "/images/avatar/avt-7.jpg",
    name: "Daniel M. Bivens",
    position: "Creator",
    isDiabledCountdown: false,
    showStyleLast: true,
    showPrice: true,
    type: "item",
    showStyleLabel: true,
  },
  {
    srcImg: {
      imgItem: "",
      imgLeft: "/images/product-item/item-6.jpg",
      imgRight1: "/images/product-item/item-7.jpg",
      imgRight2: "/images/product-item/item-8.jpg",
      imgRight3: "/images/product-item/item-9.jpg",
    },

    label: "BSC",
    title:
      "‘’Multi-purpose 3D Space Rocket With Animate Real Special Smoke Premium Quality Gaming’’",
    avatar: "/images/avatar/avt-7.jpg",
    name: "Daniel M. Bivens",
    position: "Creator",
    type: "groupItem",
  },
  {
    srcImg: {
      imgItem: "/images/product-item/item-10.jpg",
      imgLeft: "",
      imgRight1: "",
      imgRight2: "",
      imgRight3: "",
    },
    label: "BSC",
    title: "‘’3D Space Rocket With Smoke Premium’’",
    avatar: "/images/avatar/avt-7.jpg",
    name: "Daniel M. Bivens",
    position: "Creator",
    isDiabledCountdown: false,
    showStyleLast: true,
    showPrice: true,
    type: "item",
    showStyleLabel: true,
  },
  {
    srcImg: {
      imgItem: "/images/product-item/item-10.jpg",
      imgLeft: "",
      imgRight1: "",
      imgRight2: "",
      imgRight3: "",
    },
    label: "BSC",
    title: "‘’3D Space Rocket With Smoke Premium’’",
    avatar: "/images/avatar/avt-7.jpg",
    name: "Daniel M. Bivens",
    position: "Creator",
    isDiabledCountdown: false,
    showStyleLast: true,
    showPrice: true,
    type: "item",
    showStyleLabel: true,
  },
];

export const trendy: Common[] = [
  {
    srcImg: { imgItem: "/images/product-item/item-12.jpg" },
    label: "PANDA",
    title: "‘’3D Space Rocket With Smoke’’",
    avatar: "/images/avatar/avt-7.jpg",
    name: "Daniel M. Bivens",
    position: "Creator",
    isDiabledCountdown: false,
    showStyleLabel: true,
    ETH: 5.23,
    dollar: 32.42,
  },
  {
    srcImg: { imgItem: "/images/product-item/item-13.jpg" },
    label: "PANDA",
    title: "‘’3D Space Rocket With Smoke’’",
    avatar: "/images/avatar/avt-7.jpg",
    name: "Daniel M. Bivens",
    position: "Creator",
    isDiabledCountdown: false,
    showStyleLabel: true,
    ETH: 5.23,
    dollar: 32.42,
  },
  {
    srcImg: { imgItem: "/images/product-item/item-14.jpg" },
    label: "PANDA",
    title: "‘’3D Space Rocket With Smoke’’",
    avatar: "/images/avatar/avt-7.jpg",
    name: "Daniel M. Bivens",
    position: "Creator",
    isDiabledCountdown: false,
    showStyleLabel: true,
    ETH: 5.23,
    dollar: 32.42,
  },
  {
    srcImg: { imgItem: "/images/product-item/item-15.jpg" },
    label: "PANDA",
    title: "‘’3D Space Rocket With Smoke’’",
    avatar: "/images/avatar/avt-7.jpg",
    name: "Daniel M. Bivens",
    position: "Creator",
    isDiabledCountdown: false,
    showStyleLabel: true,
    ETH: 5.23,
    dollar: 32.42,
  },
  {
    srcImg: { imgItem: "/images/product-item/item-16.jpg" },
    label: "PANDA",
    title: "‘’3D Space Rocket With Smoke’’",
    avatar: "/images/avatar/avt-7.jpg",
    name: "Daniel M. Bivens",
    position: "Creator",
    isDiabledCountdown: false,
    showStyleLabel: true,
    ETH: 5.23,
    dollar: 32.42,
  },
  {
    srcImg: { imgItem: "/images/product-item/item-15.jpg" },
    label: "PANDA",
    title: "‘’3D Space Rocket With Smoke’’",
    avatar: "/images/avatar/avt-7.jpg",
    name: "Daniel M. Bivens",
    position: "Creator",
    isDiabledCountdown: false,
    showStyleLabel: true,
    ETH: 5.23,
    dollar: 32.42,
  },
];

export interface Categories {
  avt: string;
  title: string;
  des: string;
}

export const categories: Categories[] = [
  {
    avt: "/images/category/category-1.jpg",
    title: "Browse By Template",
    des: "Sed ut perspiciatis unde omnis natus error sit voluptatem",
  },
  {
    avt: "/images/category/category-2.jpg",
    title: "UI Template",
    des: "Sed ut perspiciatis unde omnis natus error sit voluptatem",
  },
  {
    avt: "/images/category/category-3.jpg",
    title: "Graphics Design",
    des: "Sed ut perspiciatis unde omnis natus error sit voluptatem",
  },
  {
    avt: "/images/category/category-4.jpg",
    title: "Social Network",
    des: "Sed ut perspiciatis unde omnis natus error sit voluptatem",
  },
  {
    avt: "/images/category/category-5.jpg",
    title: "Browse By Template",
    des: "Sed ut perspiciatis unde omnis natus error sit voluptatem",
  },
  {
    avt: "/images/category/category-6.jpg",
    title: "Browse By Template",
    des: "Sed ut perspiciatis unde omnis natus error sit voluptatem",
  },
];

export interface BestSeller {
  avt: string;
  name: string;
  detail: string;
}

export const bestSeller: BestSeller[] = [
  {
    avt: "/images/avatar/avt-1.jpg",
    name: "Jason M. Stalls",
    detail: "523.7 ETH",
  },
  {
    avt: "/images/avatar/avt-2.jpg",
    name: "Jason M. Stalls",
    detail: "523.7 ETH",
  },
  {
    avt: "/images/avatar/avt-3.jpg",
    name: "Jason M. Stalls",
    detail: "523.7 ETH",
  },
  {
    avt: "/images/avatar/avt-4.jpg",
    name: "Jason M. Stalls",
    detail: "523.7 ETH",
  },
  {
    avt: "/images/avatar/avt-5.jpg",
    name: "Jason M. Stalls",
    detail: "523.7 ETH",
  },
  {
    avt: "/images/avatar/avt-6.jpg",
    name: "Jason M. Stalls",
    detail: "523.7 ETH",
  },
];
