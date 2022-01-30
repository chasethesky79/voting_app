class ProductList extends React.Component {
  render() {
    const { products } = Seed;
    return (
      <div className='ui unstackable items'>
        { products && products.map((item, index) => <Product 
                                          id={item.id}
                                          title={item.title}
                                          description={item.description}
                                          url={item.url}
                                          key={item.id} 
                                          votes={item.votes}
                                          productImageUrl = {item.productImageUrl} 
                                          submitterAvatarUrl={item.submitterAvatarUrl}/>)}
      </div>
    )
  }
}

class Product extends React.Component {
  render() {
    const { id, title, description, url, productImageUrl, submitterAvatarUrl, votes } = this.props;
    return (
      <div className='item'>
        <div className='image'>
          <img src={productImageUrl}/>
        </div>
        <div className='middle aligned content'>
          <div className='header'>
            <a><i className='large carot up icon'>{votes}</i></a>
          </div>
          <div className='description'>
            <a href={url}>{title}</a>
            <p>{description}</p>
          </div>
          <div className='extra'>
            <span>Submitted by:</span>
            <img className='ui avatar image' src={submitterAvatarUrl}/>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <ProductList />,
  document.getElementById('content')
);