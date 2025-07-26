import React from 'react';

interface BlogPost {
  id: string;
  date: string;
  title: string;
  description: string;
  image: string;
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 'blog-1',
      date: '15 Abril, 2025',
      title: '10 Tendencias de desarrollo web en 2025',
      description: 'Descubre las tecnologías y enfoques que están definiendo el futuro del desarrollo web moderno.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085'
    },
    // ...más posts
  ];

  return (
    <section id="blog" className="fade-in">
      <div className="container">
        <div className="section-title">
          <h2>Últimos Artículos del Blog</h2>
        </div>
        <div className="blog-grid">
          {blogPosts.map(post => (
            <div key={post.id} className="blog-card fade-in">
              <div className="blog-img">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-content">
                <div className="blog-date">{post.date}</div>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <button 
                  className="btn-small fade-in"
                  onClick={() => window.dispatchEvent(new CustomEvent('openModal', { detail: post.id }))}
                >
                  Leer más
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
