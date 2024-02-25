let blogs = {}

const createBlog = async (req, res) => {
  const { blog } = req.body
  const author = req.author

  if (blogs[author])
    blogs[author] = [
      ...blogs[author],
      blog
    ]
  else
    blogs[author] = [
      blog
    ]

  res.send("uploaded blogs successfully")
}

const getAllBlogs = async (req, res) => {
  res.json({blog: blogs})
}

const getBlogsByAuthorId = (req, res) => {
  const emailId = req.params.emailId

  const blog = blogs[emailId]

  res.json({ blogs: blog })
}

export { createBlog, getAllBlogs, getBlogsByAuthorId }