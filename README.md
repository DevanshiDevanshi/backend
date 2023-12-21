<h1>To Do Application Backend</h1>

<h2>MongoDB Connection String:</h2>
<p>Retrieve your MongoDB connection string. Replace the placeholder username and password with your actual MongoDB username and password.</p>

<h2>Initialize Backend Project:</h2>
<p>Create a new folder for your backend, e.g., <code>backend</code>.</p>
<p>Inside this folder, run <code>npm init -y</code> to initialize a new Node.js project.</p>

<h2>Setup Basic Files and Structure:</h2>
<p>Create an <code>index.js</code> file as the entry point of your application.</p>
<p>Set up a <code>config</code> folder with a <code>mongoose.js</code> file for handling MongoDB connections.</p>
<p>Create a <code>controllers</code> folder. Inside, make a <code>todo.controllers.js</code> file for business logic and an <code>index.js</code> to export all controllers.</p>
<p>Make a <code>models</code> folder for your Mongoose models, including a model for your Todo schema.</p>
<p>Establish a <code>routes</code> folder with <code>todo.routes.js</code> for defining Todo-related routes and an <code>index.js</code> (root) for aggregating all routes.</p>

<h2>Configure Express Application:</h2>
<p>In <code>index.js</code>, import necessary modules like <code>express</code>, <code>cors</code>, and your routes.</p>
<p>Initialize an Express app and use middleware like <code>express.json</code> for JSON parsing and <code>cors</code> for Cross-Origin Resource Sharing.</p>
<p>Set up your API routes.</p>

<h2>Environment Variables and .gitignore:</h2>
<p>Create a <code>.env</code> file to store environment variables like <code>PORT</code> and MongoDB connection string.</p>
<p>Set up a <code>.gitignore</code> file to exclude <code>node_modules</code>, <code>.env</code>, and other unnecessary files from your Git repository.</p>

<h2>Database Connection and Server Setup:</h2>
<p>In <code>index.js</code>, use the function from <code>mongoose.js</code> to connect to MongoDB.</p>
<p>Configure your Express app to listen on the specified port, using the port number from your <code>.env</code> file.</p>

<h2>Running the Server:</h2>
<p>Ensure you have all dependencies installed (like <code>express</code>, <code>mongoose</code>, <code>cors</code>, <code>dotenv</code>, <code>nodemon</code> (as a dev dependency).</p>
<p>Set the <code>"type": "module"</code> and a script <code>"start": "nodemon index.js"</code>.</p>
<p>Finally, run your server using <code>npm start</code>.</p>
