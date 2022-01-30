class ProductList extends React.Component {
  constructor() {
   super();
   this.state = {
     products: []
   }
  }

  componentDidMount() {
    this.setState({
      products: Seed.products
    })
  }
  render() {
    const { products } = this.state;
    const handleVotesClick = productId => {
      this.setState({ products: products.map(product => product.id === productId ? Object.assign(product, { votes: product.votes + 1 }) : product)});
    }
    return (
      <div className='ui unstackable items'>
        { products && products.sort((e1, e2) => e1.votes - e2.votes).map(({ id, description, title, url, votes, productImageUrl, submitterAvatarUrl }) => <Product 
                                          id={id}
                                          title={title}
                                          description={description}
                                          url={url}
                                          key={`product-${id}`}
                                          votes={votes}
                                          productImageUrl = {productImageUrl} 
                                          submitterAvatarUrl={submitterAvatarUrl}
                                          handleVotesClick={handleVotesClick}/>)}
      </div>
    )
  }
}

class Product extends React.Component {
  render() {
    const { id, title, description, url, productImageUrl, submitterAvatarUrl, votes, handleVotesClick } = this.props;
    return (
      <div className='item'>
        <div className='image'>
          <img src={productImageUrl}/>
        </div>
        <div className='middle aligned content'>
          <div className='header'>
            <a onClick={() => handleVotesClick(id)}><i className='large carot up icon'>{votes}</i></a>
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