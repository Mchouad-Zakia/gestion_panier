import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setArticle } from '../actions/produitActions';

const ProduitDetail = () => {
  const dispatch = useDispatch();
  const produitState = useSelector((state) => state.produit);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setArticle(data));
      })
      .catch((error) => console.error('Erreur lors de la récupération des données :', error));
  }, [dispatch, id]);

  return (
    <div className="container mt-5" style={{ border: '1px solid' }} >
      {produitState.article ? (
        <>
          <h5 className="card-title">{produitState.article.title}</h5>
          <img src={produitState.article.image} width={150} height={150} alt={produitState.article.title} style={{ Width: '150px' }} />
          <p className="card-text">{produitState.article.description}</p>
          <p className="card-text"><strong>Prix:</strong> {produitState.article.price}</p>
          <Link to='/produit' className='btn btn-primary'>
            Retourner à la liste des produits
          </Link>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProduitDetail;
