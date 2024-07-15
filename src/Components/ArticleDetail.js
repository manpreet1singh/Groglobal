import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {articledetail} from './Assets';
import './ArticleDetail.css'

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articledetail.find((article) => article.id === parseInt(id));
  const bg=article.image
  if (!article) {
    return <h1>Article not found</h1>;
  }
  const mystyle = {
    backgroundImage: `url(${bg})`,
    height: '300px',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    backgroundPosition: 'center'
  };

  return (
    
 
    <div className="article-detail">
        <div style={mystyle}className="article-upper">
         <div className="articleupper-con">
         <h2>{article.title}</h2>
        <h1>{article.subtitle}</h1>
        <Link to='/articles'>Back to previous page</Link>
        </div> 
        </div>   
        

        <div className="article-lower">
            <div className="articlelower-con">
            <h2>Inroduction</h2>
            <p>{article.introduction}</p>
            <h2>What we mean</h2>
            <p>{article.mean}</p>
            <h2>Conclusion</h2>
            <p>{article.conclusion}</p>
            </div>
            <div className="btn">
            <Link to='/articles'>Back to previous</Link>
            </div>
            
            
            
        </div>    
    </div>
  );
};

export default ArticleDetail;