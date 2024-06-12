import React from "react";
import { useState, useEffect } from "react";

function InfoApi() {

		const [ products, setProducts] = useState([])

    const ProductsMiguel = 'https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326#json'
		const Renderizando = (url) => {
			fetch(url)
			.then(res => res.json())
			.then(res => { 
				const data = res.results
				setProducts(data)
			})
		}
			useEffect(() => {
				Renderizando(ProductsMiguel)
			},
			[]
			) 	
			return(
				<div className="products">{
					products.map((data) => (
						<>
							<h1>{data.title}</h1>
							<img src={data.thumbnail} alt="producto" />
							<p>El precio es ${data.price}</p>
						</>
						
					))}
					</div>
			)
	
}

export default InfoApi;