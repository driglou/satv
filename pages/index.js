import styled from 'react-emotion'
import { injectGlobal } from 'emotion'
import Head from 'next/head'

injectGlobal`
  body{
    width: 100wh;
	height: 90vh;
	background: linear-gradient(-45deg, #1f7a25, #5de265, #0a9612, #006006);
	background-size: 400% 400%;
    animation: Gradient 15s ease infinite;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  @-webkit-keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
 }
  `


const Container = ({ className }) => (
    <div>
        <Head>
            <title>Islam Expoed TV</title>
            <link href="https://fonts.googleapis.com/css?family=Raleway:600" rel="stylesheet" />
        </Head>
        <div className={className}>COMING<br/>SOON!</div> 
    </div>
)

const Index = styled(Container)`
    color: white;
    font-weight: bold;
    font-size: 75px;
    font-family: 'Raleway', arial;
    letter-spacing: 11px;
    text-align: center;
    `

export default Index;