import { blog } from "lib/constant/Blog";
import { useState } from "react";
import CardBlog from "lib/components/Card/CardBlog";
import CardNewLetter from "lib/components/Card/CardSubFooter";
import CardPageTitle from "lib/components/Card/CardSubHeader";
import { Box, ListItem, UnorderedList } from "@chakra-ui/react";

const Blog: React.FC = () => {
  const [dataCardBlog, setDataCardBlog] = useState<any>(blog);
  return (
    <>
      <CardPageTitle title="blog" />

      <Box className="tf-section sc-card-blog">
        <Box className="container">
          <Box className="row">
            {dataCardBlog?.map((card: any, index: number) => (
              <CardBlog props={{ ...card }} key={index} />
            ))}

            <Box className="col-md-12">
              <Box className="wg-themesflat-pagination">
                <UnorderedList>
                  <ListItem>
                    <a href="#" className="page-numbers prev active"></a>
                  </ListItem>
                  <ListItem>
                    <a href="#" className="page-numbers">
                      01
                    </a>
                  </ListItem>
                  <ListItem>
                    <a href="#" className="page-numbers">
                      02
                    </a>
                  </ListItem>
                  <ListItem>
                    <a href="#" className="page-numbers current">
                      03
                    </a>
                  </ListItem>
                  <ListItem>
                    <a href="#" className="page-numbers">
                      04
                    </a>
                  </ListItem>
                  <ListItem>
                    <a href="#" className="page-numbers next"></a>
                  </ListItem>
                </UnorderedList>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <CardNewLetter />
    </>
  );
};

export default Blog;
