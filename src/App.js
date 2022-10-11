import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main/Main';
import Home from './component/Home/Home';
import About from './component/About/About';
import Statatics from './component/Statatics/Statatics';
import Blog from './component/Blog/Blog';
import QuizStart from './component/QuizStart/QuizStart';
import Contact from './component/Contact/Contact';




function App() {

  const router=createBrowserRouter([
    {path:'/',element:<Main></Main>,
  children:[
    {path:'/home',
    loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
    element:<Home/>},
    {path:'/contact',element:<Contact/>},
    {path:'/about',element:<About/>},
    {path:'/statatics',
    loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
    element:<Statatics/>},
    {path:'/blog',element:<Blog/>},
    {path:'/quiz/:quizId',
    loader:async({params})=>{
      return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)},
    element:<QuizStart></QuizStart>}
  ]}

  ])
  return (
 <RouterProvider router={router}>
 
 </RouterProvider>
  );
}

export default App;
