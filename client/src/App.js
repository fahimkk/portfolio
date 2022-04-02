import React, { PureComponent } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NavDropdown from './components/NavDropdown';
import useWindowWidth from './hooks/useWindowWidth';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import BlogsPage from './pages/BlogsPage';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import ProjectsPage from './pages/ProjectsPage';
import * as actions from './actions'
import { connect } from 'react-redux';

class App extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.hideMenu);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.hideMenu);
  }

  hideMenu = ()=>{
    this.props.setWindowWidth(window.innerWidth)
    if(window.innerWidth>768 && this.state.isMenuOpen){
      this.setState({isMenuOpen:false})
    }
  }
  toggleMenuButton = ()=>{
    this.setState({isMenuOpen: !this.state.isMenuOpen})
  }
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar
              isMenuOpen={this.state.isMenuOpen}
              toggleMenuButton={this.toggleMenuButton}
            />
            <div className="pt-14 dark:bg-[#252A34]">
            <NavDropdown
              isMenuOpen={this.state.isMenuOpen}
              toggleMenuButton={this.toggleMenuButton}
            />

			      <div className="lg:mx-32 2xl:mx-56 mx-5">
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/blogs" element={<BlogsPage/>}/>
              <Route path="/projects" element={<ProjectsPage/>}/>
              <Route path="/about" element={<AboutPage/>}/>
              <Route path="/blog/:fileName" element={<BlogPage/>}/>
              <Route path="/project/:fileName" element={<ProjectPage/>}/>
            </Routes>
            </div>
            </div>
            <Footer/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
