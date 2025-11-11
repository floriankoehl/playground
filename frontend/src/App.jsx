

const hardcoded_users = [
    {name: "Flroian", test: "This is some important text"},
    {name: "Denis", test: "This is some important text"},
    {name: "Melli", test: "This is some important text"},
    {name: "Philipp", test: "This is some important text"},
    {name: "Stephan", test: "This is some important text"},
    {name: "Kleo", test: "This is some important text"},
    {name: "David", test: "This is some important text"},
    {name: "Sigrid", test: "This is some important text"}
]











import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom'

import MainPage from './b_pages/MainPage'
import About from './b_pages/About'
import Contact from './b_pages/Contact'
import Layout from './b_layout/Layout'
import History from './b_pages/History'
import Users from './b_pages/Users'

import UserProfile, { loader as userLoader } from "./b_pages/UserProfile";

const check = async () => {
  await new Promise(resolve => setTimeout(resolve, 7000)); // 7 seconds
  return null; // or return some data
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>, 
    children: [
      {index: true, element: <MainPage/>},
      {path: "contact", element: <Contact/>, loader: check},
      
      {
          path: "about", 
          children: [
              {index: true, element: <About/>},
              {path: "history", element: <History/>},
      ]},

      {path: "users", element: <Users sample_users={hardcoded_users}/>},
      {path: "users/:name", element: <UserProfile/>, loader: userLoader}

    ],

  },
]);


export default function App(){
  return <RouterProvider router={router}/>;
}






