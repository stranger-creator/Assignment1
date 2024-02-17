# IC LAB ASSIGNMENT-1


## Initialize the server


```bash
git clone https://github.com/NITHIN3387/IC_LAB_ASSIGNMENT_1.git
cd assignment_1
npm install
```



## Run the server


```bash
npm run dev
```


## API's



### API to register a author


#### method: POST
#### Params
<ul>
  <li>name</li>
  <li>emailId</li>
  <li>password</li>
</ul>


[https://localhost:4000/auth/register](https://localhost:4000/auth/register)



### API to login for a author


#### method: POST
#### Params
<ul>
  <li>emailId</li>
  <li>password</li>
</ul>


[https://localhost:4000/auth/login](https://localhost:4000/auth/login)



### API to get all authors


#### method: GET

[https://localhost:4000/auth/author](https://localhost:4000/auth/author)



### API to upload a blog by author


#### method: POST
#### Params
<ul>
  <li>blog</li>
</ul>


[https://localhost:4000/blog/blogs](https://localhost:4000/blog/blogs)



### API to get all blogs of authors


#### method: GET

[https://localhost:4000/blog/blogs](https://localhost:4000/blog/blogs)



### API to get blogs of authors by author emailId


#### method: GET

[https://localhost:4000/blog/blogs/:emailId](https://localhost:4000/blog/blogs/:emailId)