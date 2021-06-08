const Home = () => {
  return (
    <div className='home'>
      <img
        className='hero-img'
        src='https://images.unsplash.com/photo-1595514919780-f093e14618fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&q=80'
        alt='skincare'
      />
      <div className='home-right'>
        <h1>Get The Skincare You Deserve.</h1>
        <a className='hero-btn' href='/shop'>
          Shop Our Collection
        </a>
      </div>
    </div>
  );
};

export default Home;
