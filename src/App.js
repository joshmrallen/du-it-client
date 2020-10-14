import React from 'react';
import './App.css';
// import Login from './Components/Login'
// import Signup from './Components/Signup'
// import Reader from './Containers/Reader'
// import {ReactReader} from 'react-reader'
import { Switch, Route } from 'react-router-dom';
import BookCollection from './Containers/BookCollection';
import WordList from './Containers/WordList'
import CurrentBook from './Containers/CurrentBook';

//react-reader was giving me a message: but then i talked to the author and installed an updated version
/* Could not find a declaration file for module 'react-reader'. '/Users/Josh/Flatiron/mod-5/project/du-it-client/node_modules/react-reader/lib/index.js' implicitly has an 'any' type. */

class App extends React.Component {

  state = {
    user: true,
    bookCollection: null,
    words: null,
    currentBook: null
  }

  //add openBook handler to pass up book object to App, and save book object in currentBook

  render(){

    return (
      <div className="App">
        {this.state.user === false ? null : 
        
          <>
            <Switch>

              <Route path="/book" render={()=>{
                return(
                  <>
                    <CurrentBook book={this.state.currentBook} />
                  </>
                )
              }} />

              <Route path="/list" render={()=>{
                return(
                  <>
                    <WordList words={this.state.words} />
                    {/* add definition component */}
                  </>
                )
              }} />

              <Route path="/" render={()=>{
                return(
                  <>
                    <BookCollection books={this.state.bookCollection} />
                    <WordList words={this.state.words} />
                  </>
                )
              }} />
            </Switch>
          </>
        
        
        }
      </div>
    );
  }
}

export default App;



/*

        <Switch>
          
          <Route path="/login" render={()=>{
            return(
              <>
                <Login />
              </>
            )
          }} />

          <Route path="/signup" render={()=>{
            return(
              <>
                <Signup />
              </>
            )
          }} />

          {this.state.user === false ? null : 
            <>
              <Switch>
                <Route path="/book" render={()=>{
                  return(
                    <>
                      {/* <Reader /> }
                      <ReactReader 
                        url={"../books/jianghu.epub"}
                        title={"XiaoAo JiangHu"}
                        location={"epubcfi(/6/2[cover]!/6)"}
                        locationChanged={epubcifi => console.log(epubcifi)}
                      />

                    </>
                  )
                }} />

                <Route path="/" render={()=>{
                  return(
                    <>
                      <BookCollection books={this.state.bookCollection ? this.state.bookCollection : false } />
                    </>
                  )
                }} />

              </Switch>

            </>
          
          } {/* for when user is truthy }
        </Switch>



        <ReactReader 
          url={"https://du-it-dev.s3.amazonaws.com/sanguoyanyi.epub"}
          title={"Something"}
          location={"epubcfi(/6/2[cover]!/6)"}
          locationChanged={epubcifi => console.log(epubcifi)}
        />


*/