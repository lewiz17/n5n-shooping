import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../slices/productSlice';
import { useRef, useState } from 'react';
import { AlertSuccess, BackButton, Button, Field, FieldGroup, FormContainer } from './Elements';
import { useTheme } from '../hooks/useTheme';
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  /* States */
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  const [addMessage, setAddMessage] = useState('');

  const { products }  = useSelector(state => state.data);

  const nameRef = useRef(null);
  const priceRef = useRef(null);
  const amountRef = useRef(null);


  const handleAddProduct = () => {

    const nameProduct = nameRef.current?.value;
    const priceProduct = priceRef.current?.value;
    const amountProduct = amountRef.current?.value;

    if(nameProduct && priceProduct && amountProduct){
      const newProduct = {
        id: products.length+1,
        name,
        price: parseFloat(price),
        amount: parseInt(amount)
      };
  
      dispatch(addProduct(newProduct));
      setAddMessage('Producto agregado!');
  
      setName('');
      setAmount(0);
      setPrice(0);
    }
  };

  return (
    <FormContainer>
      <form >
        {addMessage != '' && <AlertSuccess>{addMessage}</AlertSuccess>}
        <div className="head-form">
          <h4>Añadir un nuevo producto:</h4>
        </div>
        <div className="fields">
          <FieldGroup>
            <label name="nombre">Nombre:</label>
            <Field type="text" ref={nameRef} value={name} onChange={(e) => setName(e.target.value)} placeholder="Ingrese un Producto" required/>
          </FieldGroup>
          <FieldGroup>
            <label name="precio">Precio:</label>
            <Field type="number" ref={priceRef} value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Precio" required/>
          </FieldGroup>
          <FieldGroup>
            <label name="cantidad">Cantidad:</label>
            <Field type="number" ref={amountRef} value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Cantidad" required/>
          </FieldGroup>
        </div>
        <div className="actions">
          <Button onClick={handleAddProduct} className="large black" theme={theme}>Agregar</Button>
          <BackButton onClick={() => navigate("/")}>Ver productos</BackButton>
        </div>
      </form>
    </FormContainer>
  );
};

export default ProductForm;
