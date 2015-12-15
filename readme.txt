db.define_table('blogs',
    Field('title', 'string'),
    Field('body', 'string'),
	singular='blog',
	plural='blogs',
)
#---------------------------------------------------------------------------------------------------------------
db.define_table('comments',
    Field('blog', 'reference blogs'),
    Field('body', 'string'),
    singular='comment',
	plural='comments'
)

if not db(db.blogs).count():
    for i in range(1,8):
        id=db.blogs.insert(title='blog '+str(i))
        db.comments.insert(blog=id,body='comment 1 for blog'+str(id))
        db.comments.insert(blog=id,body='comment 2 for blog'+str(id))
        db.commit()

 -------------
ember new bl
ember g adapter application
  host:"http://localhost:8000/bl/api/v4"
ember g model blog title:string body:string comments:has-many
ember g model comment blog:belongs-to body:string
ember g route blogs
ember g route blogs/blog --path ":blog_id"
ember g route blogs/index
ember g route blogs/comment
