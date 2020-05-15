import React from 'react';
import Article from './Article';
import * as Unko from './components/UnkoKusai'
import Pugera from './components/Pugera';

const Blog = () => {

  //   componentDidMount() {
  //     document.getElementById('counter').addEventListener('click', this.countUp)
  //   }

  //   componentDidUpdate() {
  //     if (this.state.count >= 10) {
  //       this.setState( { count: 0 })
  //     }
  //   }

  // componentWillUnmount() {
  //   document.getElementById('counter').removeEventListener('click', this.countUp)
  // }

  // countUp = () => {
  //   this.setState( { count: this.state.count + 1 })
  // }



  return (
    <>
      <Article
        title={"React how to"}
        // count={this.state.count}
      />
      <Unko.Unko />
      <Unko.Kusai />
      <Pugera />
    </>
  )
}

export default Blog