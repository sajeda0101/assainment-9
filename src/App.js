import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main/Main';
import Home from './component/Home/Home';
import About from './component/About/About';
import Statics from './component/Statics/Statics';
import Blog from './component/Blog/Blog';
import QuizStart from './component/QuizStart/QuizStart';




function App() {

  const router=createBrowserRouter([
    {path:'/',element:<Main></Main>,
    loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
  children:[
    {path:'/home',element:<Home/>},
    {path:'/about',element:<About/>},
    {path:'/statics',element:<Statics/>},
    {path:'/blog',element:<Blog/>},
    {path:'/quiz',element:<QuizStart></QuizStart>}
    
  ]}
  ])
  return (
 <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
