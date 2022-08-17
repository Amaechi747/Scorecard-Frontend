import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

type PageProps = {
    children: JSX.Element | JSX.Element[];
		backToLogin: boolean;
}

const Main = styled.div`
    width: 100vw;
    display: flex;
		height: 100vh;
    justify-content: space-between;
		background-color: white;
`

const WrapperPage = (props: PageProps) => {

	const [hover, isHover] = useState(false);

	return (
		<>
			<Main>
				<div style={ { padding: '6rem', width: '53.5%' } }>
					<div style={{ 
						display: 'inline-flex',
						marginBottom: 'calc(90px - 1rem)'
						}}> 
						<img src="/assets/images/scorecardLogo.png" alt="logo"/>			
						<span style={{ 
						fontSize: '1.7rem', 
						fontWeight: '600', 
						lineHeight: '3rem',
						marginLeft: '0.4rem'}}>Scorecard</span>
					</div>
					<div>
					{
						props.backToLogin ? <Link to='/login' style={{ 
							fontSize: '1rem',
							fontWeight: '600',
							letterSpacing: ( hover ? '0.4px' : '0' ), 
							color: '#14A800', 
							textDecoration: 'none' }} 
							onMouseEnter={()=>{ isHover(true); }}
							onMouseLeave={()=>{ isHover(false); }}
							>Go back to Login</Link> : null
					}
					</div>
					<div style={{ marginTop: '4rem'}}>
						{
							props.children
						}
					</div>
				</div>
					<img src="/assets/images/loginPageImage.png" style={{ 
					height: '100vh',
					width: '46.5%'}} className='no-mobile'  alt="Decadev"/>			
			</Main>
		</>
	)
}
export default WrapperPage; 