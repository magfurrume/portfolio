"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { LogIn, Plus, Edit, Trash2, Eye, EyeOff, Save, X } from 'lucide-react'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  tags: string[]
  image?: string
  published: boolean
}

interface LoginForm {
  email: string
  password: string
}

interface PostForm {
  title: string
  excerpt: string
  content: string
  author: string
  readTime: string
  tags: string
  image: string
  published: boolean
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [token, setToken] = useState<string | null>(null)
  const [loginForm, setLoginForm] = useState<LoginForm>({ email: "", password: "" })
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [isEditing, setIsEditing] = useState(false)
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [postForm, setPostForm] = useState<PostForm>({
    title: "",
    excerpt: "",
    content: "",
    author: "Md Magfur Alam",
    readTime: "5 min read",
    tags: "",
    image: "",
    published: false
  })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const savedToken = localStorage.getItem('admin-token')
    if (savedToken) {
      setToken(savedToken)
      setIsAuthenticated(true)
      fetchPosts()
    }
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginForm)
      })

      const data = await response.json()

      if (response.ok) {
        setToken(data.token)
        setIsAuthenticated(true)
        localStorage.setItem('admin-token', data.token)
        fetchPosts()
      } else {
        alert(data.error || 'Login failed')
      }
    } catch (error) {
      alert('Login failed')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setToken(null)
    localStorage.removeItem('admin-token')
    setLoginForm({ email: "", password: "" })
  }

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/blog')
      const data = await response.json()
      setPosts(data.posts)
    } catch (error) {
      console.error('Error fetching posts:', error)
    }
  }

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const postData = {
        ...postForm,
        tags: postForm.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        date: new Date().toISOString()
      }

      const response = await fetch('/api/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(postData)
      })

      if (response.ok) {
        fetchPosts()
        resetForm()
        setIsEditing(false)
      } else {
        const data = await response.json()
        alert(data.error || 'Failed to create post')
      }
    } catch (error) {
      alert('Failed to create post')
    } finally {
      setLoading(false)
    }
  }

  const handleUpdatePost = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!editingPost) return

    setLoading(true)

    try {
      const postData = {
        ...postForm,
        id: editingPost.id,
        tags: postForm.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        date: editingPost.date
      }

      const response = await fetch('/api/blog', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(postData)
      })

      if (response.ok) {
        fetchPosts()
        resetForm()
        setIsEditing(false)
        setEditingPost(null)
      } else {
        const data = await response.json()
        alert(data.error || 'Failed to update post')
      }
    } catch (error) {
      alert('Failed to update post')
    } finally {
      setLoading(false)
    }
  }

  const handleDeletePost = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return

    try {
      const response = await fetch('/api/blog', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ id })
      })

      if (response.ok) {
        fetchPosts()
      } else {
        const data = await response.json()
        alert(data.error || 'Failed to delete post')
      }
    } catch (error) {
      alert('Failed to delete post')
    }
  }

  const startEditing = (post: BlogPost) => {
    setEditingPost(post)
    setPostForm({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      author: post.author,
      readTime: post.readTime,
      tags: post.tags.join(', '),
      image: post.image || '',
      published: post.published
    })
    setIsEditing(true)
  }

  const resetForm = () => {
    setPostForm({
      title: "",
      excerpt: "",
      content: "",
      author: "Md Magfur Alam",
      readTime: "5 min read",
      tags: "",
      image: "",
      published: false
    })
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
        <motion.div
          className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <LogIn className="mx-auto text-emerald-400 mb-4" size={48} />
            <h1 className="text-3xl font-bold text-white mb-2">Admin Login</h1>
            <p className="text-white/60">Enter your credentials to access the admin panel</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-white/80 font-medium mb-2">Email</label>
              <input
                type="email"
                value={loginForm.email}
                onChange={(e) => setLoginForm(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-emerald-400 focus:bg-white/15 transition-all duration-300"
                placeholder="admin@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-white/80 font-medium mb-2">Password</label>
              <input
                type="password"
                value={loginForm.password}
                onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-emerald-400 focus:bg-white/15 transition-all duration-300"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {loading ? (
                <motion.div
                  className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              ) : (
                <>
                  <LogIn size={20} />
                  <span>Login</span>
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 pt-4">
          <h1 className="text-4xl font-bold text-white">Blog Admin</h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-lg hover:from-emerald-600 hover:to-blue-700 transition-all duration-300"
            >
              <Plus size={20} />
              <span>New Post</span>
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Post Form Modal */}
        {isEditing && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-full max-w-4xl bg-slate-800 rounded-2xl p-6 max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">
                  {editingPost ? 'Edit Post' : 'Create New Post'}
                </h2>
                <button
                  onClick={() => {
                    setIsEditing(false)
                    setEditingPost(null)
                    resetForm()
                  }}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="text-white" size={24} />
                </button>
              </div>

              <form onSubmit={editingPost ? handleUpdatePost : handleCreatePost} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/80 font-medium mb-2">Title</label>
                    <input
                      type="text"
                      value={postForm.title}
                      onChange={(e) => setPostForm(prev => ({ ...prev, title: e.target.value }))}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-emerald-400 focus:bg-white/15 transition-all duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 font-medium mb-2">Author</label>
                    <input
                      type="text"
                      value={postForm.author}
                      onChange={(e) => setPostForm(prev => ({ ...prev, author: e.target.value }))}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-emerald-400 focus:bg-white/15 transition-all duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 font-medium mb-2">Read Time</label>
                    <input
                      type="text"
                      value={postForm.readTime}
                      onChange={(e) => setPostForm(prev => ({ ...prev, readTime: e.target.value }))}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-emerald-400 focus:bg-white/15 transition-all duration-300"
                      placeholder="5 min read"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 font-medium mb-2">Image URL</label>
                    <input
                      type="url"
                      value={postForm.image}
                      onChange={(e) => setPostForm(prev => ({ ...prev, image: e.target.value }))}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-emerald-400 focus:bg-white/15 transition-all duration-300"
                      placeholder="/blog-images/post-image.jpg"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/80 font-medium mb-2">Tags (comma separated)</label>
                  <input
                    type="text"
                    value={postForm.tags}
                    onChange={(e) => setPostForm(prev => ({ ...prev, tags: e.target.value }))}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-emerald-400 focus:bg-white/15 transition-all duration-300"
                    placeholder="React, Next.js, TypeScript"
                  />
                </div>

                <div>
                  <label className="block text-white/80 font-medium mb-2">Excerpt</label>
                  <textarea
                    value={postForm.excerpt}
                    onChange={(e) => setPostForm(prev => ({ ...prev, excerpt: e.target.value }))}
                    rows={3}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-emerald-400 focus:bg-white/15 transition-all duration-300 resize-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white/80 font-medium mb-2">Content</label>
                  <textarea
                    value={postForm.content}
                    onChange={(e) => setPostForm(prev => ({ ...prev, content: e.target.value }))}
                    rows={10}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-emerald-400 focus:bg-white/15 transition-all duration-300 resize-none"
                    required
                  />
                </div>

                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="published"
                    checked={postForm.published}
                    onChange={(e) => setPostForm(prev => ({ ...prev, published: e.target.checked }))}
                    className="w-4 h-4 text-emerald-600 bg-white/10 border-white/20 rounded focus:ring-emerald-500 focus:ring-2"
                  />
                  <label htmlFor="published" className="text-white/80 font-medium">
                    Publish immediately
                  </label>
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => {
                      setIsEditing(false)
                      setEditingPost(null)
                      resetForm()
                    }}
                    className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white rounded-lg transition-all duration-300 disabled:opacity-50"
                  >
                    <Save size={20} />
                    <span>{editingPost ? 'Update' : 'Create'} Post</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}

        {/* Posts List */}
        <div className="grid gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-bold text-white">{post.title}</h3>
                    <div className="flex items-center space-x-1">
                      {post.published ? (
                        <Eye className="text-green-400" size={16} />
                      ) : (
                        <EyeOff className="text-gray-400" size={16} />
                      )}
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        post.published 
                          ? 'bg-green-500/20 text-green-300' 
                          : 'bg-gray-500/20 text-gray-300'
                      }`}>
                        {post.published ? 'Published' : 'Draft'}
                      </span>
                    </div>
                  </div>
                  <p className="text-white/70 mb-3">{post.excerpt}</p>
                  <div className="flex items-center space-x-4 text-white/60 text-sm">
                    <span>{post.author}</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {post.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <button
                    onClick={() => startEditing(post)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <Edit className="text-blue-400" size={20} />
                  </button>
                  <button
                    onClick={() => handleDeletePost(post.id)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <Trash2 className="text-red-400" size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
