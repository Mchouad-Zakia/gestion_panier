import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  setProductList,
  setCategories,
  setSelectedCategory,
  addToCart,
} from '../actions/produitActions';
import { setNombreProduits } from '../actions/panierActions';

const Produits = () => {
  const dispatch = useDispatch();
  const produitState = useSelector((state) => state.produit);
  const panierState = useSelector((state) => state.panier);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        dispatch(setProductList(data));
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data = await response.json();
        dispatch(setCategories(data));
      } catch (error) {
        console.error('Error fetching category data:', error);
      }
    };

    fetchProducts();
    fetchCategories();
  }, [dispatch]);

  useEffect(() => {
    // Mettre à jour le nombre de produits après le chargement de la page
    const storedPanier = JSON.parse(localStorage.getItem('panier')) || [];
    dispatch(setNombreProduits(storedPanier.length));
  }, [dispatch]);

  const addToCartHandler = (product) => {
    dispatch(addToCart(product));

    const updatedCart = JSON.parse(localStorage.getItem('panier')) || [];
    const existingProductIndex = updatedCart.findIndex((p) => p.product.id === product.id);

    if (existingProductIndex !== -1) {
      updatedCart[existingProductIndex].qt += 1;
    } else {
      updatedCart.push({ product, qt: 1 });
    }

    localStorage.setItem('panier', JSON.stringify(updatedCart));
    dispatch(setNombreProduits(updatedCart.length));
  };

  return (
    <div>
     <div className="navbar navbar-light bg-light fixed-top p-3">
  <div className="container-fluid">
    <h4 className="navbar-brand">Liste Des Produits</h4>
    <span className="badge text-bg-secondary">
      <Link to="/panier" className="text-light text-decoration-none">
        <i className='fa fa-shopping-cart'></i> {panierState.nombreProduits}
      </Link>
    </span>
  </div>
</div>
<br />
<br />

      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-md-3">
            <div className="list-group">
              <button
                type="button"
                className={`list-group-item list-group-item-action ${!produitState.selectedCategory ? 'active' : ''}`}
                onClick={() => dispatch(setSelectedCategory(null))}
              >
                Toutes les catégories
              </button>
              {produitState.categories.map((category, index) => (
                <button
                  key={index}
                  type="button"
                  className={`list-group-item list-group-item-action ${produitState.selectedCategory === category ? 'active' : ''}`}
                  onClick={() => dispatch(setSelectedCategory(category))}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="col-md-9">
            <div className="row row-cols-1 row-cols-md-4 g-4">
              {produitState.productList
                .filter(product => !produitState.selectedCategory || product.category === produitState.selectedCategory)
                .map((product, index) => (
                  <div className="col" key={index}>
                    <div className="card">
                      <div className="card-body">
                        <img src={product.image} width={150} height={150} alt="" />
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">Prix: {product.price}</p>
                        <br />
                        <button className="btn btn-primary">
                          <Link to={`/produit/${product.id}`} className="nav-link">
                            Details
                          </Link>
                        </button>
                        <br /> &nbsp; &nbsp;
                        <button
                          className="btn btn-warning"
                          onClick={() => addToCartHandler(product)}
                        >
                          Ajouter au panier
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produits;
