import React from "react";
import "./shop.css";
import ShopItem from "./ShopItem.js";
import ShopItemDetail from "./ShopItemDetail.js";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.ItemDetail = this.ItemDetail.bind(this);
    this.state = {
      Detail: false
    };
  }

  ItemDetail(_State) {
    this.setState(state => ({
      Detail: !state.Detail
    }));
  }

  render() {
    return (
      <div className="ShopPage">
        <div className="ShopContent">
          {!this.state.Detail && <ShopItem ItemDetail={this.ItemDetail} />}
          {this.state.Detail && <ShopItemDetail ItemDetail={this.ItemDetail} />}
        </div>
      </div>
    );
  }
}

export default ShopPage;
