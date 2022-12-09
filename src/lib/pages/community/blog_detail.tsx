import Link from "next/link";
import CardNewLetter from "lib/components/Card/CardSubFooter";
import CardPageTitle from "lib/components/Card/CardSubHeader";
import PostDetails from "lib/components/Card/BlogDetail";

const BlogDetail: React.FC = () => {
  return (
    <>
      <CardPageTitle title="blogDetail" />
      <PostDetails />
      <CardNewLetter />
    </>
  );
};

export default BlogDetail;
