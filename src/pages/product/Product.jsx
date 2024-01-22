import "./product.css";
import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="https://th.bing.com/th/id/OIP.WMpkqUWRsgxpsc_3ByMnJQHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain"
              alt=""
              className="productInfoImg"
            />
          </div>
          <span className="productName">Apple Airpods</span>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">1232</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">active:</span>
              <span className="productInfoValue">yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">ins stock:</span>
              <span className="productInfoValue">yes</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="prodcutForm">
          <div className="prodcutFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Apple AirPod" />
            <label>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="prodcutFormRight">
            <div className="productUpload">
              <img
                src="https://th.bing.com/th/id/OIP.WMpkqUWRsgxpsc_3ByMnJQHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain"
                alt=""
                className="productUploadImg"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
