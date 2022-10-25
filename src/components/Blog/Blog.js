import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='w-4/5 m-auto text-white mt-8'>
                <h2 className='text-3xl'>What is cors?</h2>
                <p className='text-justify'>Cross-origin resource sharing (CORS) is a browser security feature that restricts cross-origin HTTP requests that are initiated from scripts running in the browser. If your REST API's resources receive non-simple cross-origin HTTP requests, you need to enable CORS support. When a browser receives a non-simple HTTP request, the CORS protocol requires the browser to send a preflight request to the server and wait for approval (or a request for credentials) from the server before sending the actual request. </p>
            </div>
            <div className='w-4/5 m-auto text-white mt-8'>
                <h2 className='text-3xl'>Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p className='text-justify'>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend. <br /> You can use Firebase Authentication to allow users to sign in to your app using one or more sign-in methods, including email address and password sign-in, and federated identity providers such as Google Sign-in and Facebook Login. This tutorial gets you started with Firebase Authentication by showing you how to add email address and password sign-in to your app.</p>
            </div>
            <div className='w-4/5 m-auto text-white mt-8'>
                <h2 className='text-3xl'>How does the private route work?</h2>
                <p className='text-justify'>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in). <br />This is a quick example of how to implement a private route component with React Router 6. The private route component is used to protect selected pages in a React app from unauthenticated users. <br /> The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property. The current logged in user (authUser) is retrieved from Redux state with a call to the useSelector() hook. Redux is used in this example however it is not required to implement a Private Route component in React Router 6. You could use a different state management library or any approach you prefer to get the logged in status of the user.</p>
            </div>
            <div className='w-4/5 m-auto text-white mt-8'>
                <h2 className='text-3xl'>What is Node? How does Node work?</h2>
                <p className='text-justify'>Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. <br />Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
            </div>
        </div>
    );
};

export default Blog;