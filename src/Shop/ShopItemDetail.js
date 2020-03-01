import React from "react";
import "../styles.css";

class ShopItemDetail extends React.Component {
  constructor(props) {
    super(props);
    this.Back = this.Back.bind(this);
    this.state = {
      Path: "Collections -> Example Collection -> Item name",
      ItemDetail: this.props.ItemDetail(),
      Item: {
        Title: this.props.Title,
        Price: this.props.Price
      }
    };
  }

  Back() {
    this.props.ItemDetail(this.state);
  }

  render() {
    return (
      <div>
        <div className="ShopItemDetail-Return">
          <a onClick={this.Back}>return</a>
        </div>
        <div className="ShopItemDetail">
          <div className="ShopItemDetail-Left">
            <div className="ShopItemDetail-Picture" />
            <div className="ShopItemDetail-PictureSlider" />
          </div>
          <div className="ShopitemDetail-Right">
            <div className="ShopItemDetail-Title" />
            <div className="ShopItemDetail-Description" />
            <div className="ShopItemDetail-Buttons" />
          </div>
        </div>
      </div>
    );
  }
}

export default ShopItemDetail;
