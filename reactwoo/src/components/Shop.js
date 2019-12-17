import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { WooCommerce } from "../service/WoocommerceConnection.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import { addToCart } from "../service/WoocommerceFunctions";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
	  items: [],
	  categories: []
    };
  }

  getData() {
    const that = this;
    WooCommerce.getAsync("products?per_page=6").then(function(result) {
      that.setState({
        isLoaded: true,
        items: JSON.parse(result.toJSON().body)
      });
    });
  }

  getProductCategories() {
    const that = this;
    WooCommerce.getAsync("products/categories").then(function(result) {
      that.setState({
        isLoaded: true,
        categories: JSON.parse(result.toJSON().body)
      });
    });
  }

  componentDidMount() {
	this.getData();
	this.getProductCategories();
  }

  render() {
    return (
      <div>
		<Header />
        <section>
		<div class="container">
			<div class="row">
				<div class="col-sm-3">
					<div class="left-sidebar">
						<h2>Category</h2>
						<div class="panel-group category-products" id="accordian">
						{this.state.categories.map((val, index) => (
							<div class="panel panel-default">
								<div class="panel-heading">
									<h4 class="panel-title"><Link to={val.slug}>{val.name}</Link></h4>
								</div>
							</div>
						))}
						</div>
					
						<div class="brands_products">
							<h2>Brands</h2>
							<div class="brands-name">
								<ul class="nav nav-pills nav-stacked">
									<li><a href=""> <span class="pull-right">(50)</span>Acne</a></li>
									<li><a href=""> <span class="pull-right">(56)</span>Grüne Erde</a></li>
									<li><a href=""> <span class="pull-right">(27)</span>Albiro</a></li>
									<li><a href=""> <span class="pull-right">(32)</span>Ronhill</a></li>
									<li><a href=""> <span class="pull-right">(5)</span>Oddmolly</a></li>
									<li><a href=""> <span class="pull-right">(9)</span>Boudestijn</a></li>
									<li><a href=""> <span class="pull-right">(4)</span>Rösch creative culture</a></li>
								</ul>
							</div>
						</div>
						
						<div class="price-range">
							<h2>Price Range</h2>
							<div class="well">
								 <input type="text" class="span2" value="" data-slider-min="0" data-slider-max="600" data-slider-step="5" data-slider-value="[250,450]" id="sl2" /><br />
								 <b>$ 0</b> <b class="pull-right">$ 600</b>
							</div>
						</div>
						
						<div class="shipping text-center">
							<img src="images/home/shipping.jpg" alt="" />
						</div>
						
					</div>
				</div>
				
				<div class="col-sm-9 padding-right">
					<div class="features_items">
						<h2 class="title text-center">Features Items</h2>
						{this.state.items.map((val, index) => (
						<div class="col-sm-4">
							<div class="product-image-wrapper">
								<div class="single-products">
									<div class="productinfo text-center">
										<img src={val.images[0].src} alt="" />
										<h2>${val.price}</h2>
										<p>{val.name}</p>
										<a href="#" class="btn btn-default add-to-cart" onClick={() => addToCart(val.id)}><i class="fa fa-shopping-cart"></i>Add to cart</a>
									</div>
								</div>
								<div class="choose">
									<ul class="nav nav-pills nav-justified">
										<li><a href=""><i class="fa fa-plus-square"></i>Add to wishlist</a></li>
										<li><a href=""><i class="fa fa-plus-square"></i>Add to compare</a></li>
									</ul>
								</div>
							</div>
						</div>
						))}
						<ul class="pagination">
							<li class="active"><a href="">1</a></li>
							<li><a href="">2</a></li>
							<li><a href="">3</a></li>
							<li><a href="">&raquo;</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
		<Footer />

      </div>
    );
  }
}
export default Shop;