import React from "react";
import { useState } from "react";

function InfoApi() {

		const [ temp, settemp] = useState('')

    const ProductsMiguel = 'https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326#json'

    fetch(ProductsMiguel)
			.then(res => res.json())
			.then(res => {

				const resultProduct = res.results
				
				// necesitamos sacar el title, thumbnail, price, original_price
			// 	resultProduct.map((data) => ({
			// 		return (
					
			// 		<p>hola mundo</p>
			// 	)
				
			// }))

})
}

export default InfoApi;