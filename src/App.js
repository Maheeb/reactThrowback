import React, {Component} from 'react';
// import logo from './logo.svg';
// import Contact from './Contact.js'
// // import './App.css';
// import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import Appbar from './components/pages/Appbar'
import Leftnav from './components/pages/Leftnav'
import Content from './components/pages/Content'
import Footer from './components/pages/Footer'
import './contact.css'
class App extends Component{
render() {


  return (
      <div className="App">

            <Appbar logo="Triangle"
            />
            <Leftnav
                name_1 = "Maheeb"
                name_2 = "Shaarif"
            />
            <Content
                cbody = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies, metus eget fringilla fermentum, sem justo pulvinar tellus, ac varius neque ante eget mi. Donec cursus nibh ultrices vulputate aliquet. Morbi nulla enim, molestie eu ullamcorper quis, placerat a mauris. Proin vel magna ullamcorper, vulputate leo eu, egestas odio. Vivamus erat leo, egestas in euismod sed, fermentum nec magna. Nunc nisi enim, euismod a tellus sit amet, fermentum adipiscing ipsum. Fusce rhoncus diam ac neque aliquam convallis. Etiam malesuada, nibh id rutrum euismod, enim augue gravida dolor, at vulputate felis mi at magna. Nulla luctus, libero eget luctus gravida, sapien enim varius massa, adipiscing aliquet lacus mi eu eros. Duis pretium laoreet ullamcorper. Aenean in mauris nec libero tincidunt pharetra non et dui. Sed tortor turpis, mollis et tempus eu, auctor laoreet neque. Etiam eu tortor rutrum, rutrum mauris sit amet, hendrerit augue. Sed ut tincidunt nisi. Nam consectetur velit ac pharetra venenatis."
            />
            <Footer  fText= "Maheeb Mohammad Azmaeen,2020"/>

      </div>
  );
 }
}



export default App;
