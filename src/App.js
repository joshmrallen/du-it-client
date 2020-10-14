import React from 'react';
import './App.css';
// import Login from './Components/Login'
// import Signup from './Components/Signup'
// import Reader from './Containers/Reader'
// import {ReactReader} from 'react-reader'
import { Switch, Route, withRouter } from 'react-router-dom';
import BookCollection from './Containers/BookCollection';
import WordList from './Containers/WordList'
import CurrentBook from './Containers/CurrentBook';
import NavBar from './Components/NavBar'
import FlashCards from './Containers/FlashCards'

//react-reader was giving me a message: but then i talked to the author and installed an updated version
/* Could not find a declaration file for module 'react-reader'. '/Users/Josh/Flatiron/mod-5/project/du-it-client/node_modules/react-reader/lib/index.js' implicitly has an 'any' type. */

const API_URL = "http://localhost:3000"

class App extends React.Component {

  state = {
    user: true,
    bookCollection: null,
    words: null,
    currentBook: null,
    cardSide: "front"
  }

  componentDidMount(){
    fetch(`${API_URL}/users/1`)
      .then(response => response.json())
      .then(userInfo => {
        this.setState(()=>({
          user: {
            first_name: userInfo.first_name,
            last_name: userInfo.last_name,
            email: userInfo.email
          },
          bookCollection: userInfo.books
        }))
      })
  }

  //add openBook handler to pass up book object to App, and save book object in currentBook
  openHandler = (bookObj) => {
    this.setState(()=>({
      currentBook: bookObj
    }), ()=>{
      console.log(this.state.currentBook)
      this.props.history.push("/book")
    })
    console.log(this.state.currentBook)
    // this.props.history.push("/book")
  }

  //flipToggle - save flipToggle in state as "front" or "back"
  flipToggle = () => {
    if(this.state.cardSide === "front"){
      this.setState(()=>({
        cardSide: "back"
      }))
    } else if(this.state.cardSide === "back"){
      this.setState(()=>({
        cardSide: "front"
      }))
    }
  }

  render(){

    // console.log(this.state)

    return (
      <div className="App">
        <NavBar user={this.state.user} />
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

              <Route path="/flashcards" render={()=>{
                return(
                  <>
                    <FlashCards cardSide={this.state.cardSide} flipToggle={this.flipToggle} />
                  </>
                )
              }} />

              <Route path="/" render={()=>{
                return(
                  <>
                    <BookCollection books={this.state.bookCollection} openBook={this.openHandler} />
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

export default withRouter(App);

/* Got carried away with 1. S3 problem and 2. other components

To get to MVP:
1. hard code a GET request to default user to get default collection
2. add to Book component:
      each Book div gets a background of a "book" image
      add title to the book
      make sure these fill in flex rows down the "shelf" class
3. openHandler
      add an onClick to each Book div
      pass book object up through App to openHandler
      setState of currentBook with the book object
      add withRouter to react-router-dom imports in App
      add withRouther(App) to app export default statement
      in call back of setState, this.props.history.push("/book")

*/

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