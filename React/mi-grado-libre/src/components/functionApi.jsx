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
				<div>{
					products.map((data) => data.title
					)}
					</div>
			)
	
}

export default InfoApi;