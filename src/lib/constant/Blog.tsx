export interface Blog {
  imgPost: string;
  name: string;
  date: string;
  article: string;
}

export const blog: Blog[] = [
  {
    imgPost: "/images/post/post-1.jpg",
    name: "Senrew A. Sisson",
    date: "25 JAN 2022",
    article: "An Overview Of Most Common UX Design Deliverables",
  },
  {
    imgPost: "/images/post/post-2.jpg",
    name: "Senrew A. Sisson",
    date: "25 JAN 2022",
    article: "An Overview Of Most Common UX Design Deliverables",
  },
  {
    imgPost: "/images/post/post-3.jpg",
    name: "Senrew A. Sisson",
    date: "25 JAN 2022",
    article: "An Overview Of Most Common UX Design Deliverables",
  },
  {
    imgPost: "/images/post/post-4.jpg",
    name: "Senrew A. Sisson",
    date: "25 JAN 2022",
    article: "An Overview Of Most Common UX Design Deliverables",
  },
  {
    imgPost: "/images/post/post-5.jpg",
    name: "Senrew A. Sisson",
    date: "25 JAN 2022",
    article: "An Overview Of Most Common UX Design Deliverables",
  },
  {
    imgPost: "/images/post/post-6.jpg",
    name: "Senrew A. Sisson",
    date: "25 JAN 2022",
    article: "An Overview Of Most Common UX Design Deliverables",
  },
  {
    imgPost: "/images/post/post-7.jpg",
    name: "Senrew A. Sisson",
    date: "25 JAN 2022",
    article: "An Overview Of Most Common UX Design Deliverables",
  },
  {
    imgPost: "/images/post/post-8.jpg",
    name: "Senrew A. Sisson",
    date: "25 JAN 2022",
    article: "An Overview Of Most Common UX Design Deliverables",
  },
  {
    imgPost: "/images/post/post-9.jpg",
    name: "Senrew A. Sisson",
    date: "25 JAN 2022",
    article: "An Overview Of Most Common UX Design Deliverables",
  },
];

export interface PostNews {
  postImg: string;
  postDate: string;
  postTitle: string;
  type: string;
}

export const postNew: PostNews[] = [
  {
    postImg: "/images/post/post-related-new-1.jpg",
    postDate: "05 Jan 2022",
    postTitle: "Comprensive Guides Server Push Design Feature",
    type: "related",
  },
  {
    postImg: "/images/post/post-related-new-2.jpg",
    postDate: "05 Jan 2022",
    postTitle: "Comprensive Guides Server Push Design Feature",
    type: "related",
  },
  {
    postImg: "/images/post/post-recent-new-1.jpg",
    postDate: "05 Jan 2022",
    postTitle: " An Overview Of The Most Common UX Design",
    type: "recent",
  },
  {
    postImg: "/images/post/post-recent-new-2.jpg",
    postDate: "05 Jan 2022",
    postTitle: " An Overview Of The Most Common UX Design",
    type: "recent",
  },
  {
    postImg: "/images/post/post-recent-new-3.jpg",
    postDate: "05 Jan 2022",
    postTitle: " An Overview Of The Most Common UX Design",
    type: "recent",
  },
];

export interface Comment {
  avtCmt: string;
  nameCmt: string;
  timeCmt: string;
  contentCmt: string;
  replyCmt: any;
}

export const comment: Comment[] = [
  {
    avtCmt: "/images/avatar/avt-13.jpg",
    nameCmt: "Baymax",
    timeCmt: "25 January 2022",
    contentCmt:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae",
    replyCmt: [
      {
        avtCmt: "/images/avatar/avt-14.jpg",
        nameCmt: "Zill",
        timeCmt: "25 January 2022",
        contentCmt:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae",
      },
      {
        avtCmt: "/images/avatar/avt-15.jpg",
        nameCmt: "Tulen",
        timeCmt: "25 January 2022",
        contentCmt:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae",
      },
    ],
  },
  {
    avtCmt: "/images/avatar/avt-16.jpg",
    nameCmt: "Maloch",
    timeCmt: "25 January 2022",
    contentCmt:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae",
    replyCmt: [],
  },
];
