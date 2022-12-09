import { Box, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CardHeadingTitle from "../../CardHeadingTitle";

const CreateItemForm: React.FC = () => {
  const [img, setImg] = useState<object | null>(null);
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string | null>(null);
  const [size, setSize] = useState<string | null>(null);
  const [value, setValue] = useState<string | null>(null);
  const [linkImg, setLinkImg] = useState<string | null>(null);
  useEffect(() => {
    if (img) {
      // let url = URL.createObjectURL(img);
      // setLinkImg(url);
    }
  }, [img]);
  const createItem = () => {
    let data = {
      img,
      name,
    };
  };
  return (
    <section className="tf-section create-item pd-top-0">
      <Box className="container">
        <Box className="row">
          <Box className="col-md-12">
            <Box className="form-create-item-content">
              <Box
                className="form-create-item"
                style={{ marginRight: 30, borderRadius: 20 }}
              >
                <CardHeadingTitle
                  title="createItem"
                  isOpenIcon={false}
                  isShowContentRight={false}
                />

                <form id="create-item-1" acceptCharset="utf-8">
                  <label className="uploadFile">
                    <span className="filename">
                      {/* {img ? img?.name : "Choose Item"} */}
                    </span>
                    <input
                      type="file"
                      className="inputfile form-control"
                      name="file"
                      onChange={(e: any) => {
                        console.log(e?.target?.files[0]);
                        setImg(e?.target?.files[0]);
                      }}
                    />
                    <span className="icon">
                      <i className="far fa-cloud-upload"></i>
                    </span>
                  </label>
                  <Box className="input-group">
                    <input
                      value={name}
                      type="text"
                      placeholder="Item Name"
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                    <input
                      name="number"
                      // value={price}
                      type="number"
                      placeholder="Item Price"
                      required
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </Box>
                  <Box className="input-group">
                    <input
                      name="name"
                      value=""
                      type="text"
                      placeholder="Royality"
                      required
                    />
                    <input
                      name="number"
                      value=""
                      type="text"
                      placeholder="Size"
                      required
                    />
                  </Box>
                  <Box className="input-group">
                    <input
                      name="name"
                      value=""
                      type="text"
                      placeholder="Blance"
                      required
                    />
                    <input
                      name="number"
                      value=""
                      type="text"
                      placeholder="No Of Copies"
                      required
                    />
                  </Box>
                  <textarea
                    id="comment-message"
                    name="message"
                    tabIndex={4}
                    placeholder="Description"
                    aria-required="true"
                  ></textarea>
                  <Box className="input-group style-2 ">
                    <Box className="btn-check">
                      <input type="radio" id="sale" name="fav_language" />
                      <label className="label-forms" htmlFor="sale">
                        Put On Sale
                      </label>
                    </Box>
                    <Box className="btn-check">
                      <input type="radio" id="price" name="fav_language" />
                      <label className="label-forms" htmlFor="price">
                        Instant Sale Price
                      </label>
                    </Box>
                    <Box className="btn-check">
                      <input type="radio" id="purchase" name="fav_language" />
                      <label className="label-forms" htmlFor="purchase">
                        Unlock Purchased
                      </label>
                    </Box>
                  </Box>
                  <button
                    id="submit"
                    className="sc-button style letter style-2"
                    onClick={createItem}
                  >
                    <span>Create Item</span>{" "}
                  </button>
                </form>
              </Box>
              <Box
                className="slider-item"
                style={{ display: "flex", width: "27%" }}
              >
                <Box className="sc-product-item" style={{ width: "100%" }}>
                  <Box style={{ marginBottom: "54px" }}>
                    <h3>Demo Item</h3>
                  </Box>
                  <Box className="product-img">
                    <Image
                      src={
                        linkImg ? linkImg : "/images/product-item/item-1.jpg"
                      }
                      alt="Image"
                    />
                    <a
                      data-toggle="modal"
                      data-target="#popup_bid"
                      className="sc-button style letter"
                    >
                      <span>Place Bid</span>
                    </a>
                    <label>BSC</label>
                  </Box>
                  <Box className="product-content">
                    <h5 className="title">{name}</h5>
                    <Box className="product-author flex">
                      <Box className="avatar">
                        <Image src="/images/avatar/avt-7.jpg" alt="Image" />
                      </Box>
                      <Box className="infor">
                        <Box className="author-name">
                          <a href="/pages/authors">Daniel M. Bivens</a>
                        </Box>
                        <span>Creator</span>
                      </Box>
                    </Box>
                    <Box className="product-price">
                      <Box className="title">Current Bid</Box>
                      <Box className="price">
                        <span>{price} ETH</span>
                        <span>= $32.420</span>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default CreateItemForm;
