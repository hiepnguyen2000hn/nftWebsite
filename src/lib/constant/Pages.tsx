export interface TopSellerPage {
  avt: string;
  name: string;
  amount: number;
}
export const topSeller: TopSellerPage[] = [
  {
    avt: "/images/avatar/avt-1.jpg",
    name: "Yue",
    amount: 523.7,
  },
  {
    avt: "/images/avatar/avt-2.jpg",
    name: "Tulen",
    amount: 600,
  },
  {
    avt: "/images/avatar/avt-3.jpg",
    name: "Yorn",
    amount: 505,
  },
  {
    avt: "/images/avatar/avt-4.jpg",
    name: "Maloch",
    amount: 516.7,
  },
  {
    avt: "/images/avatar/avt-5.jpg",
    name: "Yan",
    amount: 550,
  },
  {
    avt: "/images/avatar/avt-6.jpg",
    name: "Zephys",
    amount: 534.1,
  },
];

export interface HotCollectionPage {
  bgImg: string;
  avtImg: string;
  name: string;
  detail: string;
}
export const hotCollection: HotCollectionPage[] = [
  {
    bgImg: "/images/img-collection/collection-7.jpg",
    avtImg: "/images/avatar/avt-15.jpg",
    name: "Yena",
    detail: "ERC - 83",
  },
  {
    bgImg: "/images/img-collection/collection-8.jpg",
    avtImg: "/images/avatar/avt-16.jpg",
    name: "Zill",
    detail: "ERC - 83",
  },
  {
    bgImg: "/images/img-collection/collection-9.jpg",
    avtImg: "/images/avatar/avt-17.jpg",
    name: "Wukong",
    detail: "ERC - 83",
  },
  {
    bgImg: "/images/img-collection/collection-10.jpg",
    avtImg: "/images/avatar/avt-18.jpg",
    name: "Elsu",
    detail: "ERC - 83",
  },
  {
    bgImg: "/images/img-collection/collection-11.jpg",
    avtImg: "/images/avatar/avt-19.jpg",
    name: "Violet",
    detail: "ERC - 83",
  },
  {
    bgImg: "/images/img-collection/collection-12.jpg",
    avtImg: "/images/avatar/avt-15.jpg",
    name: "Migita",
    detail: "ERC - 83",
  },
  {
    bgImg: "/images/img-collection/collection-13.jpg",
    avtImg: "/images/avatar/avt-16.jpg",
    name: "Oishi",
    detail: "ERC - 83",
  },
  {
    bgImg: "/images/img-collection/collection-9.jpg",
    avtImg: "/images/avatar/avt-17.jpg",
    name: "Gojo Storu",
    detail: "ERC - 83",
  },
];

//Wallet Connect
export interface WalletConnectPage {
  iconImg: string;
  title: string;
  des: string;
}
export const walletConnect: WalletConnectPage[] = [
  {
    iconImg: "/images/icon/icon-1.svg",
    title: "Meta Mask",
    des: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,",
  },
  {
    iconImg: "/images/icon/icon-2.svg",
    title: "Bitski",
    des: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,",
  },
  {
    iconImg: "/images/icon/icon-3.svg",
    title: "Fortmatic",
    des: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,",
  },
  {
    iconImg: "/images/icon/icon-4.svg",
    title: "Wallet Connect",
    des: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,",
  },
  {
    iconImg: "/images/icon/icon-5.svg",
    title: "Coinbase Wallet",
    des: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,",
  },
  {
    iconImg: "/images/icon/icon-6.svg",
    title: "Authereum",
    des: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,",
  },
  {
    iconImg: "/images/icon/icon-7.png",
    title: "Kaikas",
    des: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,",
  },
  {
    iconImg: "/images/icon/icon-8.svg",
    title: "Torus",
    des: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,",
  },
  {
    iconImg: "/images/icon/icon-9.svg",
    title: "Bitcoin",
    des: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,",
  },
];

//Contact
export interface ContactPage {
  contactInfo: string;
  faIcon: string;
  Infor: string;
}
export const contact: ContactPage[] = [
  {
    contactInfo: "Need Help? Contact With Our Hotline",
    faIcon: "fal fa-phone-volume",
    Infor: "+012 (345) 678 88",
  },
  {
    contactInfo: "Need Help? Yamete",
    faIcon: "fal fa-map-marker-alt",
    Infor: "55 Main Street, 2nd Block,3rd Floor, New York",
  },
  {
    contactInfo: "Need Help? Contact With Our Hotline",
    faIcon: "fal fa-envelope-open",
    Infor: "hotlineinfo@gmail.com www.bidzen.net",
  },
];
