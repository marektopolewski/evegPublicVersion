import React, { Component } from 'react';

export default class FaqPage extends Component {

  constructor(props, context){
    super(props, context);
  }

  render(){
    return (
        <div style={{minHeight:`80%`, width:`80%`, marginLeft:`auto`, marginRight:`auto`, marginBottom:`30px`}}>
          <h1>FAQ</h1>

          <h3>What is eVeg?</h3>
          <p>eVeg is a subsidiary of eVeg Inc, a leading online retailer of products that inform, educate, and inspire. The eVeg group also has stores in the United States, Canada, Germany, France, and Japan. Because we exist "virtually" on the Web, we have unlimited shelf space and can offer a selection of over 10.5 million titles including over 9 million Book titles and over 1.5 million music titles. Compare that to a typical physical-world book superstore, which carries around 170,000 books, or a typical physical-world music superstore, which carries around 34,000 CDs.</p>

          <h3>What does the sales rank mean?</h3>
          <p>Our sales rank is just like a bestseller list, except instead of listing just the top 50 or so titles, it includes millions! The lower the number, the higher the popularity for that particular title in comparison to other items listed. Items are ranked within their product category only, so a book, CD or DVD ranked at Number 1 is the best-selling book, CD or DVD at eVeg, but may not be the overall best-selling item.</p>

          <h3>Do you screen the reviews from publishers/labels/studios, customers, authors/artists/actors, or other sources used on your site?</h3>
          <p>In order to help customers make informed buying decisions, we are interested in offering a variety of opinion of the items on our site.</p>
          <p>Publishers/labels/studios and authors/arists/actors provide the primary descriptive content and review excerpts that appear on site for their titles.
          For some titles on site, we post eVeg signed editorial reviews. These appear at the discretion of our Editorial Team.
          Finally, we allow our customers to air their honest thoughts about books they have read, music they have listened too and DVDs they have watched through our Customer Reviews feature.
          We do exert some editorial control over our reviews. Profane or spurious comments are promptly removed. Our intention is to make the review forum a place for commentary and feedback, so discussions that fall out of this broad parameter are removed from the Web site. If you feel that a customer review falls outside of our guidelines, please contact us at (@eVeg) customer-reviews-edit.
          </p>

          <h3>How do I fix typographical errors on my eVeg product detail pages?</h3>
          <p>Please visit our Help page, About Managing Descriptive Content, for more information on managing descriptive content.</p>

          <h3>Why are some titles discounted while others are not?</h3>
          <p>Our decision to discount products is made internally and based on a number of strategic considerations which can vary over time. As it stands now, we offer discounts on hundreds of thousands of selected titles. However we cannot confirm when, if ever, a title will be discounted or how long a title once discounted will remain so.</p>

          <h6>Credit: <a href="https://www.amazon.co.uk/gp/help/customer/display.html?nodeId=200041670">Amazon.co.uk</a></h6>
        </div>
    );
  }
}
