import React from "react";
import "../styles.css";

class ShopItem extends React.Component {
  constructor(props) {
    super(props);
    this.Detail = this.Detail.bind(this);
    this.state = {
      Item: {
        Title: "Title",
        Price: "29.99 USD",
        Picture: "Picture"
      }
    };
  }

  Detail() {
    this.props.ItemDetail(this.state);
  }

  render() {
    return (
      <div className="ShopItem">
        <div className="ShopCard">
          <div className="ShopCard-Spacer" />
          <div className="ShopCard-Bottom">
            <div className="ShopCard-Tag">
              <p>{this.state.Item.Title}</p>
              <p>{this.state.Item.Price}</p>
            </div>
            <div className="ShopCard-Buttons">
              <button>Buy</button>
              <button onClick={this.Detail}>Details</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShopItem;
