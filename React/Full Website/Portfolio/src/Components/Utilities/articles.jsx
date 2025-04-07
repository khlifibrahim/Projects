export const articles = [
        {
            id: 0,
            title: 'Mission Management System',
            description: 'A full-stack app that digitalizes mission orders and enhances workflow. Built with React, Node.js, Redux, and MySQL.',
            // content: `# Introduction\n\nDuring my training period, I had the opportunity to develop a full-stack web application designed to streamline and digitalize the entire workflow of the Delegation of Commerce and Industry. The project aimed to replace manual processes with a structured and efficient digital system, enabling seamless mission order management, tracking, and overall administrative efficiency.\n## Technologies Used\nTo deliver a robust and scalable solution, I used the following technologies:\n- **Frontend:** React.js with Redux for state management\n- **Backend:** Node.js with Express.js for handling API requests\n- **Database:** MySQL for structured data storage\n- **State Management:** Redux to efficiently manage the application's global state\n- **UI Design:** Tailwind CSS for a clean and responsive user interface\n## Features Implemented\nThe application offers a variety of features to improve efficiency and organization, including:\n- **Comprehensive Digitalization:** Fully digitalizes the operational workflow of the Delegation of Commerce and Industry.\n- **Dashboard Overview:** Provides real-time statistics on mission requests, approvals, and overall performance analytics.\n- **Mission Order Management:** Enables users to create, edit, and track mission orders with structured approval workflows.\n- **Role-Based Access Control (RBAC):** Ensures different levels of authorization for users, protecting sensitive data.\n- **Automated Reports and Analytics:** Generates statistical reports for better decision-making.\n- **Data Filtering & Search:** Allows quick access to mission details.\n- **Responsive Design:** Ensures accessibility across different devices.\n## Screens and Functionality Overview\n### Dashboard\n- **Description:** Displays real-time statistics, project analytics, and key performance indicators.\n- **Screenshot:**  \n![Dashboard Screenshot](/MCINET/dashboard-1.png)\n### Mission Order List\n- **Description:** Lists all mission orders with details such as assigned personnel, destination, travel dates, and status. Includes filtering and search functionality.\n- **Screenshot:**  \n![Mission Order List](/MCINET/missionsorders.png)\n### Create Mission Order\n- **Description:** A structured form that allows users to create and submit new mission orders, complete with approval workflows.\n- **Screenshot:**  \n![Create Mission Order](/MCINET/addordermission.png)\n### User Management\n- **Description:** An admin panel for managing user roles and access levels, ensuring secure role-based authentication.\n- **Screenshot:**  \n![User Management](/MCINET/profile.png)\n### Reports and Analytics\n- **Description:** Generates automated reports on mission trends, completion rates, and user activity to aid in decision-making.\n- **Screenshot:**  \n![Reports and Analytics](/MCINET/dashboard-2.png)\n## Challenges and Solutions\nOne of the key challenges was handling state synchronization efficiently across multiple user roles and departments. By leveraging Redux, I ensured a seamless experience where data updates reflected instantly across various components. Additionally, optimizing MySQL queries improved performance and reduced load times significantly. Implementing robust authentication and authorization mechanisms addressed data security concerns effectively.\n## Outcome and Impact\nThe system significantly improved workflow within the Delegation of Commerce and Industry. It reduced paperwork, enhanced administrative efficiency, and enabled better decision-making through automated reports. This project showcased my ability to develop large-scale, enterprise-grade applications using modern web technologies, reinforcing my full-stack development skills.\n## Conclusion\nThis project was a valuable experience that allowed me to refine my skills in React, Node.js, Redux, and MySQL while solving real-world administrative challenges. It strengthened my capability to build scalable, structured, and maintainable applications for large organizations.\nInterested in more of my work? Feel free to connect with me to discuss potential collaborations!`,
            content: `
                    <section className="!mb-6">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Introduction</h2>
                        <p className="text-gray-600 leading-relaxed">
                        During my training period, I had the opportunity to develop a full-stack web application
                        designed to streamline and digitalize the workflow of the Delegation of Commerce and Industry.
                        The project replaced manual processes with an efficient digital system, enabling seamless mission
                        order management, tracking, and overall administrative efficiency.
                        </p>
                    </section>

                    
                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Technologies Used</h2>
                        <ul className="list-disc pl-6 text-gray-600">
                        <li><strong>Frontend:</strong> React.js with Redux for state management</li>
                        <li><strong>Backend:</strong> Node.js with Express.js for handling API requests</li>
                        <li><strong>Database:</strong> MySQL for structured data storage</li>
                        <li><strong>State Management:</strong> Redux to efficiently manage global state</li>
                        <li><strong>UI Design:</strong> Tailwind CSS for a clean and responsive user interface</li>
                        </ul>
                    </section>

                    
                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Key Features</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                        <li className="p-4 bg-gray-100 rounded-lg shadow">
                            <strong>📌 Digital Workflow:</strong> Replaces manual paperwork with digital solutions.
                        </li>
                        <li className="p-4 bg-gray-100 rounded-lg shadow">
                            <strong>📊 Dashboard:</strong> Provides real-time analytics and performance indicators.
                        </li>
                        <li className="p-4 bg-gray-100 rounded-lg shadow">
                            <strong>✅ Mission Order Management:</strong> Create, track, and approve mission orders.
                        </li>
                        <li className="p-4 bg-gray-100 rounded-lg shadow">
                            <strong>🔒 Role-Based Access:</strong> Secured authorization for different user levels.
                        </li>
                        <li className="p-4 bg-gray-100 rounded-lg shadow">
                            <strong>📈 Automated Reports:</strong> Generate insights for better decision-making.
                        </li>
                        <li className="p-4 bg-gray-100 rounded-lg shadow">
                            <strong>📱 Responsive Design:</strong> Accessible across all devices.
                        </li>
                        </ul>
                    </section>

                    
                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Screens and Functionality</h2>

                        
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-600">1 - Dashboard</h3>
                            <img
                                src="/MCINET/dashboard-1.png"
                                alt="Dashboard Screenshot"
                                className="w-full rounded-lg shadow-md hover:shadow-lg transition duration-300"
                            />
                            <p className="text-gray-500 mb-3">Real-time statistics, project analytics, and key performance indicators.</p>
                        </div>

                        
                        <div className="mb-6">
                        <h3 className="text-xl font-semibold text-gray-600">2 - Mission Order List</h3>
                        <img
                            src="/MCINET/missionsorders.png"
                            alt="Mission Order List"
                            className="w-full rounded-lg shadow-md hover:shadow-lg transition duration-300"
                        />
                        <p className="text-gray-500 mb-3">Lists all mission orders with filtering and search functionality.</p>
                        </div>

                        
                        <div className="mb-6">
                        <h3 className="text-xl font-semibold text-gray-600">3 - Create Mission Order</h3>
                        <img
                            src="/MCINET/addordermission.png"
                            alt="Create Mission Order"
                            className="w-full rounded-lg shadow-md hover:shadow-lg transition duration-300"
                        />
                        <p className="text-gray-500 mb-3">A structured form to submit new mission orders.</p>
                        </div>
                    </section>

                    
                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Challenges and Solutions</h2>
                        <p className="text-gray-600 leading-relaxed">
                        One key challenge was efficiently synchronizing data across multiple user roles. By leveraging Redux,
                        I ensured instant updates across the application. Optimizing MySQL queries significantly reduced load times,
                        and implementing robust authentication enhanced security.
                        </p>
                    </section>

                    
                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Outcome and Impact</h2>
                        <p className="text-gray-600 leading-relaxed">
                        The system enhanced efficiency by reducing paperwork and improving administrative decision-making through
                        automated reports. This project reinforced my ability to build enterprise-grade applications.
                        </p>
                    </section>

                    
                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Conclusion</h2>
                        <p className="text-gray-600 leading-relaxed">
                        This project was a valuable learning experience, allowing me to refine my skills in React, Node.js, Redux, and MySQL.
                        It strengthened my ability to build scalable and maintainable applications for large organizations.
                        </p>
                    </section>
            `,
            image: '/MCINET/login.png',
            link: '/article'
        },
        {
            id: 1,
            title: '🍽️ FoodZero – Full-Stack Web App',
            description: 'A full-stack restaurant web app. Built with React, Node.js, and Express.',
            content: `
                    <div className="bg-[#1e2c1a] text-white p-10 font-sans rounded-xl shadow-lg">
                    <h1 className="text-4xl font-bold mb-4 border-b border-white/20 pb-2">🍽️ FoodZero – Full-Stack Web App Based on Figma Template</h1>

                    <p className="text-lg leading-7 mb-6">
                        <strong>FoodZero</strong> is a beautifully crafted restaurant UI design I found on Figma. I brought this static design to life by building a fully functional web application using <strong>React</strong> on the frontend and <strong>Node.js with Express</strong> on the backend.
                    </p>

                    <img src="/assets/FoodZero/preview.jpg" alt="FoodZero Template Preview" className="w-full max-w-3xl mx-auto rounded-lg shadow-md mb-8 border border-white/10" />

                    <h2 className="text-2xl font-semibold mt-10 mb-4">🛠️ What I Built</h2>
                    <p className="mb-6 text-base leading-6 text-white/90">
                        I translated the Figma UI into a fully responsive and dynamic web application. Key features include:
                    </p>

                    <ul className="list-disc list-inside space-y-2 text-base text-white/90">
                        <li><strong>Frontend:</strong> Built with <strong>React + TailwindCSS</strong> following the original Figma design pixel-perfectly.</li>
                        <li><strong>Product Listing Page:</strong> Users can browse through dishes, filter by category, and view pricing.</li>
                        <li><strong>Product Detail Page:</strong> Full view of the item with high-quality image, ingredients, and description.</li>
                        <li><strong>Cart Page:</strong> Users can add/remove products and see live price updates.</li>
                        <li><strong>Backend:</strong> Created a RESTful API using <strong>Node.js + Express</strong> with secure routing and middleware.</li>
                        <li><strong>Admin Panel:</strong> Full CRUD operations to manage products (Create, Read, Update, Delete).</li>
                        <li><strong>Database:</strong> Connected to a backend database (MySQL or MongoDB depending on version).</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">📈 Project Purpose</h2>
                    <p className="mb-6 text-base leading-6 text-white/90">
                        The purpose of this project was to practice converting real UI designs into live, interactive applications with full backend support. It also demonstrates my ability to integrate frontend and backend smoothly, while focusing on performance and code clarity.
                    </p>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">🌐 Technologies Used</h2>
                    <ul className="list-disc list-inside space-y-2 text-base text-white/90">
                        <li>Frontend: React, TailwindCSS, Axios, React Router</li>
                        <li>Backend: Node.js, Express, REST API, JWT/Auth (optional)</li>
                        <li>Database: MongoDB or MySQL (based on version)</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">🔗 Links</h2>
                    <ul className="list-disc list-inside text-base text-white/90 space-y-2">
                        <li>
                        💻 <strong>Live Demo:</strong> 
                        <a href="https://your-vercel-app-link.vercel.app" target="_blank" className="underline text-blue-300 hover:text-blue-500 transition duration-200 ml-1">https://your-vercel-app-link.vercel.app</a>
                        </li>
                        <li>
                        📂 <strong>GitHub Repository:</strong> 
                        <a href="https://github.com/your-username/foodzero-project" target="_blank" className="underline text-blue-300 hover:text-blue-500 transition duration-200 ml-1">https://github.com/your-username/foodzero-project</a>
                        </li>
                    </ul>

                    <div className="text-center mt-10">
                        <p className="text-lg font-semibold">👨‍💻 Want to build something similar?</p>
                        <p className="text-white/80">Let’s collaborate on full-stack projects that bring UI to life!</p>
                    </div>
                    </div>
                    `,
            image: '/FoodZero/foodzero.jpg',
            link: '/article/'
          },
    ]


