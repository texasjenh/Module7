import { Routes, Route } from 'react-router-dom';
import Homepage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import DashboardPage, {DashboardMessages, DashboardTasks} from "../pages/DashboardPage";
import PageNotFound from "../pages/PageNotFound";
import LoginForm from '../components/LoginForm';
import BitcoinRates from '../components/BitCoinRates';
import PostsPage, { Post, PostList} from '../pages/PostsPage';
import ProtectedRoute from './ProtectedRoutes';
// import Dashboard from '../components/DashboardMui';

// function AppRoutes(props) {
//     return (
//         <Routes>
//     {/* index matches on default/home URL: / */}
//         <Route index element={<Homepage {...props} />} />
    
//     {/* nested routes, matches on /dash/tasks etc */}
//         <Route path="dash" element={<DashboardPage {...props} />}>
//             <Route path="messages" element={<DashboardMessages />} />
//             <Route path="tasks" element={<DashboardTasks />} />
//         </Route>
    
//         <Route path='/about' element={<AboutPage {...props} />} /> 
    
//     {/* special route to handle if none of the above match */}
//         <Route path="*" element={<PageNotFound />} /> 
//     </Routes>
//     )
// }
// ****EXERCISE 4 - SLIDE 58****

// function AppRoutes(props) {
//     return (
//         <Routes>
//     {/* index matches on default/home URL: / */}
//         <Route index element={<Homepage {...props} />} />
    
//     {/* nested routes, matches on /dash/tasks etc */}
//         <Route path="login" element={<LoginForm {...props} />} />
        
//         <Route path="bitcoin" element={<BitcoinRates />} /> 
    
//     {/* special route to handle if none of the above match */}
//         <Route path="*" element={<PageNotFound />} /> 
//     </Routes>
//     )
// }

// ****DYNAMIC ROUTES - SLIDE 61****]

// function AppRoutes(props) {
//     return (
//         <Routes>
//             <Route index element={<Homepage {...props} />} />
    
//              {/* nested routes, matches on /dash/tasks etc */}
//                 <Route path="dash" element={<DashboardPage {...props} />}>
//                     <Route path="messages" element={<DashboardMessages />} />
//                     <Route path="tasks" element={<DashboardTasks />} />
//                 </Route>
        
//                 <Route path='/about' element={<AboutPage {...props} />} /> 
             
//                 <Route path="*" element={<PageNotFound />} /> 
    
//                 <Route path='/posts' element={<PostsPage {...props} />} > 
//                     <Route index element={<PostList />} />
//         {/* dynamic param taken from route, stored in variable called id */}
//                 <Route path=":id" element={<Post />} /> 
//             </Route>

//         </Routes>
//     )
// }
// export default AppRoutes;

// 

function AppRoutes(props) {
    return (
        <Routes>
            <Route path="dash" element={<ProtectedRoute>
                    <DashboardPage {...props} /></ProtectedRoute>}>
                <Route path="messages" element={<DashboardMessages />} />
                <Route path="tasks" element={<DashboardTasks />} />
            </Route>
            <Route path="login" element={<LoginForm/>} />
            {/* <Route path="Dashboard" element={<DashboardMui/>} /> */}
        </Routes>
    ) 
}

export default AppRoutes;
 