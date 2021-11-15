import React from 'react';
import styled from 'styled-components/native';
import { Image } from 'react-native';

// criando um componente de texto
const Quadrado = styled.View`
  background-color: ${props => props.cor};
  // flex: ${props => props.flexivel};
  width: 200px;
  height: 200px;
`;

// criando um componente view
const Pagina = styled.View`
  flex:1;
  // flex-direction:row;
  // justify-content:center;
  align-items:center;
`;

const Texto = styled.Text`
  color: ${props => props.cor};
  font-size: 30px;
  background-color:purple;
`;

const Header = styled.View`  
  flex-direction:row;
  background-color: #DDD;
  height: 750px;
  width: 500px;
  flex-wrap: wrap;
  justify-content:center;
`;

// usabndo o componente criado
function App() {
    return (
      <Pagina>
          <Texto cor="red"> Galeria do: </Texto>
          <Texto cor="blue"> Juam Sousa Veras</Texto>
          <Texto cor="purple"> Tema da Galeria: Camelos</Texto>
          <Header> 
            <Quadrado cor="red">
              <Image source = {require('./src/images/camelo01.jpg')}
                style={{ width: 200, height: 200, backgroundColor:'#AAA' }}
                resizeMode='cover'
              />
            </Quadrado>
            <Quadrado cor="red">
              <Image source = {require('./src/images/camelo02.jpeg')}
                style={{ width: 200, height: 200, backgroundColor:'#AAA' }}
                resizeMode='cover'
              />
            </Quadrado>
            <Quadrado cor="red">
              <Image source = {require('./src/images/camelo03.jpeg')}
                style={{ width: 200, height: 200, backgroundColor:'#AAA' }}
                resizeMode='cover'
              />
            </Quadrado>
            <Quadrado cor="red">
              <Image source = {require('./src/images/camelo04.jpg')}
                style={{ width: 200, height: 200, backgroundColor:'#AAA' }}
                resizeMode='cover'
              />
            </Quadrado>
            <Quadrado cor="red">
              <Image source = {{uri:'http://www.howitworksdaily.com/wp-content/uploads/2013/06/Camel_main.jpg'}}
                style={{ width: 200, height: 200, backgroundColor:'#AAA' }}
                resizeMode='cover'
              />
            </Quadrado>




            {/* <Quadrado cor="purple"></Quadrado>
            <Quadrado cor="blue"> </Quadrado>
            <Quadrado cor="orange"> </Quadrado>
            <Quadrado cor="darkmagenta"> </Quadrado> */}

          </Header>
          
      </Pagina>
    );
  }

export default App;