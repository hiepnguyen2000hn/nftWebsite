export interface FlPageTitle {
  [key: string]: {
    pageTitleHeading: string;
    pageTitleBreadcrumbs: string;
  };
}

export const flPageTitle = {
  explore: {
    pageTitleHeading: "Explore",
    pageTitleBreadcrumbs: "Explore",
  },
  itemDetail: {
    pageTitleHeading: "Auctions Details",
    pageTitleBreadcrumbs: "Auctions Details",
  },
  blog: {
    pageTitleHeading: "New & Blogs",
    pageTitleBreadcrumbs: "New & Blogs",
  },
  blogDetail: {
    pageTitleHeading: "Blog Destails",
    pageTitleBreadcrumbs: "Blog Destails",
  },
  authors: {
    pageTitleHeading: "Authors",
    pageTitleBreadcrumbs: "Authors",
  },
  walletConnect: {
    pageTitleHeading: "Wallet-Connect",
    pageTitleBreadcrumbs: "Wallet-Connect",
  },
  createItem: {
    pageTitleHeading: "Create Item",
    pageTitleBreadcrumbs: "Create Item",
  },
  contact: {
    pageTitleHeading: "Contact",
    pageTitleBreadcrumbs: "Contact",
  },
};
